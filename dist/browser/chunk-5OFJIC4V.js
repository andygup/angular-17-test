import{a as X}from"./chunk-ODTKH54W.js";import{a as j,b as on,c as ln,d as dn}from"./chunk-6OT33HXM.js";import{a as Q}from"./chunk-ZJOOUTMZ.js";import{A as $,B as nn,C as en,D as E,E as rn,F as Z,a as mn,b as wn,c as hn,d as pn,e as yn,f as gn,g as vn,h as Pn,i as An,j as In,k as Fn,l as xn,m as Rn,n as Y,o as Nn,p as bn,q as Sn,r as On,s as Un,t as Ln,u as Cn,v as Dn,w as Tn,x as jn,y as _,z as En}from"./chunk-QNDNFXN2.js";import{c as T}from"./chunk-RUOXPMWE.js";import{$ as L,Aa as q,Ma as D,S as m,Z as I,b as i,c as s,ca as F,da as G,ea as H,fa as B,ga as w,ma as M,pa as x,ra as fn,sa as C,xa as l,ya as K,za as k}from"./chunk-WMY3KSI4.js";import{f as W}from"./chunk-4ATIL3QV.js";import{a as V,s as N,t as b}from"./chunk-U62SHMHB.js";import{c as tn}from"./chunk-B4PK7RBX.js";import{d as U,f as p,g as A}from"./chunk-URPCXPAW.js";import{j as O}from"./chunk-6QIKBCPR.js";import{a as d,i as S}from"./chunk-AHKJJNRE.js";import{R as cn}from"./chunk-CZPMRK53.js";import{$ as z,U as sn,V as un}from"./chunk-XF4NUYV7.js";import{g as P}from"./chunk-ESDYQQXO.js";function an(t,e,r){return P(this,null,function*(){if(!un?.findCredential(t.restUrl))return null;if(t.loadStatus==="loaded"&&e===""&&t.user?.sourceJSON&&r===!1)return t.user.sourceJSON;let f={responseType:"json",query:{f:"json"}};if(r&&(f.query.returnUserLicenseTypeExtensions=!0),e===""){let a=yield z(t.restUrl+"/community/self",f);if(a.data){let u=a.data;if(u?.username)return u}return null}let n=yield z(t.restUrl+"/community/users/"+e,f);if(n.data){let a=n.data;return a.error?null:a}return null})}function Jn(t){return sn.indexOf("4.")===0?N.fromExtent(t):new N({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function R(t,e,r){if(w(t,2,2,e,r),!(t[0]instanceof d&&t[1]instanceof d)){if(!(t[0]instanceof d&&t[1]===null)){if(!(t[1]instanceof d&&t[0]===null)){if(t[0]!==null||t[1]!==null)throw new s(e,i.InvalidParameter,r)}}}}function Mn(t,e){return P(this,null,function*(){if(t.type!=="polygon"&&t.type!=="polyline"&&t.type!=="extent")return 0;let r=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(r=on(t.spatialReference)/cn(t.spatialReference));let c=0;if(t.type==="polyline")for(let n of t.paths)for(let a=1;a<n.length;a++)c+=j(n[a],n[a-1],r);else if(t.type==="polygon")for(let n of t.rings){for(let a=1;a<n.length;a++)c+=j(n[a],n[a-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=j(n[0],n[n.length-1],r))}else t.type==="extent"&&(c+=2*j([t.xmin,t.ymin,0],[t.xmax,t.ymin,0],r),c+=2*j([t.xmin,t.ymin,0],[t.xmin,t.ymax,0],r),c*=2,c+=4*Math.abs(m(t.zmax,0)*r-m(t.zmin,0)*r));let f=new b({hasZ:!1,hasM:!1,spatialReference:t.spatialReference,paths:[[0,0],[0,c]]});return E(f,e)})}function ce(t){t.mode==="async"&&(t.functions.disjoint=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]===null||n[1]===null||In(n[0],n[1])))},t.functions.intersects=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]!==null&&vn(n[0],n[1])))},t.functions.touches=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},t.functions.crosses=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]!==null&&pn(n[0],n[1])))},t.functions.within=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},t.functions.contains=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]!==null&&hn(n[0],n[1])))},t.functions.overlaps=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]!==null&&Fn(n[0],n[1])))},t.functions.equals=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(w(n,2,2,e,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?gn(n[0],n[1]):(G(n[0])&&G(n[1])||!!(B(n[0])&&B(n[1])||H(n[0])&&H(n[1])))&&n[0].equals(n[1]))))},t.functions.relate=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,3,3,e,r),n[0]instanceof d&&n[1]instanceof d)return xn(n[0],n[1],M(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new s(e,i.InvalidParameter,r)})},t.functions.intersection=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]===null||n[1]===null?null:On(n[0],n[1])))},t.functions.union=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{let a=[];if((n=l(n)).length===0)throw new s(e,i.WrongNumberOfParameters,r);if(n.length===1)if(I(n[0])){let u=l(n[0]);for(let o=0;o<u.length;o++)if(u[o]!==null){if(!(u[o]instanceof d))throw new s(e,i.InvalidParameter,r);a.push(u[o])}}else{if(!F(n[0])){if(n[0]instanceof d)return C(A(n[0]),e.spatialReference);if(n[0]===null)return null;throw new s(e,i.InvalidParameter,r)}{let u=l(n[0].toArray());for(let o=0;o<u.length;o++)if(u[o]!==null){if(!(u[o]instanceof d))throw new s(e,i.InvalidParameter,r);a.push(u[o])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof d))throw new s(e,i.InvalidParameter,r);a.push(n[u])}return a.length===0?null:Un(a)})},t.functions.difference=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]!==null&&n[1]===null?A(n[0]):n[0]===null?null:bn(n[0],n[1])))},t.functions.symmetricdifference=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>(R(n=l(n),e,r),n[0]===null&&n[1]===null?null:n[0]===null?A(n[1]):n[1]===null?A(n[0]):Sn(n[0],n[1])))},t.functions.clip=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),!(n[1]instanceof O)&&n[1]!==null)throw new s(e,i.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return n[1]===null?null:mn(n[0],n[1])})},t.functions.cut=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,2,e,r),!(n[1]instanceof b)&&n[1]!==null)throw new s(e,i.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return n[1]===null?[A(n[0])]:wn(n[0],n[1])})},t.functions.area=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let a=yield n[0].sumArea(U(m(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return a}if(I(n[0])||F(n[0])){let a=K(n[0],e.spatialReference);return a===null?0:en(a,U(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return en(n[0],U(m(n[1],-1)))}))},t.functions.areageodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let a=yield n[0].sumArea(U(m(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return a}if(I(n[0])||F(n[0])){let a=K(n[0],e.spatialReference);return a===null?0:rn(a,U(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return rn(n[0],U(m(n[1],-1)))}))},t.functions.length=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let a=yield n[0].sumLength(p(m(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return a}if(I(n[0])||F(n[0])){let a=k(n[0],e.spatialReference);return a===null?0:E(a,p(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return E(n[0],p(m(n[1],-1)))}))},t.functions.length3d=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(I(n[0])||F(n[0])){let a=k(n[0],e.spatialReference);return a===null?0:a.hasZ===!0?Mn(a,p(m(n[1],-1))):E(a,p(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return n[0].hasZ===!0?Mn(n[0],p(m(n[1],-1))):E(n[0],p(m(n[1],-1)))})},t.functions.lengthgeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){if(w(n,1,2,e,r),(n=l(n))[0]===null)return 0;if(L(n[0])){let a=yield n[0].sumLength(p(m(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new s(e,i.Cancelled,r);return a}if(I(n[0])||F(n[0])){let a=k(n[0],e.spatialReference);return a===null?0:Z(a,p(m(n[1],-1)))}if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return Z(n[0],p(m(n[1],-1)))}))},t.functions.distance=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{n=l(n),w(n,2,3,e,r);let a=n[0];(I(n[0])||F(n[0]))&&(a=q(n[0],e.spatialReference));let u=n[1];if((I(n[1])||F(n[1]))&&(u=q(n[1],e.spatialReference)),!(a instanceof d))throw new s(e,i.InvalidParameter,r);if(!(u instanceof d))throw new s(e,i.InvalidParameter,r);return yn(a,u,p(m(n[2],-1)))})},t.functions.distancegeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{n=l(n),w(n,2,3,e,r);let a=n[0],u=n[1];if(!(a instanceof S))throw new s(e,i.InvalidParameter,r);if(!(u instanceof S))throw new s(e,i.InvalidParameter,r);let o=new b({paths:[],spatialReference:a.spatialReference});return o.addPath([a,u]),Z(o,p(m(n[2],-1)))})},t.functions.densify=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let a=x(n[1]);if(isNaN(a))throw new s(e,i.InvalidParameter,r);if(a<=0)throw new s(e,i.InvalidParameter,r);return n[0]instanceof N||n[0]instanceof b?$(n[0],a,p(m(n[2],-1))):n[0]instanceof O?$(Jn(n[0]),a,p(m(n[2],-1))):n[0]})},t.functions.densifygeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let a=x(n[1]);if(isNaN(a))throw new s(e,i.InvalidParameter,r);if(a<=0)throw new s(e,i.InvalidParameter,r);return n[0]instanceof N||n[0]instanceof b?nn(n[0],a,p(m(n[2],-1))):n[0]instanceof O?nn(Jn(n[0]),a,p(m(n[2],-1))):n[0]})},t.functions.generalize=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,4,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let a=x(n[1]);if(isNaN(a))throw new s(e,i.InvalidParameter,r);return En(n[0],a,fn(m(n[2],!0)),p(m(n[3],-1)))})},t.functions.buffer=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let a=x(n[1]);if(isNaN(a))throw new s(e,i.InvalidParameter,r);return a===0?A(n[0]):Cn(n[0],a,p(m(n[2],-1)))})},t.functions.buffergeodetic=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);let a=x(n[1]);if(isNaN(a))throw new s(e,i.InvalidParameter,r);return a===0?A(n[0]):Dn(n[0],a,p(m(n[2],-1)))})},t.functions.offset=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,2,6,e,r),n[0]===null)return null;if(!(n[0]instanceof N||n[0]instanceof b))throw new s(e,i.InvalidParameter,r);let a=x(n[1]);if(isNaN(a))throw new s(e,i.InvalidParameter,r);let u=x(m(n[4],10));if(isNaN(u))throw new s(e,i.InvalidParameter,r);let o=x(m(n[5],0));if(isNaN(o))throw new s(e,i.InvalidParameter,r);return Ln(n[0],a,p(m(n[2],-1)),M(m(n[3],"round")).toLowerCase(),u,o)})},t.functions.rotate=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{n=l(n),w(n,2,3,e,r);let a=n[0];if(a===null)return null;if(!(a instanceof d))throw new s(e,i.InvalidParameter,r);a instanceof O&&(a=N.fromExtent(a));let u=x(n[1]);if(isNaN(u))throw new s(e,i.InvalidParameter,r);let o=m(n[2],null);if(o===null)return _(a,u);if(o instanceof S)return _(a,u,o);throw new s(e,i.InvalidParameter,r)})},t.functions.centroid=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;let a=n[0];if((I(n[0])||F(n[0]))&&(a=q(n[0],e.spatialReference)),a===null)return null;if(!(a instanceof d))throw new s(e,i.InvalidParameter,r);return a instanceof S?C(A(n[0]),e.spatialReference):a instanceof N?a.centroid:a instanceof b?ln(a):a instanceof V?dn(a):a instanceof O?a.center:null})},t.functions.multiparttosinglepart=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){n=l(n),w(n,1,1,e,r);let a=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);if(n[0]instanceof S)return[C(A(n[0]),e.spatialReference)];if(n[0]instanceof O)return[C(A(n[0]),e.spatialReference)];let u=yield Y(n[0]);if(u instanceof N){let o=[],y=[];for(let h=0;h<u.rings.length;h++)if(u.isClockwise(u.rings[h])){let g=W({rings:[u.rings[h]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});o.push(g)}else y.push({ring:u.rings[h],pt:u.getPoint(h,0)});for(let h=0;h<y.length;h++)for(let g=0;g<o.length;g++)if(o[g].contains(y[h].pt)){o[g].addRing(y[h].ring);break}return o}if(u instanceof b){let o=[];for(let y=0;y<u.paths.length;y++){let h=W({paths:[u.paths[y]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});o.push(h)}return o}if(n[0]instanceof V){let o=C(A(n[0]),e.spatialReference);for(let y=0;y<o.points.length;y++)a.push(o.getPoint(y));return a}return null}))},t.functions.issimple=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return Rn(n[0])})},t.functions.simplify=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return Y(n[0])})},t.functions.convexhull=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>{if(n=l(n),w(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new s(e,i.InvalidParameter,r);return Nn(n[0])})},t.functions.getuser=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){w(n,0,2,e,r);let a=m(n[1],""),u=a===!0;if(a=a===!0||a===!1?"":M(a),n.length===0||n[0]instanceof Q){let y=null;y=e.services?.portal?e.services.portal:tn.getDefault(),n.length>0&&(y=X(n[0],y));let h=yield an(y,a,u);if(h){let g=JSON.parse(JSON.stringify(h));for(let v of["lastLogin","created","modified"])g[v]!==void 0&&g[v]!==null&&(g[v]=new Date(g[v]));return T.convertObjectToArcadeDictionary(g,D(e))}return null}let o=null;if(L(n[0])&&(o=n[0]),o){if(u=!1,a)return null;yield o.load();let y=yield o.getOwningSystemUrl();if(!y){if(!a){let v=yield o.getIdentityUser();return v?T.convertObjectToArcadeDictionary({username:v},D(e)):null}return null}let h=null;h=e.services?.portal?e.services.portal:tn.getDefault(),h=X(new Q(y),h);let g=yield an(h,a,u);if(g){let v=JSON.parse(JSON.stringify(g));for(let J of["lastLogin","created","modified"])v[J]!==void 0&&v[J]!==null&&(v[J]=new Date(v[J]));return T.convertObjectToArcadeDictionary(v,D(e))}return null}throw new s(e,i.InvalidParameter,r)}))}),t.functions.nearestcoordinate=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){if(n=l(n),w(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,i.InvalidParameter,r);if(!(n[1]instanceof S||n[1]===null))throw new s(e,i.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;let a=yield Tn(n[0],n[1]);return a===null?null:T.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},D(e),!1,!0)}))},t.functions.nearestvertex=function(e,r){return t.standardFunctionAsync(e,r,(c,f,n)=>P(this,null,function*(){if(n=l(n),w(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new s(e,i.InvalidParameter,r);if(!(n[1]instanceof S||n[1]===null))throw new s(e,i.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;let a=yield jn(n[0],n[1]);return a===null?null:T.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},D(e),!1,!0)}))}}export{ce as a};
