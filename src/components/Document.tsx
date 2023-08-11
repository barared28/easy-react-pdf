import { Page, Document as DocumentRaw } from "@react-pdf/renderer";
import { IPDFPage } from "../types";
import { View } from "./View";
import { Text } from "./Text";
import { ImagePDF } from "./Image";
import { Table } from "./Table";

export const Document = (props: IPDFPage) => {
  const { pages, header, footer, contents, document } = props;
  return (
    <DocumentRaw {...document}>
      <Page {...pages}>
        {header ? <View type="views" {...header} /> : null}
        {contents.map((content) => {
          let res = null;
          switch (content.type) {
            case "table":
              res = <Table {...content} />;
              break;
            case "text":
              res = <Text {...content} />;
              break;
            case "image":
              res = <ImagePDF {...content} />;
              break;
            case "views":
              res = <View {...content} />;
              break;
            default:
              return null;
          }
          return res;
        })}
        {footer ? <View type="views" {...footer} /> : null}
      </Page>
    </DocumentRaw>
  );
};
