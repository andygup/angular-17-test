import{a as me,b as Pe}from"./chunk-2YMAK36I.js";import{a as Ne}from"./chunk-VYBYHQTJ.js";import{a as ce}from"./chunk-2SRHEZDP.js";import{a as he}from"./chunk-4YLYZGNM.js";import{a as V}from"./chunk-PHG7WLHF.js";import{a as U}from"./chunk-3AY2ZIM4.js";import{a as $e}from"./chunk-XFFNQH2H.js";import{a as _e,b as qe,c as Re,g as Ge}from"./chunk-VL6L3PH6.js";import{b as Me,c as Ve}from"./chunk-MXNDRZNB.js";import{a as fe}from"./chunk-XWKYTQFT.js";import{a as ke}from"./chunk-RAIGRXV3.js";import{b as de}from"./chunk-UULYHJV4.js";import{a as T}from"./chunk-WDTJILD4.js";import{a as De}from"./chunk-6J7DCVWC.js";import{a as ae}from"./chunk-CIQJCIGH.js";import{a as ne}from"./chunk-RI77TKRA.js";import{a as le}from"./chunk-Z7MKEISX.js";import{a as We}from"./chunk-5L5TH44W.js";import{a as q}from"./chunk-URPONBMS.js";import{c as He,d as Be,f as Je,m as ze,n as Ke,o as Ze}from"./chunk-QB3NROF7.js";import{a as Xe}from"./chunk-5WCYRI4X.js";import{c as ge,d as ve,e as we,g as Se,h as Fe,i as Oe,j as Ie,k as Ee,l as Te,m as Ce,n as je,o as Ae,p as M,t as xe,u as Le}from"./chunk-6UQ2Y4IC.js";import{a as D}from"./chunk-KZREEH45.js";import{a as ue,h as ye}from"./chunk-BGARZEEH.js";import{i as be}from"./chunk-6JYX4V7N.js";import{n as pe}from"./chunk-4KJ462UD.js";import{a as oe}from"./chunk-HSB35X5B.js";import{c as G}from"./chunk-TJ3KO5EG.js";import{e as se}from"./chunk-HI2T2YSZ.js";import{a as R}from"./chunk-D6LLE2YP.js";import{a as re}from"./chunk-ZYPPRX53.js";import{c as Ue,d as Qe}from"./chunk-VDN3XKL2.js";import{b as E}from"./chunk-SVEGZVCP.js";import{a as Y,f as ee}from"./chunk-CBOFHDSC.js";import{b as _}from"./chunk-FC3MPJI4.js";import{a as te}from"./chunk-6J4Y65BV.js";import{a as S}from"./chunk-HBTOKQC5.js";import{a as ie}from"./chunk-A52LT7YB.js";import{g as W,s as X}from"./chunk-XF4NUYV7.js";import{H as o,l as L,n as k}from"./chunk-WMYPRHRR.js";import{M as Z,R as P}from"./chunk-IAMDMFZ7.js";import{a as i}from"./chunk-53MWZ23O.js";import{k as J,o as z,y as K}from"./chunk-PT7S6WNL.js";import{b as w,i as H,p as B,r as m}from"./chunk-465DRXTW.js";import{a as I,b as x,g as p}from"./chunk-ESDYQQXO.js";var at=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],rt={key:"type",base:ue,errorContext:"renderer",typeMap:{simple:D,"unique-value":ye,"class-breaks":de}},Ye=V(),et=Z({types:rt}),lt=0;function C(e){let t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function pt(e){return new D({symbol:ut(e)})}function ut(e){switch(e){case"point":case"multipoint":return _e.clone();case"polyline":return qe.clone();case"polygon":case"multipatch":return Re.clone();default:return null}}function dt(e,t){return!!t&&e?.type==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function it(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function yt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}let s={},l=it(e,t);if(l!=null){let{defaultValues:a}=l;for(let u in a)s[u]=a[u]}return s[t.subtypeField]=e,new U({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}var ot="esri.layers.support.SubtypeSublayer",n=class extends q(R(oe(te))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${lt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){let{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){let{fields:s,parent:l}=this,a;if(s){a=[];let u=0;s.forEach(({name:c,alias:f,editable:F,visible:O})=>{if(!O)return;let y=l?.fields?.find($=>$.name===c);if(!y)return;let b={name:c},v=!1;f!==y.alias&&(b.alias=f,v=!0),F!==y.editable&&(b.editable=F,v=!0),a.push(b),v&&u++}),u===0&&a.length===s.length&&(a=null)}else a=w(e);a?.length&&H(r,a,t)}get fields(){let{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;let{subtypes:l,subtypeField:a}=e,u=l?.find(O=>O.code===r),c=u?.defaultValues,f=u?.domains,F=[];for(let O of s){let y=O.clone(),{name:b}=y,v=t?.find(A=>A.name===b);if(y.visible=!t||!!v,v){let{alias:A,editable:nt}=v;A&&(y.alias=A),nt===!1&&(y.editable=!1)}let $=c?.[b]??null;y.defaultValue=b===a?r:$;let N=f?.[b]??null;y.domain=b===a?null:N?N.type==="inherited"?y.domain:N.clone():null,F.push(y)}return F}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){let{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||B.getLogger(ot).error(g("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Ue(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");let{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?pt(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;let s=t.drawingInfo?.renderer,l=et(s,t,r),a,{subtypeCode:u}=this;if(u!=null&&dt(l,t.subtypeField)){let c=l.uniqueValueInfos?.find(({value:f})=>(f=typeof f=="number"?String(f):f)===String(u));c&&(a=new D({symbol:c.symbol}))}else l?.type!=="simple"||l.visualVariables?.length||(a=l);return a}readRenderer(e,t,r){let s=t?.layerDefinition?.drawingInfo?.renderer;return s?s.visualVariables?.some(a=>a.type!=="rotationInfo")?void 0:et(s,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[yt(this.subtypeCode,t)]}readTitleFromService(e,t){let r=it(this.subtypeCode,t);return r!=null?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}addAttachment(e,t){return p(this,null,function*(){let{parent:r}=this;if(!r)throw g("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)})}updateAttachment(e,t,r){return p(this,null,function*(){let{parent:s}=this;if(!s)throw g("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)})}deleteAttachments(e,t){return p(this,null,function*(){let{parent:r}=this;if(!r)throw g("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)})}applyEdits(e,t){return p(this,null,function*(){if(!this.parent)throw g("applyEdits");return this.parent.applyEdits(e,t)})}createPopupTemplate(e){let t=this,{parent:r,fields:s,title:l}=this;if(r){let{displayField:a,editFieldsInfo:u,objectIdField:c}=r;t={displayField:a,editFieldsInfo:u,fields:s,objectIdField:c,title:l}}return ke(t,e)}createQuery(){if(!this.parent)throw g("createQuery");let e=M(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=E(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return at.some(e=>this.originIdOf(e)===L.USER)}queryAttachments(e,t){return p(this,null,function*(){let r=yield this.load();if(!r.parent)throw g("queryAttachments");let s=e.clone();return s.where=tt(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)})}queryFeatures(e,t){return p(this,null,function*(){let r=yield this.load();if(!r.parent)throw g("queryFeatures");let s=G.from(e)??r.createQuery();return e!=null&&(s.where=tt(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)})}_getLayerDomain(e){let t=this.fieldsIndex.get(e);return t?t.domain:null}};i([o({readOnly:!0,json:{read:!1}})],n.prototype,"capabilities",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"effectiveCapabilities",null),i([o({json:{write:{ignoreOrigin:!0}}})],n.prototype,"charts",void 0),i([o({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],n.prototype,"editingEnabled",void 0),i([o({type:Boolean,readOnly:!0})],n.prototype,"effectiveEditingEnabled",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"elevationInfo",null),i([o({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],n.prototype,"fieldOverrides",void 0),i([ie("fieldOverrides")],n.prototype,"writeFieldOverrides",null),i([o(x(I({},Ye.fields),{readOnly:!0,json:{read:!1}}))],n.prototype,"fields",null),i([o(Ye.fieldsIndex)],n.prototype,"fieldsIndex",void 0),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"floorInfo",null),i([o({type:me,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],n.prototype,"formTemplate",void 0),i([o({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"geometryType",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),i([o(C(w(Be)))],n.prototype,"labelsVisible",void 0),i([o({type:[Ge],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:$e},write:{ignoreOrigin:!0}}})],n.prototype,"labelingInfo",void 0),i([o({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"layerType",void 0),i([o(C(w(Je)))],n.prototype,"legendEnabled",void 0),i([o({type:["show","hide"]})],n.prototype,"listMode",void 0),i([o((()=>{let e=w(Ke);return e.json.origins.service.read=!1,C(e)})())],n.prototype,"minScale",void 0),i([o((()=>{let e=w(Ze);return e.json.origins.service.read=!1,C(e)})())],n.prototype,"maxScale",void 0),i([o({readOnly:!0})],n.prototype,"effectiveScaleRange",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"objectIdField",null),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],n.prototype,"opacity",void 0),i([o({clonable:!1})],n.prototype,"parent",void 0),i([o(C(w(He)))],n.prototype,"popupEnabled",void 0),i([o({type:pe,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],n.prototype,"popupTemplate",void 0),i([o({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),i([o({types:rt,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],n.prototype,"renderer",null),i([S("service","renderer",["drawingInfo.renderer","subtypeField","type"])],n.prototype,"readRendererFromService",null),i([S("renderer",["layerDefinition.drawingInfo.renderer"])],n.prototype,"readRenderer",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"spatialReference",null),i([o({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],n.prototype,"subtypeCode",void 0),i([o({type:[U],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],n.prototype,"templates",void 0),i([S("service","templates",["geometryType","subtypeField","subtypes","type"])],n.prototype,"readTemplatesFromService",null),i([o({type:String,json:{write:{ignoreOrigin:!0}}})],n.prototype,"title",void 0),i([S("service","title",["subtypes"])],n.prototype,"readTitleFromService",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"url",null),i([o({readOnly:!0})],n.prototype,"userHasUpdateItemPrivileges",null),i([o({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],n.prototype,"visible",void 0),n=i([P(ot)],n);var tt=(e,t,r)=>{let s=new RegExp(`${t}\\s*=\\s*\\d+`),l=`${t}=${r}`,a=e??"";return s.test(a)?a.replace(s,l):E(l,a)},g=e=>new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),j=n;var h="SubtypeGroupLayer",mt="esri.layers.SubtypeGroupLayer";function st(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}var Q=V(),d=class extends Pe(be(ne(Ve(le(ae(he(We(De(q(fe(ce(R(Xe))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(_.ofType(j)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=K((t,r,s)=>p(this,null,function*(){let{save:l,saveAs:a}=yield import("./chunk-HJP2CHX4.js");switch(t){case T.SAVE:return l(this,r);case T.SAVE_AS:return a(this,s,r)}})),this.addHandles(Y(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),ee))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?I({url:e},t):e}load(e){let t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(J).then(()=>p(this,null,function*(){if(!this.url)throw new m("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new m("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(yield this.createGraphicsSource(t))})).then(()=>xe(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Le(this)}get parsedUrl(){let e=W(this.url);return e!=null&&this.layerId!=null&&(e.path=X(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?se(this.url,t):t}addAttachment(e,t){return p(this,null,function*(){return ge(this,e,t,h)})}updateAttachment(e,t,r){return p(this,null,function*(){return ve(this,e,t,r,h)})}applyEdits(e,t){return p(this,null,function*(){return we(this,e,t)})}on(e,t){return super.on(e,t)}createGraphicsSource(e){return p(this,null,function*(){let{default:t}=yield z(import("./chunk-JTKWHRAD.js"),e);return new t({layer:this}).load({signal:e})})}createQuery(){let e=M(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=E(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}deleteAttachments(e,t){return p(this,null,function*(){return Se(this,e,t,h)})}fetchRecomputedExtents(e){return p(this,null,function*(){return Fe(this,e,h)})}findSublayerForFeature(e){let t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return re(this,e=>{e(this.sublayers)})}queryAttachments(e,t){return p(this,null,function*(){return Oe(this,e,t,h)})}queryFeatures(e,t){return p(this,null,function*(){let r=yield this.load(),s=G.from(e)??r.createQuery(),l=s.outFields??[];l.includes(this.subtypeField)||(l.push(this.subtypeField),s.outFields=l);let a=yield r.source.queryFeatures(s,t);if(a?.features)for(let u of a.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return a})}queryObjectIds(e,t){return p(this,null,function*(){return Ie(this,e,t,h)})}queryFeatureCount(e,t){return p(this,null,function*(){return Ee(this,e,t,h)})}queryExtent(e,t){return p(this,null,function*(){return Te(this,e,t,h)})}queryRelatedFeatures(e,t){return p(this,null,function*(){return Ce(this,e,t,h)})}queryRelatedFeaturesCount(e,t){return p(this,null,function*(){return je(this,e,t,h)})}save(e){return p(this,null,function*(){return this._debouncedSaveOperations(T.SAVE,e)})}saveAs(e,t){return p(this,null,function*(){return this._debouncedSaveOperations(T.SAVE_AS,t,e)})}write(e,t){let{origin:r,layerContainerType:s,messages:l}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return l?.push(st(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return l?.push(st(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new m("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&Ne(this,e)}_getLayerDomain(e){let t=this.fieldsIndex.get(e);return t?t.domain:null}_initLayerProperties(e){return p(this,null,function*(){this._set("source",e);let{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new m("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new m("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Qe(this.timeInfo,this.fieldsIndex)})}hasDataChanged(){return p(this,null,function*(){return Ae(this)})}_verifyFields(){let e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([o({readOnly:!0})],d.prototype,"createQueryVersion",null),i([o({readOnly:!0})],d.prototype,"editingEnabled",null),i([o({readOnly:!0})],d.prototype,"effectiveEditingEnabled",null),i([o(x(I({},Q.fields),{readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}))],d.prototype,"fields",void 0),i([o(Q.fieldsIndex)],d.prototype,"fieldsIndex",void 0),i([o(ze)],d.prototype,"id",void 0),i([o({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],d.prototype,"listMode",void 0),i([o({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],d.prototype,"operationalLayerType",void 0),i([o(Q.outFields)],d.prototype,"outFields",void 0),i([o({readOnly:!0})],d.prototype,"parsedUrl",null),i([o({clonable:!1})],d.prototype,"source",null),i([o({type:_.ofType(j),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{let s=e.map(({code:l})=>{let a=new j({subtypeCode:l});return a.read(t,r),a});return new(_.ofType(j))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){let s=this.originOf("sublayers"),l=L.PORTAL_ITEM,a=!0;if(k(s)===l&&k(r.origin)>l){let u=e.some(c=>c.hasUserOverrides());a=this._sublayersCollectionChanged||u}return{enabled:a,ignoreOrigin:!0}}}}})],d.prototype,"sublayers",void 0),i([o({type:Me})],d.prototype,"timeInfo",void 0),i([o({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],d.prototype,"title",void 0),i([S("service","title",["name"])],d.prototype,"readTitleFromService",null),i([o({json:{read:!1}})],d.prototype,"type",void 0),d=i([P(mt)],d);var Nr=d;export{Nr as a};