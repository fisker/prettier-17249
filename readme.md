Install dependecies



1. run `npm run dev`, open <http://localhost:3000>, you'll see

```json
{
  "type": "NumericLiteral",
  "start": 0,
  "end": 1,
  "loc": {
    "start": {
      "line": 1,
      "column": 0,
      "index": 0
    },
    "end": {
      "line": 1,
      "column": 1,
      "index": 1
    }
  },
  "extra": {
    "rawValue": 1,
    "raw": "1"
  },
  "value": 1,
  "comments": [],
  "errors": []
}
```

2. run `npm run turbopack`, open <http://localhost:3000>, you'll see


```json
{
  "type": "DecimalLiteral",
  "start": 0,
  "end": 1,
  "loc": {
    "start": {
      "line": 1,
      "column": 0,
      "index": 0
    },
    "end": {
      "line": 1,
      "column": 1,
      "index": 1
    }
  },
  "extra": {
    "rawValue": "1",
    "raw": "1"
  },
  "value": "1",
  "comments": [],
  "errors": []
}
```
