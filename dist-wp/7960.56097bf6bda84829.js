"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[7960],{36019:(M,m,e)=>{e.r(m),e.d(m,{default:()=>re});var g=e(15861),r=e(50484),Z=(e(2189),e(62691)),O=(e(36699),e(15212),e(53722),e(82752),e(28999),e(38748),e(50923),e(42212),e(91963),e(41007)),L=e(3233),s=e(80543),T=(e(1535),e(57678),e(14007),e(10141)),C=e(31709),Q=e(95060),D=e(57964),A=e(67016),a=e(62871),G=e(93792),S=e(43814);let y=class extends A.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(t){return this.addResolvingPromise(this._loadOGCServices(this.layer,t)),this.when()}getSource(){const{featureDefinition:{collection:t,layerDefinition:o,spatialReference:n,supportedCrs:p},layer:{apiKey:d,customParameters:u,effectiveMaxRecordCount:l}}=this;return{type:"ogc-source",collection:t,layerDefinition:o,maxRecordCount:l,queryParameters:{apiKey:d,customParameters:u},spatialReference:n,supportedCrs:p}}queryExtent(t,o={}){return null}queryFeatureCount(t,o={}){return null}queryFeatures(t,o={}){return this.queryFeaturesJSON(t,o).then(n=>G.Z.fromJSON(n))}queryFeaturesJSON(t,o={}){const n=this.getSource();return this.load(o).then(()=>(0,a.yN)(n,t,o))}queryObjectIds(t,o={}){return null}serviceSupportsSpatialReference(t){return!(!t.isWGS84&&!t.isWebMercator&&!this.featureDefinition.supportedCrs[t.wkid])}_conformsToType(t,o){const n=new RegExp(`^${o}$`,"i");return t.conformsTo.some(p=>n.test(p))??!1}_getCapabilities(t,o){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:o,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(t){const o=t?.components?.parameters;return o?.limit?.schema?.maximum??o?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(t){const n=(0,a.d)(t.storageCrs??a.$9);return null==n?S.Z.WGS84:new S.Z({wkid:n})}_getSupportedSpatialReferences(t,o){const n="#/crs",p=t.crs??[a.$9],d=p.includes(n)?p.filter(l=>l!==n).concat(o.crs??[]):p,u=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return d.filter(l=>!u.test(l))}_loadOGCServices(t,o){var n=this;return(0,g.Z)(function*(){const p=null!=o?o.signal:null,{apiKey:d,collectionId:u,customParameters:l,fields:se,geometryType:ie,hasZ:ne,objectIdField:pe,timeInfo:ae,url:le}=t,ue={fields:se?.map(v=>v.toJSON()),geometryType:C.P.toJSON(ie),hasZ:ne??!1,objectIdField:pe,timeInfo:ae?.toJSON()},h={apiKey:d,customParameters:l,signal:p},x=yield(0,a.gp)(le,h),[P,j]=yield Promise.all([(0,a.G4)(x,h),(0,a.j)(x,h)]);if(!n._conformsToType(P,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new D.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=j.collections.find(v=>v.id===u);if(!f)throw new D.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const de=n._conformsToType(P,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?yield(0,a.eS)(x,h):null,E=yield(0,a.w9)(f,ue,h),ye=n._getMaxRecordCount(de),ce=n._getCapabilities(E.hasZ,ye),ve=n._getStorageSpatialReference(f).toJSON(),he=n._getSupportedSpatialReferences(f,j),fe=new RegExp(`^${a.Lu}`,"i"),F={};for(const v of he){const I=(0,a.d)(v);null!=I&&(F[I]||(F[I]=v.replace(fe,"")))}n.featureDefinition={capabilities:ce,collection:f,layerDefinition:E,spatialReference:ve,supportedCrs:F}})()}};(0,r._)([(0,s.Cb)()],y.prototype,"featureDefinition",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],y.prototype,"layer",void 0),(0,r._)([(0,s.Cb)()],y.prototype,"type",void 0),y=(0,r._)([(0,T.j)("esri.layers.graphics.sources.OGCFeatureSource")],y);var B=e(29674),N=e(19855),U=e(27426),H=e(12621),z=e(96159),V=e(80099),J=e(52496),$=e(70509),K=e(25836),W=e(29717),Y=e(12522),c=e(8966),X=e(50243),w=e(81247),q=e(27969),R=e(85295),k=e(40591),_=e(75421),b=e(91866),ee=e(33331),te=e(26894);const oe=(0,q.v)();let i=class extends((0,B.V)((0,U.N)((0,z.M)((0,H.b)((0,N.h)((0,J.c)((0,Y.n)((0,W.M)((0,V.q)((0,$.I)((0,K.Q)((0,L.R)(Q.Z))))))))))))){constructor(t){super(t),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new y({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},t).then(()=>this._fetchService(t))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(t){(0,R.YN)(t,this.fieldsIndex),this._set("renderer",t)}on(t,o){return super.on(t,o)}createPopupTemplate(t){return(0,ee.eZ)(this,t)}createQuery(){return new b.Z}getField(t){return this.fieldsIndex.get(t)}getFieldDomain(t,o){let n,p=!1;const d=o?.feature?.attributes,u=this.typeIdField&&d?.[this.typeIdField];return null!=u&&this.types&&(p=this.types.some(l=>l.id==u&&(n=l.domains?.[t],"inherited"===n?.type&&(n=this._getLayerDomain(t)),!0))),p||n||(n=this._getLayerDomain(t)),n}queryFeatures(t,o){return this.load().then(()=>this.source.queryFeatures(b.Z.from(t)||this.createQuery(),o)).then(n=>(n?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),n))}serviceSupportsSpatialReference(t){return this.source?.serviceSupportsSpatialReference(t)??!1}_fetchService(t){var o=this;return(0,g.Z)(function*(){yield o.source.load(t),o.read(o.source.featureDefinition,{origin:"service"}),(0,R.YN)(o.renderer,o.fieldsIndex),(0,R.UF)(o.timeInfo,o.fieldsIndex)})()}_getLayerDomain(t){if(!this.fields)return null;for(const o of this.fields)if(o.name===t&&o.domain)return o.domain;return null}};(0,r._)([(0,s.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),(0,r._)([(0,s.Cb)({type:String})],i.prototype,"copyright",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),(0,r._)([(0,s.Cb)({type:String})],i.prototype,"definitionExpression",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:String})],i.prototype,"displayField",void 0),(0,r._)([(0,s.Cb)({type:Number})],i.prototype,"effectiveMaxRecordCount",null),(0,r._)([(0,s.Cb)(c.PV)],i.prototype,"elevationInfo",void 0),(0,r._)([(0,s.Cb)({type:[w.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),(0,r._)([(0,s.Cb)(oe.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,type:te.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),(0,r._)([(0,s.Cb)({type:C.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.M.read}}}}})],i.prototype,"geometryType",void 0),(0,r._)([(0,s.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),(0,r._)([(0,s.Cb)({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),(0,r._)([(0,s.Cb)({type:[k.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:_.r},write:!0}}}})],i.prototype,"labelingInfo",void 0),(0,r._)([(0,s.Cb)(c.iR)],i.prototype,"labelsVisible",void 0),(0,r._)([(0,s.Cb)(c.rn)],i.prototype,"legendEnabled",void 0),(0,r._)([(0,s.Cb)({type:Number})],i.prototype,"maxRecordCount",void 0),(0,r._)([(0,s.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),(0,r._)([(0,s.Cb)({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),(0,r._)([(0,s.Cb)(c.C_)],i.prototype,"popupEnabled",void 0),(0,r._)([(0,s.Cb)({type:Z.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,r._)([(0,s.Cb)({types:O.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:O.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),(0,r._)([(0,s.Cb)(c.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],i.prototype,"source",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,type:S.Z,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),(0,r._)([(0,s.Cb)({type:[X.Z]})],i.prototype,"types",void 0),(0,r._)([(0,s.Cb)(c.HQ)],i.prototype,"url",void 0),i=(0,r._)([(0,T.j)("esri.layers.OGCFeatureLayer")],i);const re=i},85559:(M,m,e)=>{e.d(m,{g:()=>g});const g={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);