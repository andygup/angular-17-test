import{a as l}from"./chunk-WQAXQD4X.js";import{H as t}from"./chunk-WMYPRHRR.js";function r(o,e={}){let a=o instanceof l?o:new l(o,e),n={type:e?.ignoreUnknown??1?a.apiValues:String,json:{type:a.jsonValues,read:!e?.readOnly&&{reader:a.read},write:{writer:a.write}}};return e?.readOnly!==void 0&&(n.readOnly=!!e.readOnly),e?.default!==void 0&&(n.json.default=e.default),e?.name!==void 0&&(n.json.name=e.name),e?.nonNullable!==void 0&&(n.nonNullable=e.nonNullable),t(n)}export{r as a};
