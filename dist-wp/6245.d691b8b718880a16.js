"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[6245],{60084:(p,i,r)=>{r.d(i,{D:()=>a});var s=r(26496);function a(_){_?.writtenProperties&&_.writtenProperties.forEach(({target:l,propName:u,newOrigin:o})=>{(0,s.l)(l)&&o&&l.originOf(u)!==o&&l.updateOrigin(u,o)})}},26496:(p,i,r)=>{function s(a){return a&&"getAtOrigin"in a&&"originOf"in a}r.d(i,{l:()=>s})},61651:(p,i,r)=>{r.r(i),r.d(i,{save:()=>P,saveAs:()=>D});var s=r(15861),a=r(85155),_=r(50318);const l="Image Service",u="imagery-layer-save",o="imagery-layer-save-as",E="imagery-tile-layer-save",O="imagery-tile-layer-save-as";function d(t){if("imagery"===t.type)return{isValid:!0};const{raster:e}=t,n="Function"===e?.datasetFormat?e.primaryRasters?.rasters[0]:e;return{isValid:"RasterTileServer"===n?.datasetFormat&&("Raster"===n.tileType||"Map"===n.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function f(t){const e=t.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}function v(t,e){return y.apply(this,arguments)}function y(){return(y=(0,s.Z)(function*(t,e){const{parsedUrl:n,title:c,fullExtent:M}=t;e.url=n.path,e.title||=c,e.extent=yield(0,_.$o)(M),"imagery-tile"===t.type&&(0,_.qj)(e,_.Kz.TILED_IMAGERY)})).apply(this,arguments)}function P(t,e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(function*(t,e){return(0,a.a1)({layer:t,itemType:l,validateLayer:d,createItemData:f,errorNamePrefix:"imagery"===t.type?u:E},e)})).apply(this,arguments)}function D(t,e,n){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)(function*(t,e,n){return(0,a.po)({layer:t,itemType:l,validateLayer:d,createItemData:f,errorNamePrefix:"imagery"===t.type?o:O,newItem:e,setItemProperties:v},n)})).apply(this,arguments)}},65820:(p,i,r)=>{r.d(i,{w:()=>l});var s=r(11931),a=r(57964),_=r(40907);function l(u){if(s.default.apiKey&&(0,_.r)(u.portal.url))throw new a.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${u.portal.url} when using an api key`)}}}]);