"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[4540],{24540:(x,_,r)=>{r.r(_),r.d(_,{CalciteIcon:()=>n,defineCustomElement:()=>b});var l=r(47062);const n=l.I,b=l.d},47062:(x,_,r)=>{r.d(_,{I:()=>C,d:()=>D});var l=r(15861),n=r(55369),b=r(12115),f=r(31558);const p={},s={},h={s:16,m:24,l:32};function O(){return(O=(0,l.Z)(function*({icon:e,scale:t}){const o=h[t],c=function I(e){const t=!isNaN(Number(e.charAt(0))),o=e.split("-");if(o.length>0){const a=/[a-z]/i;e=o.map((g,i)=>g.replace(a,function(v,d){return 0===i&&0===d?v:v.toUpperCase()})).join("")}return t?`i${e}`:e}(e),a="F"===c.charAt(c.length-1),i=`${a?c.substring(0,c.length-1):c}${o}${a?"F":""}`;if(p[i])return p[i];s[i]||(s[i]=fetch((0,n.K3)(`./assets/icon/${i}.json`)).then(v=>v.json()).catch(()=>(console.error(`"${i}" is not a valid calcite-ui-icon name`),"")));const u=yield s[i];return p[i]=u,u})).apply(this,arguments)}const C=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}componentWillLoad(){var e=this;return(0,l.Z)(function*(){e.loadIconPathData()})()}render(){const{el:e,flipRtl:t,pathData:o,scale:c,textLabel:a}=this,g=(0,b.b)(e),i=h[c],u=!!a,v=[].concat(o||"");return(0,n.h)(n.AA,{"aria-hidden":(0,b.t)(!u),"aria-label":u?a:null,role:u?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===g&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${i} ${i}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},v.map(d=>(0,n.h)("path","string"==typeof d?{d}:{d:d.d,opacity:"opacity"in d?d.opacity:1}))))}loadIconPathData(){var e=this;return(0,l.Z)(function*(){const{icon:t,scale:o,visible:c}=e;if(!n.Z5.isBrowser||!t||!c)return;const a=yield function m(e){return O.apply(this,arguments)}({icon:t,scale:o});t===e.icon&&(e.pathData=a)})()}waitUntilVisible(e){this.intersectionObserver=(0,f.c)("intersection",t=>{t.forEach(o=>{o.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function D(){typeof customElements>"u"||["calcite-icon"].forEach(t=>{"calcite-icon"===t&&(customElements.get(t)||customElements.define(t,C))})}D()},31558:(x,_,r)=>{r.d(_,{c:()=>n});var l=r(55369);function n(f,E,p){if(!l.Z5.isBrowser)return;const s=function b(f){class E extends window.MutationObserver{constructor(s){super(s),this.observedEntry=[],this.callback=s}observe(s,h){return this.observedEntry.push({target:s,options:h}),super.observe(s,h)}unobserve(s){const h=this.observedEntry.filter(m=>m.target!==s);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),h.forEach(m=>this.observe(m.target,m.options))}}return"intersection"===f?window.IntersectionObserver:"mutation"===f?E:window.ResizeObserver}(f);return new s(E,p)}}}]);