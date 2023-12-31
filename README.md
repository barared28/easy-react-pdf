# Easy React PDF

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

The Easy React PDF is a library that simplifies the process of generating PDF files from JSON configurations. With this library, you can easily create complex PDF documents with various styles, layouts, and content. and make it easy for templating PDF files.

## Installation

You can install the library using npm:

```bash
npm install easy-react-pdf
```

### Note

you need install react, react-pdf and react-dom in your project

```bash
npm install react react-dom @react-pdf/renderer
```

## Usage

### Node js

#### Stream File

```typescript
import { createStreamPDF, IPDFPage } from "easy-react-pdf";

async function main(template: IPDFPage) {
  const stream = await createStreamPDF(template);
  return stream.pipe(fs.createWriteStream("output.pdf"));
}
```

#### Create File

```typescript
import { createFilePDF, IPDFPage } from "easy-react-pdf";

async function main(template: IPDFPage) {
  await createFilePDF(template, "path/to/file.pdf");
}
```

### React

```typescript
import { PDFViewer } from "@react-pdf/renderer";
import { Document } from "easy-react-pdf";

function Main(template: IPDFPage) {
  return (
    <PDFViewer>
      <Document {...template} />
    </PDFViewer>
  );
}
```

## Example Template

```json
{
  "contents": [
    {
      "type": "views",
      "style": {
        "width": "100%",
        "height": "100%",
        "alignItems": "center",
        "justifyContent": "center",
        "display": "flex"
      },
      "contents": [
        {
          "type": "text",
          "text": "{{name}}",
          "style": {
            "fontSize": 30,
            "fontWeight": "bold"
          }
        }
      ]
    }
  ],
  "document": {
    "title": "Payment Schedules"
  },
  "pages": {
    "size": "A4"
  }
}
```

## API

### Validations

```typescript
import { validateJsonPDF, validateObjectPDF } from "easy-react-pdf";

const validateJson = validateJsonPDF(contents);

const validateObject = validateObjectPDF(contents);
```

this function return a valid object or throw a error

### Template

```typescript
import { replaceVariablesJson, replaceVariablesObject } from "easy-react-pdf";

const variables = [
  {
    name: "name",
    value: "John Doe",
  },
  {
    name: "age",
    value: 20,
  },
];

const templateJson = replaceVariablesJson(contents, variables);

const templateObject = replaceVariablesObject(contents, variables);
```
