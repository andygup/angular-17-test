import{a as i}from"./chunk-4CWFI3RM.js";import{t as a}from"./chunk-U62SHMHB.js";import{a as p}from"./chunk-HBTOKQC5.js";import{a as m}from"./chunk-A52LT7YB.js";import{h as d}from"./chunk-FNDPIYNC.js";import{H as l}from"./chunk-WMYPRHRR.js";import{R as s}from"./chunk-IAMDMFZ7.js";import{a as t}from"./chunk-53MWZ23O.js";var o=class extends d{constructor(r){super(r),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(r,e){let n=new i;return n.globalId=e.fromGlobalId,n.networkSourceId=e.fromNetworkSourceId,n.terminalId=e.fromTerminalId,n}writeFromNetworkElement(r,e){r&&(e.fromGlobalId=r.globalId,e.fromNetworkSourceId=r.networkSourceId,e.fromTerminalId=r.terminalId)}readToNetworkElement(r,e){let n=new i;return n.globalId=e.toGlobalId,n.networkSourceId=e.toNetworkSourceId,n.terminalId=e.toTerminalId,n}writeToNetworkElement(r,e){r&&(e.toGlobalId=r.globalId,e.toNetworkSourceId=r.networkSourceId,e.toTerminalId=r.terminalId)}};t([l({type:String,json:{write:!0}})],o.prototype,"globalId",void 0),t([l({type:["attachment","connectivity","containment"],json:{write:!0}})],o.prototype,"associationType",void 0),t([l({type:i,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],o.prototype,"fromNetworkElement",void 0),t([p("fromNetworkElement")],o.prototype,"readFromNetworkElement",null),t([m("fromNetworkElement")],o.prototype,"writeFromNetworkElement",null),t([l({type:i,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],o.prototype,"toNetworkElement",void 0),t([p("toNetworkElement")],o.prototype,"readToNetworkElement",null),t([m("toNetworkElement")],o.prototype,"writeToNetworkElement",null),t([l({type:a,json:{write:!0}})],o.prototype,"geometry",void 0),t([l({type:String,json:{write:!0}})],o.prototype,"errorMessage",void 0),t([l({type:Number,json:{write:!0}})],o.prototype,"percentAlong",void 0),t([l({type:Number,json:{write:!0}})],o.prototype,"errorCode",void 0),t([l({type:Boolean,json:{write:!0}})],o.prototype,"isContentVisible",void 0),t([l({type:Number,json:{write:!0}})],o.prototype,"status",void 0),o=t([s("esri.rest.networks.support.Association")],o);var T=o;export{T as a};
