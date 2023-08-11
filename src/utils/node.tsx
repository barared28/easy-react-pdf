import ReactPDF from "@react-pdf/renderer";
import { Document } from "../components";
import { IPDFPage } from "../types";

export const createStreamPDF = async (contentPDF: IPDFPage) => {
  const PDFDocument = () => <Document {...contentPDF} />;

  return await ReactPDF.renderToStream(<PDFDocument />);
};

export const createFilePDF = async (
  contentPDF: IPDFPage,
  path: string,
  callback?: () => void
) => {
  const PDFDocument = () => <Document {...contentPDF} />;

  return await ReactPDF.renderToFile(<PDFDocument />, path, callback);
};
