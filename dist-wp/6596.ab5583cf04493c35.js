"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[6596],{26596:(P,m,o)=>{o.r(m),o.d(m,{registerFunctions:()=>v});var g=o(15861),y=o(93630),A=o(53570),u=o(89018),l=o(10115),O=o(80458),E=o(85904);function c(n,e,i,t,s,r){return f.apply(this,arguments)}function f(){return(f=(0,g.Z)(function*(n,e,i,t,s,r){if(1===t.length){if((0,u.o)(t[0]))return(0,l.t)(n,t[0],(0,u.H)(t[1],-1));if((0,u.q)(t[0]))return(0,l.t)(n,t[0].toArray(),(0,u.H)(t[1],-1))}else if(2===t.length){if((0,u.o)(t[0]))return(0,l.t)(n,t[0],(0,u.H)(t[1],-1));if((0,u.q)(t[0]))return(0,l.t)(n,t[0].toArray(),(0,u.H)(t[1],-1));if((0,u.u)(t[0])){const a=yield t[0].load(),_=yield D(E.WhereClause.create(t[1],a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),r,s);return h(s,yield t[0].calculateStatistic(n,_,(0,u.H)(t[2],1e3),e.abortSignal))}}else if(3===t.length&&(0,u.u)(t[0])){const a=yield t[0].load(),_=yield D(E.WhereClause.create(t[1],a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),r,s);return h(s,yield t[0].calculateStatistic(n,_,(0,u.H)(t[2],1e3),e.abortSignal))}return(0,l.t)(n,t,-1)})).apply(this,arguments)}function h(n,e){return e instanceof O.H?y.iG.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?y.iG.dateJSAndZoneToArcadeDate(e,(0,u.L)(n)):e}function D(n,e,i){return d.apply(this,arguments)}function d(){return(d=(0,g.Z)(function*(n,e,i){const t=n.getVariables();if(t.length>0){const s=[];for(let a=0;a<t.length;a++){const _={name:t[a]};s.push(yield e.evaluateIdentifier(i,_))}const r={};for(let a=0;a<t.length;a++)r[t[a]]=s[a];return n.parameters=r,n}return n})).apply(this,arguments)}function v(n){"async"===n.mode&&(n.functions.stdev=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("stdev",t,s,r,e,n))},n.functions.variance=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("variance",t,s,r,e,n))},n.functions.average=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("mean",t,s,r,e,n))},n.functions.mean=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("mean",t,s,r,e,n))},n.functions.sum=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("sum",t,s,r,e,n))},n.functions.min=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("min",t,s,r,e,n))},n.functions.max=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>c("max",t,s,r,e,n))},n.functions.count=function(e,i){return n.standardFunctionAsync(e,i,(t,s,r)=>{if((0,u.E)(r,1,1,e,i),(0,u.u)(r[0]))return r[0].count(t.abortSignal);if((0,u.o)(r[0])||(0,u.c)(r[0]))return r[0].length;if((0,u.q)(r[0]))return r[0].length();throw new A.aV(e,A.rH.InvalidParameter,i)})})}}}]);