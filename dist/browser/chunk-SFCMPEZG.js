import{a as t,g as a}from"./chunk-RIZAJ3RX.js";import{g as o}from"./chunk-ESDYQQXO.js";var s=new WeakMap,r=new WeakMap;function c(e){r.set(e,new Promise(n=>s.set(e,n)))}function u(e){s.get(e)()}function i(e){return r.get(e)}function m(e){return o(this,null,function*(){if(yield i(e),!!t.isBrowser)return a(e),new Promise(n=>requestAnimationFrame(()=>n()))})}export{c as a,u as b,m as c};