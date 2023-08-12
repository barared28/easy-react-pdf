import { z } from "zod";

// too high complexity when compiled & high memory usage
// const StyleSchema = z.lazy(() =>
//   z.object({
//     alignContent: z
//       .union([
//         z.literal("flex-start"),
//         z.literal("flex-end"),
//         z.literal("center"),
//         z.literal("stretch"),
//         z.literal("space-between"),
//         z.literal("space-around"),
//       ])
//       .optional(),
//     alignItems: z
//       .union([
//         z.literal("flex-start"),
//         z.literal("flex-end"),
//         z.literal("center"),
//         z.literal("stretch"),
//         z.literal("baseline"),
//       ])
//       .optional(),
//     alignSelf: z
//       .union([
//         z.literal("auto"),
//         z.literal("flex-start"),
//         z.literal("flex-end"),
//         z.literal("center"),
//         z.literal("baseline"),
//         z.literal("stretch"),
//       ])
//       .optional(),
//     flex: z.union([z.number(), z.string()]).optional(),
//     flexDirection: z
//       .union([
//         z.literal("row"),
//         z.literal("row-reverse"),
//         z.literal("column"),
//         z.literal("column-reverse"),
//       ])
//       .optional(),
//     flexWrap: z
//       .union([
//         z.literal("nowrap"),
//         z.literal("wrap"),
//         z.literal("wrap-reverse"),
//       ])
//       .optional(),
//     flexFlow: z.number().optional(),
//     flexGrow: z.number().optional(),
//     flexShrink: z.number().optional(),
//     flexBasis: z.union([z.number(), z.string()]).optional(),
//     justifyContent: z
//       .union([
//         z.literal("flex-start"),
//         z.literal("flex-end"),
//         z.literal("center"),
//         z.literal("space-around"),
//         z.literal("space-between"),
//         z.literal("space-evenly"),
//       ])
//       .optional(),
//     gap: z.union([z.number(), z.string()]).optional(),
//     rowGap: z.number().optional(),
//     columnGap: z.number().optional(),
//     aspectRatio: z.union([z.number(), z.string()]).optional(),
//     bottom: z.union([z.number(), z.string()]).optional(),
//     display: z.union([z.literal("flex"), z.literal("none")]).optional(),
//     left: z.union([z.number(), z.string()]).optional(),
//     position: z
//       .union([z.literal("absolute"), z.literal("relative")])
//       .optional(),
//     right: z.union([z.number(), z.string()]).optional(),
//     top: z.union([z.number(), z.string()]).optional(),
//     overflow: z.literal("hidden").optional(),
//     zIndex: z.union([z.number(), z.string()]).optional(),
//     height: z.union([z.number(), z.string()]).optional(),
//     maxHeight: z.union([z.number(), z.string()]).optional(),
//     maxWidth: z.union([z.number(), z.string()]).optional(),
//     minHeight: z.union([z.number(), z.string()]).optional(),
//     minWidth: z.union([z.number(), z.string()]).optional(),
//     width: z.union([z.number(), z.string()]).optional(),
//     backgroundColor: z.string().optional(),
//     color: z.string().optional(),
//     opacity: z.number().optional(),
//     fontSize: z.union([z.number(), z.string()]).optional(),
//     fontFamily: z.string().optional(),
//     fontStyle: z.union([z.string(), z.literal("normal")]).optional(),
//     fontWeight: z
//       .union([
//         z.number(),
//         z.literal("thin"),
//         z.literal("hairline"),
//         z.literal("ultralight"),
//         z.literal("extralight"),
//         z.literal("light"),
//         z.literal("normal"),
//         z.literal("medium"),
//         z.literal("semibold"),
//         z.literal("demibold"),
//         z.literal("bold"),
//         z.literal("ultrabold"),
//         z.literal("extrabold"),
//         z.literal("heavy"),
//         z.literal("black"),
//       ])
//       .optional(),
//     letterSpacing: z.union([z.number(), z.string()]).optional(),
//     lineHeight: z.union([z.number(), z.string()]).optional(),
//     maxLines: z.number().optional(),
//     textAlign: z
//       .union([
//         z.literal("left"),
//         z.literal("right"),
//         z.literal("center"),
//         z.literal("justify"),
//       ])
//       .optional(),
//     textDecoration: z
//       .union([
//         z.literal("line-through"),
//         z.literal("underline"),
//         z.literal("none"),
//         z.literal("line-through underline"),
//         z.literal("underline line-through"),
//       ])
//       .optional(),
//     textDecorationColor: z.string().optional(),
//     textDecorationStyle: z
//       .union([
//         z.literal("dashed"),
//         z.literal("dotted"),
//         z.literal("solid"),
//         z.string(),
//       ])
//       .optional(),
//     textIndent: z.unknown().optional(),
//     textOverflow: z.literal("ellipsis").optional(),
//     textTransform: z
//       .union([
//         z.literal("capitalize"),
//         z.literal("lowercase"),
//         z.literal("uppercase"),
//       ])
//       .optional(),
//     verticalAlign: z.union([z.literal("sub"), z.literal("super")]).optional(),
//     objectFit: z.string().optional(),
//     objectPosition: z.union([z.number(), z.string()]).optional(),
//     objectPositionX: z.union([z.number(), z.string()]).optional(),
//     objectPositionY: z.union([z.number(), z.string()]).optional(),
//     margin: z.union([z.number(), z.string()]).optional(),
//     marginHorizontal: z.union([z.number(), z.string()]).optional(),
//     marginVertical: z.union([z.number(), z.string()]).optional(),
//     marginTop: z.union([z.number(), z.string()]).optional(),
//     marginRight: z.union([z.number(), z.string()]).optional(),
//     marginBottom: z.union([z.number(), z.string()]).optional(),
//     marginLeft: z.union([z.number(), z.string()]).optional(),
//     padding: z.union([z.number(), z.string()]).optional(),
//     paddingHorizontal: z.union([z.number(), z.string()]).optional(),
//     paddingVertical: z.union([z.number(), z.string()]).optional(),
//     paddingTop: z.union([z.number(), z.string()]).optional(),
//     paddingRight: z.union([z.number(), z.string()]).optional(),
//     paddingBottom: z.union([z.number(), z.string()]).optional(),
//     paddingLeft: z.union([z.number(), z.string()]).optional(),
//     transform: z.string().optional(),
//     transformOrigin: z.union([z.number(), z.string()]).optional(),
//     transformOriginX: z.union([z.number(), z.string()]).optional(),
//     transformOriginY: z.union([z.number(), z.string()]).optional(),
//     border: z.union([z.number(), z.string()]).optional(),
//     borderWidth: z.union([z.number(), z.string()]).optional(),
//     borderColor: z.string().optional(),
//     borderStyle: z
//       .union([z.literal("dashed"), z.literal("dotted"), z.literal("solid")])
//       .optional(),
//     borderTop: z.union([z.number(), z.string()]).optional(),
//     borderTopColor: z.string().optional(),
//     borderTopStyle: z
//       .union([z.literal("dashed"), z.literal("dotted"), z.literal("solid")])
//       .optional(),
//     borderTopWidth: z.union([z.number(), z.string()]).optional(),
//     borderRight: z.union([z.number(), z.string()]).optional(),
//     borderRightColor: z.string().optional(),
//     borderRightStyle: z
//       .union([z.literal("dashed"), z.literal("dotted"), z.literal("solid")])
//       .optional(),
//     borderRightWidth: z.union([z.number(), z.string()]).optional(),
//     borderBottom: z.union([z.number(), z.string()]).optional(),
//     borderBottomColor: z.string().optional(),
//     borderBottomStyle: z
//       .union([z.literal("dashed"), z.literal("dotted"), z.literal("solid")])
//       .optional(),
//     borderBottomWidth: z.union([z.number(), z.string()]).optional(),
//     borderLeft: z.union([z.number(), z.string()]).optional(),
//     borderLeftColor: z.string().optional(),
//     borderLeftStyle: z
//       .union([z.literal("dashed"), z.literal("dotted"), z.literal("solid")])
//       .optional(),
//     borderLeftWidth: z.union([z.number(), z.string()]).optional(),
//     borderTopLeftRadius: z.union([z.number(), z.string()]).optional(),
//     borderTopRightRadius: z.union([z.number(), z.string()]).optional(),
//     borderBottomRightRadius: z.union([z.number(), z.string()]).optional(),
//     borderBottomLeftRadius: z.union([z.number(), z.string()]).optional(),
//     borderRadius: z.union([z.number(), z.string()]).optional(),
//   })
// );

