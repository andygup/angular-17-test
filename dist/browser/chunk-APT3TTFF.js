import{c as b}from"./chunk-RC3TET2J.js";import"./chunk-N77PCW3L.js";import"./chunk-G3LBVS5W.js";import"./chunk-MBI4IOAA.js";import{f,g as y,k as w}from"./chunk-3CZHUHY5.js";import"./chunk-G7LWVLCX.js";import"./chunk-M3GEY4SR.js";import"./chunk-7QY3BMVN.js";import"./chunk-4HXOVZYF.js";import"./chunk-U2QVIRVP.js";import"./chunk-FYZRIMPP.js";import"./chunk-RH6QQ4K6.js";import"./chunk-AUVYUYNK.js";import{c as I}from"./chunk-TJ3KO5EG.js";import"./chunk-LGGJOMLJ.js";import"./chunk-6N5DPLFH.js";import"./chunk-D6LLE2YP.js";import"./chunk-O5IGEGOS.js";import"./chunk-MXH75ZNY.js";import"./chunk-PQKTT6AH.js";import"./chunk-OM24DGCK.js";import"./chunk-YQRTHGFD.js";import"./chunk-VGGNZXSE.js";import"./chunk-YH4Z47PR.js";import"./chunk-CJJRHJ2S.js";import"./chunk-2APWMENK.js";import{a as _}from"./chunk-SVEGZVCP.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-WUM4JBII.js";import"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import{m as p}from"./chunk-U62SHMHB.js";import{a as c}from"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-UZQ577CU.js";import"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-URPCXPAW.js";import"./chunk-KBFIYTBH.js";import"./chunk-PEPXQ7N3.js";import"./chunk-VU5W7W6Y.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{p as h,r as l}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{g as r}from"./chunk-ESDYQQXO.js";var g=h.getLogger("esri.views.2d.layers.features.support.whereUtils"),x={getAttribute:(o,e)=>o.readAttribute(e)};function T(o,e){return r(this,null,function*(){try{let t=yield _(o,e);if(!t.isStandardized){let i=new l("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);g.error(i)}return i=>{let s=i.readArcadeFeature();return t.testFeature(s,x)}}catch{return g.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",o),i=>!0}})}var n=1,E=2,v=class{constructor(e){this._geometryBounds=c(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){let e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(let t of e)this._idToVisibility.set(t,n)}setTrue(e){let t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((m,a)=>{let u=!!(this._idToVisibility.get(a)&n),d=s.has(a);!u&&d?t.push(a):u&&!d&&i.push(a),this._idToVisibility.set(a,d?n|E:0)}),{show:t,hide:i}}createQuery(){let{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:m}=this;return I.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:m})}update(e,t){return r(this,null,function*(){this._hash=JSON.stringify(e);let i=yield f(e,null,t);yield Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])})}_setAttributeFilter(e){return r(this,null,function*(){if(!e?.where)return this._clause=null,void(this.where=null);this._clause=yield T(e.where,this._serviceInfo.fieldsIndex),this.where=e.where})}_setIdFilter(e){this._idsToShow=e?.objectIds&&new Set(e.objectIds),this._idsToHide=e?.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e?.objectIds}_setGeometryFilter(e){return r(this,null,function*(){if(!e?.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);let t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=yield y(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);p(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i})}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e?.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=w(this._serviceInfo.timeInfo,e.timeExtent,b);else{let t=new l("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);h.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide?.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow?.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;let t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return this._timeOperator==null||this._timeOperator(e)}_resetAllHiddenIds(){let e=[];return this._idToVisibility.forEach((t,i)=>{t&n||(this._idToVisibility.set(i,n),e.push(i))}),e}};export{v as default};
