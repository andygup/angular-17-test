import{a as n}from"./chunk-4TZNIQOB.js";import{g as c}from"./chunk-ESDYQQXO.js";function p(e,s){return c(this,null,function*(){let r=yield n(e,s);o(r),i(r);let a={serviceJSON:r};if((r.currentVersion??0)<10.5)return a;let t=yield n(e+"/layers",s);return o(t),i(t),a.layersJSON={layers:t.layers,tables:t.tables},a})}function y(e){return e.type==="Feature Layer"||e.type==="Oriented Imagery Layer"}function l(e){return e.type==="Table"}function i(e){e.layers=e.layers?.filter(y),e.tables=e.tables?.filter(l)}function f(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function o(e){e.layers?.forEach(f),e.tables?.forEach(u)}export{p as a};