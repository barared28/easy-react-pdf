import { IText } from "../types";
import { Text as TextRaw } from "@react-pdf/renderer";

export const Text = (props: IText) => {
  const { text, style } = props;
  return <TextRaw style={style}>{text}</TextRaw>;
};
