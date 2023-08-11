import { Style } from "@react-pdf/types";

export interface IDocument {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
}

export interface IPages {
  wrap?: boolean;
  orientation?: "portrait" | "landscape";
  size?: "A3" | "A4" | "A5" | "LETTER" | "LEGAL" | "EXECUTIVE" | "TABLOID";
  style?: Style;
}

export type TContent = (IText | ITable | IViews | IImage)[];

export interface IText {
  type: "text";
  text: string;
  style?: Style;
}

export interface IImage {
  type: "image";
  src: string;
  style?: Style;
}

export interface ITable {
  type: "table";
  style?: Style;
  columns: {
    label: string;
    key: string;
    flex?: number;
    style?: Style;
  }[];
  data: any[];
  footer?: {
    contents: ((IText | IImage | IViews) & {
      flex?: number;
      styleRow?: Style;
    })[];
    style?: Style;
  }[];
  styleHeader?: Style;
  styleBody?: Style;
  styleRowHeader?: Style;
  styleRowBody?: Style;
  styleCellHeader?: Style;
  styleCellBody?: Style;
}

export interface IViews {
  type: "views";
  style?: Style;
  contents: TContent;
}

export interface IHeader {
  style?: Style;
  contents: TContent;
}

export interface IFooter {
  style?: Style;
  contents: TContent;
}

export interface IPDFPage {
  document: IDocument;
  pages: IPages;
  contents: TContent;
  header?: IHeader;
  footer?: IFooter;
}
