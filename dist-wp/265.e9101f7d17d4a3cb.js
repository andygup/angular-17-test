"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[265],{70265:(ee,T,n)=>{n.r(T),n.d(T,{default:()=>de});var E=n(15861),i=n(50484),B=n(62691),L=n(66476),g=n(57964),I=n(34222),j=n(4703),W=n(3233),Y=n(71763),R=n(79412),H=n(6785),a=n(80543),O=n(1535),w=n(62185),b=n(10141),N=n(7547),Q=n(95060),A=n(29674),U=n(4257),$=n(80099),M=n(70509),D=n(29717),x=n(38866),S=n(21070),t=n(89317);n(57678),n(14007);let d=class extends t.wq{constructor(o){super(o),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,i._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"field",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],d.prototype,"type",void 0),d=(0,i._)([(0,b.j)("esri.layers.pointCloudFilters.PointCloudFilter")],d);const p=d;var h;let v=h=class extends p{constructor(o){super(o),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new h({field:this.field,requiredClearBits:(0,I.d9)(this.requiredClearBits),requiredSetBits:(0,I.d9)(this.requiredSetBits)})}};(0,i._)([(0,a.Cb)({type:[O.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],v.prototype,"requiredClearBits",void 0),(0,i._)([(0,a.Cb)({type:[O.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],v.prototype,"requiredSetBits",void 0),(0,i._)([(0,S.J)({pointCloudBitfieldFilter:"bitfield"})],v.prototype,"type",void 0),v=h=(0,i._)([(0,b.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],v);const c=v;var m;let F=m=class extends p{constructor(o){super(o),this.includedReturns=[],this.type="return"}clone(){return new m({field:this.field,includedReturns:(0,I.d9)(this.includedReturns)})}};(0,i._)([(0,a.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"includedReturns",void 0),(0,i._)([(0,S.J)({pointCloudReturnFilter:"return"})],F.prototype,"type",void 0),F=m=(0,i._)([(0,b.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],F);const te=F;var G;let P=G=class extends p{constructor(o){super(o),this.mode="exclude",this.type="value",this.values=[]}clone(){return new G({field:this.field,mode:this.mode,values:(0,I.d9)(this.values)})}};(0,i._)([(0,a.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"mode",void 0),(0,i._)([(0,S.J)({pointCloudValueFilter:"value"})],P.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"values",void 0),P=G=(0,i._)([(0,b.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],P);const re={key:"type",base:p,typeMap:{value:P,bitfield:c,return:te}};var z,K=n(8966),J=n(81247),oe=n(27969),X=n(59869),ne=n(21705),q=n(86627);let Z=z=class extends q.Z{constructor(o){super(o),this.type="point-cloud-rgb",this.field=null}clone(){return new z({...this.cloneProperties(),field:(0,I.d9)(this.field)})}};(0,i._)([(0,S.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],Z.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],Z.prototype,"field",void 0),Z=z=(0,i._)([(0,b.j)("esri.renderers.PointCloudRGBRenderer")],Z);const ie=Z;var se=n(71212),le=n(70615);const k={key:"type",base:q.Z,typeMap:{"point-cloud-class-breaks":ne.Z,"point-cloud-rgb":ie,"point-cloud-stretch":se.Z,"point-cloud-unique-value":le.Z},errorContext:"renderer"};var V=n(43688),ae=n(33331);const _=(0,oe.v)();let u=class extends((0,x.Vt)((0,U.Y)((0,$.q)((0,M.I)((0,D.M)((0,W.R)((0,A.V)(Q.Z)))))))){constructor(...o){super(...o),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(o,s){return"string"==typeof o?{url:o,...s}:o}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(o){const s=this.fieldsIndex.get(o);return s?.domain?s.domain:null}readServiceFields(o,s,f){return Array.isArray(o)?o.map(y=>{const C=new J.Z;return"FieldTypeInteger"===y.type&&((y=(0,I.d9)(y)).type="esriFieldTypeInteger"),C.read(y,f),C}):Array.isArray(s.attributeStorageInfo)?s.attributeStorageInfo.map(y=>new J.Z({name:y.name,type:"ELEVATION"===y.name?"double":"integer"})):null}set elevationInfo(o){this._set("elevationInfo",o),this._validateElevationInfo()}writeRenderer(o,s,f,y){(0,Y.RB)("layerDefinition.drawingInfo.renderer",o.write({},y),s)}load(o){const s=null!=o?o.signal:null,f=this.loadFromPortal({supportedTypes:["Scene Service"]},o).catch(R.r9).then(()=>this._fetchService(s));return this.addResolvingPromise(f),Promise.resolve(this)}createPopupTemplate(o){const s=(0,ae.eZ)(this,o);return s&&(this._formatPopupTemplateReturnsField(s),this._formatPopupTemplateRGBField(s)),s}_formatPopupTemplateReturnsField(o){const s=this.fieldsIndex.get("RETURNS");if(!s)return;const f=o.fieldInfos?.find(C=>C.fieldName===s.name);if(!f)return;const y=new X.Z({name:"pcl-returns-decoded",title:s.alias||s.name,expression:`\n        var returnValue = $feature.${s.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});o.expressionInfos=[...o.expressionInfos||[],y],f.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(o){const s=this.fieldsIndex.get("RGB");if(!s)return;const f=o.fieldInfos?.find(C=>C.fieldName===s.name);if(!f)return;const y=new X.Z({name:"pcl-rgb-decoded",title:s.alias||s.name,expression:`\n        var rgb = $feature.${s.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});o.expressionInfos=[...o.expressionInfos||[],y],f.fieldName="expression/pcl-rgb-decoded"}queryCachedStatistics(o,s){var f=this;return(0,E.Z)(function*(){if(yield f.load(s),!f.attributeStorageInfo)throw new g.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const y=f.fieldsIndex.get(o);if(!y)throw new g.Z("pointcloudlayer:field-unexisting",`Field '${o}' does not exist on the layer`);for(const C of f.attributeStorageInfo)if(C.name===y.name){const ue=(0,H.v_)(f.parsedUrl.path,`./statistics/${C.key}`);return(0,L.Z)(ue,{query:{f:"json",token:f.apiKey},responseType:"json",signal:s?s.signal:null}).then(pe=>pe.data)}throw new g.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(o,s){var f=this;return(0,E.Z)(function*(){return f._debouncedSaveOperations(x.xp.SAVE_AS,{...s,getTypeKeywords:()=>f._getTypeKeywords(),portalItemLayerType:"point-cloud"},o)})()}save(){var o=this;return(0,E.Z)(function*(){const s={getTypeKeywords:()=>o._getTypeKeywords(),portalItemLayerType:"point-cloud"};return o._debouncedSaveOperations(x.xp.SAVE,s)})()}validateLayer(o){if(o.layerType&&"PointCloud"!==o.layerType)throw new g.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:o.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new g.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new g.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(o){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(s=>s.name===o)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const o=this.elevationInfo;(0,V.LR)(j.Z.getLogger(this),(0,V.Uy)("Point cloud layers","absolute-height",o)),(0,V.LR)(j.Z.getLogger(this),(0,V.kf)("Point cloud layers",o))}};(0,i._)([(0,a.Cb)({type:["PointCloudLayer"]})],u.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)(K.C_)],u.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:B.Z,json:{name:"popupInfo",write:!0}})],u.prototype,"popupTemplate",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],u.prototype,"defaultPopupTemplate",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],u.prototype,"opacity",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({types:[re],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],u.prototype,"filters",void 0),(0,i._)([(0,a.Cb)({type:[J.Z]})],u.prototype,"fields",void 0),(0,i._)([(0,a.Cb)(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),(0,i._)([(0,w.r)("service","fields",["fields","attributeStorageInfo"])],u.prototype,"readServiceFields",null),(0,i._)([(0,a.Cb)(_.outFields)],u.prototype,"outFields",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],u.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,a.Cb)(K.PV)],u.prototype,"elevationInfo",null),(0,i._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],u.prototype,"path",void 0),(0,i._)([(0,a.Cb)(K.rn)],u.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({types:k,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:k},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],u.prototype,"renderer",void 0),(0,i._)([(0,N.c)("renderer")],u.prototype,"writeRenderer",null),(0,i._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),u=(0,i._)([(0,b.j)("esri.layers.PointCloudLayer")],u);const de=u},43688:(ee,T,n)=>{function g(t,r){return function B(t,r){return r?.mode?r.mode:function i(t){return t?D:x}(t).mode}(null!=t&&t.hasZ,r)}function A(t,r,l){return l&&l.mode!==r?`${t} only support ${r} elevation mode`:null}function U(t,r,l){return l?.mode===r?`${t} do not support ${r} elevation mode`:null}function $(t,r){return null!=r?.featureExpressionInfo&&"0"!==r.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function M(t,r){r&&t.warn(".elevationInfo=",r)}n.d(T,{LR:()=>M,Uy:()=>A,VW:()=>g,Wb:()=>U,kf:()=>$}),n(1678);const D={mode:"absolute-height",offset:0},x={mode:"on-the-ground",offset:null}}}]);