"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[724],{20724:(Qe,D,s)=>{s.r(D),s.d(D,{default:()=>Ee});var y=s(15861),i=s(50484),Y=s(35458),X=s(62691),q=(s(36699),s(15212),s(53722),s(82752),s(28999),s(38748),s(50923),s(42212),s(91963),s(41007)),N=s(66476),k=s(25387),O=s(83944),p=s(57964),f=s(4703),_=s(3233),G=s(79412),Z=s(77675),ee=s(6785),a=s(80543),Q=(s(1535),s(57678),s(14007),s(49301)),g=s(62185),L=s(10141),E=s(60301),te=s(95060),re=s(29674),se=s(4257),ie=s(92344),oe=s(80099),ae=s(70509),ne=s(29717),R=s(38866),V=s(89713),le=s(63724),de=s(36297),m=s(8966),J=s(43497),pe=s(30664),ye=s(54887),ue=s(27969),ce=s(40100),A=s(85295),b=s(46637),fe=s(40591),H=s(75421),he=s(39557),ge=s(79936),w=s(89317);let c=class extends w.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,a.Cb)({type:String,json:{read:!0,write:!0}})],c.prototype,"name",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:!0,write:!0}})],c.prototype,"field",void 0),(0,i._)([(0,a.Cb)({type:[Number],json:{read:!0,write:!0}})],c.prototype,"currentRangeExtent",void 0),(0,i._)([(0,a.Cb)({type:[Number],json:{read:!0,write:!0}})],c.prototype,"fullRangeExtent",void 0),(0,i._)([(0,a.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=(0,i._)([(0,L.j)("esri.layers.support.RangeInfo")],c);var S,ve=s(34222),me=s(42214),M=s(23206),P=s(5391),$=s(83821);let T=S=class extends((0,w.eC)(O.Z.ofType(P.Z))){constructor(e){super(e)}clone(){return new S(this.items.map(e=>e.clone()))}write(e,r){return this.toJSON(r)}toJSON(e){const r=e?.layer?.spatialReference;return r?this.toArray().map(t=>{if(!r.equals(t.spatialReference)){if(!(0,$.canProjectWithoutEngine)(t.spatialReference,r))return e?.messages&&e.messages.push(new M.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new P.Z;(0,$.projectPolygon)(t,l,r),t=l}const n=t.toJSON(e);return delete n.spatialReference,n}).filter(t=>null!=t):(e?.messages&&e.messages.push(new M.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(t=>t.toJSON(e)))}static fromJSON(e,r){const t=new S;return e.forEach(n=>t.add(P.Z.fromJSON(n,r))),t}};T=S=(0,i._)([(0,L.j)("esri.layers.support.PolygonCollection")],T);const F=T;var x,be=s(19677);let v=x=class extends w.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new F,this._geometriesSource=null}initialize(){this.addHandles((0,Z.on)(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,Z.Z_))}readGeometries(e,r,t){Array.isArray(e)?this.geometries=F.fromJSON(e,t):this._geometriesSource={url:(0,be.f)(e,t),context:t}}loadGeometries(e,r){var t=this;return(0,y.Z)(function*(){if(null==t._geometriesSource)return;const{url:n,context:l}=t._geometriesSource,d=yield(0,N.Z)(n,{responseType:"json",signal:r?.signal}),u=e.toJSON(),h=d.data.map(I=>({...I,spatialReference:u}));t.geometries=F.fromJSON(h,l),t._geometriesSource=null})()}clone(){const e=new x({geometries:(0,ve.d9)(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};(0,i._)([(0,a.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],v.prototype,"spatialRelationship",void 0),(0,i._)([(0,a.Cb)({type:F,nonNullable:!0,json:{write:!0}}),(0,me.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],v.prototype,"geometries",void 0),(0,i._)([(0,g.r)(["web-scene","portal-item"],"geometries")],v.prototype,"readGeometries",null),v=x=(0,i._)([(0,L.j)("esri.layers.support.SceneFilter")],v);const Ie=v;var Le=s(39262),Se=s(91866),C=s(43688),K=s(13967),Fe=s(33331),Ce=s(60987),W=s(96696),je=s(39437);const Oe=new Set(["3DObject","Point"]),z=(0,ue.v)();let o=class extends((0,ie.o1)((0,R.Vt)((0,se.Y)((0,oe.q)((0,ae.I)((0,ne.M)((0,_.R)((0,re.V)((0,k.J)(te.Z)))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new O.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){const t=this.getFeatureType(r?.feature)?.domains?.[e];return t&&"inherited"!==t.type?t:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new ce.Z(this.fields)}readNodePages(e,r,t){return"Point"===r.layerType&&(e=r.pointNodePages),null==e||"object"!=typeof e?null:b.U4.fromJSON(e,t)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&(0,J.sX)(this.associatedLayer)}get geometryType(){return Ze[this.profile]||"mesh"}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=e??de.C;const{query:r,queryRelated:t,editing:{supportsGlobalId:n,supportsRollbackOnFailure:l,supportsUploadWithItemId:d,supportsGeometryUpdate:u,supportsReturnServiceEditsInSourceSpatialReference:h},data:{supportsZ:I,supportsM:Re,isVersioned:Ae,supportsAttachment:we},operations:{supportsEditing:Pe,supportsAdd:Te,supportsUpdate:xe,supportsDelete:Ue,supportsQuery:De,supportsQueryAttachments:Ne,supportsAsyncConvert3D:Ge}}=e,j=e.operations.supportsChangeTracking,U=!!this.associatedLayer?.infoFor3D&&(0,K.Rx)();return{query:r,queryRelated:t,editing:{supportsGlobalId:n,supportsReturnServiceEditsInSourceSpatialReference:h,supportsRollbackOnFailure:l,supportsGeometryUpdate:U&&u,supportsUploadWithItemId:d},data:{supportsAttachment:we,supportsZ:I,supportsM:Re,isVersioned:Ae},operations:{supportsQuery:De,supportsQueryAttachments:Ne,supportsEditing:Pe&&j,supportsAdd:U&&Te&&j,supportsDelete:U&&Ue&&j,supportsUpdate:xe&&j,supportsAsyncConvert3D:Ge}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,r){return!e&&r.fields&&r.fields.some(t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e)),e||void 0}readGlobalIdField(e,r){return!e&&r.fields&&r.fields.some(t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e)),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,r){const t=r.store.profile;return null!=t&&B[t]?B[t]:(f.Z.getLogger(this).error("Unknown or missing profile",{profile:t,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}_load(e){var r=this;return(0,y.Z)(function*(){const t=null!=e?e.signal:null;yield r.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(G.r9),yield r._fetchService(t),yield Promise.all([r._fetchIndexAndUpdateExtent(r.nodePages,t),r._setAssociatedFeatureLayer(t),r._loadFilterGeometries()]),r._validateElevationInfo(),r._applyAssociatedLayerOverrides(),r._populateFieldUsageInfo(),yield(0,Le.y)(r,{origin:"service"},t),(0,A.YN)(r.renderer,r.fieldsIndex),yield r.finishLoadEditablePortalLayer(e)})()}beforeSave(){var e=this;return(0,y.Z)(function*(){null!=e.filter&&(e.filter=e.filter.clone(),yield e.load())})()}_loadFilterGeometries(){var e=this;return(0,y.Z)(function*(){if(e.filter)try{yield e.filter.loadGeometries(e.spatialReference)}catch(r){f.Z.getLogger(e).error("#_loadFilterGeometries()",e,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:r}),e.filter=null}})()}createQuery(){const e=new Se.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(t=>t.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(t=>t.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(t=>t.queryFeatures(e||this.createQuery(),r)).then(t=>{if(t?.features)for(const n of t.features)n.layer=this,n.sourceLayer=this;return t})}queryRelatedFeatures(e,r){var t=this;return(0,y.Z)(function*(){if(yield t.load(),!t.associatedLayer)throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:t});return t.associatedLayer.queryRelatedFeatures(e,r)})()}queryRelatedFeaturesCount(e,r){var t=this;return(0,y.Z)(function*(){if(yield t.load(),!t.associatedLayer)throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:t});return t.associatedLayer.queryRelatedFeaturesCount(e,r)})()}queryCachedAttributes(e,r){var t=this;return(0,y.Z)(function*(){const n=(0,A.Lk)(t.fieldsIndex,yield(0,W.e7)(t,(0,W.V5)(t)));return(0,Ce.xe)(t.parsedUrl.path,t.attributeStorageInfo??[],e,r,n)})()}queryCachedFeature(e,r){var t=this;return(0,y.Z)(function*(){const n=yield t.queryCachedAttributes(e,[r]);if(!n||0===n.length)throw new p.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const l=new Y.Z;return l.attributes=n[0],l.layer=t,l.sourceLayer=t,l})()}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(t=>t.queryObjectIds(e||this.createQuery(),r))}queryAttachments(e,r){return this._getAssociatedLayerForQuery().then(t=>t.queryAttachments(e,r))}getFieldUsageInfo(e){const r={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||r:(f.Z.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),r)}createPopupTemplate(e){return(0,Fe.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,y.Z)(function*(){if(yield e.load(),!e.associatedLayer)throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(r){throw new p.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:e,error:r})}return e.associatedLayer})()}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(r=>r.name===e)}queryCachedStatistics(e,r){var t=this;return(0,y.Z)(function*(){if(yield t.load(r),!t.statisticsInfo)throw new p.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=t.fieldsIndex.get(e);if(!n)throw new p.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const l of t.statisticsInfo)if(l.name===n.name){const d=(0,ee.v_)(t.parsedUrl.path,l.href);return(0,N.Z)(d,{query:{f:"json",token:t.apiKey},responseType:"json",signal:r?r.signal:null}).then(u=>u.data)}throw new p.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,r){var t=this;return(0,y.Z)(function*(){return t._debouncedSaveOperations(R.xp.SAVE_AS,{...r,getTypeKeywords:()=>t._getTypeKeywords(),portalItemLayerType:"scene"},e)})()}save(){var e=this;return(0,y.Z)(function*(){const r={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"scene"};return e._debouncedSaveOperations(R.xp.SAVE,r)})()}applyEdits(e,r){var t=this;return(0,y.Z)(function*(){const{applyEdits:n}=yield s.e(8592).then(s.bind(s,52334));let l=r;yield t.load();const d=t.associatedLayer;if(!d)throw new p.Z(`${t.type}-layer:not-editable`,"Service is not editable");yield d.load();const{globalIdField:u}=d,h=!!d.infoFor3D,I=l?.globalIdUsed??!0;if(h&&null==u)throw new p.Z(`${t.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(h&&!I)throw new p.Z(`${t.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return(0,V.M8)(d.url)&&h&&null!=e.deleteFeatures&&null!=u&&(l={...l,globalIdToObjectId:yield(0,J.HW)(d,e.deleteFeatures,u)}),n(t,d.source,e,l)})()}uploadAssets(e,r){var t=this;return(0,y.Z)(function*(){if(yield t.load(),null==t.associatedLayer)throw new p.Z(`${t.type}-layer:not-editable`,"Service is not editable");return yield t.associatedLayer.load(),t.associatedLayer.uploadAssets(e,r)})()}on(e,r){return super.on(e,r)}validateLayer(e){if(e.layerType&&!Oe.has(e.layerType))throw new p.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function r(t,n){let l=!1,d=!1;if(null==t)l=!0,d=!0;else{const u=n&&n.isGeographic;switch(t){case"east-north-up":case"earth-centered":l=!0,d=u;break;case"vertex-reference-frame":l=!0,d=!u;break;default:l=!1}}if(!l)throw new p.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!d)throw new p.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const r=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(l=>l.name===e.name)),t=!!this.associatedLayer?.fields?.some(l=>l&&e.name===l.name);this._fieldUsageInfo[e.name]={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||t,supportsLayerQuery:t}}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const r of this.associatedLayer.fields){const t=this.getField(r.name);t?(!t.domain&&r.domain&&(t.domain=r.domain.clone()),t.editable=r.editable,t.nullable=r.nullable,t.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],r=(0,Q.vw)(this);for(let t=0;t<e.length;t++){const n=e[t],l=this.originIdOf(n),d=this.associatedLayer.originIdOf(n);l<d&&(d===E.s3.SERVICE||d===E.s3.PORTAL_ITEM)&&r.setAtOrigin(n,this.associatedLayer[n],d)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,r=this.associatedLayer?.serverGens,t=this.associatedLayer?.getAtOrigin("fullExtent","service");!(0,K.Rx)()||null==this.associatedLayer?.infoFor3D||!t||!(0,V.M8)(this.associatedLayer?.url)||!e||this.serviceUpdateTimeStamp?.lastUpdate===e.getTime()||!this.serviceUpdateTimeStamp&&r?.minServerGen===r?.serverGen||(0,Q.vw)(this).setAtOrigin("fullExtent",t.clone(),E.s3.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}_setAssociatedFeatureLayer(e){var r=this;return(0,y.Z)(function*(){if(["mesh-pyramids","points"].includes(r.profile))try{const{serverUrl:t,layerId:n,portalItem:l}=yield(0,le.w)(`${r.url}/layers/${r.layerId}`,{sceneLayerItem:r.portalItem,apiKey:r.apiKey,signal:e}),d=yield ge.T.FeatureLayer();r.associatedLayer=new d({url:t,layerId:n,portalItem:l}),yield r.associatedLayer.load()}catch(t){(0,G.D_)(t)||r._logWarningOnPopupEnabled()}})()}_logWarningOnPopupEnabled(){var e=this;return(0,y.Z)(function*(){yield(0,Z.N1)(()=>e.popupEnabled&&null!=e.popupTemplate);const r=`this SceneLayer: ${e.title}`;null==e.attributeStorageInfo?f.Z.getLogger(e).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${r}`):f.Z.getLogger(e).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${r}`)})()}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&(0,C.LR)(f.Z.getLogger(this),(0,C.Wb)("Mesh scene layers","relative-to-scene",e)),(0,C.LR)(f.Z.getLogger(this),(0,C.kf)("Scene layers",e))}};(0,i._)([(0,a.Cb)({types:{key:"type",base:pe.B,typeMap:{selection:ye.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],o.prototype,"featureReduction",void 0),(0,i._)([(0,a.Cb)({type:[c],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],o.prototype,"rangeInfos",void 0),(0,i._)([(0,a.Cb)({json:{read:!1}})],o.prototype,"associatedLayer",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({type:["ArcGISSceneServiceLayer"]})],o.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),(0,i._)([(0,a.Cb)({...z.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"fields",void 0),(0,i._)([(0,a.Cb)()],o.prototype,"types",null),(0,i._)([(0,a.Cb)()],o.prototype,"typeIdField",null),(0,i._)([(0,a.Cb)()],o.prototype,"templates",null),(0,i._)([(0,a.Cb)()],o.prototype,"formTemplate",null),(0,i._)([(0,a.Cb)({readOnly:!0,clonable:!1})],o.prototype,"fieldsIndex",null),(0,i._)([(0,a.Cb)({type:he.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],o.prototype,"floorInfo",void 0),(0,i._)([(0,a.Cb)(z.outFields)],o.prototype,"outFields",void 0),(0,i._)([(0,a.Cb)({type:b.U4,readOnly:!0,json:{read:!1}})],o.prototype,"nodePages",void 0),(0,i._)([(0,g.r)("service","nodePages",["nodePages","pointNodePages"])],o.prototype,"readNodePages",null),(0,i._)([(0,a.Cb)({type:[b.QI],readOnly:!0})],o.prototype,"materialDefinitions",void 0),(0,i._)([(0,a.Cb)({type:[b.Yh],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,a.Cb)({type:[b.H3],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"statisticsInfo",void 0),(0,i._)([(0,a.Cb)({type:O.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],o.prototype,"excludeObjectIds",void 0),(0,i._)([(0,a.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),(0,i._)([(0,a.Cb)({type:Ie,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],o.prototype,"filter",void 0),(0,i._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),(0,i._)([(0,a.Cb)(m.PV)],o.prototype,"elevationInfo",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),(0,i._)([(0,a.Cb)({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,a.Cb)({type:String})],o.prototype,"geometryType",null),(0,i._)([(0,a.Cb)(m.iR)],o.prototype,"labelsVisible",void 0),(0,i._)([(0,a.Cb)({type:[fe.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:H.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H.r},write:!0}})],o.prototype,"labelingInfo",void 0),(0,i._)([(0,a.Cb)(m.rn)],o.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,r){if("number"==typeof e&&e>=0&&e<=1)return e;const t=r.layerDefinition?.drawingInfo?.transparency;return void 0!==t?(0,je.b)(t):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],o.prototype,"opacity",void 0),(0,i._)([(0,a.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"priority",void 0),(0,i._)([(0,a.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"semantic",void 0),(0,i._)([(0,a.Cb)({types:q.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",null),(0,i._)([(0,a.Cb)({json:{read:!1}})],o.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,g.r)("service","cachedDrawingInfo")],o.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),(0,i._)([(0,a.Cb)({type:Boolean,json:{read:!1}})],o.prototype,"editingEnabled",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{write:!1,read:!1}})],o.prototype,"infoFor3D",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{write:!1,read:!1}})],o.prototype,"relationships",null),(0,i._)([(0,a.Cb)(m.C_)],o.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:X.Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),(0,i._)([(0,a.Cb)({type:String,json:{read:!1}})],o.prototype,"objectIdField",void 0),(0,i._)([(0,g.r)("service","objectIdField",["objectIdField","fields"])],o.prototype,"readObjectIdField",null),(0,i._)([(0,a.Cb)({type:String,json:{read:!1}})],o.prototype,"globalIdField",void 0),(0,i._)([(0,g.r)("service","globalIdField",["globalIdField","fields"])],o.prototype,"readGlobalIdField",null),(0,i._)([(0,a.Cb)({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),(0,i._)([(0,a.Cb)({type:String,json:{read:!1}})],o.prototype,"profile",void 0),(0,i._)([(0,g.r)("service","profile",["store.profile"])],o.prototype,"readProfile",null),(0,i._)([(0,a.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,a.Cb)(m.YI)],o.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,a.Cb)({json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"serviceItemId",void 0),o=(0,i._)([(0,L.j)("esri.layers.SceneLayer")],o);const B={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ze={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Ee=o}}]);