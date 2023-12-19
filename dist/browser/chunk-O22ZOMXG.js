import{a as C}from"./chunk-JG2WANVX.js";import"./chunk-7GACBUSJ.js";import"./chunk-ICBSQ6ZV.js";import"./chunk-YW3L7OMP.js";import{b as j}from"./chunk-WHNNLNN4.js";import{a as M}from"./chunk-YKLD6O7Z.js";import{a as N}from"./chunk-4YLYZGNM.js";import{a as O}from"./chunk-6J7DCVWC.js";import{a as E}from"./chunk-5L5TH44W.js";import{a as I}from"./chunk-URPONBMS.js";import{e as A}from"./chunk-QB3NROF7.js";import{a as P}from"./chunk-5WCYRI4X.js";import"./chunk-DR5NPQZL.js";import"./chunk-HSB35X5B.js";import"./chunk-FBHJEXCM.js";import"./chunk-KCKP7FIY.js";import"./chunk-45GFWXQC.js";import"./chunk-HUZLTBDZ.js";import"./chunk-V2JYXY4D.js";import"./chunk-5MJXKSZ4.js";import"./chunk-LGGJOMLJ.js";import"./chunk-VVAIF23J.js";import"./chunk-HI2T2YSZ.js";import"./chunk-O5K35OSE.js";import"./chunk-QAVDKCSH.js";import"./chunk-H2AOS66Z.js";import"./chunk-2APWMENK.js";import"./chunk-IEXZWAIE.js";import"./chunk-VDN3XKL2.js";import"./chunk-SVEGZVCP.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-CBOFHDSC.js";import"./chunk-HB7BVTLV.js";import"./chunk-WZKL6OPG.js";import"./chunk-WF37UVOV.js";import"./chunk-UZQ577CU.js";import"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-F72O5PVM.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-PEPXQ7N3.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import{a as w}from"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import{$ as g,i as k}from"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import{H as l}from"./chunk-WMYPRHRR.js";import{R as L}from"./chunk-IAMDMFZ7.js";import{a as o}from"./chunk-53MWZ23O.js";import{a as D,i as u,k as x}from"./chunk-PT7S6WNL.js";import{f as V}from"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{p as S,r as T}from"./chunk-465DRXTW.js";import{o as b}from"./chunk-AC62Z3FX.js";import{a as p,b as m,g as y}from"./chunk-ESDYQQXO.js";var v=class{constructor(e,t,r,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=r,this.noDataValue=a)}get hasNoDataValues(){if(this._hasNoDataValues==null){let e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(this._minValue!=null)return;let{noDataValue:e,values:t}=this,r=1/0,a=-1/0,h=!0;for(let n of t)n===e?this._hasNoDataValues=!0:(r=n<r?n:r,a=n>a?n:a,h=!1);h?(this._minValue=0,this._maxValue=0):(this._minValue=r,this._maxValue=a>-3e38?a:0)}};var f=class{constructor(e,t,r,a,h={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=j(e,m(p({},h),{schedule:a})).then(n=>{if(this._thread===void 0){this._thread=n,this._promise=null,h.hasInitialize&&this.broadcast({},"initialize");for(let d of this._listeners)this._connectListener(d)}else n.close()}),this._promise.catch(n=>S.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${n}`))}on(e,t){let r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),D(()=>{r.removed=!0,b(this._listeners,r),this._thread&&r.threadHandle!=null&&r.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){let a=this._transferLists[e],h=a?a(t):[];return this._thread.invoke(e,t,{transferList:h,signal:r})}return this._promise?this._promise.then(()=>(u(r),this.invokeMethod(e,t,r))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}};var _=class extends f{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}release(){--this.ref<=0&&(c.forEach((e,t)=>{e===this&&c.delete(t)}),this.destroy())}},c=new Map;function $(i=null){let e=c.get(i);return e||(i!=null?(e=new _(t=>i.immediate.schedule(t)),c.set(i,e)):(e=new _,c.set(null,e))),++e.ref,e}var s=class extends C(N(E(O(I(P))))){constructor(...i){super(...i),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=$()}normalizeCtorArgs(i,e){return typeof i=="string"?p({url:i},e):i}destroy(){this._lercDecoder=V(this._lercDecoder)}readCapabilities(i,e){let t=e.capabilities&&e.capabilities.split(",").map(r=>r.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(i,e){let t=e.currentVersion;return t||(t=9.3),t}load(i){let e=i!=null?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let r=0;r<t.typeKeywords.length;r++)if(t.typeKeywords[r].toLowerCase()==="elevation 3d layer")return!0;throw new T("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},i).catch(x).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(i,e,t,r){let a=(r=r||{signal:null}).signal!=null?r.signal:r.signal=new AbortController().signal,h={responseType:"array-buffer",signal:a},n={noDataValue:r.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(i,e,t,r)).then(()=>g(this.getTileUrl(i,e,t),h)).then(d=>this._lercDecoder.decode(d.data,n,a)).then(d=>new v(d))}getTileUrl(i,e,t){let r=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,a=k(m(p({},this.parsedUrl.query),{blankTile:!r&&null}));return`${this.parsedUrl.path}/tile/${i}/${e}/${t}${a?"?"+a:""}`}queryElevation(i,e){return y(this,null,function*(){let{ElevationQuery:t}=yield import("./chunk-ZKKUMR6I.js");return u(e),new t().query(this,i,e)})}createElevationSampler(i,e){return y(this,null,function*(){let{ElevationQuery:t}=yield import("./chunk-ZKKUMR6I.js");return u(e),new t().createSampler(this,i,e)})}_fetchTileAvailability(i,e,t,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(i,e,t,r):Promise.resolve("unknown")}_fetchImageService(i){return y(this,null,function*(){if(this.sourceJSON)return this.sourceJSON;let e={query:p({f:"json"},this.parsedUrl.query),responseType:"json",signal:i},t=yield g(this.parsedUrl.path,e);t.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})})}get hasOverriddenFetchTile(){return!this.fetchTile[H]}};o([l({readOnly:!0})],s.prototype,"capabilities",void 0),o([w("service","capabilities",["capabilities"])],s.prototype,"readCapabilities",null),o([l({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),o([l({readOnly:!0,type:M})],s.prototype,"heightModelInfo",void 0),o([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),o([l({type:["show","hide"]})],s.prototype,"listMode",void 0),o([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"minScale",void 0),o([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"maxScale",void 0),o([l({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),o([l({type:["ArcGISTiledElevationServiceLayer"]})],s.prototype,"operationalLayerType",void 0),o([l()],s.prototype,"sourceJSON",void 0),o([l({json:{read:!1},value:"elevation",readOnly:!0})],s.prototype,"type",void 0),o([l(A)],s.prototype,"url",void 0),o([l()],s.prototype,"version",void 0),o([w("version",["currentVersion"])],s.prototype,"readVersion",null),s=o([L("esri.layers.ElevationLayer")],s);var H=Symbol("default-fetch-tile");s.prototype.fetchTile[H]=!0;var _e=s;export{_e as default};