// i decided to use any instead of zod schema because is just style and will be not implemented if invalid & not broke the app
const StyleSchema = z.any();

const ITextSchema = z.object({
  type: z.literal("text"),
  text: z.string(),
  style: z.any().optional(),
});

const IImageSchema = z.object({
  type: z.literal("image"),
  src: z.string(),
  style: StyleSchema.optional(),
});

const ITableColumnSchema = z.object({
  label: z.string(),
  key: z.string(),
  flex: z.number().optional(),
  style: StyleSchema.optional(),
});

const ITableFooterContentSchema = z.union([ITextSchema, IImageSchema]);

const ITableFooterSchema = z.array(
  z.object({
    contents: z.array(ITableFooterContentSchema),
    flex: z.number().optional(),
    styleRow: StyleSchema.optional(),
    style: StyleSchema.optional(),
  })
);

const ITableSchema = z.object({
  type: z.literal("table"),
  style: StyleSchema.optional(),
  columns: z.array(ITableColumnSchema),
  data: z.array(z.any()),
  footer: ITableFooterSchema.optional(),
  styleHeader: StyleSchema.optional(),
  styleBody: StyleSchema.optional(),
  styleRowHeader: StyleSchema.optional(),
  styleRowBody: StyleSchema.optional(),
  styleCellHeader: StyleSchema.optional(),
  styleCellBody: StyleSchema.optional(),
});

