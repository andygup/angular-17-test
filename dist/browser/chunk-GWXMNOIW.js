import{h as a}from"./chunk-ZREXZJBZ.js";import{a as L}from"./chunk-AC62Z3FX.js";import{g as s}from"./chunk-ESDYQQXO.js";var c=class{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=a.KTX2_ENCODING}};function p(t){return t?.type==="encoded-mesh-texture"}function v(t){return s(this,null,function*(){let r=new Blob([t]),o=yield r.text();return JSON.parse(o)})}function w(t,r){return s(this,null,function*(){if(r===a.KTX2_ENCODING)return new c(t);let o=new Blob([t],{type:r}),n=URL.createObjectURL(o),e=new Image;if(L("esri-iPhone"))return new Promise((i,h)=>{let d=()=>{u(),i(e)},m=E=>{u(),h(E)},u=()=>{URL.revokeObjectURL(n),e.removeEventListener("load",d),e.removeEventListener("error",m)};e.addEventListener("load",d),e.addEventListener("error",m),e.src=n});try{e.src=n,yield e.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),e})}export{c as a,p as b,v as c,w as d};
