import { View, StyleSheet, Text, Image } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { ITable } from "../types";
import { Text as TextComponent } from "./Text";

interface IHead {
  children: any;
  style?: Style;
}
const THead = (props: IHead) => {
  const { style, children } = props;
  return <View style={style}>{children}</View>;
};

interface IBody {
  children: any;
  style?: Style;
}

const TBody = (props: IBody) => {
  const { style, children } = props;
  return <View style={style}>{children}</View>;
};

interface ITR {
  children: any;
  style?: Style;
}

const TR = (props: ITR) => {
  const { style, children } = props;
  const styles = StyleSheet.create({
    main: {
      flexDirection: "row",
      alignItems: "stretch",
      ...style,
    },
  });
  return <View style={styles.main}>{children}</View>;
};

interface ITH {
  children: any;
  style?: Style;
  flex?: number;
}

const TH = (props: ITH) => {
  const { style, children, flex = 1 } = props;
  const styles = StyleSheet.create({
    main: {
      flex,
      ...style,
    },
  });
  return (
    <View style={styles.main}>
      <Text>{children}</Text>
    </View>
  );
};

interface ITD {
  children: any;
  style?: Style;
  flex?: number;
}

const TD = (props: ITD) => {
  const { style, children, flex = 1 } = props;
  const styles = StyleSheet.create({
    main: {
      flex,
      ...style,
    },
  });
  return (
    <View style={styles.main}>
      <Text>{children}</Text>
    </View>
  );
};

export const Table = (props: ITable) => {
  const {
    columns,
    data,
    footer,
    style,
    styleBody,
    styleHeader,
    styleRowBody,
    styleRowHeader,
    styleCellBody,
    styleCellHeader,
  } = props;
  return (
    <View style={style}>
      <THead style={styleHeader}>
        <TR style={styleRowHeader}>
          {columns.map((column) => (
            <TH flex={column?.flex || 1} style={styleCellHeader}>
              {column?.label}
            </TH>
          ))}
        </TR>
      </THead>
      <TBody style={styleBody}>
        {data.map((row) => (
          <TR style={styleRowBody}>
            {columns.map((column) => (
              <TD flex={column?.flex || 1} style={styleCellBody}>
                {row[column?.key]}
              </TD>
            ))}
          </TR>
        ))}
        {footer
          ? footer.map((val) => (
              <TR style={val.style}>
                {val?.contents?.map((content) => {
                  let res = null;
                  if (content?.type === "text") {
                    res = <TextComponent {...content} />;
                  } else if (content?.type === "image") {
                    res = <Image {...content} />;
                  } else if (content?.type === "views") {
                    res = <View {...content} />;
                  }
                  return (
                    <TD flex={content?.flex} style={content.styleRow}>
                      {res}
                    </TD>
                  );
                })}
              </TR>
            ))
          : null}
      </TBody>
    </View>
  );
};
