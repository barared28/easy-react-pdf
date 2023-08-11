import { View as ViewRaw } from "@react-pdf/renderer";
import { IViews } from "../types";
import { ImagePDF } from "./Image";
import { Text } from "./Text";
import { Table } from "./Table";

export const View = (props: IViews) => {
  const { contents, style } = props;
  return (
    <ViewRaw style={style}>
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
            break;
        }
        return res;
      })}
    </ViewRaw>
  );
};
