"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[4092],{74092:(H,j,n)=>{n.r(j),n.d(j,{default:()=>q});var $,r=n(15861),p=n(50484),i=n(57964),A=n(4703),L=n(3233),G=n(79412),x=n(77675),u=n(80543),h=(n(1535),n(57678),n(14007),n(62185)),P=n(10141),C=n(42214),g=n(95060),M=n(29674),b=n(4257),O=n(80099),D=n(70509),B=n(29717),J=n(38866),w=n(8966),N=n(46637),Y=n(66476),t=n(83944),o=n(89317),a=n(6785),c=(n(2189),n(34222)),E=n(23206),I=n(7547),f=n(83821),U=n(5391);let Z=$=class extends o.wq{constructor(s){super(s),this.geometry=null,this.type="clip"}writeGeometry(s,l,v,y){if(y.layer?.spatialReference&&!y.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,f.canProjectWithoutEngine)(s.spatialReference,y.layer.spatialReference))return void(y?.messages&&y.messages.push(new E.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:y.layer.spatialReference,context:y})));const V=new U.Z;(0,f.projectPolygon)(s,V,y.layer.spatialReference),l[v]=V.toJSON(y)}else l[v]=s.toJSON(y);delete l[v].spatialReference}clone(){return new $({geometry:(0,c.d9)(this.geometry),type:this.type})}};(0,p._)([(0,u.Cb)({type:U.Z}),(0,C.B)()],Z.prototype,"geometry",void 0),(0,p._)([(0,I.c)(["web-scene","portal-item"],"geometry")],Z.prototype,"writeGeometry",null),(0,p._)([(0,u.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,C.B)()],Z.prototype,"type",void 0),Z=$=(0,p._)([(0,P.j)("esri.layers.support.SceneModification")],Z);const z=Z;var K;let F=K=class extends((0,o.eC)(t.Z.ofType(z))){constructor(s){super(s),this.url=null}clone(){return new K({url:this.url,items:this.items.map(s=>s.clone())})}toJSON(s){return this.toArray().map(l=>l.toJSON(s)).filter(l=>!!l.geometry)}static fromJSON(s,l){const v=new K;for(const y of s)v.add(z.fromJSON(y,l));return v}static fromUrl(s,l,v){return(0,r.Z)(function*(){const y={url:(0,a.mN)(s),origin:"service"},V=yield(0,Y.Z)(s,{responseType:"json",signal:v?.signal}),ee=l.toJSON(),X=[];for(const _ of V.data)X.push(z.fromJSON({..._,geometry:{..._.geometry,spatialReference:ee}},y));return new K({url:s,items:X})})()}};(0,p._)([(0,u.Cb)({type:String})],F.prototype,"url",void 0),F=K=(0,p._)([(0,P.j)("esri.layers.support.SceneModifications")],F);const Q=F;var W=n(43688),k=n(19677);let m=class extends((0,J.Vt)((0,b.Y)((0,O.q)((0,D.I)((0,B.M)((0,L.R)((0,M.V)(g.Z)))))))){constructor(...s){super(...s),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,x.on)(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,x.Z_))}normalizeCtorArgs(s,l){return"string"==typeof s?{url:s,...l}:s}readModifications(s,l,v){this._modificationsSource={url:(0,k.f)(s,v),context:v}}set elevationInfo(s){this._set("elevationInfo",s),this._validateElevationInfo()}load(s){var l=this;return(0,r.Z)(function*(){return l.addResolvingPromise(l._doLoad(s)),l})()}_doLoad(s){var l=this;return(0,r.Z)(function*(){const v=s?.signal;try{yield l.loadFromPortal({supportedTypes:["Scene Service"]},s)}catch(y){(0,G.r9)(y)}if(yield l._fetchService(v),null!=l._modificationsSource){const y=yield Q.fromUrl(l._modificationsSource.url,l.spatialReference,s);l.setAtOrigin("modifications",y,l._modificationsSource.context.origin),l._modificationsSource=null}yield l._fetchIndexAndUpdateExtent(l.nodePages,v)})()}beforeSave(){if(null!=this._modificationsSource)return this.load().then(()=>{},()=>{})}saveAs(s,l){var v=this;return(0,r.Z)(function*(){return v._debouncedSaveOperations(J.xp.SAVE_AS,{...l,getTypeKeywords:()=>v._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},s)})()}save(){var s=this;return(0,r.Z)(function*(){const l={getTypeKeywords:()=>s._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return s._debouncedSaveOperations(J.xp.SAVE,l)})()}validateLayer(s){if(s.layerType&&"IntegratedMesh"!==s.layerType)throw new i.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:s.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const s=this.elevationInfo,l="Integrated mesh layers";(0,W.LR)(A.Z.getLogger(this),(0,W.Uy)(l,"absolute-height",s)),(0,W.LR)(A.Z.getLogger(this),(0,W.kf)(l,s))}};(0,p._)([(0,u.Cb)({type:String,readOnly:!0})],m.prototype,"geometryType",void 0),(0,p._)([(0,u.Cb)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,p._)([(0,u.Cb)({type:["IntegratedMeshLayer"]})],m.prototype,"operationalLayerType",void 0),(0,p._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],m.prototype,"type",void 0),(0,p._)([(0,u.Cb)({type:N.U4,readOnly:!0})],m.prototype,"nodePages",void 0),(0,p._)([(0,u.Cb)({type:[N.QI],readOnly:!0})],m.prototype,"materialDefinitions",void 0),(0,p._)([(0,u.Cb)({type:[N.Yh],readOnly:!0})],m.prototype,"textureSetDefinitions",void 0),(0,p._)([(0,u.Cb)({type:[N.H3],readOnly:!0})],m.prototype,"geometryDefinitions",void 0),(0,p._)([(0,u.Cb)({readOnly:!0})],m.prototype,"serviceUpdateTimeStamp",void 0),(0,p._)([(0,u.Cb)({type:Q}),(0,C.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],m.prototype,"modifications",void 0),(0,p._)([(0,h.r)(["web-scene","portal-item"],"modifications")],m.prototype,"readModifications",null),(0,p._)([(0,u.Cb)(w.PV)],m.prototype,"elevationInfo",null),(0,p._)([(0,u.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),m=(0,p._)([(0,P.j)("esri.layers.IntegratedMeshLayer")],m);const q=m},46637:(H,j,n)=>{n.d(j,{H3:()=>O,QI:()=>h,U4:()=>R,Yh:()=>C});var r=n(50484),p=n(89317),i=n(80543),x=(n(1535),n(57678),n(14007),n(21070)),u=n(10141);let R=class extends p.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,i.Cb)({type:Number})],R.prototype,"nodesPerPage",void 0),(0,r._)([(0,i.Cb)({type:Number})],R.prototype,"rootIndex",void 0),(0,r._)([(0,i.Cb)({type:String})],R.prototype,"lodSelectionMetricType",void 0),R=(0,r._)([(0,u.j)("esri.layer.support.I3SNodePageDefinition")],R);let S=class extends p.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,i.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],S.prototype,"id",void 0),(0,r._)([(0,i.Cb)({type:Number})],S.prototype,"factor",void 0),S=(0,r._)([(0,u.j)("esri.layer.support.I3SMaterialTexture")],S);let T=class extends p.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,i.Cb)({type:[Number]})],T.prototype,"baseColorFactor",void 0),(0,r._)([(0,i.Cb)({type:S})],T.prototype,"baseColorTexture",void 0),(0,r._)([(0,i.Cb)({type:S})],T.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,i.Cb)({type:Number})],T.prototype,"metallicFactor",void 0),(0,r._)([(0,i.Cb)({type:Number})],T.prototype,"roughnessFactor",void 0),T=(0,r._)([(0,u.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],T);let h=class extends p.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,x.J)({opaque:"opaque",mask:"mask",blend:"blend"})],h.prototype,"alphaMode",void 0),(0,r._)([(0,i.Cb)({type:Number})],h.prototype,"alphaCutoff",void 0),(0,r._)([(0,i.Cb)({type:Boolean})],h.prototype,"doubleSided",void 0),(0,r._)([(0,x.J)({none:"none",back:"back",front:"front"})],h.prototype,"cullFace",void 0),(0,r._)([(0,i.Cb)({type:S})],h.prototype,"normalTexture",void 0),(0,r._)([(0,i.Cb)({type:S})],h.prototype,"occlusionTexture",void 0),(0,r._)([(0,i.Cb)({type:S})],h.prototype,"emissiveTexture",void 0),(0,r._)([(0,i.Cb)({type:[Number]})],h.prototype,"emissiveFactor",void 0),(0,r._)([(0,i.Cb)({type:T})],h.prototype,"pbrMetallicRoughness",void 0),h=(0,r._)([(0,u.j)("esri.layer.support.I3SMaterialDefinition")],h);let P=class extends p.wq{};(0,r._)([(0,i.Cb)({type:String,json:{read:{source:["name","index"],reader:(D,B)=>D??`${B.index}`}}})],P.prototype,"name",void 0),(0,r._)([(0,x.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],P.prototype,"format",void 0),P=(0,r._)([(0,u.j)("esri.layer.support.I3STextureFormat")],P);let C=class extends p.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,i.Cb)({type:[P]})],C.prototype,"formats",void 0),(0,r._)([(0,i.Cb)({type:Boolean})],C.prototype,"atlas",void 0),C=(0,r._)([(0,u.j)("esri.layer.support.I3STextureSetDefinition")],C);let g=class extends p.wq{};(0,r._)([(0,x.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],g.prototype,"type",void 0),(0,r._)([(0,i.Cb)({type:Number})],g.prototype,"component",void 0),g=(0,r._)([(0,u.j)("esri.layer.support.I3SGeometryAttribute")],g);let M=class extends p.wq{};(0,r._)([(0,x.J)({draco:"draco"})],M.prototype,"encoding",void 0),(0,r._)([(0,i.Cb)({type:[String]})],M.prototype,"attributes",void 0),M=(0,r._)([(0,u.j)("esri.layer.support.I3SGeometryCompressedAttributes")],M);let b=class extends p.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,i.Cb)({type:Number})],b.prototype,"offset",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"position",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"normal",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"uv0",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"color",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"uvRegion",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"featureId",void 0),(0,r._)([(0,i.Cb)({type:g})],b.prototype,"faceRange",void 0),(0,r._)([(0,i.Cb)({type:M})],b.prototype,"compressedAttributes",void 0),b=(0,r._)([(0,u.j)("esri.layer.support.I3SGeometryBuffer")],b);let O=class extends p.wq{};(0,r._)([(0,x.J)({triangle:"triangle"})],O.prototype,"topology",void 0),(0,r._)([(0,i.Cb)()],O.prototype,"geometryBuffers",void 0),O=(0,r._)([(0,u.j)("esri.layer.support.I3SGeometryDefinition")],O)},43688:(H,j,n)=>{function L(t,o){return function i(t,o){return o?.mode?o.mode:function p(t){return t?w:N}(t).mode}(null!=t&&t.hasZ,o)}function O(t,o,a){return a&&a.mode!==o?`${t} only support ${o} elevation mode`:null}function D(t,o,a){return a?.mode===o?`${t} do not support ${o} elevation mode`:null}function B(t,o){return null!=o?.featureExpressionInfo&&"0"!==o.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function J(t,o){o&&t.warn(".elevationInfo=",o)}n.d(j,{LR:()=>J,Uy:()=>O,VW:()=>L,Wb:()=>D,kf:()=>B}),n(1678);const w={mode:"absolute-height",offset:0},N={mode:"on-the-ground",offset:null}}}]);