import{a as W,b as ue,j as fe,k as pe,l as we,m as H,n as de,o as he,p as me}from"./chunk-RTG6TIHM.js";import"./chunk-VQYBEDDM.js";import{a as ge}from"./chunk-5OFJIC4V.js";import"./chunk-ODTKH54W.js";import"./chunk-6OT33HXM.js";import"./chunk-ZJOOUTMZ.js";import"./chunk-UTYBZIWT.js";import{a as _}from"./chunk-SB4X3KWN.js";import"./chunk-QNDNFXN2.js";import{c as I}from"./chunk-RUOXPMWE.js";import{$ as ae,Da as ce,K as L,L as v,M as d,N as S,O as N,Q as b,U as m,V as F,W as R,Z as O,_ as M,a as te,b as l,c as s,ca as k,f as re,ga as ie,i as oe,j as V,k as P,ka as le,l as K,la as D,ma as E,pa as h,sa as se}from"./chunk-WMY3KSI4.js";import"./chunk-HURWQVHY.js";import"./chunk-M3GEY4SR.js";import"./chunk-7QY3BMVN.js";import"./chunk-4HXOVZYF.js";import"./chunk-U2QVIRVP.js";import"./chunk-WHNNLNN4.js";import"./chunk-DR5NPQZL.js";import"./chunk-45GFWXQC.js";import"./chunk-O5IGEGOS.js";import"./chunk-EDSVJRYE.js";import"./chunk-YH4Z47PR.js";import"./chunk-CJJRHJ2S.js";import"./chunk-VDN3XKL2.js";import"./chunk-SVEGZVCP.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-WUM4JBII.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-WZKL6OPG.js";import"./chunk-WF37UVOV.js";import"./chunk-UZQ577CU.js";import"./chunk-QDNKD3H5.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-URPCXPAW.js";import"./chunk-KBFIYTBH.js";import"./chunk-PEPXQ7N3.js";import"./chunk-6QIKBCPR.js";import{a as U}from"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import{b as T}from"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{g as w}from"./chunk-ESDYQQXO.js";function ye(n){return n&&typeof n.then=="function"}var G=100;function ee(n,e){return w(this,null,function*(){let t=[];for(let r=0;r<e.arguments.length;r++)t.push(yield c(n,e.arguments[r]));return t})}function C(n,e,t){return w(this,null,function*(){return e.preparsed===!0?t(n,null,e.arguments):t(n,e,yield ee(n,e))})}var z=class extends oe{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{let r={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(r.depthCounter.depth>64)throw new s(e,l.MaximumCallDepth,null);return Y(this.definition,r,t,null)}}call(e,t){return j(e,t,(r,o,a)=>{let i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new s(e,l.MaximumCallDepth,t);return Y(this.definition,i,a,t)})}marshalledCall(e,t,r,o){return o(e,t,(a,i,u)=>w(this,null,function*(){let f={spatialReference:e.spatialReference,globalScope:r.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return u=u.map(p=>!b(p)||p instanceof K?p:V(p,e,o)),V(yield Y(this.definition,f,u,t),r,o)}))}},A=class extends te{constructor(e){super(e)}global(e){return w(this,null,function*(){let t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=yield c(this.executingContext,t.node),t.valueset=!0),b(t.value)&&!(t.value instanceof K)){let r=new K;r.fn=t.value,r.parameterEvaluator=j,r.context=this.executingContext,t.value=r}return t.value})}setGlobal(e,t){if(b(t))throw new s(null,l.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=e.toLowerCase()),this.executingContext.exports[e]!==void 0}loadModule(e){return w(this,null,function*(){let t=e.spatialReference;t==null&&(t=new T({wkid:102100})),this.moduleScope=Ie({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new W(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??Ce,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},yield c(this.executingContext,this.source.syntax)})}};function j(n,e,t){return w(this,null,function*(){if(e.preparsed===!0){let o=t(n,null,e.arguments);return ye(o),o}let r=t(n,e,yield ee(n,e));return ye(r),r})}function c(n,e,t){return w(this,null,function*(){if(e.breakpoint&&t!==!0)return yield e.breakpoint(),c(n,e,!0);try{switch(e?.type){case"VariableDeclarator":return yield Ue(n,e);case"ImportDeclaration":return yield qe(n,e);case"ExportNamedDeclaration":return yield Te(n,e);case"VariableDeclaration":return yield Se(n,e,0);case"BlockStatement":case"Program":return yield De(n,e);case"FunctionDeclaration":return yield Ge(n,e);case"ReturnStatement":return yield Ze(n,e);case"IfStatement":return yield Ke(n,e);case"ExpressionStatement":return yield Pe(n,e);case"UpdateExpression":return yield Be(n,e);case"AssignmentExpression":return yield je(n,e);case"ForStatement":return yield Le(n,e);case"WhileStatement":return yield Me(n,e);case"ForInStatement":return yield ke(n,e);case"BreakStatement":return S;case"EmptyStatement":return d;case"ContinueStatement":return N;case"TemplateElement":return yield Je(n,e);case"TemplateLiteral":return yield Xe(n,e);case"Identifier":return yield ne(n,e);case"MemberExpression":return yield We(n,e);case"Literal":return e.value;case"CallExpression":return yield ze(n,e);case"UnaryExpression":return yield Ve(n,e);case"BinaryExpression":return yield He(n,e);case"LogicalExpression":return yield Ye(n,e);case"ArrayExpression":return yield _e(n,e);case"ObjectExpression":return yield Ae(n,e);case"Property":return yield Re(n,e);default:throw new s(n,l.Unrecognized,e)}}catch(r){throw re(n,e,r)}})}function Ae(n,e){return w(this,null,function*(){let t=[];for(let i=0;i<e.properties.length;i++)t[i]=yield c(n,e.properties[i]);let r={},o=new Map;for(let i=0;i<t.length;i++){let u=t[i];if(b(u.value))throw new s(n,l.NoFunctionInDictionary,e);if(m(u.key)===!1)throw new s(n,l.KeyMustBeString,e);let f=u.key.toString(),p=f.toLowerCase();o.has(p)?f=o.get(p):o.set(p,f),u.value===d?r[f]=null:r[f]=u.value}let a=new I(r);return a.immutable=!1,a})}function Re(n,e){return w(this,null,function*(){let t=yield c(n,e.value);return e.key.type==="Identifier"?{key:e.key.name,value:t}:{key:yield c(n,e.key),value:t}})}function Me(n,e){return w(this,null,function*(){let t={testResult:!0,lastAction:d};if(t.testResult=yield c(n,e.test),t.testResult===!1)return d;if(t.testResult!==!0)throw new s(n,l.BooleanConditionRequired,e);for(;t.testResult===!0&&(t.lastAction=yield c(n,e.body),t.lastAction!==S)&&!(t.lastAction instanceof v);)if(t.testResult=yield c(n,e.test),t.testResult!==!0&&t.testResult!==!1)throw new s(n,l.BooleanConditionRequired,e);return t.lastAction instanceof v?t.lastAction:d})}function ve(n,e,t){return w(this,null,function*(){let r=yield c(n,e.body);return t.lastAction=r,t.lastAction===S||t.lastAction instanceof v?(t.testResult=!1,t):(e.update!==null&&(yield c(n,e.update)),t)})}function Ee(n,e,t){return w(this,null,function*(){if(e.test!==null){let r=yield c(n,e.test);if(n.abortSignal?.aborted===!0)throw new s(n,l.Cancelled,e);if(t.testResult=r,t.testResult===!1)return t;if(t.testResult!==!0)throw new s(n,l.BooleanConditionRequired,e);return ve(n,e,t)}return ve(n,e,t)})}function Z(n,e,t,r,o,a){try{Ee(n,e,t).then(()=>{try{t.testResult===!0?++a>G?(a=0,setTimeout(()=>{Z(n,e,t,r,o,a)},0)):Z(n,e,t,r,o,a):t.lastAction instanceof v?r(t.lastAction):r(d)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}function Le(n,e){try{return e.init!==null?c(n,e.init).then(()=>new Promise((t,r)=>{Z(n,e,{testResult:!0,lastAction:d},o=>{t(o)},o=>{r(o)},0)})):new Promise((t,r)=>{Z(n,e,{testResult:!0,lastAction:d},o=>{t(o)},o=>{r(o)},0)})}catch(t){return Promise.reject(t)}}function J(n,e,t,r,o,a,i,u,f,p){try{if(r<=a)return void u(d);o.value=i==="k"?t[a]:a,c(n,e.body).then(y=>{try{y instanceof v?u(y):y===S?u(d):++p>G?(p=0,setTimeout(()=>{J(n,e,t,r,o,a+1,i,u,f,p)},0)):J(n,e,t,r,o,a+1,i,u,f,p)}catch(q){f(q)}},y=>{f(y)})}catch(y){f(y)}}function Q(n,e,t,r,o,a,i,u,f){try{if(t.length()<=o)return void i(d);r.value=a==="k"?t.get(o):o,c(n,e.body).then(p=>{p instanceof v?i(p):p===S?i(d):++f>G?(f=0,setTimeout(()=>{Q(n,e,t,r,o+1,a,i,u,f)},0)):Q(n,e,t,r,o+1,a,i,u,f)},p=>{u(p)})}catch(p){u(p)}}function X(n,e,t,r,o,a){try{if(a===void 0&&(a="i"),t.length===0)return void r.resolve(d);J(n,e,t,t.length,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Ne(n,e,t,r,o,a){try{if(a===void 0&&(a="i"),t.length===0)return void r.resolve(d);Q(n,e,t,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Oe(n,e,t,r,o){try{X(n,e,t.keys(),r,o,"k")}catch(a){r.reject(a)}}function $(n,e,t,r,o,a,i,u){try{n.next().then(f=>{try{if(f===null)a(d);else{let p=_.createFromGraphicLikeObject(f.geometry,f.attributes,r,e.timeZone);p._underlyingGraphic=f,o.value=p,c(e,t.body).then(y=>{try{y===S?a(d):y instanceof v?a(y):++u>G?(u=0,setTimeout(()=>{$(n,e,t,r,o,a,i,u)},0)):$(n,e,t,r,o,a,i,u)}catch(q){i(q)}},y=>{i(y)})}}catch(p){i(p)}},f=>{i(f)})}catch(f){i(f)}}function ke(n,e){return w(this,null,function*(){return new Promise((t,r)=>{c(n,e.right).then(o=>{try{let a=null;a=e.left.type==="VariableDeclaration"?c(n,e.left):Promise.resolve(),a.then(()=>{try{let i="";if(e.left.type==="VariableDeclaration"){let f=e.left.declarations[0].id;f.type==="Identifier"&&(i=f.name)}else e.left.type==="Identifier"&&(i=e.left.name);if(!i)throw new s(n,l.InvalidIdentifier,e);i=i.toLowerCase();let u=null;if(n.localScope!=null&&n.localScope[i]!==void 0&&(u=n.localScope[i]),u===null&&n.globalScope[i]!==void 0&&(u=n.globalScope[i]),u===null)return void r(new s(n,l.InvalidIdentifier,e));O(o)||m(o)?X(n,e,o,{reject:r,resolve:t},u):k(o)?Ne(n,e,o,{reject:r,resolve:t},u):o instanceof I||M(o)?Oe(n,e,o,{reject:r,resolve:t},u):ae(o)?$(o.iterator(n.abortSignal),n,e,o,u,f=>{t(f)},f=>{r(f)},0):X(n,e,[],{reject:r,resolve:t},u)}catch(i){r(i)}},r)}catch(a){r(a)}},r)})})}function Be(n,e){return w(this,null,function*(){let t=e.argument;if(t.type==="MemberExpression"){let a={t:null},i=yield c(n,t.object),u=null;a.t=i,t.computed===!0?u=yield c(n,t.property):t.property.type==="Identifier"&&(u=t.property.name);let f=a.t,p;if(O(f)){if(!R(u))throw new s(n,l.ArrayAccessorMustBeNumber,e);if(u<0&&(u=f.length+u),u<0||u>=f.length)throw new s(n,l.OutOfBounds,e);p=h(f[u]),f[u]=e.operator==="++"?p+1:p-1}else if(f instanceof I){if(m(u)===!1)throw new s(n,l.KeyAccessorMustBeString,e);if(f.hasField(u)!==!0)throw new s(n,l.FieldNotFound,e,{key:u});p=h(f.field(u)),f.setField(u,e.operator==="++"?p+1:p-1)}else if(f instanceof A){if(m(u)===!1)throw new s(n,l.ModuleAccessorMustBeString,e);if(f.hasGlobal(u)!==!0)throw new s(n,l.ModuleExportNotFound,e);p=h(yield f.global(u)),f.setGlobal(u,e.operator==="++"?p+1:p-1)}else{if(!M(f))throw k(f)?new s(n,l.Immutable,e):new s(n,l.InvalidParameter,e);if(m(u)===!1)throw new s(n,l.KeyAccessorMustBeString,e);if(f.hasField(u)!==!0)throw new s(n,l.FieldNotFound,e,{key:u});p=h(f.field(u)),f.setField(u,e.operator==="++"?p+1:p-1)}return e.prefix===!1?p:e.operator==="++"?p+1:p-1}let r=e.argument.type==="Identifier"?e.argument.name.toLowerCase():"";if(!r)throw new s(n,l.InvalidIdentifier,e);let o;if(n.localScope!=null&&n.localScope[r]!==void 0)return o=h(n.localScope[r].value),n.localScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(n.globalScope[r]!==void 0)return o=h(n.globalScope[r].value),n.globalScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new s(n,l.InvalidIdentifier,e)})}function x(n,e,t,r,o){switch(e){case"=":return n===d?null:n;case"/=":return h(t)/h(n);case"*=":return h(t)*h(n);case"-=":return h(t)-h(n);case"+=":return m(t)||m(n)?E(t)+E(n):h(t)+h(n);case"%=":return h(t)%h(n);default:throw new s(o,l.UnsupportedOperator,r)}}function je(n,e){return w(this,null,function*(){let t=e.left;if(t.type==="MemberExpression"){let o=yield c(n,t.object),a=null;if(t.computed===!0)a=yield c(n,t.property);else{if(t.property.type!=="Identifier")throw new s(n,l.InvalidIdentifier,e);a=t.property.name}let i=yield c(n,e.right);if(O(o)){if(!R(a))throw new s(n,l.ArrayAccessorMustBeNumber,e);if(a<0&&(a=o.length+a),a<0||a>o.length)throw new s(n,l.OutOfBounds,e);if(a===o.length){if(e.operator!=="=")throw new s(n,l.OutOfBounds,e);o[a]=x(i,e.operator,o[a],e,n)}else o[a]=x(i,e.operator,o[a],e,n)}else if(o instanceof I){if(m(a)===!1)throw new s(n,l.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,x(i,e.operator,o.field(a),e,n));else{if(e.operator!=="=")throw new s(n,l.FieldNotFound,e,{key:a});o.setField(a,x(i,e.operator,null,e,n))}}else if(o instanceof A){if(m(a)===!1)throw new s(n,l.KeyAccessorMustBeString,e);if(o.hasGlobal(a)!==!0)throw new s(n,l.ModuleExportNotFound,e);o.setGlobal(a,x(i,e.operator,yield o.global(a),e,n))}else{if(!M(o))throw k(o)?new s(n,l.Immutable,e):new s(n,l.InvalidParameter,e);if(m(a)===!1)throw new s(n,l.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,x(i,e.operator,o.field(a),e,n));else{if(e.operator!=="=")throw new s(n,l.FieldNotFound,e,{key:a});o.setField(a,x(i,e.operator,null,e,n))}}return d}let r=t.name.toLowerCase();if(n.localScope!=null&&n.localScope[r]!==void 0){let o=yield c(n,e.right);return n.localScope[r]={value:x(o,e.operator,n.localScope[r].value,e,n),valueset:!0,node:e.right},d}if(n.globalScope[r]!==void 0){let o=yield c(n,e.right);return n.globalScope[r]={value:x(o,e.operator,n.globalScope[r].value,e,n),valueset:!0,node:e.right},d}throw new s(n,l.InvalidIdentifier,e)})}function Pe(n,e){return w(this,null,function*(){if(e.expression.type==="AssignmentExpression")return c(n,e.expression);if(e.expression.type==="CallExpression"){let r=yield c(n,e.expression);return r===d?d:new L(r)}let t=yield c(n,e.expression);return t===d?d:new L(t)})}function Ke(n,e){return w(this,null,function*(){let t=yield c(n,e.test);if(t===!0)return c(n,e.consequent);if(t===!1)return e.alternate!==null?c(n,e.alternate):d;throw new s(n,l.BooleanConditionRequired,e)})}function De(n,e){return w(this,null,function*(){return be(n,e,0)})}function be(n,e,t){return w(this,null,function*(){if(t>=e.body.length)return d;let r=yield c(n,e.body[t]);return r instanceof v||r===S||r===N||t===e.body.length-1?r:be(n,e,t+1)})}function Ze(n,e){return w(this,null,function*(){if(e.argument===null)return new v(d);let t=yield c(n,e.argument);return new v(t)})}function Ge(n,e){return w(this,null,function*(){let t=e.id.name.toLowerCase();return n.globalScope[t]={valueset:!0,node:null,value:new z(e,n)},d})}function qe(n,e){return w(this,null,function*(){let t=e.specifiers[0].local.name.toLowerCase(),r=n.libraryResolver.loadLibrary(t),o=null;return n.libraryResolver._moduleSingletons?.has(r.uri)?o=n.libraryResolver._moduleSingletons.get(r.uri):(o=new A(r),yield o.loadModule(n),n.libraryResolver._moduleSingletons?.set(r.uri,o)),n.globalScope[t]={value:o,valueset:!0,node:e},d})}function Te(n,e){return w(this,null,function*(){if(yield c(n,e.declaration),e.declaration.type==="FunctionDeclaration")n.exports[e.declaration.id.name.toLowerCase()]="function";else if(e.declaration.type==="VariableDeclaration")for(let t of e.declaration.declarations)n.exports[t.id.name.toLowerCase()]="variable";return d})}function Se(n,e,t){return w(this,null,function*(){return t>=e.declarations.length?d:(yield c(n,e.declarations[t]),t===e.declarations.length-1||(yield Se(n,e,t+1)),d)})}function Ue(n,e){return w(this,null,function*(){let t=null;if(t=e.init===null?null:yield c(n,e.init),n.localScope!==null){if(t===d&&(t=null),e.id.type!=="Identifier")throw new s(n,l.InvalidIdentifier,e);let o=e.id.name.toLowerCase();return n.localScope!=null&&(n.localScope[o]={value:t,valueset:!0,node:e.init}),d}if(e.id.type!=="Identifier")throw new s(n,l.InvalidIdentifier,e);let r=e.id.name.toLowerCase();return t===d&&(t=null),n.globalScope[r]={value:t,valueset:!0,node:e.init},d})}function We(n,e){return w(this,null,function*(){let t=yield c(n,e.object);if(t===null)throw new s(n,l.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(t instanceof I||M(t))return t.field(e.property.name);if(t instanceof U)return H(t,e.property.name,n,e);if(t instanceof A){if(!t.hasGlobal(e.property.name))throw new s(n,l.InvalidIdentifier,e);return t.global(e.property.name)}throw new s(n,l.InvalidMemberAccessKey,e)}throw new s(n,l.InvalidMemberAccessKey,e)}let r=yield c(n,e.property);if(t instanceof I||M(t)){if(m(r))return t.field(r);throw new s(n,l.InvalidMemberAccessKey,e)}if(t instanceof A){if(m(r))return t.global(r);throw new s(n,l.InvalidMemberAccessKey,e)}if(t instanceof U){if(m(r))return H(t,r,n,e);throw new s(n,l.InvalidMemberAccessKey,e)}if(O(t)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new s(n,l.OutOfBounds,e);return t[r]}throw new s(n,l.InvalidMemberAccessKey,e)}if(k(t)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length()+r),r>=t.length()||r<0)throw new s(n,l.OutOfBounds,e);return t.get(r)}throw new s(n,l.InvalidMemberAccessKey,e)}if(m(t)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new s(n,l.OutOfBounds,e);return t[r]}throw new s(n,l.InvalidMemberAccessKey,e)}throw new s(n,l.InvalidMemberAccessKey,e)})}function Ve(n,e){return w(this,null,function*(){let t=yield c(n,e.argument);if(F(t)){if(e.operator==="!")return!t;if(e.operator==="-")return-1*h(t);if(e.operator==="+")return 1*h(t);if(e.operator==="~")return~h(t);throw new s(n,l.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*h(t);if(e.operator==="+")return 1*h(t);if(e.operator==="~")return~h(t);throw new s(n,l.UnsupportedUnaryOperator,e)})}function _e(n,e){return w(this,null,function*(){let t=[];for(let r=0;r<e.elements.length;r++)t.push(yield c(n,e.elements[r]));for(let r=0;r<t.length;r++){if(b(t[r]))throw new s(n,l.NoFunctionInArray,e);t[r]===d&&(t[r]=null)}return t})}function He(n,e){return w(this,null,function*(){let t=[];t[0]=yield c(n,e.left),t[1]=yield c(n,e.right);let r=t[0],o=t[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return ce(h(r),h(o),e.operator);case"==":return D(r,o);case"!=":return!D(r,o);case"<":case">":case"<=":case">=":return le(r,o,e.operator);case"+":return m(r)||m(o)?E(r)+E(o):h(r)+h(o);case"-":return h(r)-h(o);case"*":return h(r)*h(o);case"/":return h(r)/h(o);case"%":return h(r)%h(o);default:throw new s(n,l.UnsupportedOperator,e)}})}function Ye(n,e){return w(this,null,function*(){let t=yield c(n,e.left),r=null;if(!F(t))throw new s(n,l.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":if(t===!0)return t;if(r=yield c(n,e.right),F(r))return r;throw new s(n,l.LogicExpressionOrAnd,e);case"&&":if(t===!1)return t;if(r=yield c(n,e.right),F(r))return r;throw new s(n,l.LogicExpressionOrAnd,e);default:throw new s(n,l.LogicExpressionOrAnd,e)}})}function ne(n,e){return w(this,null,function*(){let t=e.name.toLowerCase();if(n.localScope!=null&&n.localScope[t]!==void 0){let r=n.localScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=c(n,r.node);let o=yield r.d;return r.value=o,r.valueset=!0,o}if(n.globalScope[t]!==void 0){let r=n.globalScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=c(n,r.node);let o=yield r.d;return r.value=o,r.valueset=!0,o}throw new s(n,l.InvalidIdentifier,e)})}function ze(n,e){return w(this,null,function*(){if(e.callee.type==="MemberExpression"){let t=yield c(n,e.callee.object);if(!(t instanceof A))throw new s(n,l.FunctionNotFound,e);let r=e.callee.computed===!1?e.callee.property.name:yield c(n,e.callee.property);if(!t.hasGlobal(r))throw new s(n,l.FunctionNotFound,e);let o=yield t.global(r);if(!b(o))throw new s(n,l.CallNonFunction,e);return o.call(n,e)}if(e.callee.type!=="Identifier")throw new s(n,l.FunctionNotFound,e);if(n.localScope!=null&&n.localScope[e.callee.name.toLowerCase()]!==void 0){let t=n.localScope[e.callee.name.toLowerCase()];if(b(t.value))return t.value.call(n,e);throw new s(n,l.CallNonFunction,e)}if(n.globalScope[e.callee.name.toLowerCase()]!==void 0){let t=n.globalScope[e.callee.name.toLowerCase()];if(b(t.value))return t.value.call(n,e);throw new s(n,l.CallNonFunction,e)}throw new s(n,l.FunctionNotFound,e)})}function Je(n,e){return w(this,null,function*(){return e.value?e.value.cooked:""})}function Qe(n,e,t){if(b(n))throw new s(e,l.NoFunctionInTemplateLiteral,t);return n}function Xe(n,e){return w(this,null,function*(){let t=[];for(let a=0;a<e.expressions.length;a++){let i=yield c(n,e.expressions[a]);t[a]=E(i)}let r="",o=0;for(let a of e.quasis)r+=a.value?a.value.cooked:"",a.tail===!1&&(r+=t[o]?Qe(t[o],n,e):"",o++);return r})}var g={};function xe(n,e,t,r){return w(this,null,function*(){let o=yield c(n,e.arguments[t]);if(D(o,r))return c(n,e.arguments[t+1]);let a=e.arguments.length-t;return a===1?c(n,e.arguments[t]):a===2?null:a===3?c(n,e.arguments[t+2]):xe(n,e,t+2,r)})}function Fe(n,e,t,r){return w(this,null,function*(){if(r===!0)return c(n,e.arguments[t+1]);if(e.arguments.length-t===3)return c(n,e.arguments[t+2]);let o=yield c(n,e.arguments[t+2]);if(F(o)===!1)throw new s(n,l.ModuleExportNotFound,e.arguments[t+2]);return Fe(n,e,t+2,o)})}function Y(n,e,t,r){return w(this,null,function*(){let o=n.body;if(t.length!==n.params.length)throw new s(e,l.WrongNumberOfParameters,null);for(let i=0;i<t.length;i++){let u=n.params[i];u.type==="Identifier"&&e.localScope!=null&&(e.localScope[u.name.toLowerCase()]={d:null,value:t[i],valueset:!0,node:null})}let a=yield c(e,o);if(a instanceof v)return a.value;if(a===S)throw new s(e,l.UnexpectedToken,r);if(a===N)throw new s(e,l.UnexpectedToken,r);return a instanceof L?a.value:a})}pe(g,C),me(g,C),de(g,C),we(g,C),he(g,C),ge({functions:g,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:C,standardFunctionAsync:j}),g.iif=function(n,e){return w(this,null,function*(){ie(e.arguments===null?[]:e.arguments,3,3,n,e);let t=yield c(n,e.arguments[0]);if(F(t)===!1)throw new s(n,l.BooleanConditionRequired,e);return c(n,t?e.arguments[1]:e.arguments[2])})},g.decode=function(n,e){return w(this,null,function*(){if(e.arguments.length<2)throw new s(n,l.WrongNumberOfParameters,e);if(e.arguments.length===2)return c(n,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new s(n,l.WrongNumberOfParameters,e);return xe(n,e,1,yield c(n,e.arguments[0]))})},g.when=function(n,e){return w(this,null,function*(){if(e.arguments.length<3)throw new s(n,l.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new s(n,l.WrongNumberOfParameters,e);let t=yield c(n,e.arguments[0]);if(F(t)===!1)throw new s(n,l.BooleanConditionRequired,e.arguments[0]);return Fe(n,e,0,t)})};var $e={fixSpatialReference:se,parseArguments:ee,standardFunction:C,standardFunctionAsync:j,evaluateIdentifier:ne};for(let n in g)g[n]={value:new P(g[n]),valueset:!0,node:null};var B=function(){};function Ie(n,e,t){let r=new B;n==null&&(n={}),e==null&&(e={});let o=new I({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(let a in e)r[a]={value:new P(e[a]),native:!0,valueset:!0,node:null};for(let a in n)n[a]&&n[a].declaredClass==="esri.Graphic"?r[a]={value:_.createFromGraphic(n[a],t),valueset:!0,node:null}:r[a]={value:n[a],valueset:!0,node:null};return r}function Ce(n){console.log(n)}B.prototype=g,B.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},B.prototype.pi={value:Math.PI,valueset:!0,node:null};var vn=$e;function en(n){let e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:C,standardFunctionAsync:j,evaluateIdentifier:ne};for(let t=0;t<n.length;t++)n[t].registerFunctions(e);for(let t in e.functions)g[t]={value:new P(e.functions[t]),valueset:!0,node:null},B.prototype[t]=g[t];for(let t=0;t<e.signatures.length;t++)ue(e.signatures[t],"async")}function bn(n,e){return w(this,null,function*(){let t=e.spatialReference;t==null&&(t=new T({wkid:102100}));let r=null;n.usesModules&&(r=new W(new Map,n.loadedModules));let o=Ie(e.vars,e.customfunctions,e.timeZone),a={spatialReference:t,services:e.services,exports:{},libraryResolver:r,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console??Ce,timeZone:e.timeZone??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},i=yield c(a,n);if(i instanceof v&&(i=i.value),i instanceof L&&(i=i.value),i===d&&(i=null),i===S)throw new s(a,l.IllegalResult,null);if(i===N)throw new s(a,l.IllegalResult,null);if(b(i))throw new s(a,l.IllegalResult,null);return i})}en([fe]);export{bn as executeScript,en as extend,vn as functionHelper};
