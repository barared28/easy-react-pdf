import { Image } from "@react-pdf/renderer";
import { IImage } from "../types";

export const ImagePDF = (props: IImage) => {
  const { src, style } = props;
  return <Image src={src} style={style} />;
};
