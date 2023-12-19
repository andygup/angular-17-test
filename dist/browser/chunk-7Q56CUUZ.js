import{a as X,b as Oe,c as Ae,d as Be,e as He,f as ze,g as Se}from"./chunk-PKF7EPYX.js";import{a as Y}from"./chunk-5V2YI6AN.js";import{b as Le}from"./chunk-7PKXIYXY.js";import{b as Re}from"./chunk-OR2YXKXZ.js";import{f as Pe,g as ke,i as Te,j as De,k as Ne,l as Ce,m as xe}from"./chunk-BG56JX5P.js";import{a as Fe}from"./chunk-6VELEYJV.js";import{a as ye,b as Ee,c as we}from"./chunk-SFCMPEZG.js";import{b as ge}from"./chunk-WUCRSSRW.js";import{a as be}from"./chunk-FBKJMXRD.js";import{d as D,e as de,f as ue,g as T,h as I,i as fe,l as ve,o as pe,p as he,s as q,w as me}from"./chunk-225WJVLD.js";import{a as le}from"./chunk-T62VBPHF.js";import{d as y,e as re,f as B,g as oe,h as se,j as ce}from"./chunk-RIZAJ3RX.js";import{a as K,b as ae,g as A}from"./chunk-ESDYQQXO.js";function Ke(i,e){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),r.push.apply(r,o)}return r}function Ie(i){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ke(Object(r),!0).forEach(function(o){Ze(i,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach(function(o){Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(r,o))})}return i}function Ze(i,e,r){return e=et(e),e in i?Object.defineProperty(i,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[e]=r,i}function _e(i,e){if(typeof i!="object"||i===null)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var o=r.call(i,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function et(i){var e=_e(i,"string");return typeof e=="symbol"?e:String(e)}var je={activateTrap:function(e,r){if(e.length>0){var o=e[e.length-1];o!==r&&o.pause()}var l=e.indexOf(r);l===-1||e.splice(l,1),e.push(r)},deactivateTrap:function(e,r){var o=e.indexOf(r);o!==-1&&e.splice(o,1),e.length>0&&e[e.length-1].unpause()}},tt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},it=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},z=function(e){return e?.key==="Tab"||e?.keyCode===9},nt=function(e){return z(e)&&!e.shiftKey},at=function(e){return z(e)&&e.shiftKey},Me=function(e){return setTimeout(e,0)},Ue=function(e,r){var o=-1;return e.every(function(l,c){return r(l)?(o=c,!1):!0}),o},H=function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];return typeof e=="function"?e.apply(void 0,o):e},j=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},rt=[],ot=function(e,r){var o=r?.document||document,l=r?.trapStack||rt,c=Ie({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:nt,isKeyBackward:at},r),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},g,m=function(n,t,s){return n&&n[t]!==void 0?n[t]:c[s||t]},w=function(n,t){var s=typeof t?.composedPath=="function"?t.composedPath():void 0;return a.containerGroups.findIndex(function(d){var u=d.container,v=d.tabbableNodes;return u.contains(n)||s?.includes(u)||v.find(function(p){return p===n})})},N=function(n){var t=c[n];if(typeof t=="function"){for(var s=arguments.length,d=new Array(s>1?s-1:0),u=1;u<s;u++)d[u-1]=arguments[u];t=t.apply(void 0,d)}if(t===!0&&(t=void 0),!t){if(t===void 0||t===!1)return t;throw new Error("`".concat(n,"` was specified but was not a node, or did not return a node"))}var v=t;if(typeof t=="string"&&(v=o.querySelector(t),!v))throw new Error("`".concat(n,"` as selector refers to no known node"));return v},C=function(){var n=N("initialFocus");if(n===!1)return!1;if(n===void 0||!I(n,c.tabbableOptions))if(w(o.activeElement)>=0)n=o.activeElement;else{var t=a.tabbableGroups[0],s=t&&t.firstTabbableNode;n=s||N("fallbackFocus")}if(!n)throw new Error("Your focus-trap needs to have at least one focusable element");return n},x=function(){if(a.containerGroups=a.containers.map(function(n){var t=de(n,c.tabbableOptions),s=ue(n,c.tabbableOptions),d=t.length>0?t[0]:void 0,u=t.length>0?t[t.length-1]:void 0,v=s.find(function(h){return T(h)}),p=s.slice().reverse().find(function(h){return T(h)}),b=!!t.find(function(h){return D(h)>0});return{container:n,tabbableNodes:t,focusableNodes:s,posTabIndexesFound:b,firstTabbableNode:d,lastTabbableNode:u,firstDomTabbableNode:v,lastDomTabbableNode:p,nextTabbableNode:function(k){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=t.indexOf(k);return F<0?L?s.slice(s.indexOf(k)+1).find(function(O){return T(O)}):s.slice(0,s.indexOf(k)).reverse().find(function(O){return T(O)}):t[F+(L?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(n){return n.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!N("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(n){return n.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},We=function f(n){var t=n.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},P=function f(n){if(n!==!1&&n!==We(document)){if(!n||!n.focus){f(C());return}n.focus({preventScroll:!!c.preventScroll}),a.mostRecentlyFocusedNode=n,tt(n)&&n.select()}},J=function(n){var t=N("setReturnFocus",n);return t||(t===!1?!1:n)},Q=function(n){var t=n.target,s=n.event,d=n.isBackward,u=d===void 0?!1:d;t=t||j(s),x();var v=null;if(a.tabbableGroups.length>0){var p=w(t,s),b=p>=0?a.containerGroups[p]:void 0;if(p<0)u?v=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:v=a.tabbableGroups[0].firstTabbableNode;else if(u){var h=Ue(a.tabbableGroups,function($){var G=$.firstTabbableNode;return t===G});if(h<0&&(b.container===t||I(t,c.tabbableOptions)&&!T(t,c.tabbableOptions)&&!b.nextTabbableNode(t,!1))&&(h=p),h>=0){var k=h===0?a.tabbableGroups.length-1:h-1,L=a.tabbableGroups[k];v=D(t)>=0?L.lastTabbableNode:L.lastDomTabbableNode}else z(s)||(v=b.nextTabbableNode(t,!1))}else{var F=Ue(a.tabbableGroups,function($){var G=$.lastTabbableNode;return t===G});if(F<0&&(b.container===t||I(t,c.tabbableOptions)&&!T(t,c.tabbableOptions)&&!b.nextTabbableNode(t))&&(F=p),F>=0){var O=F===a.tabbableGroups.length-1?0:F+1,ne=a.tabbableGroups[O];v=D(t)>=0?ne.firstTabbableNode:ne.firstDomTabbableNode}else z(s)||(v=b.nextTabbableNode(t))}}else v=N("fallbackFocus");return v},S=function(n){var t=j(n);if(!(w(t,n)>=0)){if(H(c.clickOutsideDeactivates,n)){g.deactivate({returnFocus:c.returnFocusOnDeactivate});return}H(c.allowOutsideClick,n)||n.preventDefault()}},Z=function(n){var t=j(n),s=w(t,n)>=0;if(s||t instanceof Document)s&&(a.mostRecentlyFocusedNode=t);else{n.stopImmediatePropagation();var d,u=!0;if(a.mostRecentlyFocusedNode)if(D(a.mostRecentlyFocusedNode)>0){var v=w(a.mostRecentlyFocusedNode),p=a.containerGroups[v].tabbableNodes;if(p.length>0){var b=p.findIndex(function(h){return h===a.mostRecentlyFocusedNode});b>=0&&(c.isKeyForward(a.recentNavEvent)?b+1<p.length&&(d=p[b+1],u=!1):b-1>=0&&(d=p[b-1],u=!1))}}else a.containerGroups.some(function(h){return h.tabbableNodes.some(function(k){return D(k)>0})})||(u=!1);else u=!1;u&&(d=Q({target:a.mostRecentlyFocusedNode,isBackward:c.isKeyBackward(a.recentNavEvent)})),P(d||a.mostRecentlyFocusedNode||C())}a.recentNavEvent=void 0},Je=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=n;var s=Q({event:n,isBackward:t});s&&(z(n)&&n.preventDefault(),P(s))},_=function(n){if(it(n)&&H(c.escapeDeactivates,n)!==!1){n.preventDefault(),g.deactivate();return}(c.isKeyForward(n)||c.isKeyBackward(n))&&Je(n,c.isKeyBackward(n))},ee=function(n){var t=j(n);w(t,n)>=0||H(c.clickOutsideDeactivates,n)||H(c.allowOutsideClick,n)||(n.preventDefault(),n.stopImmediatePropagation())},te=function(){if(a.active)return je.activateTrap(l,g),a.delayInitialFocusTimer=c.delayInitialFocus?Me(function(){P(C())}):P(C()),o.addEventListener("focusin",Z,!0),o.addEventListener("mousedown",S,{capture:!0,passive:!1}),o.addEventListener("touchstart",S,{capture:!0,passive:!1}),o.addEventListener("click",ee,{capture:!0,passive:!1}),o.addEventListener("keydown",_,{capture:!0,passive:!1}),g},ie=function(){if(a.active)return o.removeEventListener("focusin",Z,!0),o.removeEventListener("mousedown",S,!0),o.removeEventListener("touchstart",S,!0),o.removeEventListener("click",ee,!0),o.removeEventListener("keydown",_,!0),g},Qe=function(n){var t=n.some(function(s){var d=Array.from(s.removedNodes);return d.some(function(u){return u===a.mostRecentlyFocusedNode})});t&&P(C())},U=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Qe):void 0,R=function(){U&&(U.disconnect(),a.active&&!a.paused&&a.containers.map(function(n){U.observe(n,{subtree:!0,childList:!0})}))};return g={get active(){return a.active},get paused(){return a.paused},activate:function(n){if(a.active)return this;var t=m(n,"onActivate"),s=m(n,"onPostActivate"),d=m(n,"checkCanFocusTrap");d||x(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=o.activeElement,t?.();var u=function(){d&&x(),te(),R(),s?.()};return d?(d(a.containers.concat()).then(u,u),this):(u(),this)},deactivate:function(n){if(!a.active)return this;var t=Ie({onDeactivate:c.onDeactivate,onPostDeactivate:c.onPostDeactivate,checkCanReturnFocus:c.checkCanReturnFocus},n);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,ie(),a.active=!1,a.paused=!1,R(),je.deactivateTrap(l,g);var s=m(t,"onDeactivate"),d=m(t,"onPostDeactivate"),u=m(t,"checkCanReturnFocus"),v=m(t,"returnFocus","returnFocusOnDeactivate");s?.();var p=function(){Me(function(){v&&P(J(a.nodeFocusedBeforeActivation)),d?.()})};return v&&u?(u(J(a.nodeFocusedBeforeActivation)).then(p,p),this):(p(),this)},pause:function(n){if(a.paused||!a.active)return this;var t=m(n,"onPause"),s=m(n,"onPostPause");return a.paused=!0,t?.(),ie(),R(),s?.(),this},unpause:function(n){if(!a.paused||!a.active)return this;var t=m(n,"onUnpause"),s=m(n,"onPostUnpause");return a.paused=!1,t?.(),x(),te(),R(),s?.(),this},updateContainerElements:function(n){var t=[].concat(n).filter(Boolean);return a.containers=t.map(function(s){return typeof s=="string"?o.querySelector(s):s}),a.active&&x(),R(),this}},g.updateContainerElements(e),g},st=globalThis.calciteConfig,ct=st?.focusTrapStack||[];function $e(i,e){let{el:r}=i,o=e?.focusTrapEl||r;if(!o)return;let l=ae(K({clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:o,setReturnFocus:c=>(pe(c),!1)},e?.focusTrapOptions),{document:r.ownerDocument,tabbableOptions:fe,trapStack:ct});i.focusTrap=ot(o,l)}function V(i,e){i.focusTrapDisabled||i.focusTrap?.activate(e)}function M(i,e){i.focusTrap?.deactivate(e)}function Ge(i){i.focusTrap?.updateContainerElements(i.el)}var qe=(i,e)=>{let r=i.level?`h${i.level}`:"div";return delete i.level,y(r,K({},i),e)};var E={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},lt="auto",Ye="aria-controls",Xe="aria-expanded",W=class{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{let{registeredElements:r}=this,o=e.find(l=>r.has(l));return r.get(o)},this.togglePopovers=e=>{let r=e.composedPath(),o=this.queryPopover(r);o&&!o.triggerDisabled&&(o.open=!o.open),Array.from(this.registeredElements.values()).filter(l=>l!==o&&l.autoClose&&l.open&&!r.includes(l)).forEach(l=>l.open=!1)},this.keyHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():Fe(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{me(e)&&this.togglePopovers(e)}}registerElement(e,r){this.registeredElementCount++,this.registeredElements.set(e,r),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}},dt=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",Ve=new W,ut=se(class extends ce{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=B(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=B(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=B(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=B(this,"calcitePopoverOpen",6),this.mutationObserver=be("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${le()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=i=>{this.transitionEl=i},this.setFilteredPlacements=()=>{let{el:i,flipPlacements:e}=this;this.filteredFlipPlacements=e?Oe(e,i):null},this.setUpReferenceElement=(i=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),Be(this,this.effectiveReferenceElement,this.el);let{el:e,referenceElement:r,effectiveReferenceElement:o}=this;i&&r&&!o&&console.warn(`${e.tagName}: reference-element id "${r}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{let{effectiveReferenceElement:i,open:e}=this;i&&"setAttribute"in i&&i.setAttribute(Xe,q(e))},this.addReferences=()=>{let{effectiveReferenceElement:i}=this;if(!i)return;let e=this.getId();"setAttribute"in i&&i.setAttribute(Ye,e),Ve.registerElement(i,this.el),this.setExpandedAttr()},this.removeReferences=()=>{let{effectiveReferenceElement:i}=this;i&&("removeAttribute"in i&&(i.removeAttribute(Ye),i.removeAttribute(Xe)),Ve.unregisterElement(i))},this.hide=()=>{this.open=!1},this.storeArrowEl=i=>{this.arrowEl=i,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=ze,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=lt,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(i){this.open&&(i?M(this):V(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(i){Y(this),i&&this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){De(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),Pe(this),Ne(this),this.setUpReferenceElement(this.hasLoaded),$e(this),this.open&&Y(this)}componentWillLoad(){return A(this,null,function*(){yield Te(this),ye(this)})}componentDidLoad(){Ee(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),ke(this),Ce(this),He(this,this.effectiveReferenceElement,this.el),M(this)}reposition(i=!1){return A(this,null,function*(){let{el:e,effectiveReferenceElement:r,placement:o,overlayPositioning:l,flipDisabled:c,filteredFlipPlacements:a,offsetDistance:g,offsetSkidding:m,arrowEl:w}=this;return Ae(this,{floatingEl:e,referenceEl:r,overlayPositioning:l,placement:o,flipDisabled:c,flipPlacements:a,offsetDistance:g,offsetSkidding:m,arrowEl:w,type:"popover"},i)})}setFocus(){return A(this,null,function*(){yield we(this),oe(this.el),he(this.el)})}updateFocusTrapElements(){return A(this,null,function*(){Ge(this)})}getReferenceElement(){let{referenceElement:i,el:e}=this;return(typeof i=="string"?ve(e,{id:i}):i)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),V(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),M(this)}renderCloseButton(){let{messages:i,closable:e}=this;return e?y("div",{class:E.closeButtonContainer,key:E.closeButtonContainer},y("calcite-action",{appearance:"transparent",class:E.closeButton,onClick:this.hide,scale:this.scale,text:i.close,ref:r=>this.closeButtonEl=r},y("calcite-icon",{icon:"x",scale:xe(this.scale)}))):null}renderHeader(){let{heading:i,headingLevel:e}=this,r=i?y(qe,{class:E.heading,level:e},i):null;return r?y("div",{class:E.header,key:E.header},r,this.renderCloseButton()):null}render(){let{effectiveReferenceElement:i,heading:e,label:r,open:o,pointerDisabled:l,floatingLayout:c}=this,a=i&&o,g=!a,m=l?null:y(Se,{floatingLayout:c,key:"floating-arrow",ref:this.storeArrowEl});return y(re,{"aria-hidden":q(g),"aria-label":r,"aria-live":"polite","calcite-hydrated-hidden":g,id:this.getId(),role:"dialog"},y("div",{class:{[X.animation]:!0,[X.animationActive]:a},ref:this.setTransitionEl},m,y("div",{class:{[E.hasHeader]:!!e,[E.container]:!0}},this.renderHeader(),y("div",{class:E.content},y("slot",null)),e?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return dt}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]}]);function ft(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,ut);break;case"calcite-action":customElements.get(e)||Le();break;case"calcite-icon":customElements.get(e)||ge();break;case"calcite-loader":customElements.get(e)||Re();break}})}ft();export{qe as a,ut as b,ft as c};