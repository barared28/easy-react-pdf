interface ITemplate {
  name: string;
  value: string;
}

export const replaceVariablesJson = (
  variables: ITemplate[],
  objectsJson: string
) => {
  if (!objectsJson || !variables) {
    return objectsJson;
  }

  let result = objectsJson;

  variables.forEach((variable) => {
    const regex = new RegExp(`{{${variable?.name}}}`, "g");
    const replacement = variable?.value || "";
    result = result?.replace(regex, replacement);
  });

  return result;
};

export const replaceVariablesObject = (variables: ITemplate[], object: any) => {
  if (!object || !variables) {
    return object;
  }
  let result = JSON.stringify(object);
  variables.forEach((variable) => {
    const regex = new RegExp(`{{${variable?.name}}}`, "g");
    const replacement = variable?.value || "";
    result = result?.replace(regex, replacement);
  });
  return JSON.parse(result);
};