const IViewsSchema: any = z.lazy(() =>
  z.object({
    type: z.literal("views"),
    style: StyleSchema.optional(),
    contents: z.array(
      z.union([ITextSchema, ITableSchema, IViewsSchema, IImageSchema])
    ),
  })
);

const ContentSchema = z.lazy(() =>
  z.union([ITextSchema, ITableSchema, IViewsSchema, IImageSchema])
);

const IHeaderSchema = z.object({
  style: StyleSchema.optional(),
  contents: ContentSchema,
});

const IFooterSchema = z.object({
  style: StyleSchema.optional(),
  contents: ContentSchema,
});

const IDocumentSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  subject: z.string().optional(),
  keywords: z.string().optional(),
  creator: z.string().optional(),
  producer: z.string().optional(),
});

const IPagesSchema = z.object({
  wrap: z.boolean().optional(),
  orientation: z.enum(["portrait", "landscape"]).optional(),
  size: z.enum(["A3", "A4", "A5", "LETTER", "LEGAL", "EXECUTIVE", "TABLOID"]),
  style: StyleSchema.optional(),
});

const IPDFPageSchema: z.ZodObject<any> = z.object({
  document: IDocumentSchema,
  pages: IPagesSchema,
  contents: ContentSchema,
  header: IHeaderSchema.optional(),
  footer: IFooterSchema.optional(),
});

export {
  StyleSchema,
  ITextSchema,
  IImageSchema,
  ITableColumnSchema,
  ITableFooterContentSchema,
  ITableFooterSchema,
  ITableSchema,
  IViewsSchema,
  IHeaderSchema,
  IFooterSchema,
  IDocumentSchema,
  IPagesSchema,
  IPDFPageSchema,
};
