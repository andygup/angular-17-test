import{i as h}from"./chunk-465DRXTW.js";import{a as e}from"./chunk-ESDYQQXO.js";var i=class{constructor(s,o={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=s,this._options=o,this.apiValues=[],this.jsonValues=[],this._apiToJSON=this._invertMap(s),this.apiValues=this._getKeysSorted(this._apiToJSON),this.jsonValues=this._getKeysSorted(this._jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(t,u,a)=>{let r=this.toJSON(t);r!==void 0&&h(a,r,u)},this.write.isJSONMapWriter=!0}toJSON(s){if(s==null)return null;if(this._apiToJSON.hasOwnProperty(s)){let o=this._apiToJSON[s];return this._options.useNumericKeys?+o:o}return this._options.ignoreUnknown?void 0:s}fromJSON(s){return s!=null&&this._jsonToAPI.hasOwnProperty(s)?this._jsonToAPI[s]:this._options.ignoreUnknown?void 0:s}_invertMap(s){let o={};for(let t in s)o[s[t]]=t;return o}_getKeysSorted(s){let o=[];for(let t in s)o.push(t);return o.sort(),o}};function _(){return function(n,s){return new i(n,e({ignoreUnknown:!0},s))}}export{i as a,_ as b};
