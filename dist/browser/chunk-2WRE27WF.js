import{a as y}from"./chunk-ZODUYFSC.js";import"./chunk-AG2SJ6BN.js";import"./chunk-DJKXVE6T.js";import"./chunk-URPONBMS.js";import{a as u,b as l,c as d}from"./chunk-YQRTHGFD.js";import"./chunk-HBTOKQC5.js";import"./chunk-WQAXQD4X.js";import{$ as c}from"./chunk-XF4NUYV7.js";import{h as g}from"./chunk-FNDPIYNC.js";import{H as p}from"./chunk-WMYPRHRR.js";import{R as f}from"./chunk-IAMDMFZ7.js";import{a as i}from"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as o,b as e,g as n}from"./chunk-ESDYQQXO.js";var s=class extends g{constructor(a){super(a),this.namedTraceConfigurations=[]}};i([p({type:[y],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],s.prototype,"namedTraceConfigurations",void 0),s=i([f("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],s);var N=s;function $(a,r,O){return n(this,null,function*(){let m=l(a),t=r.toJSON();r.globalIds&&r.globalIds.length>0&&(t.globalIds=JSON.stringify(r.globalIds)),r.creators&&r.creators.length>0&&(t.creators=JSON.stringify(r.creators)),r.tags&&r.tags.length>0&&(t.tags=JSON.stringify(r.tags)),r.names&&r.names.length>0&&(t.names=JSON.stringify(r.names));let S=e(o({},t),{f:"json"}),h=d(o(o({},m.query),S)),C=u(h,e(o({},O),{method:"post"})),J=`${m.path}/traceConfigurations/query`,{data:b}=yield c(J,C);return N.fromJSON(b)})}export{$ as queryNamedTraceConfigurations};
