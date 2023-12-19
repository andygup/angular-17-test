import{a as L,i as b,p as G}from"./chunk-QB3NROF7.js";import{a as I}from"./chunk-HBTOKQC5.js";import{a as s}from"./chunk-A52LT7YB.js";import{u as g}from"./chunk-XF4NUYV7.js";import{c as m,d as u}from"./chunk-FNDPIYNC.js";import{H as o}from"./chunk-WMYPRHRR.js";import{R as d}from"./chunk-IAMDMFZ7.js";import{a as i}from"./chunk-53MWZ23O.js";import{r as c}from"./chunk-465DRXTW.js";import{a as l,b as p}from"./chunk-ESDYQQXO.js";var v={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},w={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},T={ArcGISFeatureLayer:!0},A={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":v,"web-map/basemap":w,"web-map/tables":T,"link-chart/operational-layers":p(l({},v),{LinkChartLayer:!0}),"link-chart/basemap":w,"link-chart/tables":T,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};var H=h=>{let r=class extends h{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(a,e,t){return t?.portalItem?.type==="Group Layer"?void 0:a}writeListMode(a,e,t,n){(n&&n.layerContainerType==="ground"||a&&u(this,t,{},n))&&(e[t]=a)}writeOperationalLayerType(a,e,t,n){a&&n?.layerContainerType!=="tables"&&(e.layerType=a)}writeTitle(a,e){e.title=a??"Layer"}read(a,e){e&&(e.layer=this),m(this,a,t=>super.read(a,t),e)}write(a,e){if(!this.persistenceEnabled)return null;if(e?.origin){let y=`${e.origin}/${e.layerContainerType||"operational-layers"}`,S=!!A[y]?.[this.operationalLayerType];if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&y==="web-scene/operational-layers"&&(S=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&y==="web-map/operational-layers"&&(S=!1),!S)return e.messages?.push(new c("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${y}'`,{layer:this})),null}let t=super.write(a,p(l({},e),{layer:this})),n=!!e&&!!e.messages&&!!e.messages.filter(y=>y instanceof c&&y.name==="web-document-write:property-required").length;return g(t?.url)?(e?.messages?.push(new c("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&n?null:t}beforeSave(){}};return i([o({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),i([I("id",["id"])],r.prototype,"readId",null),i([o(G)],r.prototype,"listMode",void 0),i([s("listMode")],r.prototype,"writeListMode",null),i([o({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:L}}}}})],r.prototype,"operationalLayerType",void 0),i([s("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),i([o(b)],r.prototype,"opacity",void 0),i([o({type:Boolean,readOnly:!1})],r.prototype,"persistenceEnabled",void 0),i([o({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],r.prototype,"title",void 0),i([s("title"),s(["web-scene"],"title")],r.prototype,"writeTitle",null),i([o({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:L}}},name:"visibility",write:!0}})],r.prototype,"visible",void 0),r=i([d("esri.layers.mixins.OperationalLayer")],r),r};export{H as a};
