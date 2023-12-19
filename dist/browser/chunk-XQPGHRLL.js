import{a as S,b as h}from"./chunk-TWR5EH2C.js";import{a as V}from"./chunk-LYLAJHBR.js";import{a as M}from"./chunk-HI2T2YSZ.js";import{c as w}from"./chunk-O5IGEGOS.js";import{t as x}from"./chunk-VDN3XKL2.js";import{a as j}from"./chunk-QZ4L25WE.js";import{e as O,p as $}from"./chunk-URUYU25U.js";import{j as U}from"./chunk-6QIKBCPR.js";import{b as k}from"./chunk-A52LT7YB.js";import{A as D,n as L}from"./chunk-CZPMRK53.js";import{$ as T,E as I,F as N,o as G}from"./chunk-XF4NUYV7.js";import{d as v,e as E}from"./chunk-WMYPRHRR.js";import{r as m}from"./chunk-465DRXTW.js";import{a as d,b as F,g}from"./chunk-ESDYQQXO.js";var A="xlink:href",C="2.0.0",W="__esri_wfs_id__",J="wfs-layer:getWFSLayerTypeInfo-error",K="wfs-layer:empty-service",Y="wfs-layer:feature-type-not-found",B="wfs-layer:geojson-not-supported",Z="wfs-layer:kvp-encoding-not-supported",ee="wfs-layer:malformed-json",q="wfs-layer:unknown-geometry-type",te="wfs-layer:unknown-field-type",ae="wfs-layer:unsupported-spatial-reference",re="wfs-layer:unsupported-wfs-version";function je(a,t){return g(this,null,function*(){let e=ne((yield T(a,{responseType:"text",query:d({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:C},t?.customParameters),signal:t?.signal})).data);return oe(a,e),e})}function ne(a){let t=_(a);Te(t),H(t);let e=t.firstElementChild,r=v(pe(e));return{operations:se(e),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var ie=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function se(a){let t=!1,e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(S(a,{OperationsMetadata:{Operation:r=>{switch(r.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:n=>{e.GetCapabilities.url=n.getAttribute(A)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:n=>{e.DescribeFeatureType.url=n.getAttribute(A)}}}};case"GetFeature":return{DCP:{HTTP:{Get:n=>{e.GetFeature.url=n.getAttribute(A)}}},Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:i=>{let s=i.textContent;s&&ie.has(s.toLowerCase())&&(e.GetFeature.outputFormat=s)}}}}}}},Constraint:r=>{switch(r.getAttribute("name")){case"KVPEncoding":return{DefaultValue:n=>{t=n.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:n=>{e.GetFeature.supportsPagination=n.textContent.toLowerCase()==="true"}}}}}}),!t)throw new m(Z,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new m(B,"WFS service doesn't support GeoJSON output format");return e}function oe(a,t){I(a)&&(G(a,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=N(t.operations.DescribeFeatureType.url)),G(a,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=N(t.operations.GetFeature.url)))}function X(a){let t=parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function pe(a){return h(a,{FeatureTypeList:{FeatureType:t=>{let e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return S(t,{Name:n=>{let{name:i,prefix:s}=R(n.textContent);e.typeName=`${s}:${i}`,e.name=i,e.namespacePrefix=s,e.namespaceUri=n.lookupNamespaceURI(s)},Abstract:n=>{e.description=n.textContent},Title:n=>{e.title=n.textContent},WGS84BoundingBox:n=>{e.extent=ue(n)},DefaultCRS:n=>{let i=X(n);i&&(e.defaultSpatialReference=i,r.add(i))},OtherCRS:n=>{let i=X(n);i&&r.add(i)}}),e.title||(e.title=e.name),r.add(4326),e.supportedSpatialReferences.push(...r),e}}})}function ue(a){let t,e,r,n;for(let i of a.children)switch(i.localName){case"LowerCorner":[t,e]=i.textContent.split(" ").map(s=>Number.parseFloat(s));break;case"UpperCorner":[r,n]=i.textContent.split(" ").map(s=>Number.parseFloat(s))}return{xmin:t,ymin:e,xmax:r,ymax:n,spatialReference:D}}function le(a,t,e){return E(a,r=>e?r.name===t&&r.namespaceUri===e:r.typeName===t||r.name===t)}function Me(n,i,s){return g(this,arguments,function*(a,t,e,r={}){let{featureType:o,extent:l}=yield ce(a,t,e,r),{spatialReference:p}=Se(a.operations.GetFeature.url,o,r.spatialReference),{fields:u,geometryType:c,swapXY:y,objectIdField:f,geometryField:b}=yield me(a,o,p,r);return{url:a.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:u,geometryField:b,geometryType:c,objectIdField:f,spatialReference:r.spatialReference??new k({wkid:o.defaultSpatialReference}),extent:l,swapXY:y,wfsCapabilities:a,customParameters:r.customParameters}})}function ce(n,i,s){return g(this,arguments,function*(a,t,e,r={}){let o=a.readFeatureTypes(),l=t?le(o,t,e):o.next().value,{spatialReference:p=new k({wkid:l?.defaultSpatialReference})}=r;if(l==null)throw t?new m(Y,`The type '${t}' could not be found in the service`):new m(K,"The service is empty");let u=new U(F(d({},l.extent),{spatialReference:k.WGS84}));if(!L(u.spatialReference,p))try{yield $(u.spatialReference,p,void 0,r),u=O(u,p)}catch{throw new m(ae,"Projection not supported")}return{extent:u,spatialReference:p,featureType:l}})}function me(n,i,s){return g(this,arguments,function*(a,t,e,r={}){let{typeName:o}=t,[l,p]=yield Promise.allSettled([de(a.operations.DescribeFeatureType.url,o,r),fe(a,o,e,r)]),u=P=>new m(J,`An error occurred while getting info about the feature type '${o}'`,{error:P});if(l.status==="rejected")throw u(l.reason);if(p.status==="rejected")throw u(p.reason);let{fields:c,errors:y}=l.value??{},f=l.value?.geometryType||p.value?.geometryType,b=p.value?.swapXY??!1;if(f==null)throw new m(q,`The geometry type could not be determined for type '${o}`,{typeName:o,geometryType:f,fields:c,errors:y});return F(d({},ye(c??[])),{geometryType:f,swapXY:b})})}function ye(a){let t=a.find(r=>r.type==="geometry"),e=a.find(r=>r.type==="oid");return a=a.filter(r=>r.type!=="geometry"),e||(e=new w({name:W,type:"oid",alias:W}),a.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:a}}function fe(n,i,s){return g(this,arguments,function*(a,t,e,r={}){let o,l=!1,[p,u]=yield Promise.all([Fe(a.operations.GetFeature.url,t,e,a.operations.GetFeature.outputFormat,F(d({},r),{count:1})),T(a.operations.GetFeature.url,{responseType:"text",query:z(t,e,void 0,F(d({},r),{count:1})),signal:r?.signal})]),c=p.type==="FeatureCollection"&&p.features[0]?.geometry;if(c){let y;switch(o=j.fromJSON(V(c.type)),c.type){case"Point":y=c.coordinates;break;case"LineString":case"MultiPoint":y=c.coordinates[0];break;case"MultiLineString":case"Polygon":y=c.coordinates[0][0];break;case"MultiPolygon":y=c.coordinates[0][0][0]}let f=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(f){let b=y[0].toFixed(3),P=y[1].toFixed(3),Q=parseFloat(f[1]).toFixed(3);b===parseFloat(f[2]).toFixed(3)&&P===Q&&(l=!0)}}return{geometryType:o,swapXY:l}})}function de(a,t,e){return g(this,null,function*(){return ge(t,(yield T(a,{responseType:"text",query:d({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:C,TYPENAME:t},e?.customParameters),signal:e?.signal})).data)})}function ge(a,t){let{name:e}=R(a),r=_(t);H(r);let n=E(h(r.firstElementChild,{element:i=>({name:i.getAttribute("name"),typeName:R(i.getAttribute("type")).name})}),({name:i})=>i===e);if(n!=null){let i=E(h(r.firstElementChild,{complexType:s=>s}),s=>s.getAttribute("name")===n.typeName);if(i!=null)return be(i)}throw new m(Y,`Type '${a}' not found in document`,{document:new XMLSerializer().serializeToString(r)})}var we=new Set(["objectid","fid"]);function be(a){let t=[],e=[],r,n=h(a,{complexContent:{extension:{sequence:{element:i=>i}}}});for(let i of n){let s=i.getAttribute("name");if(!s)continue;let o,l;if(i.hasAttribute("type")?o=R(i.getAttribute("type")).name:S(i,{simpleType:{restriction:c=>(o=R(c.getAttribute("base")).name,{maxLength:y=>{l=+y.getAttribute("value")}})}}),!o)continue;let p=i.getAttribute("nillable")==="true",u=!1;switch(o.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new w({name:s,alias:s,type:"integer",nullable:p,length:x("integer")}));break;case"float":case"double":case"decimal":e.push(new w({name:s,alias:s,type:"double",nullable:p,length:x("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new w({name:s,alias:s,type:"string",nullable:p,length:l??x("string")}));break;case"datetime":case"date":e.push(new w({name:s,alias:s,type:"date",nullable:p,length:l??x("date")}));break;case"pointpropertytype":r="point",u=!0;break;case"multipointpropertytype":r="multipoint",u=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",u=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",u=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":u=!0,t.push(new m(q,`geometry type '${o}' is not supported`,{type:new XMLSerializer().serializeToString(a)}));break;default:t.push(new m(te,`Unknown field type '${o}'`,{type:new XMLSerializer().serializeToString(a)}))}u&&e.push(new w({name:s,alias:s,type:"geometry",nullable:p}))}for(let i of e)if(i.type==="integer"&&!i.nullable&&we.has(i.name.toLowerCase())){i.type="oid";break}return{geometryType:r,fields:e,errors:t}}function Fe(a,t,e,r,n){return g(this,null,function*(){let{data:i}=yield T(a,{responseType:"text",query:z(t,e,r,n),signal:n?.signal});i=i.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(i)}catch(s){throw new m(ee,"Error while parsing the\xA0response",{response:i,error:s})}})}function z(a,t,e,r){let n=typeof t=="number"?t:t.wkid;return d({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:C,TYPENAMES:a,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+n,STARTINDEX:r?.startIndex,COUNT:r?.count},r?.customParameters)}function _(a){return new DOMParser().parseFromString(a.trim(),"text/xml")}function R(a){let[t,e]=a.split(":");return{prefix:e?t:"",name:e??t}}function Te(a){let t=a.firstElementChild?.getAttribute("version");if(t&&t!==C)throw new m(re,`Unsupported WFS version ${t}. Supported version: ${C}`)}function H(a){let t="",e="";if(S(a.firstElementChild,{Exception:r=>(t=r.getAttribute("exceptionCode"),{ExceptionText:n=>{e=n.textContent}})}),t)throw new m(`wfs-layer:${t}`,e)}function Se(a,t,e){let r={wkid:t.defaultSpatialReference},n=e?.wkid!=null?{wkid:e.wkid}:r;return{spatialReference:n,getFeatureSpatialReference:M(a)||n.wkid&&t.supportedSpatialReferences.includes(n.wkid)?{wkid:n.wkid}:{wkid:t.defaultSpatialReference}}}export{W as a,je as b,le as c,Me as d,ye as e,Fe as f,Se as g};
