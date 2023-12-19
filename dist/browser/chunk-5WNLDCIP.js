import{a as Ue}from"./chunk-N3KNLXBG.js";import{b as pe,c as ye,f as He,h as B,i as ge,j as $e,k as De,l as We,p as q,r as Se,t as me,u as W}from"./chunk-N57AFEUK.js";import{c as Re}from"./chunk-JV7BL2Y3.js";import{a as M,b as de,f as Xe,g as Ee,i as R,n as N,o as te,t as Je,u as Te,v as ie,w as fe,x as ve,y as Ge,z as Ye}from"./chunk-VGW7YJZ7.js";import{a as le,b as ce,c as ee}from"./chunk-BZEC7TCW.js";import{a as we}from"./chunk-MBI4IOAA.js";import{O as he,T as Ie}from"./chunk-GIHBFCPM.js";import{a as Ae}from"./chunk-HPJ6EQFO.js";import{a as xe,b as Le}from"./chunk-AQ74ANSJ.js";import{c as Ve,e as K}from"./chunk-6MGDEI2H.js";import{a as ze}from"./chunk-4ATIL3QV.js";import{b as Fe}from"./chunk-U62SHMHB.js";import{b as Z,m as C,p as Ce}from"./chunk-465DRXTW.js";import{a as se,b as ue,g as Pe}from"./chunk-ESDYQQXO.js";function Qe(c){return Math.max(Math.round(c/.05),1)*.05}var Ze=new Set(["StartTimeOffset","Duration","RepeatDelay"]);function je(c,e){return Ze.has(e)?Qe(c):c}function et(c){if(!c)return null;switch(c.type){case"CIMPointSymbol":{let e=c.symbolLayers;return e&&e.length===1?et(e[0]):null}case"CIMVectorMarker":{let e=c.markerGraphics;if(!e||e.length!==1)return null;let t=e[0];if(!t)return null;let r=t.geometry;if(!r)return null;let n=t.symbol;return!n||n.type!=="CIMPolygonSymbol"&&n.type!=="CIMLineSymbol"||n.symbolLayers?.some(i=>!!i.effects)?null:{geom:r,asFill:n.type==="CIMPolygonSymbol"}}case"sdf":return{geom:c.geom,asFill:c.asFill}}return null}function tt(c){return c?c.rings?c.rings:c.paths?c.paths:c.xmin!==void 0&&c.ymin!==void 0&&c.xmax!==void 0&&c.ymax!==void 0?[[[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]]:null:null}function it(c){let e=1/0,t=-1/0,r=1/0,n=-1/0;for(let i of c)for(let o of i)o[0]<e&&(e=o[0]),o[0]>t&&(t=o[0]),o[1]<r&&(r=o[1]),o[1]>n&&(n=o[1]);return new He(e,r,t-e,n-r)}function Be(c){let e=1/0,t=-1/0,r=1/0,n=-1/0;for(let i of c)for(let o of i)o[0]<e&&(e=o[0]),o[0]>t&&(t=o[0]),o[1]<r&&(r=o[1]),o[1]>n&&(n=o[1]);return[e,r,t,n]}function Oe(c){return c?c.rings?Be(c.rings):c.paths?Be(c.paths):ze(c)?[c.xmin,c.ymin,c.xmax,c.ymax]:null:null}function _e(c,e,t,r,n){let[i,o,a,l]=c;if(a<i||l<o)return[0,0,0];let s=a-i,f=l-o,u=128,m=he,p=Math.floor(.5*(.5*u-m)),v=(u-2*(p+m))/Math.max(s,f),d=Math.round(s*v)+2*p,S=Math.round(f*v)+2*p,h=1;e&&(h=S/v/(e.ymax-e.ymin));let y=0,g=0,O=1;r&&(n?e&&t&&e.ymax-e.ymin>0&&(O=(e.xmax-e.xmin)/(e.ymax-e.ymin),y=r.x/(t*O),g=r.y/t):(y=r.x,g=r.y)),e&&(y=.5*(e.xmax+e.xmin)+y*(e.xmax-e.xmin),g=.5*(e.ymax+e.ymin)+g*(e.ymax-e.ymin)),y-=i,g-=o,y*=v,g*=v,y+=p,g+=p;let _=y/d-.5,k=g/S-.5;return n&&t&&(_*=t*O,k*=t),[h,_,k]}function St(c){let e=tt(c.geom),t=it(e),r=128,n=he,i=Math.floor(.5*(.5*r-n)),o=(r-2*(i+n))/Math.max(t.width,t.height),a=Math.round(t.width*o)+2*i,l=Math.round(t.height*o)+2*i,s=[];for(let u of e)if(u&&u.length>1){let m=[];for(let p of u){let[v,d]=p;v-=t.x,d-=t.y,v*=o,d*=o,v+=i-.5,d+=i-.5,c.asFill?m.push([v,d]):m.push([Math.round(v),Math.round(d)])}if(c.asFill){let p=m.length-1;m[0][0]===m[p][0]&&m[0][1]===m[p][1]||m.push(m[0])}s.push(m)}let f=rt(s,a,l,i);return c.asFill&&ot(s,a,l,i,f),[nt(f,i),a,l]}function rt(c,e,t,r){let n=e*t,i=new Array(n),o=r*r+1;for(let a=0;a<n;++a)i[a]=o;for(let a of c){let l=a.length;for(let s=1;s<l;++s){let f=a[s-1],u=a[s],m,p,v,d;f[0]<u[0]?(m=f[0],p=u[0]):(m=u[0],p=f[0]),f[1]<u[1]?(v=f[1],d=u[1]):(v=u[1],d=f[1]);let S=Math.floor(m)-r,h=Math.floor(p)+r,y=Math.floor(v)-r,g=Math.floor(d)+r;S<0&&(S=0),h>e&&(h=e),y<0&&(y=0),g>t&&(g=t);let O=u[0]-f[0],_=u[1]-f[1],k=O*O+_*_;for(let b=S;b<h;b++)for(let P=y;P<g;P++){let z,x,I=(b-f[0])*O+(P-f[1])*_;I<0?(z=f[0],x=f[1]):I>k?(z=u[0],x=u[1]):(I/=k,z=f[0]+I*O,x=f[1]+I*_);let X=(b-z)*(b-z)+(P-x)*(P-x),L=(t-P-1)*e+b;X<i[L]&&(i[L]=X)}}}for(let a=0;a<n;++a)i[a]=Math.sqrt(i[a]);return i}function ot(c,e,t,r,n){for(let i of c){let o=i.length;for(let a=1;a<o;++a){let l=i[a-1],s=i[a],f,u,m,p;l[0]<s[0]?(f=l[0],u=s[0]):(f=s[0],u=l[0]),l[1]<s[1]?(m=l[1],p=s[1]):(m=s[1],p=l[1]);let v=Math.floor(f),d=Math.floor(u)+1,S=Math.floor(m),h=Math.floor(p)+1;v<r&&(v=r),d>e-r&&(d=e-r),S<r&&(S=r),h>t-r&&(h=t-r);for(let y=S;y<h;++y){if(l[1]>y==s[1]>y)continue;let g=(t-y-1)*e;for(let O=v;O<d;++O)O<(s[0]-l[0])*(y-l[1])/(s[1]-l[1])+l[0]&&(n[g+O]=-n[g+O]);for(let O=r;O<v;++O)n[g+O]=-n[g+O]}}}}function nt(c,e){let t=2*e,r=c.length,n=new Uint8Array(4*r);for(let i=0;i<r;++i){let o=.5-c[i]/t;Ue(o,n,4*i)}return n}var at=96/72,re=class{static executeEffects(e,t,r,n){let i=at,o=Se(e),a=new pe(t);for(let l of e){let s=ye(l);s&&(a=s.execute(a,l,i,r,n,o))}return a}static applyEffects(e,t,r){if(!e)return t;let n=Se(e),i,o=new pe(we.fromJSONCIM(t));for(let s of e){let f=ye(s);f&&(o=f.execute(o,s,1,null,r,n))}let a=[],l=null;for(;i=o.next();)a.push(...Fe(i)),l=i.geometryType;return a.length===0||l===null?null:l==="esriGeometryPolygon"?{rings:a}:{paths:a}}};function st(c,e){let t;if(typeof c=="string")t=C(c+`-seed(${e})`);else{let r=12;t=c^e;do t=107*(t>>8^t)+r|0;while(--r!=0)}return(1+t/(1<<31))/2}function qe(c){return Math.floor(st(c,lt)*ct)}var lt=53290320,ct=10;var ft=Ce.getLogger("esri.symbols.cim.cimAnalyzer");function Me(c){switch(c){case"Butt":return le.BUTT;case"Square":return le.SQUARE;default:return le.ROUND}}function ke(c){switch(c){case"Bevel":return ce.BEVEL;case"Miter":return ce.MITER;default:return ce.ROUND}}function mt(c){let e=c.markerPlacement;return e&&e.angleToLine?ee.MAP:ee.SCREEN}var Ke=class{constructor(e,t){this._cimLayers=[],this._poMap={},this._primitiveOverrides=[],this._resourceManager=e,this._info=t}analyzeSymbolReference(e,t,r){return Pe(this,null,function*(){if(this._cimLayers=r??[],!e)return this._cimLayers;if(e.primitiveOverrides){this._primitiveOverrides=e.primitiveOverrides,this._poMap={};let o=[],a=this._info;for(let l of this._primitiveOverrides){let s=l.valueExpressionInfo;if(s&&a){let f=s.expression,u=Ve(f,a.spatialReference,a.fields).then(m=>{m!=null&&this._setPoMap(l.primitiveName,l.propertyName,m)});o.push(u)}else l.value!=null&&this._setPoMap(l.primitiveName,l.propertyName,l.value);o.length>0&&(yield Promise.all(o))}}let n=e.symbol,i=[];return me.fetchResources(n,this._resourceManager,i),i.length>0&&(yield Promise.all(i)),this._analyzeSymbol(n,t),this._cimLayers})}_analyzeSymbol(e,t){switch(e?.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this._analyzeMultiLayerSymbol(e,t,1,0,0,0)}}_analyzeMultiLayerSymbol(e,t,r,n,i,o){let a=e?.symbolLayers;if(!a)return;let l=e.effects,s=ee.SCREEN,f=me.getSize(e)??0;e.type==="CIMPointSymbol"&&e.angleAlignment==="Map"&&(s=ee.MAP);let u=e.type==="CIMPolygonSymbol",m=a.length;for(;m--;){let p=a[m];if(!p||p.enable===!1)continue;let v;l?.length&&(v=[...l]);let d=p.effects;d?.length&&(l?v.push(...d):v=[...d]);let S=[],h;W.findEffectOverrides(v,this._primitiveOverrides,S),h=S.length>0?this._createEffectsOverrideFunction(v,S):v;let y=[];switch(W.findApplicableOverrides(p,this._primitiveOverrides,y),p.type){case"CIMSolidFill":this._analyzeSolidFill(p,h);break;case"CIMPictureFill":this._analyzePictureFill(p,h);break;case"CIMHatchFill":this._analyzeHatchFill(p,h);break;case"CIMGradientFill":this._analyzeGradientFill(p,h);break;case"CIMSolidStroke":this._analyzeSolidStroke(p,h,u,f);break;case"CIMPictureStroke":this._analyzePictureStroke(p,h,u,f);break;case"CIMGradientStroke":this._analyzeGradientStroke(p,h,u,f);break;case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":{e.type==="CIMLineSymbol"&&(s=mt(p));let g=[],O=p.primitiveName;O&&g.push(O),this._analyzeMarker(p,h,null,g,s,f,1,t,r,n,i,o);break}default:ft.error("Cannot analyze CIM layer",p.type)}}}_analyzeSolidFill(e,t){let r=e.primitiveName,n=R(e.color),[i,o]=this._analyzePrimitiveOverrides(r,t,null,null),a=C(JSON.stringify(e)+o).toString();this._cimLayers.push({type:"fill",templateHash:a,materialHash:i?()=>a:a,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,color:this._createOverrideFunction(r,"Color",n,w),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t,applyRandomOffset:!1,sampleAlphaOnly:!0})}_analyzePictureFill(e,t){let r=e.primitiveName,n=te(e),[i,o]=this._analyzePrimitiveOverrides(r,t,null,null),a=C(JSON.stringify(e)+o).toString(),l=C(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),s=N(e.height,$e),f=N(e.scaleX,1);if("width"in e&&typeof e.width=="number"){let u=e.width,m=1,p=this._resourceManager.getResource(e.url);p!=null&&(m=p.width/p.height),f/=m*(s/u)}this._cimLayers.push({type:"fill",templateHash:a,materialHash:i?()=>l:l,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,color:this._createOverrideFunction(r,"TintColor",n,w),height:this._createOverrideFunction(r,"Height",s),scaleX:this._createOverrideFunction(r,"ScaleX",f),angle:this._createOverrideFunction(r,"Rotation",N(e.rotation)),offsetX:this._createOverrideFunction(r,"OffsetX",N(e.offsetX)),offsetY:this._createOverrideFunction(r,"OffsetY",N(e.offsetY)),url:e.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}_analyzeHatchFill(e,t){let r=e.primitiveName,n=this._analyzeMaterialOverrides(r,["Rotation","OffsetX","OffsetY"]),[i,o]=this._analyzePrimitiveOverrides(r,t,null,null),a=C(JSON.stringify(e)+o).toString(),l=C(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString(),s={r:255,g:255,b:255,a:1},f=!1,u=e.lineSymbol?.symbolLayers?.find(m=>m.type==="CIMSolidStroke"&&this._poMap[m.primitiveName]?.Color!=null);if(u){s=R(u.color),s=this._createOverrideFunction(u.primitiveName,"Color",s,w);let m=typeof s=="function";i=i||m,f=u.color!=null||m}this._cimLayers.push({type:"fill",templateHash:a,materialHash:i&&n?this._createMaterialHashFunction(l,n):l,cim:e,materialOverrides:n,colorLocked:!!e.colorLocked,effects:t,color:s,height:this._createOverrideFunction(r,"Separation",N(e.separation,De)),scaleX:1,angle:this._createOverrideFunction(r,"Rotation",N(e.rotation)),offsetX:this._createOverrideFunction(r,"OffsetX",N(e.offsetX)),offsetY:this._createOverrideFunction(r,"OffsetY",N(e.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0,hasUnresolvedReplacementColor:!f})}_analyzeGradientFill(e,t){let r=e.primitiveName,[n,i]=this._analyzePrimitiveOverrides(r,t,null,null),o=C(JSON.stringify(e)+i).toString();this._cimLayers.push({type:"fill",templateHash:o,materialHash:n?()=>o:o,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}_analyzeSolidStroke(e,t,r,n){let i=e.primitiveName,o=R(e.color),a=N(e.width,B),l=Me(e.capStyle),s=ke(e.joinStyle),f=e.miterLimit,[u,m]=this._analyzePrimitiveOverrides(i,t,null,null),p=C(JSON.stringify(e)+m).toString(),v,d;if(t&&t instanceof Array&&t.length>0){let S=t[t.length-1];if(S.type==="CIMGeometricEffectDashes"&&S.lineDashEnding==="NoConstraint"&&S.offsetAlongLine===null){let h=(t=[...t]).pop();v=h.dashTemplate,d=h.scaleDash}}this._cimLayers.push({type:"line",templateHash:p,materialHash:u?()=>p:p,cim:e,materialOverrides:null,isOutline:r,colorLocked:!!e.colorLocked,effects:t,color:this._createOverrideFunction(i,"Color",o,w),width:this._createOverrideFunction(i,"Width",a),cap:this._createOverrideFunction(i,"CapStyle",l),join:this._createOverrideFunction(i,"JoinStyle",s),miterLimit:f&&this._createOverrideFunction(i,"MiterLimit",f),referenceWidth:n,zOrder:be(e.name),dashTemplate:v,scaleDash:d,sampleAlphaOnly:!0})}_analyzePictureStroke(e,t,r,n){let i=C(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),o=e.primitiveName,a=te(e),l=N(e.width,B),s=Me(e.capStyle),f=ke(e.joinStyle),u=e.miterLimit,[m,p]=this._analyzePrimitiveOverrides(o,t,null,null),v=C(JSON.stringify(e)+p).toString();this._cimLayers.push({type:"line",templateHash:v,materialHash:m?()=>i:i,cim:e,materialOverrides:null,isOutline:r,colorLocked:!!e.colorLocked,effects:t,color:this._createOverrideFunction(o,"TintColor",a,w),width:this._createOverrideFunction(o,"Width",l),cap:this._createOverrideFunction(o,"CapStyle",s),join:this._createOverrideFunction(o,"JoinStyle",f),miterLimit:u&&this._createOverrideFunction(o,"MiterLimit",u),referenceWidth:n,zOrder:be(e.name),dashTemplate:null,scaleDash:!1,url:e.url,sampleAlphaOnly:!1})}_analyzeGradientStroke(e,t,r,n){let i=e.primitiveName,o=N(e.width,B),a=Me(e.capStyle),l=ke(e.joinStyle),s=e.miterLimit,[f,u]=this._analyzePrimitiveOverrides(i,t,null,null),m=C(JSON.stringify(e)+u).toString();this._cimLayers.push({type:"line",templateHash:m,materialHash:f?()=>m:m,cim:e,materialOverrides:null,isOutline:r,colorLocked:!!e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:this._createOverrideFunction(i,"Width",o),cap:this._createOverrideFunction(i,"CapStyle",a),join:this._createOverrideFunction(i,"JoinStyle",l),miterLimit:s&&this._createOverrideFunction(i,"MiterLimit",s),referenceWidth:n,zOrder:be(e.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}_analyzeMarker(e,t,r,n,i,o,a,l,s,f,u,m,p=!1){if(this._analyzeMarkerInsidePolygon(e,t))return;let v=N(e.size,ge),d=N(e.rotation),S=N(e.offsetX),h=N(e.offsetY),y=this._createOverrideFunction(e.primitiveName,"Size",v),g=this._createOverrideFunction(e.primitiveName,"Rotation",d),O=this._createOverrideFunction(e.primitiveName,"OffsetX",S),_=this._createOverrideFunction(e.primitiveName,"OffsetY",h);y=this._transformSize(y,a),g=this._transformRotation(g,!!e.rotateClockwise,f);let k=this._transformOffsetX(O,_,f,a,u),b=this._transformOffsetY(O,_,f,a,m);switch(O=k,_=b,e.type){case"CIMPictureMarker":this._analyzePictureMarker(e,t,r,n,i,o,y,g,O,_,e.colorLocked||p);break;case"CIMVectorMarker":this._analyzeVectorMarker(e,t,r,n,i,o,a,l,y,g,O,_,e.colorLocked||p)}}_analyzeMarkerInsidePolygon(e,t){let{markerPlacement:r,type:n}=e;if(!r||r.type!=="CIMMarkerPlacementInsidePolygon")return!1;if(n==="CIMVectorMarker"||n==="CIMPictureMarker"){let S=e.primitiveName;if(S){let[y,g]=this._analyzePrimitiveOverrides([S],t,null,null);if(y)return!1}let h=r.primitiveName;if(h){let[y,g]=this._analyzePrimitiveOverrides([h],t,null,null);if(y)return!1}if(n==="CIMVectorMarker"){let{markerGraphics:y}=e;if(y)for(let g of y){let{symbol:O}=g;if(O?.type==="CIMPolygonSymbol"&&O.symbolLayers){let{symbolLayers:_}=O;for(let k of _)if(k.type==="CIMSolidStroke")return!1}}}else{let{animatedSymbolProperties:y}=e;if(y)return!1}}let i=r,o=Math.abs(i.stepX),a=Math.abs(i.stepY);if(o===0||a===0)return!0;let l=new Set(["Rotation","OffsetX","OffsetY"]),s=this._primitiveOverrides.filter(S=>S.primitiveName!==e.primitiveName||!l.has(S.propertyName)),f="url"in e&&typeof e.url=="string"?e.url:void 0,u=C(JSON.stringify(e)).toString(),m,p,v=null;if(r.gridType==="Random"){let S=Le(Ie),h=Math.max(Math.floor(S/o),1),y=Math.max(Math.floor(S/a),1);m=a*y,v=g=>g?g*y:0,p=h*o/m}else r.shiftOddRows?(m=2*a,v=S=>S?2*S:0,p=o/a*.5):(m=a,v=null,p=o/a);let d=te(e);return this._cimLayers.push({type:"fill",templateHash:u,materialHash:u,cim:e,materialOverrides:s,colorLocked:!!e.colorLocked,effects:t,color:d,height:this._createOverrideFunction(i.primitiveName,"StepY",m,v),scaleX:p,angle:i.gridAngle,offsetX:N(i.offsetX),offsetY:N(i.offsetY),url:f,applyRandomOffset:r.gridType==="Random",sampleAlphaOnly:!f,hasUnresolvedReplacementColor:!0}),!0}_analyzePictureMarker(e,t,r,n,i,o,a,l,s,f,u){let m=N(e.scaleX,1),p=te(e),v=C(`${e.url}${JSON.stringify(e.colorSubstitutions)}${JSON.stringify(e.animatedSymbolProperties)}`).toString();r||(r=this._createMarkerPlacementOverrideFunction(e.markerPlacement));let d=this._createAnimatedSymbolPropertiesOverrideFunction(e.animatedSymbolProperties),[S,h]=this._analyzePrimitiveOverrides(n,t,r,d),y=C(JSON.stringify(e)+h).toString(),g=e.anchorPoint??{x:0,y:0};if("width"in e&&typeof e.width=="number"){let k=e.width,b=1,P=this._resourceManager.getResource(e.url);P!=null&&(b=P.width/P.height),m/=b*(N(e.size)/k)}function O(k,b){return d!=null?de(d,k,b):null}let _=e.animatedSymbolProperties&&e.animatedSymbolProperties.randomizeStartTime===!0?(k,b,P,z)=>{let x=qe(z??0),I=O(k,b);return v+`-MATERIALGROUP(${x})-ASP(${JSON.stringify(I)})`}:S?(k,b)=>{let P=O(k,b);return v+`-ASP(${JSON.stringify(P)})`}:v;this._cimLayers.push({type:"marker",templateHash:y,materialHash:_,cim:e,materialOverrides:null,colorLocked:!!e.colorLocked||!!u,effects:t,scaleSymbolsProportionally:!1,alignment:i,size:a,scaleX:this._createOverrideFunction(e.primitiveName,"ScaleX",m),rotation:l,offsetX:s,offsetY:f,color:this._createOverrideFunction(e.primitiveName,"TintColor",p,w),anchorPoint:{x:g.x,y:g.y},isAbsoluteAnchorPoint:e.anchorPointUnits!=="Relative",outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:!1,referenceSize:o,sizeRatio:1,markerPlacement:r,url:e.url,animatedSymbolProperties:d})}_analyzeVectorMarker(e,t,r,n,i,o,a,l,s,f,u,m,p){let v=e.markerGraphics;if(!v)return;let d=e.frame,S=0,h=1;e.scaleSymbolsProportionally&&d&&(S=d.ymax-d.ymin,h=this._transformSize(s,1/S)),h=this._transformSize(h,a),r||(r=this._createMarkerPlacementOverrideFunction(e.markerPlacement));for(let y of v)if(y){let g=y.symbol;if(!g)continue;let O=y.primitiveName;O&&n.push(O);let _=u,k=m;if((g.type==="CIMPointSymbol"||g.type==="CIMTextSymbol")&&d){let b=0,P=0,z=y.geometry;"x"in z&&"y"in z&&(b+=z.x-.5*(d.xmin+d.xmax),P+=z.y-.5*(d.ymin+d.ymax));let x=e.anchorPoint;x&&(e.anchorPointUnits==="Absolute"?(b-=x.x,P-=x.y):d&&(b-=(d.xmax-d.xmin)*x.x,P-=(d.ymax-d.ymin)*x.y)),_=this._transformOffsetX(b,P,f,h,u),k=this._transformOffsetY(b,P,f,h,m)}switch(g.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":l||ht(g)?this._analyzeMultiLayerGraphicNonSDF(e,t,r,null,y,n,i,o,S,!!p||!!e.colorLocked):this._analyzeMultiLayerGraphic(e,t,r,null,y,n,i,o,S,h,s,f,_,k,!!p||!!e.colorLocked);break;case"CIMTextSymbol":this._analyzeTextGraphic(e,t,r,y,n,i,o,S,h,s,f,_,k,!!p||!!e.colorLocked)}O&&n.pop()}}_analyzeMultiLayerGraphic(e,t,r,n,i,o,a,l,s,f,u,m,p,v,d){let S=i.symbol,h=S.symbolLayers;if(!h)return;let y=h.length;if(ut(h))return void this._analyzeCompositeMarkerGraphic(e,t,r,n,i,h,o,a,l,s,u,m,p,v,!!d||!!e.colorLocked);let g=this._resourceManager.geometryEngine,O=re.applyEffects(S.effects,i.geometry,g);if(O)for(;y--;){let _=h[y];if(!_||_.enable===!1)continue;let k=_.primitiveName;switch(k&&o.push(k),_.type){case"CIMSolidFill":case"CIMSolidStroke":{let b=re.applyEffects(_.effects,O,g),P=Oe(b);if(!P)continue;let z=e.anchorPointUnits!=="Relative",[x,I,X]=_e(P,e.frame,e.size,e.anchorPoint,z),L=_.type==="CIMSolidFill",J={type:"sdf",geom:b,asFill:L},T=_.path,E=L?R(ie(_)):T==null?R(fe(_)):{r:0,g:0,b:0,a:0},G=L?{r:0,g:0,b:0,a:0}:R(fe(_)),Y=ve(_)??0;if(!L&&!Y)break;let H=i.primitiveName,$=null;L&&!_.colorLocked&&($=this._createOverrideFunction(H,"FillColor",E,w));let U=null;L||_.colorLocked||(U=this._createOverrideFunction(H,"StrokeColor",G,w));let V=this._createOverrideFunction(H,"StrokeWidth",Y),D=!1,F="";for(let A of this._primitiveOverrides)o.includes(A.primitiveName)&&(A.value!=null?F+=`-${A.primitiveName}-${A.propertyName}-${JSON.stringify(A.value)}`:A.valueExpressionInfo&&(D=!0));(t!=null&&typeof t=="function"||r!=null&&typeof r=="function")&&(D=!0),(M(u)||M(m)||M(p)||M(v))&&(D=!0);let oe=JSON.stringify(ue(se({},e),{markerGraphics:null})),Q=C(JSON.stringify(J)+T).toString(),ne=C(JSON.stringify(i)+JSON.stringify(_)+oe+F).toString();this._cimLayers.push({type:"marker",templateHash:ne,materialHash:D?()=>Q:Q,cim:J,materialOverrides:null,colorLocked:!!_.colorLocked||!!d,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:a,anchorPoint:{x:I,y:X},isAbsoluteAnchorPoint:z,size:u,rotation:m,offsetX:p,offsetY:v,scaleX:1,frameHeight:s,rotateClockwise:!1,referenceSize:l,sizeRatio:x,color:M($)?$:this._createOverrideFunction(k,"Color",E,w),outlineColor:M(U)?U:this._createOverrideFunction(k,"Color",G,w),outlineWidth:M(V)?V:this._createOverrideFunction(k,"Width",Y),markerPlacement:r,animatedSymbolProperties:n,path:T});break}case"CIMVectorMarker":_.markerPlacement?this._analyzeMultiLayerGraphicNonSDF(e,t,r,n,i,o,a,l,s,!!d||!!_.colorLocked):this._analyzeMarker(_,t,r,o,a,l,f,!1,u,m,p,v,!!d||!!e.colorLocked);break;default:this._analyzeMultiLayerGraphicNonSDF(e,t,r,n,i,o,a,l,s,!!d||!!e.colorLocked)}k&&o.pop()}}_analyzeTextGraphic(e,t,r,n,i,o,a,l,s,f,u,m,p,v){let d=[];W.findApplicableOverrides(n,this._primitiveOverrides,d);let S=n.geometry;if(!("x"in S)||!("y"in S))return;let h=n.symbol,y=Te(h),g=Je(h.fontStyleName),O=Re(h.fontFamilyName);h.font=se({family:O,decoration:y},g);let _=N(h.height,We),k=N(h.angle),b=N(h.offsetX),P=N(h.offsetY);_=this._transformSize(_,s),k=this._transformRotation(k,!1,u);let z=this._transformOffsetX(b,P,u,s,m),x=this._transformOffsetY(b,P,u,s,p);b=z,P=x;let I=R(ie(h)),X=R(fe(h)),L=ve(h)??0;L||(X=R(ie(h.haloSymbol)),L=N(h.haloSize)),L=this._transformSize(L,s);let J=!1;if(h.symbol?.symbolLayers)for(let A of h.symbol.symbolLayers)ie(A)!=null&&(J=!!A.colorLocked);let T=n.primitiveName,E=null;J||(E=this._createOverrideFunction(T,"Color",I,w));let G=null,Y=null,H=0;if(h.callout&&h.callout.type==="CIMBackgroundCallout"){let A=h.callout;if(A.backgroundSymbol){let ae=A.backgroundSymbol.symbolLayers;if(ae)for(let j of ae)j.type==="CIMSolidFill"?G=R(j.color):j.type==="CIMSolidStroke"&&(Y=R(j.color),H=N(j.width,B))}}let[$,U]=this._analyzePrimitiveOverrides(i,t,r,null),V=JSON.stringify(e.effects)+Number(e.colorLocked||v).toString()+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement)+e.size.toString(),D=C(JSON.stringify(n)+V+U).toString(),F=this._createOverrideFunction(n.primitiveName,"TextString",n.textString??"",Ee,h.textCase);if(F==null)return;let{fontStyleName:oe}=h,Q=O+(oe?"-"+oe.toLowerCase():"-regular"),ne=Q;typeof F=="string"&&F.includes("[")&&h.fieldMap&&(F=Xe(h.fieldMap,F,h.textCase)),this._cimLayers.push({type:"text",templateHash:D,materialHash:$||typeof F=="function"||/\[(.*?)\]/.test(F)?(A,ae,j)=>ne+"-"+de(F,A,ae,j):ne+"-"+C(F),cim:h,materialOverrides:null,colorLocked:!!v||!!J,effects:t,alignment:o,anchorPoint:{x:0,y:0},isAbsoluteAnchorPoint:e.anchorPointUnits!=="Relative",fontName:Q,decoration:y,weight:g.weight,style:g.style,size:_,angle:k,offsetX:b,offsetY:P,horizontalAlignment:Ge(h.horizontalAlignment),verticalAlignment:Ye(h.verticalAlignment),text:F,color:M(E)?E:I,outlineColor:X,outlineSize:L,backgroundColor:G,borderLineColor:Y,borderLineWidth:H,lineWidth:null,referenceSize:a,sizeRatio:1,markerPlacement:r})}_analyzeMultiLayerGraphicNonSDF(e,t,r,n,i,o,a,l,s,f){let u=this._buildSimpleMarker(e,i),m=e.primitiveName,p=this._analyzeMaterialOverrides(m,["Rotation","OffsetX","OffsetY"]),[v,d]=this._analyzePrimitiveOverrides(o,null,null,null),[S,h,y]=me.getTextureAnchor(u,this._resourceManager),g=N(e.rotation),O=N(e.offsetX),_=N(e.offsetY),k=C(JSON.stringify(u)+d).toString(),b=p&&p.length>0||t!=null&&typeof t=="function";this._cimLayers.push({type:"marker",templateHash:k,materialHash:b&&p?this._createMaterialHashFunction(k,p):k,cim:u,materialOverrides:p,colorLocked:!!e.colorLocked||!!f,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:a,anchorPoint:{x:S,y:h},isAbsoluteAnchorPoint:!1,size:N(e.size,ge),rotation:this._createOverrideFunction(m,"Rotation",g),offsetX:this._createOverrideFunction(m,"OffsetX",O),offsetY:this._createOverrideFunction(m,"OffsetY",_),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:s,rotateClockwise:!!e.rotateClockwise,referenceSize:l,sizeRatio:y/xe(e.size),markerPlacement:r,animatedSymbolProperties:n,avoidSDFRasterization:!0})}_buildSimpleMarker(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}_analyzeCompositeMarkerGraphic(e,t,r,n,i,o,a,l,s,f,u,m,p,v,d){let S=i.geometry,h=o[0],y=o[1],g=Oe(S);if(!g)return;let O=e.anchorPointUnits!=="Relative",[_,k,b]=_e(g,e.frame,e.size,e.anchorPoint,O),P={type:"sdf",geom:S,asFill:!0},z=y.path,x=y.primitiveName,I=h.primitiveName,X=R(y.color),L=R(h.color),J=N(h.width,B),T=i.primitiveName,E=null;y.colorLocked||d||(E=this._createOverrideFunction(T,"FillColor",X,w));let G=null;h.colorLocked||d||(G=this._createOverrideFunction(T,"StrokeColor",L,w));let Y=this._createOverrideFunction(T,"StrokeWidth",J),H=!1,$="";for(let F of this._primitiveOverrides)(F.primitiveName===x||F.primitiveName===I||a.includes(F.primitiveName))&&(F.value!=null?$+=`-${F.primitiveName}-${F.propertyName}-${JSON.stringify(F.value)}`:F.valueExpressionInfo&&(H=!0));r!=null&&typeof r=="function"&&(H=!0),(M(u)||M(m)||M(p)||M(v))&&(H=!0);let U=JSON.stringify(ue(se({},e),{markerGraphics:null})),V=C(JSON.stringify(P)+z).toString(),D=C(JSON.stringify(i)+JSON.stringify(y)+JSON.stringify(h)+U+$).toString();this._cimLayers.push({type:"marker",templateHash:D,materialHash:H?()=>V:V,cim:P,materialOverrides:null,colorLocked:!!d,effects:t,scaleSymbolsProportionally:!!e.scaleSymbolsProportionally,alignment:l,anchorPoint:{x:k,y:b},isAbsoluteAnchorPoint:O,size:u,rotation:m,offsetX:p,offsetY:v,scaleX:1,frameHeight:f,rotateClockwise:!1,referenceSize:s,sizeRatio:_,color:M(E)?E:this._createOverrideFunction(x,"Color",X,w),outlineColor:M(G)?G:this._createOverrideFunction(I,"Color",L,w),outlineWidth:M(Y)?Y:this._createOverrideFunction(I,"Width",J),markerPlacement:r,path:z,animatedSymbolProperties:n})}_createMaterialHashFunction(e,t){let r=this._info?.geometryType;if(r){let n=this._poMap;for(let i of t)if(i.valueExpressionInfo){let o=n[i.primitiveName]&&n[i.primitiveName][i.propertyName];o instanceof K&&(i.fn=(a,l,s)=>q(o,a,{$view:s},r,l))}}return(n,i,o)=>{for(let a of t)a.fn&&(a.value=a.fn(n,i,o));return C(e+W.buildOverrideKey(t)).toString()}}_setPoMap(e,t,r){let n;this._poMap[e]?n=this._poMap[e]:(n={},this._poMap[e]=n),n[t]=r}_createOverrideFunction(e,t,r,n,i){if(e==null)return r;let o=this._poMap[e];if(o==null)return r;let a=o[t];if(typeof a=="string"||typeof a=="number"||a instanceof Array)return n?n.call(null,a,i):a;let l=this._info?.geometryType;return a!=null&&a instanceof K&&l!=null?(s,f,u)=>{let m=q(a,s,{$view:u},l,f);return m!==null&&n&&(m=n.call(null,m,i)),m!==null?m:r}:r}_createEffectsOverrideFunction(e,t){let r=this._poMap,n=this._info?.geometryType;for(let i of t)if(i.valueExpressionInfo&&n){let o=r[i.primitiveName]&&r[i.primitiveName][i.propertyName];o instanceof K&&(i.fn=(a,l,s)=>q(o,a,{$view:s},n,l))}return(i,o,a)=>{for(let s of t)s.fn&&(s.value=s.fn(i,o,a));let l=[];for(let s of e){let f=s?.primitiveName;if(f){let u=!1;for(let m of t)if(m.primitiveName===f){let p=Ne(m.propertyName);m.value!=null&&m.value!==s[p]&&(u||(s=Z(s),u=!0),s[p]=m.value)}}l.push(s)}return l}}_createMarkerPlacementOverrideFunction(e){let t=[];if(W.findApplicableOverrides(e,this._primitiveOverrides,t),e==null||t.length===0)return e;let r=this._poMap,n=this._info?.geometryType;for(let i of t)if(i.valueExpressionInfo&&n){let o=r[i.primitiveName]&&r[i.primitiveName][i.propertyName];o instanceof K&&(i.fn=(a,l,s)=>q(o,a,{$view:s},n,l))}return(i,o,a)=>{for(let f of t)f.fn&&(f.value=f.fn(i,o,a));let l=Z(e),s=e.primitiveName;for(let f of t)if(f.primitiveName===s){let u=Ne(f.propertyName);f.value!=null&&f.value!==l[u]&&(l[u]=f.value)}return l}}_createAnimatedSymbolPropertiesOverrideFunction(e){let t=[];if(W.findApplicableOverrides(e,this._primitiveOverrides,t),e==null||t.length===0)return e;let r=this._info?.geometryType;if(r){let n=this._poMap;for(let i of t)if(i.valueExpressionInfo){let o=n[i.primitiveName]&&n[i.primitiveName][i.propertyName];o instanceof K&&(i.fn=(a,l,s)=>q(o,a,{$view:s},r,l))}}return(n,i,o)=>{for(let s of t)s.fn&&(s.value=s.fn(n,i,o));let a=Z(e),l=e.primitiveName;for(let s of t)if(s.primitiveName===l){let f=Ne(s.propertyName);if(s.value!=null){let u=je(s.value,s.propertyName);u!==a[f]&&(a[f]=u)}}return a}}_analyzePrimitiveOverrides(e,t,r,n){let i=!1,o="";typeof e=="string"&&(e=[e]);for(let a of this._primitiveOverrides)e?.includes(a.primitiveName)&&(a.value!=null?o+=`-${a.primitiveName}-${a.propertyName}-${JSON.stringify(a.value)}`:a.valueExpressionInfo&&(i=!0));return t!=null&&typeof t=="function"&&(i=!0),r!=null&&typeof r=="function"&&(i=!0),n!=null&&typeof n=="function"&&(i=!0),[i,o]}_analyzeMaterialOverrides(e,t){return this._primitiveOverrides.filter(r=>r.primitiveName!==e||!t.includes(r.propertyName))}_transformSize(e,t){return M(e)||M(t)?(r,n,i)=>(M(e)?e(r,n,i):e)*(M(t)?t(r,n,i):t):e*t}_transformRotation(e,t,r){return M(e)||M(r)?(n,i,o)=>{let a=M(e)?e(n,i,o):e,l=M(r)?r(n,i,o):r;return t?l-a:l+a}:t?r-e:r+e}_transformOffsetX(e,t,r,n,i){if(!(M(e)||M(t)||M(r)||M(n)||M(i))){let o=r*Math.PI/180;if(o){let a=Math.cos(o),l=Math.sin(o);return(a*e-l*t)*n+i}return e*n+i}return(o,a,l)=>{let s=M(r)?r(o,a,l):r,f=M(n)?n(o,a,l):n,u=M(e)?e(o,a,l):e,m=M(i)?i(o,a,l):i;return s?(s*=Math.PI/180,(Math.cos(s)*u-Math.sin(s)*(M(t)?t(o,a,l):t))*f+m):u*f+m}}_transformOffsetY(e,t,r,n,i){if(!(M(e)||M(t)||M(r)||M(n)||M(i))){let o=r*Math.PI/180;if(o){let a=Math.cos(o);return(Math.sin(o)*e+a*t)*n+i}return t*n+i}return(o,a,l)=>{let s=M(r)?r(o,a,l):r,f=M(n)?n(o,a,l):n,u=M(t)?t(o,a,l):t,m=M(i)?i(o,a,l):i;if(s){s*=Math.PI/180;let p=Math.cos(s);return(Math.sin(s)*(M(e)?e(o,a,l):e)+p*u)*f+m}return u*f+m}}};function be(c){if(c&&c.indexOf("Level_")===0){let e=parseInt(c.substr(6),10);if(!isNaN(e))return e}return 0}function w(c){if(!c||c.length===0)return null;let e=new Ae(c).toRgba();return{r:e[0],g:e[1],b:e[2],a:e[3]}}function Ne(c){return c&&c.charAt(0).toLowerCase()+c.substr(1)}function Ut(c,e){if(!e||e.length===0)return c;let t=Z(c);return W.applyOverrides(t,e),t}var ut=c=>c&&c.length===2&&c[0].enable&&c[1].enable&&c[0].type==="CIMSolidStroke"&&c[1].type==="CIMSolidFill"&&c[0].path==null&&c[1].path==null&&!c[0].effects&&!c[1].effects;function ht(c){let e=c.symbolLayers;if(!e||e.length!==2)return!1;let t=e.find(n=>n.effects?.find(i=>i.type==="CIMGeometricEffectDashes")),r=e.find(n=>n.effects?.find(i=>i.type==="CIMGeometricEffectAddControlPoints"));return!!t&&!!r}export{re as a,et as b,St as c,st as d,qe as e,Ke as f,Ut as g};
