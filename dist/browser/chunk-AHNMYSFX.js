import{h as n,i as o}from"./chunk-QSZTU4I5.js";import"./chunk-I7VAY2DR.js";import"./chunk-FQTXYWH5.js";import"./chunk-KLXERNY4.js";import"./chunk-WAZIXELF.js";import{a as i,f as y,g as l}from"./chunk-FBHJEXCM.js";import"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-QDNKD3H5.js";import"./chunk-F72O5PVM.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{g as t}from"./chunk-ESDYQQXO.js";var m="Image Service",g="imagery-layer-save",d="imagery-layer-save-as",v="imagery-tile-layer-save",f="imagery-tile-layer-save-as";function c(a){if(a.type==="imagery")return{isValid:!0};let{raster:e}=a,r=e?.datasetFormat==="Function"?e.primaryRasters?.rasters[0]:e;return{isValid:r?.datasetFormat==="RasterTileServer"&&(r.tileType==="Raster"||r.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function p(a){let e=a.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}function I(a,e){return t(this,null,function*(){let{parsedUrl:r,title:s,fullExtent:u}=a;e.url=r.path,e.title||=s,e.extent=yield y(u),a.type==="imagery-tile"&&i(e,l.TILED_IMAGERY)})}function w(a,e){return t(this,null,function*(){let r=a.type==="imagery"?g:v;return n({layer:a,itemType:m,validateLayer:c,createItemData:p,errorNamePrefix:r},e)})}function E(a,e,r){return t(this,null,function*(){let s=a.type==="imagery"?d:f;return o({layer:a,itemType:m,validateLayer:c,createItemData:p,errorNamePrefix:s,newItem:e,setItemProperties:I},r)})}export{w as save,E as saveAs};