"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[6663],{46663:(Qe,M,n)=>{n.r(M),n.d(M,{default:()=>Me});var u=n(15861),s=n(50484),N=n(25387),A=n(83944),b=n(57964),ne=n(30352),Q=n(3233),R=n(79412),B=n(77675),w=n(38955),H=n(6785),o=n(80543),O=(n(1535),n(57678),n(14007),n(62185)),J=n(10141),j=n(60301),ie=n(95060),se=n(29674),oe=n(4257),le=n(19855),ae=n(27426),de=n(92344),ue=n(57942),pe=n(80099),ye=n(70509),he=n(25836),ce=n(29717),fe=n(12522),be=n(89713),F=n(8966),c=n(43497),Y=n(27969),z=n(85295),ve=n(62691),ge=n(36699),me=(n(15212),n(53722),n(82752),n(28999),n(38748)),G=n(50923),Ce=n(42212),Se=(n(91963),n(4703)),Fe=n(84373),I=n(34222),Ie=n(67016),Oe=n(71763),Ze=n(7547),Te=n(50106),Ee=n(4177),K=n(30457),je=n(40591),Le=n(75421),X=n(91866),Pe=n(33331),U=n(26981);const xe=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],W={key:"type",base:me.Z,errorContext:"renderer",typeMap:{simple:G.Z,"unique-value":Ce.Z,"class-breaks":ge.Z}},q=(0,Y.v)(),k=(0,Te.d)({types:W});let Ae=0;function Z(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function we(e){switch(e){case"point":case"multipoint":return U.xA.clone();case"polyline":return U.CJ.clone();case"polygon":case"multipatch":return U.z3.clone();default:return null}}function _(e,t){return null==e?null:t.subtypes?.find(r=>r.code===e)}function Ue(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:r=null}const i={},l=_(e,t);if(null!=l){const{defaultValues:d}=l;for(const p in d)i[p]=d[p]}return i[t.subtypeField]=e,new K.Z({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const ee="esri.layers.support.SubtypeSublayer";let a=class extends((0,Q.R)((0,N.J)((0,Fe.IG)(Ie.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${Ae++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:l}=this;let d;if(i){d=[];let p=0;i.forEach(({name:h,alias:g,editable:T,visible:E})=>{if(!E)return;const f=l?.fields?.find(V=>V.name===h);if(!f)return;const m={name:h};let S=!1;g!==f.alias&&(m.alias=g,S=!0),T!==f.editable&&(m.editable=T,S=!0),d.push(m),S&&p++}),0===p&&d.length===i.length&&(d=null)}else d=(0,I.d9)(e);d?.length&&(0,Oe.RB)(r,d,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:l,subtypeField:d}=e,p=l?.find(E=>E.code===r),h=p?.defaultValues,g=p?.domains,T=[];for(const E of i){const f=E.clone(),{name:m}=f,S=t?.find(x=>x.name===m);if(f.visible=!t||!!S,S){const{alias:x,editable:Ne}=S;x&&(f.alias=x),!1===Ne&&(f.editable=!1)}f.defaultValue=m===d?r:h?.[m]??null;const $=g?.[m]??null;f.domain=m===d?null:$?"inherited"===$.type?f.domain:$.clone():null,T.push(f)}return T}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||Se.Z.getLogger(ee).error(C("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,z.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function Re(e){return new G.Z({symbol:we(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,l=k(i,t,r);let d;const{subtypeCode:p}=this;if(null!=p&&function Ge(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(l,t.subtypeField)){const h=l.uniqueValueInfos?.find(({value:g})=>(g="number"==typeof g?String(g):g)===String(p));h&&(d=new G.Z({symbol:h.symbol}))}else"simple"!==l?.type||l.visualVariables?.length||(d=l);return d}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;return i?i.visualVariables?.some(d=>"rotationInfo"!==d.type)?void 0:k(i,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[Ue(this.subtypeCode,t)]}readTitleFromService(e,t){const r=_(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}addAttachment(e,t){var r=this;return(0,u.Z)(function*(){const{parent:i}=r;if(!i)throw C("addAttachment");if(e.getAttribute(i.subtypeField)!==r.subtypeCode)throw new b.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return i.addAttachment(e,t)})()}updateAttachment(e,t,r){var i=this;return(0,u.Z)(function*(){const{parent:l}=i;if(!l)throw C("updateAttachment");if(e.getAttribute(l.subtypeField)!==i.subtypeCode)throw new b.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return l.updateAttachment(e,t,r)})()}deleteAttachments(e,t){var r=this;return(0,u.Z)(function*(){const{parent:i}=r;if(!i)throw C("deleteAttachments");if(e.getAttribute(i.subtypeField)!==r.subtypeCode)throw new b.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return i.deleteAttachments(e,t)})()}applyEdits(e,t){var r=this;return(0,u.Z)(function*(){if(!r.parent)throw C("applyEdits");return r.parent.applyEdits(e,t)})()}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:l}=this;if(r){const{displayField:d,editFieldsInfo:p,objectIdField:h}=r;t={displayField:d,editFieldsInfo:p,fields:i,objectIdField:h,title:l}}return(0,Pe.eZ)(t,e)}createQuery(){if(!this.parent)throw C("createQuery");const e=(0,c.rP)(this.parent);return e.where=(0,w._)(`${this.parent.subtypeField}=${this.subtypeCode}`,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return xe.some(e=>this.originIdOf(e)===j.s3.USER)}queryAttachments(e,t){var r=this;return(0,u.Z)(function*(){const i=yield r.load();if(!i.parent)throw C("queryAttachments");const l=e.clone();return l.where=te(l.where,i.parent.subtypeField,i.subtypeCode),i.parent.queryAttachments(e,t)})()}queryFeatures(e,t){var r=this;return(0,u.Z)(function*(){const i=yield r.load();if(!i.parent)throw C("queryFeatures");const l=X.Z.from(e)??i.createQuery();return null!=e&&(l.where=te(l.where,i.parent.subtypeField,i.subtypeCode)),i.parent.queryFeatures(l,t)})()}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),(0,s._)([(0,o.Cb)({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),(0,s._)([(0,o.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),(0,s._)([(0,o.Cb)({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),(0,s._)([(0,o.Cb)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),(0,s._)([(0,Ze.c)("fieldOverrides")],a.prototype,"writeFieldOverrides",null),(0,s._)([(0,o.Cb)({...q.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),(0,s._)([(0,o.Cb)(q.fieldsIndex)],a.prototype,"fieldsIndex",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),(0,s._)([(0,o.Cb)({type:Ee.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),(0,s._)([(0,o.Cb)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),(0,s._)([(0,o.Cb)(Z((0,I.d9)(F.iR)))],a.prototype,"labelsVisible",void 0),(0,s._)([(0,o.Cb)({type:[je.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Le.r},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),(0,s._)([(0,o.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),(0,s._)([(0,o.Cb)(Z((0,I.d9)(F.rn)))],a.prototype,"legendEnabled",void 0),(0,s._)([(0,o.Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,s._)([(0,o.Cb)((()=>{const e=(0,I.d9)(F.rO);return e.json.origins.service.read=!1,Z(e)})())],a.prototype,"minScale",void 0),(0,s._)([(0,o.Cb)((()=>{const e=(0,I.d9)(F.u1);return e.json.origins.service.read=!1,Z(e)})())],a.prototype,"maxScale",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"effectiveScaleRange",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),(0,s._)([(0,o.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),(0,s._)([(0,o.Cb)({clonable:!1})],a.prototype,"parent",void 0),(0,s._)([(0,o.Cb)(Z((0,I.d9)(F.C_)))],a.prototype,"popupEnabled",void 0),(0,s._)([(0,o.Cb)({type:ve.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),(0,s._)([(0,o.Cb)({types:W,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),(0,s._)([(0,O.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),(0,s._)([(0,O.r)("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),(0,s._)([(0,o.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),(0,s._)([(0,o.Cb)({type:[K.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),(0,s._)([(0,O.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),(0,s._)([(0,o.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),(0,s._)([(0,O.r)("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),(0,s._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),(0,s._)([(0,o.Cb)({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),(0,s._)([(0,o.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=(0,s._)([(0,J.j)(ee)],a);const te=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),l=`${t}=${r}`,d=e??"";return i.test(d)?d.replace(i,l):(0,w._)(l,d)},C=e=>new b.Z(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),L=a;var De=n(97403),Ve=n(83739),P=n(84735);const v="SubtypeGroupLayer";function re(e,t){return new b.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const D=(0,Y.v)();let y=class extends((0,ue.B)((0,de.o1)((0,le.h)((0,fe.n)((0,ce.M)((0,he.Q)((0,oe.Y)((0,pe.q)((0,ye.I)((0,Q.R)((0,ae.N)((0,se.V)((0,N.J)(ie.Z)))))))))))))){constructor(...e){var t;super(...e),t=this,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(A.Z.ofType(L)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,R.Ds)(function(){var r=(0,u.Z)(function*(i,l,d){const{save:p,saveAs:h}=yield Promise.all([n.e(8592),n.e(5006)]).then(n.bind(n,69484));switch(i){case P.x.SAVE:return p(t,l);case P.x.SAVE_AS:return h(t,d,l)}});return function(i,l,d){return r.apply(this,arguments)}}()),this.addHandles((0,B.YP)(()=>this.sublayers,(r,i)=>this._handleSublayersChange(r,i),B.Z_))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){var t=this;const r=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(R.r9).then((0,u.Z)(function*(){if(!t.url)throw new b.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==t.layerId)throw new b.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return t._initLayerProperties(yield t.createGraphicsSource(r))})).then(()=>(0,c.nU)(this,"load",e));return this.addResolvingPromise(i),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,c.sX)(this)}get parsedUrl(){const e=(0,H.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,H.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,be.a7)(this.url,t):t}addAttachment(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.JD)(r,e,t,v)})()}updateAttachment(e,t,r){var i=this;return(0,u.Z)(function*(){return(0,c.Y5)(i,e,t,r,v)})()}applyEdits(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.Jj)(r,e,t)})()}on(e,t){return super.on(e,t)}createGraphicsSource(e){var t=this;return(0,u.Z)(function*(){const{default:r}=yield(0,R.Hl)(Promise.all([n.e(842),n.e(2784),n.e(8592),n.e(7021)]).then(n.bind(n,67021)),e);return new r({layer:t}).load({signal:e})})()}createQuery(){const e=(0,c.rP)(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=(0,w._)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}deleteAttachments(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.FV)(r,e,t,v)})()}fetchRecomputedExtents(e){var t=this;return(0,u.Z)(function*(){return(0,c.Ci)(t,e,v)})()}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField);return this.findSublayerForSubtypeCode(e.attributes[t.name])}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,ne.G)(this,e=>{e(this.sublayers)})}queryAttachments(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.SU)(r,e,t,v)})()}queryFeatures(e,t){var r=this;return(0,u.Z)(function*(){const i=yield r.load(),l=X.Z.from(e)??i.createQuery(),d=l.outFields??[];d.includes(r.subtypeField)||(d.push(r.subtypeField),l.outFields=d);const p=yield i.source.queryFeatures(l,t);if(p?.features)for(const h of p.features)h.layer=h.sourceLayer=r.findSublayerForFeature(h);return p})()}queryObjectIds(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.tD)(r,e,t,v)})()}queryFeatureCount(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.VG)(r,e,t,v)})()}queryExtent(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.KE)(r,e,t,v)})()}queryRelatedFeatures(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.kp)(r,e,t,v)})()}queryRelatedFeaturesCount(e,t){var r=this;return(0,u.Z)(function*(){return(0,c.C9)(r,e,t,v)})()}save(e){var t=this;return(0,u.Z)(function*(){return t._debouncedSaveOperations(P.x.SAVE,e)})()}saveAs(e,t){var r=this;return(0,u.Z)(function*(){return r._debouncedSaveOperations(P.x.SAVE_AS,t,e)})()}write(e,t){const{origin:r,layerContainerType:i,messages:l}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==i)return l?.push(re(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===i)return l?.push(re(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new b.Z("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,Ve.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_initLayerProperties(e){var t=this;return(0,u.Z)(function*(){t._set("source",e);const{sourceJSON:r}=e;if(r&&(t.sourceJSON=r,t.read(r,{origin:"service",url:t.parsedUrl})),t.isTable)throw new b.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!t.subtypes?.length)throw new b.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");t._verifyFields(),(0,z.UF)(t.timeInfo,t.fieldsIndex)})()}hasDataChanged(){var e=this;return(0,u.Z)(function*(){return(0,c.gG)(e)})()}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some(t=>"geometry"===t.type)||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"createQueryVersion",null),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"editingEnabled",null),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"effectiveEditingEnabled",null),(0,s._)([(0,o.Cb)({...D.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],y.prototype,"fields",void 0),(0,s._)([(0,o.Cb)(D.fieldsIndex)],y.prototype,"fieldsIndex",void 0),(0,s._)([(0,o.Cb)(F.id)],y.prototype,"id",void 0),(0,s._)([(0,o.Cb)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],y.prototype,"listMode",void 0),(0,s._)([(0,o.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],y.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)(D.outFields)],y.prototype,"outFields",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"parsedUrl",null),(0,s._)([(0,o.Cb)({clonable:!1})],y.prototype,"source",null),(0,s._)([(0,o.Cb)({type:A.Z.ofType(L),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map(({code:l})=>{const d=new L({subtypeCode:l});return d.read(t,r),d});return new(A.Z.ofType(L))(i)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),l=j.s3.PORTAL_ITEM;let d=!0;if((0,j.M9)(i)===l&&(0,j.M9)(r.origin)>l){const p=e.some(h=>h.hasUserOverrides());d=this._sublayersCollectionChanged||p}return{enabled:d,ignoreOrigin:!0}}}}})],y.prototype,"sublayers",void 0),(0,s._)([(0,o.Cb)({type:De.Z})],y.prototype,"timeInfo",void 0),(0,s._)([(0,o.Cb)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],y.prototype,"title",void 0),(0,s._)([(0,O.r)("service","title",["name"])],y.prototype,"readTitleFromService",null),(0,s._)([(0,o.Cb)({json:{read:!1}})],y.prototype,"type",void 0),y=(0,s._)([(0,J.j)("esri.layers.SubtypeGroupLayer")],y);const Me=y}}]);