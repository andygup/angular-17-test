import{h as i,i as m}from"./chunk-QSZTU4I5.js";import"./chunk-I7VAY2DR.js";import"./chunk-FQTXYWH5.js";import"./chunk-KLXERNY4.js";import"./chunk-WAZIXELF.js";import{a as n,f as l,g as o}from"./chunk-FBHJEXCM.js";import"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-QDNKD3H5.js";import"./chunk-F72O5PVM.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{g as t}from"./chunk-ESDYQQXO.js";var y="Stream Service",v="stream-layer-save",d="stream-layer-save-as";function c(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function u(r){let e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}function f(r,e){return t(this,null,function*(){let{parsedUrl:a,title:p,fullExtent:s}=r;e.url=a.path,e.title||=p,e.extent=null,s!=null&&(e.extent=yield l(s)),n(e,o.SINGLE_LAYER)})}function I(r,e){return t(this,null,function*(){return i({layer:r,itemType:y,validateLayer:c,createItemData:u,errorNamePrefix:v},e)})}function w(r,e,a){return t(this,null,function*(){return m({layer:r,itemType:y,validateLayer:c,createItemData:u,errorNamePrefix:d,newItem:e,setItemProperties:f},a)})}export{I as save,w as saveAs};