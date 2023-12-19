import{a as ge}from"./chunk-22K5GEMV.js";import{a as nt}from"./chunk-HTQH2YLG.js";import{e as st}from"./chunk-IOMUCP7J.js";import{d as it}from"./chunk-EVB25YXG.js";import{i as me,j as ye}from"./chunk-Z7J4BCLI.js";import{a as tt,b as rt}from"./chunk-G7TZLWYD.js";import{a as b}from"./chunk-WF6JACCV.js";import{b as ce}from"./chunk-NTXQ55BD.js";import{i as Je,m as We,n as U}from"./chunk-EKY6QR7N.js";import{f as Ze}from"./chunk-N57AFEUK.js";import{d as B,g as _}from"./chunk-NKBP5F7I.js";import{A as He,B as qe,C as Ye,D as ue,E as $e,Q as de,c as ie,l as Ge,p as se,q as ne,r as ae,s as oe,t as q,u as Y,v as le}from"./chunk-GIHBFCPM.js";import{k as te,l as re,p as Pe}from"./chunk-TKTKGUCU.js";import{a as $}from"./chunk-2UWML3DK.js";import{a as he}from"./chunk-WKOJXXCZ.js";import{b as Qe,d as et}from"./chunk-WSUW6W66.js";import{b as fe}from"./chunk-XFFNQH2H.js";import{c as Ke}from"./chunk-AUVYUYNK.js";import{a as pe}from"./chunk-PUCLHWWW.js";import{b as je,d as Xe}from"./chunk-DMYB246F.js";import{b as Be,g as Ue}from"./chunk-7UQPY7PH.js";import{b as Ne}from"./chunk-SVEGZVCP.js";import{a as P,c as ee}from"./chunk-AQ74ANSJ.js";import{s as Ae}from"./chunk-U62SHMHB.js";import{a as N}from"./chunk-55ESOXMJ.js";import{o as Le}from"./chunk-CZPMRK53.js";import{z as Ie}from"./chunk-PT7S6WNL.js";import{p as O,r as f}from"./chunk-465DRXTW.js";import{a as v,p as Ve}from"./chunk-AC62Z3FX.js";import{a as y,b as x,g as Q}from"./chunk-ESDYQQXO.js";var J=8,at=J-2,W=O.getLogger("esri.views.2d.layers.features.support.rendererUtils"),Jt=i=>{if(!("visualVariables"in i)||!i.visualVariables?.length)return i;let e=i.clone(),t=e.visualVariables.map(r=>lt(r)?ut(r):r);return e.visualVariables=t,e};function ot(i){return i.map(e=>lt(e)?ut(e.clone()):e)}function lt(i){return(i.type==="size"||i.type==="color"||i.type==="opacity")&&i.stops!=null}function ut(i){return i.stops=Rt(i.type,i.stops??[]),i}function V(i,e,t){return(1-t)*i+t*e}function Tt(i,e){let[t,...r]=e,s=r.pop(),n=r[0].value,a=r[r.length-1].value,o=(a-n)/at,l=[];for(let u=n;u<a;u+=o){let d=0;for(;u>=r[d].value;)d++;let p=r[d],h=e[d-1],R=u-h.value,T=p.value===h.value?1:R/(p.value-h.value);if(i==="color"){let m=r[d],S=e[d-1],c=m.color.clone();c.r=V(S.color.r,c.r,T),c.g=V(S.color.g,c.g,T),c.b=V(S.color.b,c.b,T),c.a=V(S.color.a,c.a,T),l.push({value:u,color:c,label:m.label})}else if(i==="size"){let m=r[d],S=e[d-1],c=ee(m.size),F=V(ee(S.size),c,T);l.push({value:u,size:F,label:m.label})}else{let m=r[d],S=V(e[d-1].opacity,m.opacity,T);l.push({value:u,opacity:S,label:m.label})}}return[t,...l,s]}function St(i){let[e,...t]=i,r=t.pop();for(;t.length>at;){let s=0,n=0;for(let a=1;a<t.length;a++){let o=t[a-1],l=t[a],u=Math.abs(l.value-o.value);u>n&&(n=u,s=a)}t.splice(s,1)}return[e,...t,r]}function Rt(i,e){return e.length<=J?e:(W.warn(`Found ${e.length} Visual Variable stops, but MapView only supports ${J}. Displayed stops will be simplified.`),e.length>2*J?Tt(i,e):St(e))}function j(){if(v("heatmap-force-raster"))return"raster";let{supportsTextureFloat:i,supportsTextureHalfFloat:e,supportsColorBufferFloat:t,supportsColorBufferFloatBlend:r,supportsColorBufferHalfFloat:s}=$("2d");return i&&t&&r||e&&s?"symbol":v("heatmap-allow-raster-fallback")?"raster":"none"}function Wt(i){if(!i)return!0;switch(i.type){case"dot-density":if(!$("2d").supportsTextureFloat)return W.error(new f("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{let e=j();if(e==="none"||e==="raster"&&!v("heatmap-force-raster")){let t=$("2d"),r=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(s=>!t[s]).join(", ");if(e==="none")return W.errorOnce(new f("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${r}`)),!1;e==="raster"&&W.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${r}. Feature support may be limited.`)}break}}return!0}function xe(i){if(!i)return B.NONE;let e=0;for(let t of i)if(t.type==="size"){let r=rt(t);e|=r,t.target==="outline"&&(e|=r<<4)}else t.type==="color"?e|=B.COLOR:t.type==="opacity"?e|=B.OPACITY:t.type==="rotation"&&(e|=B.ROTATION);return e}var hr=512,mr=50;function yr(i,e){let t=Le(e);if(!t)return null;let[r,s]=t.valid;return i[2]>s?[N([i[0],i[1],s,i[3]]),N([r,i[1],r+i[2]-s,i[3]])]:i[0]<r?[N([r,i[1],i[2],i[3]]),N([s-(r-i[0]),i[1],s,i[3]])]:null}function gr(i){return i==="text"||i==="esriTS"}function xr(i){return i==="simple-marker"||i==="picture-marker"||i==="esriSMS"||i==="esriPMS"}function _r(i){switch(i.geometry.type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function br(i){if(!i)return null;let{xmin:e,ymin:t,xmax:r,ymax:s,spatialReference:n}=i;return new Ae({rings:[[[e,t],[e,s],[r,s],[r,t],[e,t]]],spatialReference:n})}function dt(i,e){if(!("visualVariables"in i)||!i.hasVisualVariables("size"))return 0;let t=i.getVisualVariablesForType("size");if(!t[0])return 0;let r=t[0];if(e&&r.field==="cluster_count"&&e.type==="cluster")return e.clusterMaxSize;if(r.target==="outline")return 0;if(r.transformationType==="stops")return r.stops.map(s=>s.size).reduce(_e,0);if(r.transformationType==="clamped-linear"){let s=-1/0,n=-1/0;return s=typeof r.maxSize=="number"?r.maxSize:r.maxSize.stops.map(a=>a.size).reduce(_e,0),n=typeof r.minSize=="number"?r.minSize:r.minSize.stops.map(a=>a.size).reduce(_e,0),Math.max(s,n)}return r.transformationType==="real-world-size"?30:void 0}var Cr={sdf:!0,code:99,metrics:Ge.metrics,rect:new Ze(0,0,24,24),page:0,textureBinding:2};function _e(i,e){return Math.max(i,e)}var C=O.getLogger("esri.views.2d.layers.features.schemaUtils"),g="ValidationError";function Se(i,e){let t=0,r=0,s=_.DEFAULT;if(i!=null){if(r=dt(i,e),"visualVariables"in i&&(t=xe(i.visualVariables||[]),i.type==="dot-density"&&(s=_.DOT_DENSITY)),i.type==="heatmap"&&(s=_.HEATMAP),i.type==="dictionary")return{maxVVSize:r,vvFlags:t,symbologyType:_.DEFAULT};if(i.type==="pie-chart")return{maxVVSize:r,vvFlags:t,symbologyType:_.PIE_CHART};if(s!==_.DOT_DENSITY&&s!==_.HEATMAP){let n=i.getSymbols();"backgroundFillSymbol"in i&&i.backgroundFillSymbol&&n.push(i.backgroundFillSymbol);let a=!0,o=!0;for(let l of n)if(l.type!=="cim"&&l.type!=="web-style"||(o=!1),l.type==="simple-fill"||l.type==="picture-fill"){let u=l.outline,d=u&&u.style!=="none"&&u.style!=="solid",p=l.type==="simple-fill"&&l.style!=="none"&&l.style!=="solid";d&&(a=!1),(l.type==="picture-fill"||p||d)&&(o=!1)}a?s=o?_.OUTLINE_FILL_SIMPLE:_.OUTLINE_FILL:o&&(s=_.SIMPLE)}}return{vvFlags:t,maxVVSize:r,symbologyType:s}}var ct=null;function Xr(i){if(v("esri-2d-update-debug")){let e=pt(i,!0);console.debug("Created new schema",e),console.debug("Schema diff",Ke(ct,e)),ct=e}return pt(i)}function pt(i,e=!1){try{let t=Mt(i,e),r=Ct(i),s={};t.map(o=>vt(s,i,o));let n=i.subtypeCode!=null?`${i.subtypeField} = ${i.subtypeCode}`:null;return{source:{definitionExpression:Ne(i.definitionExpression,n),fields:i.fields.map(o=>o.toJSON()),gdbVersion:i.gdbVersion,historicMoment:i.historicMoment?.getTime(),outFields:i.availableFields,pixelBuffer:i.pixelBuffer,spatialReference:i.spatialReference.toJSON(),timeExtent:i.timeExtent?.toJSON(),customParameters:i.customParameters},attributes:{fields:{},indexCount:0},processors:t,tileRenderer:r,targets:s}}catch(t){if(t.fieldName===g)return C.error(t),null;throw t}}function vt(i,e,t){switch(t.target){case"feature":return void Ee(i,be(e),t);case"aggregate":{if(!("featureReduction"in e))return;let r=e.featureReduction;switch(r?.type){case"selection":throw new f(g,"Mapview does not support `selection` reduction type",r);case"binning":return Ee(i,be(e),t),void wt(i,r,e.fields.map(s=>s.toJSON()),t);case"cluster":return Ee(i,be(e),t),void Ft(i,r,e.fields.map(s=>s.toJSON()),t)}}}}function ve(i,e){for(let t in e){let r=e[t];if(r.target!==i.name)continue;let s=i.attributes[t];if(s?.context){let n=s.context;n.mesh=n.mesh||r.context?.mesh,n.storage=n.storage||r.context?.storage}else i.attributes[t]=r}return i}function be(i){return[i.filter?.toJSON()??null,i.featureEffect?.filter?.toJSON()??null]}function Ee(i,e,t){return i.feature||(i.feature={name:"feature",input:"source",filters:e,attributes:{}}),ve(i.feature,t.attributes.fields),i}function ht(i,e){let{onStatisticExpression:t,onStatisticField:r,statisticType:s}=i;switch(s){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(t){let{returnType:a}=t;return a?a==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(C.error(new f(g,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",i)),"esriFieldTypeString")}let n=e.find(a=>a.name===r);return n?n.type:(C.error(new f(g,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",i)),"esriFieldTypeString")}}}function wt(i,e,t,r){return i.aggregate||(i.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:e.fixedBinLevel,fields:(e.fields??[]).map(s=>x(y({},s.toJSON()),{type:ht(s,t)}))},attributes:{}}),ve(i.aggregate,r.attributes.fields),i}function Ft(i,e,t,r){let s=r.aggregateFields??[],n=new Set;for(let a of s)n.add(a.name);for(let a of e?.fields??[])n.has(a.name)||s.push(a);return i.aggregate||(i.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:P(e.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(P(e.clusterMaxSize)/64),fields:s.map(a=>x(y({},a.toJSON()),{type:ht(a,t)}))}}),ve(i.aggregate,r.attributes.fields),i}function w(i,e){return e.field?z(i,x(y({},e),{type:"field",field:e.field})):e.valueExpression?z(i,x(y({},e),{type:"expression",valueExpression:e.valueExpression})):{field:void 0,fieldIndex:void 0}}function z(i,e){switch(e.type){case"expression":{let t=e.valueExpression;if(!i.fields[t]){let r=i.indexCount++;i.fields[t]=x(y({},e),{name:t,fieldIndex:r})}return{fieldIndex:i.fields[t].fieldIndex}}case"label-expression":{let t=JSON.stringify(e.label);if(!i.fields[t]){let r=i.indexCount++;i.fields[t]=x(y({},e),{name:t,fieldIndex:r})}return{fieldIndex:i.fields[t].fieldIndex}}case"field":{let t=e.field;return e.target==="aggregate"&&i.fields[t]||(i.fields[t]=x(y({},e),{name:t})),{field:t}}case"statistic":return i.fields[e.name]=y({},e),{field:e.name}}}function Mt(i,e=!1){let t=new Array,r=0;return t.push(zt(i,r++,e)),t}function Te(i,e,t,r,s,n=!1){let a=z(i,{type:"label-expression",target:t,context:{mesh:!0},resultType:"string",label:{labelExpression:e.labelExpression,labelExpressionInfo:e.labelExpressionInfo?{expression:e.labelExpressionInfo.expression}:null,symbol:!!e.symbol,where:e.where}}),{fieldIndex:o}=a;return x(y({},b(e,s,n)),{fieldIndex:o,target:t,index:r})}function kt(i,e,t){let r="featureReduction"in e&&e.featureReduction;if(!r)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};let s="aggregate",n=[],a=null,o=ge(e.geometryType),l=[],u=null;if(r)switch(r.type){case"selection":return C.error(new f(g,"Mapview does not support `selection` reduction type",r)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...r.fields??[]),r.type==="cluster"?o="esriGeometryPoint":r.type==="binning"&&(o="esriGeometryPolygon"),r.renderer&&!r.renderer.authoringInfo?.isAutoGenerated){if(r.type==="cluster"){let{renderer:p}=et(r.renderer,r,null);u=p}else u=r.renderer;let d=Se(r.renderer,r);a=Re(i,s,r.renderer,d,t),l=r&&r.labelsVisible&&r.labelingInfo||[]}else if(r.type==="cluster"){if(u=Qe(n,e.renderer,r,null,!0),r.symbol){let d=Se(u,r);a={type:"simple",symbol:b(r.symbol,d,t),symbologyType:d.symbologyType}}l=r&&r.labelsVisible&&r.labelingInfo||[]}}return Ot(i,n),{labels:fe(l,r.type==="binning"?"esriGeometryPolygon":o),matcher:a,fields:n,rendererOverride:u}}function zt(i,e,t=!1){let r={indexCount:0,fields:{}},s="featureReduction"in i?i.featureReduction??void 0:void 0,n=s?"aggregate":"feature";if("sublayers"in i){let c={type:"subtype",subtypeField:i.subtypeField,renderers:{},symbologyType:_.DEFAULT},F={type:"subtype",mapping:{},target:"feature",subtypeField:i.subtypeField},G={type:"subtype",classes:{}},xt={type:"symbol",target:"feature",aggregateFields:[],attributes:r,storage:F,mesh:{matcher:c,aggregateMatcher:null,labels:G,sortKey:null}},ze=new Set,_t=0;for(let{renderer:D,subtypeCode:I,labelingInfo:bt,labelsVisible:Et}of i.sublayers){let Ce=0;"visualVariables"in D&&D.visualVariables&&(D.visualVariables.some(A=>A.type!=="rotation")&&C.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),Ce=xe(D.visualVariables.filter(A=>A.type!=="size")));let De={symbologyType:_.DEFAULT,vvFlags:Ce,maxVVSize:0},L=Re(r,n,D,De,t),H=ft(r,n,D),Oe=Et&&bt;if(L.type==="dictionary")throw new f(g,"Dictionary renderer is not supported in subtype layers");if(L.type==="subtype")throw new f(g,"Nested subtype renderers is not supported");if(H!=null&&H.type==="subtype")throw new f(g,"Nested subtype storage is not supported");if(H?.attributeMapping!=null)throw new f(g,"Non-visual-variable attributes are not supported in subtype layers");if(L.type==="heatmap")throw new f(g,"Heatmaps are not supported in subtype layers");if(L.type==="pie-chart")throw new f(g,"Pie-charts are not supported in subtype layers");if(ze.has(I))throw new f(g,"Subtype codes for sublayers must be unique");ze.add(I),c.renderers[I]=L,F.mapping[I]=H,Oe&&(G.classes[I]=Oe.map(A=>Te(r,A,"feature",_t++,De,t)))}return xt}if(i.renderer?.type==="heatmap"&&j()==="raster"){let{radius:c,fieldOffset:F,field:G}=i.renderer;return{type:"heatmap",aggregateFields:[],attributes:r,target:n,storage:null,mesh:{radius:c,fieldOffset:F,field:w(r,{target:n,field:G,resultType:"numeric"}).field}}}let a=kt(r,i,t),o=ge(i.geometryType),l=a.rendererOverride??i.renderer,u=Se(l,s),d=Re(r,n,l,u,t),p=ft(r,n,l),h=Dt(r,i.orderBy,i.renderer,s),R=i.labelsVisible&&i.labelingInfo||[],T=fe(R,o),m=0,S=[...T.map(c=>Te(r,c,"feature",m++,u,t)),...a.labels.map(c=>Te(r,c,"aggregate",m++,u,t))];return{type:"symbol",target:n,attributes:r,aggregateFields:a.fields,storage:p,mesh:{matcher:d,labels:{type:"simple",classes:S},aggregateMatcher:a.matcher,sortKey:h}}}function Ct(i){return i.renderer?.type==="heatmap"&&j()==="raster"?{type:"heatmap"}:{type:"symbol"}}function Dt(i,e,t,r){if(r!=null)return null;if(e!=null&&e.length){e.length>1&&C.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${e.length}. All but the first will be discarded`);let s=e[0],n=s.order==="ascending"?"asc":"desc";return s.field?{field:s.field,order:n}:s.valueExpression?{fieldIndex:z(i,{type:"expression",target:"feature",valueExpression:s.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(C.error(new f(g,"Expected to find a field or valueExpression for OrderByInfo",s)),null)}return t!=null&&t.type==="unique-value"&&t.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function Ot(i,e){let t={mesh:!0,storage:!0};for(let r of e){let{name:s,onStatisticField:n,onStatisticExpression:a,statisticType:o}=r,l,u,d="numeric",p="feature";a?u=z(i,{type:"expression",target:p,valueExpression:a.expression,resultType:d}).fieldIndex:l=z(i,{type:"field",target:p,field:n}).field,z(i,{type:"statistic",target:"aggregate",name:s,context:t,inField:l,inFieldIndex:u,statisticType:o})}}function ft(i,e,t){let r;switch(t.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":r={visualVariables:!0,attributes:null};break;default:r=st(t).getStorageSpec(t)}return Vt(i,e,r,t)}function Vt(i,e,t,r){if(t==null)return null;let{visualVariables:s,attributes:n}=t,a=null;s&&"visualVariables"in r&&(a=It(i,e,r.visualVariables));let o=a!=null?4:0,l=null;return n!=null&&(l=n.map((u,d)=>{let{field:p,fieldIndex:h}=w(i,{valueExpression:u.valueExpression,field:u.field,resultType:"numeric",target:e});return{binding:d+o,field:p,fieldIndex:h}})),{type:"simple",target:e,attributeMapping:l,vvMapping:a}}function It(i,e,t){if(!t?.length)return[];let r={storage:!0},s="numeric";return ot(t).map(n=>{let a=Je(n.type),{field:o,fieldIndex:l}=w(i,{target:e,valueExpression:n.valueExpression,field:n.field,context:r,resultType:s});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:w(i,{target:e,field:n.normalizationField,context:r,resultType:s}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:w(i,{target:e,field:n.normalizationField,context:r,resultType:s}).field};case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:w(i,{target:e,field:n.normalizationField,context:r,resultType:s}).field};case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}}).filter(Ve)}function Re(i,e,t,r,s=!1){let n=i??{indexCount:0,fields:{}};switch(t.type){case"simple":case"dot-density":return Lt(n,t,r,s);case"class-breaks":return Nt(n,e,t,r,s);case"unique-value":return Pt(n,e,t,r,s);case"dictionary":return Bt(n,t,r,s);case"heatmap":return Ut(n,t,r,s);case"pie-chart":return At(n,t,r,s)}}function Lt(i,e,t,r=!1){let s=e.getSymbols(),n=s.length?s[0]:null;return{type:"simple",symbol:b(n,t,r),symbologyType:t.symbologyType}}function At(i,e,t,r=!1){let s=e.getSymbols(),n=s[0],a=s.length>1?s[1]:null;return{type:"pie-chart",markerSymbol:b(n,t,r),fillSymbol:b(a,t,r),symbologyType:t.symbologyType}}function Nt(i,e,t,r,s=!1){let n={mesh:!0,use:"renderer.field"},a=t.backgroundFillSymbol,{field:o,fieldIndex:l}=w(i,{target:e,field:t.field,valueExpression:t.valueExpression,resultType:"numeric",context:n}),u=t.normalizationType,d=u==="log"?"esriNormalizeByLog":u==="percent-of-total"?"esriNormalizeByPercentOfTotal":u==="field"?"esriNormalizeByField":null,p=t.classBreakInfos.map(h=>({symbol:b(h.symbol,r,s),min:h.minValue,max:h.maxValue})).sort((h,R)=>h.min-R.min);return{type:"interval",attributes:i.fields,field:o,fieldIndex:l,backgroundFillSymbol:b(a,r,s),defaultSymbol:b(t.defaultSymbol,r,s),intervals:p,normalizationField:t.normalizationField,normalizationTotal:t.normalizationTotal,normalizationType:d,isMaxInclusive:t.isMaxInclusive,symbologyType:r.symbologyType}}function Pt(i,e,t,r,s=!1){let n=[],a=t.backgroundFillSymbol,o={target:e,context:{mesh:!0},resultType:"string"};if(t.field&&typeof t.field!="string")throw new f(g,"Expected renderer.field to be a string",t);let{field:l,fieldIndex:u}=w(i,x(y({},o),{field:t.field,valueExpression:t.valueExpression}));for(let d of t.uniqueValueInfos??[])n.push({value:""+d.value,symbol:b(d.symbol,r,s)});return{type:"map",attributes:i.fields,field:l,fieldIndex:u,field2:w(i,x(y({},o),{field:t.field2})).field,field3:w(i,x(y({},o),{field:t.field3})).field,fieldDelimiter:t.fieldDelimiter??void 0,backgroundFillSymbol:b(a,r),defaultSymbol:b(t.defaultSymbol,r),map:n,symbologyType:r.symbologyType}}function Bt(i,e,t,r=!1){return{type:"dictionary",config:e.config,fieldMap:e.fieldMap,scaleExpression:e.scaleExpression,url:e.url,symbolOptions:t,symbologyType:t.symbologyType}}function Ut(i,e,t,r=!1){let s=e.getSymbols(),n=s.length?s[0]:null;return{type:"heatmap",symbol:b(n,t,r),symbologyType:t.symbologyType}}var Fe=O.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),we=tt(!1,Fe),X=class{constructor(e,t,r){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;let{buffer:s,pixelType:n,textureOnly:a}=e,o=U(n);this.shared=r,this.pixelType=n,this.size=t,this.textureOnly=a,a||(this.data=new o(s)),this._resetRange()}destroy(){this._texture?.dispose();for(let e in this._fbos){let t=this._fbos[e];t&&(e==="0"&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){let e=new me;return e.wrapMode=re.CLAMP_TO_EDGE,e.samplingMode=te.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,r){let s=ce(e),n=this.data,a=s*this.texelSize+t;!n||a>=n.length||(n[a]=r,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(e,t){if(this.data==null)return null;let r=ce(e)*this.texelSize+t;return!this.data||r>=this.data.length?null:this.data[r]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){let r=t===0?this.getTexture(e):this._textureDesc;this._fbos[t]=new it(e,r)}return this._fbos[t]}get locked(){return!(this.pixelType!==Pe.UNSIGNED_BYTE||!this.shared||this.textureOnly||!v("esri-atomics")||!this.data)&&Atomics.load(this.data,0)===1}get hasDirty(){let e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{let r=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();let n=this.data.buffer,a=this.getTexture(e),o=4,l=(r-r%this.size)/this.size,u=(s-s%this.size)/this.size,d=l,p=this.size,h=u,R=l*this.size*o,T=(p+h*this.size)*o-R,m=U(this.pixelType),S=new m(n,R*m.BYTES_PER_ELEMENT,T),c=this.size,F=h-d+1;if(F>this.size)return void Fe.error(new f("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d,c,F,S)}catch{}t()}}update(e){let{data:t,start:r,end:s}=e;if(t!=null&&this.data!=null){let n=this.data,a=r*this.texelSize;for(let o=0;o<t.length;o++){let l=1<<o%this.texelSize;e.layout&l&&(n[a+o]=t[o])}}this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(e,t){let r=this.size;if(this.size=t,this.textureOnly)return void(r!==this.size&&(this._lastTexture=this._texture,this._texture=null));let s=U(this.pixelType);this.destroy(),this.data=new s(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){let t=new ye(e,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){let r=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),l=We(n),u=new(U(n))(new ArrayBuffer(r*s*l*this.texelSize)),d=e.getBoundFramebufferObject(),{x:p,y:h,width:R,height:T}=e.getViewport();e.bindFramebuffer(o),o.readPixels(0,0,r,s,a,n,u),t.updateData(0,0,0,2*r,s/2,u),e.setViewport(p,h,R,T),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}},mt=class{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){let{blocks:t,shared:r,size:s}=e;if(this.shared=r,this.size=s,we("Initializing AttributeStoreView",e),this._data==null)this._data=t.map(n=>n!=null?new X(n,s,r):null);else for(let n=0;n<this._data.length;n++){let a=this._data[n],o=t[n];o!=null&&(a==null?this._data[n]=new X(o,s,r):a.resize(o,s))}this._initialized=!0}destroy(){for(let e of this._data??[])e?.destroy();this._defaultTexture?.dispose()}isEmpty(){return this._data==null}isUpdating(){let e=this._pendingAttributeUpdate!=null,t=e;return v("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}
  -> hasPendingUpdate ${e}`),t}getBlock(e){return this._data==null?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,ue,0,0)}getData(e,t,r,s){if(!this._data)return 0;let n=this._data[t];if(n==null)return 0;let a=n.getData(e,r);return a??s}setData(e,t,r,s){this._data[t].setData(e,r,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}requestUpdate(e){return Q(this,null,function*(){if(this._pendingAttributeUpdate)return void Fe.error(new f("mapview-webgl","Tried to update attribute data with a pending update"));let t=Ie();return we("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise})}update(){if(this._initialized&&this._pendingAttributeUpdate!=null){v("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");let{data:e,resolver:t}=this._pendingAttributeUpdate,r=this._data;for(let s=0;s<e.blocks.length;s++){let n=e.blocks[s],a=r[s];a!=null&&n!=null&&(we(`Updating block ${s}`,n),a.update(n))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){let r=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(r,se),void(t&&(e.bindTexture(r,ne),e.bindTexture(r,ae),e.bindTexture(r,oe),e.bindTexture(r,q),e.bindTexture(r,Y),e.bindTexture(r,le)));let s=this._data;if(!this._locked||this._forceNextUpload){for(let n of s)n?.updateTexture(e,()=>this._onUpdate());this._forceNextUpload=!1}e.bindTexture(s[He]?.getTexture(e)??r,se),t&&(e.bindTexture(s[Ye]?.getTexture(e)??r,le),e.bindTexture(s[qe]?.getTexture(e)??r,ne),e.bindTexture(s[ue]?.getTexture(e)??r,ae),e.bindTexture(s[$e]?.getTexture(e)??r,oe),e.bindTexture(s[q]?.getTexture(e)??r,q),e.bindTexture(s[Y]?.getTexture(e)??r,Y))}_getDefaultTexture(e){if(this._defaultTexture==null){let t=new me;t.wrapMode=re.CLAMP_TO_EDGE,t.samplingMode=te.NEAREST,t.width=1,t.height=1,this._defaultTexture=new ye(e,t,new Uint8Array(4))}return this._defaultTexture}};var E=class i{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let r=1;r<e.length;r++)t.next=new i([e[r]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}find(e){return e(this.data)?this:this.next?.find(e)}max(e,t=this){let r=e(this.data)>e(t.data)?this:t;return this.next?this.next.max(e,r):r}remove(e,t=null){return this===e?t?(t.next=this.next,t):this.next:this.next?.remove(e,this)??null}get last(){return this.next?this.next.last:this}},yt=class{constructor(e){this._head=null,e!=null&&(this._head=new E(e))}get head(){return this._head}maxAvailableSpace(){if(this._head==null)return 0;let e=this._head.max(t=>t.end-t.start);return e.data.end-e.data.start}firstFit(e){if(this._head==null)return null;let t=null,r=this._head;for(;r;){let s=r.data.end-r.data.start;if(s===e)return t?t.next=r.next:this._head=r.next,r.data.start;if(s>e){let n=r.data.start;return r.data.start+=e,n}t=r,r=r.next}return null}free(e,t){let r=e+t;if(this._head==null){let o=new E({start:e,end:r});return void(this._head=o)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=t);let o=new E({start:e,end:r});return o.next=this._head,void(this._head=o)}let s=this._head,n=s.next;for(;n;){if(n.data.start>=r){if(s.data.end===e){if(s.data.end+=t,s.data.end===n.data.start){let l=n.data.end-n.data.start;return s.data.end+=l,void(s.next=n.next)}return}if(n.data.start===r)return void(n.data.start-=t);let o=new E({start:e,end:r});return o.next=s.next,void(s.next=o)}s=n,n=n.next}if(e===s.data.end)return void(s.data.end+=t);let a=new E({start:e,end:r});s.next=a}};var Me=class{acquire(e){return{refCount:1,version:-1,labelMat2d:pe(),tileMat3:he(),dvs:he()}}release(e){}},ke=class i extends nt{constructor(e,t,r,s){super(e,t,r,s,ie,ie)}destroy(){super.destroy(),this._transforms&&i.TransformCache.release(this.key.hash)}setTransform(e){let t=this.resolution/e.resolution,r=this.transforms.tileMat3,[s,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,o=this.height/this.rangeY*t;Be(r,a,0,0,0,o,0,s,n,1),Ue(this.transforms.dvs,e.displayViewMat3,r);let l=this.transforms.labelMat2d,u=window.devicePixelRatio,d=je(pe(),a*u,0,0,o*u,s*u,n*u);Xe(l,e.viewMat2d,d)}_createTransforms(){return i.TransformCache.acquire(this.key.hash)}};ke.TransformCache=new Me;var M=class{constructor(e,t,r,s,n){this.target=e,this.geometryType=t,this.materialKey=r,this.indexFrom=s,this.indexCount=n}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}},gt=class i{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,r,s){let n=new i(e,t);if(s!=null)for(let a of s)r.seekIndex(a),n.addRecord(r);else for(;r.next();)n.addRecord(r);return n}addRecord(e){let t=this._target,r=this.geometryType,s=e.materialKey,n=e.indexFrom,a=e.indexCount,o=e.vertexFrom,l=e.vertexCount;if(a||(n=o,a=l),this._head==null){let p=new M(t,r,s,n,a);return void(this._head=new E(p))}let u=null,d=this._head;for(;d;){if(n<d.data.indexFrom)return this._insert(s,n,a,u,d);u=d,d=d.next}this._insert(s,n,a,u,null)}forEach(e){this._head!=null&&this._head.forEach(e)}*infos(){if(this._head!=null)for(let e of this._head.values())yield e}_insert(e,t,r,s,n){if(s==null&&n==null){let a=new M(this._target,this.geometryType,e,t,r);this._head=new E(a)}return s==null&&n!=null?this._insertAtHead(e,t,r,n):s!=null&&n==null?this._insertAtEnd(e,t,r,s):s!=null&&n!=null?this._insertAtMiddle(e,t,r,s,n):void 0}_insertAtHead(e,t,r,s){let n=t+r;if(e===s.data.materialKey&&n===s.data.indexFrom)s.data.indexFrom=t,s.data.indexCount+=r;else{let a=new M(this._target,this.geometryType,e,t,r);this._head=new E(a),this._head.next=s}}_insertAtEnd(e,t,r,s){if(s.data.materialKey===e&&s.data.indexEnd===t)s.data.indexCount+=r;else{let n=new M(this._target,this.geometryType,e,t,r),a=new E(n);s.next=a}}_insertAtMiddle(e,t,r,s,n){let a=t+r;if(s.data.materialKey===e&&s.data.indexEnd===t)s.data.indexCount+=r,s.data.materialKey===n.data.materialKey&&s.data.indexEnd===n.data.indexFrom&&(s.data.indexCount+=n.data.indexCount,s.next=n.next);else if(e===n.data.materialKey&&a===n.data.indexFrom)n.data.indexFrom=t,n.data.indexCount+=r;else{let o=new M(this._target,this.geometryType,e,t,r),l=new E(o);s.next=l,l.next=n}}};var Z=2147483647,K=class i{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,r=e.byteLength/k.BYTES_PER_RECORD-t){let s=new k(new Int32Array(e,t*k.BYTES_PER_RECORD,r*k.ELEMENTS_PER_RECORD));return new i(s)}size(){let e=this._cursor,t=0;for(;e;)t+=e.size(),e=e._link;return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e;for(this._cursor=this._head;this._cursor;){let r=this._cursor.size();if(t<r)return this._cursor._index=t,!0;t-=r,this._cursor=this._cursor._link}return!1}forEach(e){let t=this.getCursor();for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head);let t=this._head;for(;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}getDrawInfo(e,t){return new M(e,t,this.materialKey,this.indexFrom,this.indexCount)}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){let e=new i(this._head?.copy());if(!e._head)return e;let t=e._head,r=e._head._link;for(;r;)t._link=r.copy(),t=r,r=t._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(e){let t=this._head,r=null;for(;t;){if(t.delete(e))return t.isEmpty()&&(r!=null&&(r._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;r=t,t=t._link}return!1}};K.ELEMENTS_PER_RECORD=de,K.BYTES_PER_RECORD=K.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;var k=class i{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,r=e.byteLength/this.BYTES_PER_RECORD-t){return new i(new Int32Array(e,t*this.BYTES_PER_RECORD,r*this.ELEMENTS_PER_RECORD))}delete(e){let t=this._index,r=this.lookup(e);if(r)for(this.id=Z,++this._deletedCount;this.next()&&this.id===e;)this.id=Z,++this._deletedCount;return this._index=t,r}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(this._offsets.instance==null){this._offsets.instance=new Map;let r=this.copy();r._index=-1;let s=0;for(;r.next();)r.id!==s&&(this._offsets.instance.set(r.id,r._index),s=r.id)}if(!this._offsets.instance.has(e))return!1;let t=this._index;return this._index=this._offsets.instance.get(e),this.id!==Z||(this._index=t,!1)}get id(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*i.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*i.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*i.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*i.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/i.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===Z;);return this._index<this.size()}peekId(){let e=(this._index+1)*i.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){let e=new i(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}};k.ELEMENTS_PER_RECORD=de,k.BYTES_PER_RECORD=k.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;export{yt as a,ke as b,gt as c,K as d,hr as e,mr as f,yr as g,gr as h,xr as i,_r as j,br as k,Jt as l,Wt as m,Se as n,Xr as o,Re as p,mt as q};
