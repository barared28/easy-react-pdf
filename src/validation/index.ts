import { IPDFPage } from "../types";
import { IPDFPageSchema } from "./schema";

export const validateJsonPDF = async (json: any): Promise<IPDFPage> => {
  try {
    const objectJson = JSON.parse(json);
    const objectValid = IPDFPageSchema.parse(objectJson);
    return objectValid as IPDFPage;
  } catch (error) {
    throw error;
  }
};

export const validateObjectPDF = async (object: any): Promise<IPDFPage> => {
  try {
    const objectValid = IPDFPageSchema.parse(object);
    return objectValid as IPDFPage;
  } catch (error) {
    throw error;
  }
};
