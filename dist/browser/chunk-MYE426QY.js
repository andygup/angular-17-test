import{b as M}from"./chunk-HURWQVHY.js";import{a as W,c as z}from"./chunk-VFGTXZIM.js";import{a as H,b as K}from"./chunk-PQYE2TOR.js";import{a as U}from"./chunk-XCLJ7TPP.js";import"./chunk-LLDE5IQ6.js";import{a as X}from"./chunk-C3SRECOD.js";import"./chunk-MCO7DSFO.js";import"./chunk-3CZHUHY5.js";import{a as $}from"./chunk-G7LWVLCX.js";import"./chunk-HHJJPMV6.js";import"./chunk-EHWWHYDE.js";import"./chunk-M3GEY4SR.js";import"./chunk-7QY3BMVN.js";import{a as Y}from"./chunk-4HXOVZYF.js";import{a as Z}from"./chunk-U2QVIRVP.js";import"./chunk-ATSTMTT4.js";import"./chunk-OVKL2WYY.js";import"./chunk-JKNGMCUA.js";import"./chunk-VXOK76QV.js";import{a as J}from"./chunk-FYZRIMPP.js";import"./chunk-2UDQ3IWX.js";import"./chunk-MXH75ZNY.js";import"./chunk-PQKTT6AH.js";import"./chunk-OM24DGCK.js";import"./chunk-YQRTHGFD.js";import{a as w}from"./chunk-EDSVJRYE.js";import"./chunk-TQYOVOJO.js";import"./chunk-QAVDKCSH.js";import"./chunk-H2AOS66Z.js";import"./chunk-VGGNZXSE.js";import"./chunk-YH4Z47PR.js";import"./chunk-CJJRHJ2S.js";import"./chunk-HZP7XBNB.js";import"./chunk-YUZT5LSA.js";import"./chunk-725QQXBM.js";import"./chunk-ZYPPRX53.js";import"./chunk-574KRDZU.js";import"./chunk-2APWMENK.js";import"./chunk-ZWFVPWKA.js";import"./chunk-JOYABHZZ.js";import"./chunk-IEXZWAIE.js";import{b as _,s as ee,t as te}from"./chunk-VDN3XKL2.js";import"./chunk-SVEGZVCP.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-SREKDU6P.js";import"./chunk-IXIJFOEL.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-WUM4JBII.js";import{f as B}from"./chunk-URUYU25U.js";import"./chunk-3S2DT2SI.js";import"./chunk-7PPV2CP7.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-CBOFHDSC.js";import{e as A}from"./chunk-HB7BVTLV.js";import"./chunk-WZKL6OPG.js";import"./chunk-WF37UVOV.js";import{c as T}from"./chunk-UZQ577CU.js";import"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-F72O5PVM.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-REI3KXR7.js";import"./chunk-URPCXPAW.js";import"./chunk-KBFIYTBH.js";import"./chunk-PEPXQ7N3.js";import"./chunk-VU5W7W6Y.js";import"./chunk-6QIKBCPR.js";import{e as Q}from"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import{b as G}from"./chunk-A52LT7YB.js";import{A as V,n as L,u as P}from"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import{$ as j,H as k,g as R}from"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import{p as v}from"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{p as C,r as I}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as x,g as f}from"./chunk-ESDYQQXO.js";var ie=/^\s*"([\S\s]*)"\s*$/,ne=/""/g,re=`
`,de=[","," ",";","|","	"];function*oe(o,i,e){let t=0;for(;t<=o.length;){let n=o.indexOf(i,t),s=o.substring(t,n>-1?n:void 0);t+=s.length+i.length,e&&!s.trim()||(yield s)}}function E(o){let i=o.includes(`\r
`)?`\r
`:re;return oe(o,i,!0)}function se(o,i){return oe(o,i,!1)}function ae(o,i,e){o=o.trim(),i=i?.trim();let t=[],n=Array.from(new Set([e?.delimiter,...de])).filter(a=>a!=null);for(let a of n){let l=b(o,a).length,c=b(i,a).length??l;l>1&&t.push({weight:Math.min(l,c),delimiter:a})}let s=t.sort(({weight:a},{weight:l})=>l-a).map(({delimiter:a})=>a);for(let a of s){let l=fe(O(o,a).names,e?.longitudeField,e?.latitudeField);if(l.longitudeFieldName&&l.latitudeFieldName)return{delimiter:a,locationInfo:l}}return{delimiter:s[0],locationInfo:null}}function*S(o,i,e,t=()=>Object.create(null)){let n=E(o);n.next();let s="",a="",l=0,c=t(),d=0;e:for(let h of n){let m=se(h,e);for(let y of m)if(s+=a+y,a="",l+=le(y),l%2==0){if(l>0){let g=ie.exec(s);if(!g){c=t(),d=0,s="",l=0;continue e}c[i[d]]=g[1].replaceAll(ne,'"'),d++}else c[i[d]]=s,d++;s="",l=0}else a=e;l===0?(yield c,c=t(),d=0):a=re}}function O(o,i){let e=b(o,i).filter(n=>n!=null),t=e.map(n=>_(n));for(let n=t.length-1;n>=0;n--)t[n]||(t.splice(n,1),e.splice(n,1));return{names:t,aliases:e}}function b(o,i){if(!o?.length)return[];let e=[],t="",n="",s=0,a=se(o,i);for(let l of a)if(t+=n+l,n="",s+=le(l),s%2==0){if(s>0){let c=ie.exec(t);c&&e.push(c[1].replaceAll(ne,'"'))}else e.push(t);t="",s=0}else n=i;return e}function le(o){let i=0,e=0;for(e=o.indexOf('"',e);e>=0;)i++,e=o.indexOf('"',e+1);return i}function fe(o,i,e){i=_(i)?.toLowerCase(),e=_(e)?.toLowerCase();let t=o.map(a=>a.toLowerCase()),n=i?o[t.indexOf(i)]:null,s=e?o[t.indexOf(e)]:null;return{longitudeFieldName:n||o[t.indexOf(he.find(a=>t.includes(a)))],latitudeFieldName:s||o[t.indexOf(pe.find(a=>t.includes(a)))]}}function ce(o,i,e,t,n){let s=[],a=S(o,e,i),l=[];for(let c of a){if(l.length===10)break;l.push(c)}for(let c=0;c<e.length;c++){let d=e[c],h=t[c];if(d===n.longitudeFieldName||d===n.latitudeFieldName)s.push({name:d,type:"esriFieldTypeDouble",alias:h});else{let m;switch(me(l.map(y=>y[d]))){case"integer":m="esriFieldTypeInteger";break;case"double":m="esriFieldTypeDouble";break;case"date":m="esriFieldTypeDate";break;default:m="esriFieldTypeString"}s.push({name:d,type:m,alias:h,length:te(m)})}}return s}function me(o){if(!o.length)return"string";let i=/[^+\-.,0-9]/;return o.map(e=>{if(e!==""){if(!i.test(e)){let t=N(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")&&(t=Number(e),!Number.isNaN(t)||e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t))))return"double"}return W(e)?"date":"string"}}).reduce((e,t)=>e===void 0?t:t===void 0?e:e===t?t:e==="string"||t==="string"?"string":e==="double"||t==="double"?"double":void 0)}var N=function(){let o=M(),i=new RegExp("^"+o.regexp+"$"),e=new RegExp("["+o.group+"\\s\\xa0]","g"),t=o.factor;return n=>{let s=i.exec(n);if(o.factor=t,!s)return NaN;let a=s[1];if(!s[1]){if(!s[2])return NaN;a=s[2],o.factor*=-1}return a=a.replace(e,"").replace(o.decimal,"."),+a*o.factor}}(),pe=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],he=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var ye=H("esriGeometryPoint"),ge=["csv"],Fe=[0,0],D=class{constructor(i,e){this.x=i,this.y=e}},ue=class{constructor(){this._queryEngine=null,this._snapshotFeatures=i=>f(this,null,function*(){let e=yield this._fetch(i);return this._createFeatures(e)})}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(t){return f(this,arguments,function*(i,e={}){this._loadOptions=i;let[n]=yield Promise.all([this._fetch(e.signal),this._checkProjection(i?.parsingOptions?.spatialReference)]),s=Ie(n,i);this._locationInfo=s.locationInfo,this._delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);let a=yield this._createFeatures(n);this._queryEngine.featureStore.addMany(a);let{fullExtent:l,timeExtent:c}=yield this._queryEngine.fetchRecomputedExtents();if(s.layerDefinition.extent=l,c){let{start:d,end:h}=c;s.layerDefinition.timeInfo.timeExtent=[d,h]}return s})}applyEdits(){return f(this,null,function*(){throw new I("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")})}queryFeatures(){return f(this,arguments,function*(i={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQuery(i,e.signal)})}queryFeatureCount(){return f(this,arguments,function*(i={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(i,e.signal)})}queryObjectIds(){return f(this,arguments,function*(i={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(i,e.signal)})}queryExtent(){return f(this,arguments,function*(i={},e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(i,e.signal)})}querySnapping(t){return f(this,arguments,function*(i,e={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(i,e.signal)})}refresh(i){return f(this,null,function*(){this._loadOptions.customParameters=i,this._snapshotTask?.abort(),this._snapshotTask=A(this._snapshotFeatures),this._snapshotTask.promise.then(n=>{this._queryEngine.featureStore.clear(),n&&this._queryEngine.featureStore.addMany(n)},n=>{this._queryEngine.featureStore.clear(),v(n)||C.getLogger("esri.layers.CSVLayer").error(new I("csv-layer:refresh","An error occurred during refresh",{error:n}))}),yield this._waitSnapshotComplete();let{fullExtent:e,timeExtent:t}=yield this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:t}})}_waitSnapshotComplete(){return f(this,null,function*(){if(this._snapshotTask&&!this._snapshotTask.finished){try{yield this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}})}_fetch(i){return f(this,null,function*(){let{url:e,customParameters:t}=this._loadOptions;if(!e)throw new I("csv-layer:invalid-source","url not defined");let n=R(e);return(yield j(n.path,{query:x(x({},n.query),t),responseType:"text",signal:i})).data})}_createQueryEngine(i){let{objectIdField:e,fields:t,extent:n,timeInfo:s}=i.layerDefinition,a=new U({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new X({fieldsIndex:w.fromLayerJSON({fields:t,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:a})}_createFeatures(i){return f(this,null,function*(){let{latitudeFieldName:e,longitudeFieldName:t}=this._locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:a}=this._queryEngine,l=[],c=[],d=s.fields.filter(r=>r.name!==n).map(r=>r.name),h=0,m={};for(let r of s.fields)if(r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"){let u=ee(r);u!==void 0&&(m[r.name]=u)}let y=S(i,d,this._delimiter,K(m,n));for(let r of y){let u=this._parseCoordinateValue(r[e]),F=this._parseCoordinateValue(r[t]);if(F!=null&&u!=null&&!isNaN(u)&&!isNaN(F)){r[e]=u,r[t]=F;for(let p in r)if(p!==e&&p!==t){if(s.isDateField(p))r[p]=z(r[p]);else if(s.isNumericField(p)){let q=N(r[p]);isNaN(q)?r[p]=null:r[p]=q}}r[n]=h,h++,l.push(new D(F,u)),c.push(r)}}if(!L({wkid:4326},a))if(P(a))for(let r of l)[r.x,r.y]=Q(r.x,r.y,Fe);else l=B(J,l,G.WGS84,a,null,null);let g=[];for(let r=0;r<l.length;r++){let{x:u,y:F}=l[r],p=c[r];p[n]=r+1,g.push(new Y(new Z([],[u,F]),p,null,p[n]))}return g})}_parseCoordinateValue(i){if(i==null||i==="")return null;let e=N(i);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(i)),e}_checkProjection(i){return f(this,null,function*(){try{yield $(V,i)}catch{throw new I("csv-layer:projection-not-supported","Projection not supported")}})}};function Ie(o,i){let e=i.parsingOptions||{},t={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=t.layerDefinition={name:k(i.url,ge)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:ye,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},s=E(o),a=s.next().value?.trim(),l=s.next().value?.trim();if(!a)throw new I("csv-layer:empty-csv","CSV is empty",{csv:o});let{delimiter:c,locationInfo:d}=ae(a,l,e);if(!c)throw new I("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:l,parsingOptions:e});if(!d)throw new I("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:l,parsingOptions:e});t.locationInfo=d,t.delimiter=c;let{names:h,aliases:m}=O(a,c),y=ce(o,t.delimiter,h,m,t.locationInfo);if(e.fields?.length){let r=new w(e.fields);for(let u of y){let F=r.get(u.name);F&&Object.assign(u,F)}}if(!y.some(r=>r.type==="esriFieldTypeOID"&&(n.objectIdField=r.name,!0))){let r={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=r.name,y.unshift(r)}n.fields=y;let g=new w(n.fields);if(t.locationInfo&&(t.locationInfo.latitudeFieldName=g.get(t.locationInfo.latitudeFieldName).name,t.locationInfo.longitudeFieldName=g.get(t.locationInfo.longitudeFieldName).name),n.timeInfo){let r=n.timeInfo;if(r.startTimeField){let u=g.get(r.startTimeField);u?(r.startTimeField=u.name,u.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){let u=g.get(r.endTimeField);u?(r.endTimeField=u.name,u.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){let u=g.get(r.trackIdField);r.trackIdField=u?u.name:null}r.startTimeField||r.endTimeField||(n.timeInfo=null)}return t}export{ue as default};