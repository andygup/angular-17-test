import{b as re,c as T}from"./chunk-7GS75UJK.js";import{b as te,d as oe,e as F}from"./chunk-GWZXQU22.js";import"./chunk-PZJU7G7R.js";import{a as S,b as W,c as H,d as Q}from"./chunk-U6PAWXWH.js";import"./chunk-I7VAY2DR.js";import"./chunk-FQTXYWH5.js";import"./chunk-KLXERNY4.js";import"./chunk-YKLD6O7Z.js";import{a as $}from"./chunk-2SRHEZDP.js";import{a as k}from"./chunk-4YLYZGNM.js";import{a as J}from"./chunk-PHG7WLHF.js";import{a as z}from"./chunk-RAIGRXV3.js";import{a as U}from"./chunk-6J7DCVWC.js";import{a as K}from"./chunk-Z7MKEISX.js";import{a as ee}from"./chunk-5L5TH44W.js";import{a as D}from"./chunk-URPONBMS.js";import{c as X,f as Y,g as Z}from"./chunk-QB3NROF7.js";import{a as ie}from"./chunk-5WCYRI4X.js";import"./chunk-6EFGHIXX.js";import"./chunk-DZ3DW7ED.js";import{j as P,n as G}from"./chunk-4KJ462UD.js";import"./chunk-HSB35X5B.js";import"./chunk-FBHJEXCM.js";import"./chunk-KCKP7FIY.js";import"./chunk-HPJ6EQFO.js";import"./chunk-5MJXKSZ4.js";import"./chunk-LGGJOMLJ.js";import"./chunk-VVAIF23J.js";import"./chunk-HI2T2YSZ.js";import"./chunk-O5K35OSE.js";import"./chunk-D6LLE2YP.js";import{c as I}from"./chunk-O5IGEGOS.js";import"./chunk-EDSVJRYE.js";import"./chunk-YH4Z47PR.js";import"./chunk-2APWMENK.js";import"./chunk-IEXZWAIE.js";import"./chunk-VDN3XKL2.js";import"./chunk-SVEGZVCP.js";import"./chunk-SAOUSUZE.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import{a as d}from"./chunk-WUM4JBII.js";import"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-V2KSICSA.js";import"./chunk-HB7BVTLV.js";import"./chunk-WZKL6OPG.js";import"./chunk-WF37UVOV.js";import"./chunk-UZQ577CU.js";import"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-ARS6KN6E.js";import"./chunk-F72O5PVM.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-KBFIYTBH.js";import"./chunk-PEPXQ7N3.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import{a as M}from"./chunk-HBTOKQC5.js";import{a as V}from"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import{$ as A,s as O}from"./chunk-XF4NUYV7.js";import{h as N}from"./chunk-FNDPIYNC.js";import{H as o}from"./chunk-WMYPRHRR.js";import{H as C,R as a}from"./chunk-IAMDMFZ7.js";import{a as r}from"./chunk-53MWZ23O.js";import{k as L}from"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{b as p,i as E,p as x,r as m}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as c,b,g as w}from"./chunk-ESDYQQXO.js";var h=class extends N{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],h.prototype,"type",void 0),h=r([a("esri.layers.pointCloudFilters.PointCloudFilter")],h);var u=h;var R,f=R=class extends u{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new R({field:this.field,requiredClearBits:p(this.requiredClearBits),requiredSetBits:p(this.requiredSetBits)})}};r([o({type:[C],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],f.prototype,"requiredClearBits",void 0),r([o({type:[C],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],f.prototype,"requiredSetBits",void 0),r([d({pointCloudBitfieldFilter:"bitfield"})],f.prototype,"type",void 0),f=R=r([a("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],f);var se=f;var j,v=j=class extends u{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new j({field:this.field,includedReturns:p(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"includedReturns",void 0),r([d({pointCloudReturnFilter:"return"})],v.prototype,"type",void 0),v=j=r([a("esri.layers.pointCloudFilters.PointCloudReturnFilter")],v);var ne=v;var _,y=_=class extends u{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new _({field:this.field,mode:this.mode,values:p(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"mode",void 0),r([d({pointCloudValueFilter:"value"})],y.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"values",void 0),y=_=r([a("esri.layers.pointCloudFilters.PointCloudValueFilter")],y);var ae=y;var pe={key:"type",base:u,typeMap:{value:ae,bitfield:se,return:ne}};var q,g=q=class extends S{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new q(b(c({},this.cloneProperties()),{field:p(this.field)}))}};r([d({pointCloudRGBRenderer:"point-cloud-rgb"})],g.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],g.prototype,"field",void 0),g=q=r([a("esri.renderers.PointCloudRGBRenderer")],g);var le=g;var B={key:"type",base:S,typeMap:{"point-cloud-class-breaks":W,"point-cloud-rgb":le,"point-cloud-stretch":H,"point-cloud-unique-value":Q},errorContext:"renderer"};var de=J(),i=class extends re(k(ee(U(K(D($(ie))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?c({url:e},t):e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){let t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{let l=new I;return s.type==="FieldTypeInteger"&&((s=p(s)).type="esriFieldTypeInteger"),l.read(s,n),l}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new I({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){E("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){let t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(L).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){let t=z(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){let t=this.fieldsIndex.get("RETURNS");if(!t)return;let n=e.fieldInfos?.find(l=>l.fieldName===t.name);if(!n)return;let s=new P({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){let t=this.fieldsIndex.get("RGB");if(!t)return;let n=e.fieldInfos?.find(l=>l.fieldName===t.name);if(!n)return;let s=new P({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}queryCachedStatistics(e,t){return w(this,null,function*(){if(yield this.load(t),!this.attributeStorageInfo)throw new m("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");let n=this.fieldsIndex.get(e);if(!n)throw new m("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(let s of this.attributeStorageInfo)if(s.name===n.name){let l=O(this.parsedUrl.path,`./statistics/${s.key}`);return A(l,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(ue=>ue.data)}throw new m("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")})}saveAs(e,t){return w(this,null,function*(){return this._debouncedSaveOperations(T.SAVE_AS,b(c({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"}),e)})}save(){return w(this,null,function*(){let e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(T.SAVE,e)})}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new m("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new m("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new m("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){let e=this.elevationInfo;F(x.getLogger(this),te("Point cloud layers","absolute-height",e)),F(x.getLogger(this),oe("Point cloud layers",e))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(X)],i.prototype,"popupEnabled",void 0),r([o({type:G,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[pe],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[I]})],i.prototype,"fields",void 0),r([o(de.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([M("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(de.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(Z)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(Y)],i.prototype,"legendEnabled",void 0),r([o({types:B,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:B},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([V("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([a("esri.layers.PointCloudLayer")],i);var Ur=i;export{Ur as default};