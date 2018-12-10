# Google Sheet to JSON Endpoint

This guide defines the process of converting a Google Sheet into a publicly callable JSON endpoint. You don't need external hosting of any kind, everything is done within Google Sheets.

This API Endpoint can be used to provide content to an app able to consume JSON.

### Installation

Add the scripts `Main.gs` and `SheetToJSON.gs` to an existing or new Google Sheets Workbook.

<img src="https://raw.githubusercontent.com/Link-/gsheetToJSON/master/sheetToJSON.gif" width="800" />

### Usage

The script supports nesting, simply use the dash `-` in the column name and the script will create the appropriate structure.

#### Example Sheet

|COLUMN NAME|COLUMN_NAME|COLUMN-NEST-NAME|COLUMN-NEST_NAME|COLUMN_NEST-NAME|
|---|---|---|---|---|
|value1|value2|value3|value4|value5|
|value6|value7|value8|value9|value10|

#### Output

```
[
  {
    "COLUMN NAME": "value1",
    "COLUMN_NAME": "value2",
    "COLUMN": {
      "NEST": {
        "NAME": "value3"
      },
      "NEST_NAME": "value4"
    },
    "COLUMN_NEST": {
      "NAME": "value5"
    }
  },
  {
    "COLUMN NAME": "value6",
    "COLUMN_NAME": "value7",
    "COLUMN": {
      "NEST": {
        "NAME": "value8"
      },
      "NEST_NAME": "value9"
    },
    "COLUMN_NEST": {
      "NAME": "value10"
    }
  }
]
```

#### Credits

- `sheetToJSON()` code [abhishekkannojia](https://stackoverflow.com/users/2386736/abhishekkannojia) on [StackOverflow](https://stackoverflow.com/questions/44178371/converting-csv-to-nested-json-in-javascript)

### LICENSE

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.