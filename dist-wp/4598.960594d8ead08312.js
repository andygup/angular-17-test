"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[4598],{4598:(x,l,d)=>{d.r(l),d.d(l,{registerFunctions:()=>m});var _=d(15861),f=d(70430),o=d(53570),r=d(89018),y=d(76961);function v(e,t){return e&&e.domain?f.Z.convertObjectToArcadeDictionary("coded-value"===e.domain.type||"codedValue"===e.domain.type?{type:"codedValue",name:e.domain.name,dataType:y.yE[e.field.type],codedValues:e.domain.codedValues.map(a=>({name:a.name,code:a.code}))}:{type:"range",name:e.domain.name,dataType:y.yE[e.field.type],min:e.domain.min,max:e.domain.max},(0,r.L)(t)):null}function m(e){"async"===e.mode&&(e.functions.domain=function(t,a){return e.standardFunctionAsync(t,a,function(){var i=(0,_.Z)(function*(c,u,n){if((0,r.E)(n,2,3,t,a),(0,r.r)(n[0]))return v((0,r.W)(n[0],(0,r.j)(n[1]),void 0===n[2]?void 0:n[2]),t);if((0,r.u)(n[0]))return yield n[0]._ensureLoaded(),v((0,r.a3)((0,r.j)(n[1]),n[0],null,void 0===n[2]?void 0:n[2]),t);throw new o.aV(t,o.rH.InvalidParameter,a)});return function(c,u,n){return i.apply(this,arguments)}}())},e.functions.subtypes=function(t,a){return e.standardFunctionAsync(t,a,function(){var i=(0,_.Z)(function*(c,u,n){if((0,r.E)(n,1,1,t,a),(0,r.r)(n[0])){const s=(0,r.V)(n[0]);return s?f.Z.convertObjectToArcadeDictionary(s,(0,r.L)(t)):null}if((0,r.u)(n[0])){yield n[0]._ensureLoaded();const s=n[0].subtypes();return s?f.Z.convertObjectToArcadeDictionary(s,(0,r.L)(t)):null}throw new o.aV(t,o.rH.InvalidParameter,a)});return function(c,u,n){return i.apply(this,arguments)}}())},e.functions.domainname=function(t,a){return e.standardFunctionAsync(t,a,function(){var i=(0,_.Z)(function*(c,u,n){if((0,r.E)(n,2,4,t,a),(0,r.r)(n[0]))return(0,r.X)(n[0],(0,r.j)(n[1]),n[2],void 0===n[3]?void 0:n[3]);if((0,r.u)(n[0])){yield n[0]._ensureLoaded();const s=(0,r.a3)((0,r.j)(n[1]),n[0],null,void 0===n[3]?void 0:n[3]);return(0,r.a4)(s,n[2])}throw new o.aV(t,o.rH.InvalidParameter,a)});return function(c,u,n){return i.apply(this,arguments)}}())},e.signatures.push({name:"domainname",min:2,max:4}),e.functions.domaincode=function(t,a){return e.standardFunctionAsync(t,a,function(){var i=(0,_.Z)(function*(c,u,n){if((0,r.E)(n,2,4,t,a),(0,r.r)(n[0]))return(0,r.Y)(n[0],(0,r.j)(n[1]),n[2],void 0===n[3]?void 0:n[3]);if((0,r.u)(n[0])){yield n[0]._ensureLoaded();const s=(0,r.a3)((0,r.j)(n[1]),n[0],null,void 0===n[3]?void 0:n[3]);return(0,r.a5)(s,n[2])}throw new o.aV(t,o.rH.InvalidParameter,a)});return function(c,u,n){return i.apply(this,arguments)}}())},e.signatures.push({name:"domaincode",min:2,max:4})),e.functions.text=function(t,a){return e.standardFunctionAsync(t,a,(i,c,u)=>{if((0,r.E)(u,1,2,t,a),!(0,r.u)(u[0]))return(0,r.t)(u[0],u[1]);{const n=(0,r.H)(u[1],"");if(""===n)return u[0].castToText();if("schema"===n.toLowerCase())return u[0].convertToText("schema",i.abortSignal);if("featureset"===n.toLowerCase())return u[0].convertToText("featureset",i.abortSignal)}})},e.functions.gdbversion=function(t,a){return e.standardFunctionAsync(t,a,function(){var i=(0,_.Z)(function*(c,u,n){if((0,r.E)(n,1,1,t,a),(0,r.r)(n[0]))return n[0].gdbVersion();if((0,r.u)(n[0]))return(yield n[0].load()).gdbVersion;throw new o.aV(t,o.rH.InvalidParameter,a)});return function(c,u,n){return i.apply(this,arguments)}}())},e.functions.schema=function(t,a){return e.standardFunctionAsync(t,a,function(){var i=(0,_.Z)(function*(c,u,n){if((0,r.E)(n,1,1,t,a),(0,r.u)(n[0]))return yield n[0].load(),f.Z.convertObjectToArcadeDictionary(n[0].schema(),(0,r.L)(t));if((0,r.r)(n[0])){const s=(0,r.U)(n[0]);return s?f.Z.convertObjectToArcadeDictionary(s,(0,r.L)(t)):null}throw new o.aV(t,o.rH.InvalidParameter,a)});return function(c,u,n){return i.apply(this,arguments)}}())}}}}]);