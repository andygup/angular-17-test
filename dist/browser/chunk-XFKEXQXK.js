import{a as C}from"./chunk-45GFWXQC.js";import{a as L}from"./chunk-TQYOVOJO.js";import{E as x,G as I,H as l,K,r as D}from"./chunk-WMYPRHRR.js";import{R}from"./chunk-IAMDMFZ7.js";import{a as h}from"./chunk-53MWZ23O.js";import{g as A}from"./chunk-PT7S6WNL.js";import{p as m}from"./chunk-465DRXTW.js";import{a as b}from"./chunk-AC62Z3FX.js";var f=class{constructor(t,i){this._owner=i,this._properties={},this._afterDispatchHandle=null;for(let n in t){let r=t[n],s=new D(r,void 0,void 0,2,2);this._properties[n]={pool:s,acquired:[]}}this._afterDispatchHandle=x(()=>this._release())}destroy(){this._afterDispatchHandle&&(this._afterDispatchHandle.remove(),this._afterDispatchHandle=null);for(let t in this._properties){let i=this._properties[t];for(let n of i.acquired)I(n)||i.pool.release(n);i.pool.destroy(),i.pool=null,i.acquired=null}this._properties=null,this._owner=null}get(t){let i=this._owner._get(t),n=this._properties[t],r=n.pool.acquire();for(n.acquired.push(r);r===i;)n.acquired.push(r),r=n.pool.acquire();return r}_release(){for(let t in this._properties){let i=this._properties[t],n=0;for(let r of i.acquired)I(r)?i.acquired[n++]=r:i.pool.release(r);i.acquired.length=n}}};var O=b("mac")?"Meta":"Ctrl",y={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(let e=48;e<58;e++)y[e]=String.fromCharCode(e);for(let e=1;e<25;e++)y[111+e]=`F${e}`;for(let e=65;e<91;e++)y[e]=[String.fromCharCode(e+32),String.fromCharCode(e)];function Y(e){if(e.key!==void 0)return A(e);let t=y[e.keyCode];return Array.isArray(t)?e.shiftKey?t[1]:t[0]:t}function U(e){switch(e){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}return!1}var P=class{constructor(t,i=[]){this.eventType=t,this.keyModifiers=i}matches(t){if(t.type!==this.eventType)return!1;if(this.keyModifiers.length===0)return!0;let i=t.modifiers;for(let n of this.keyModifiers)if(!i.has(n))return!1;return!0}};var N=m.getLogger("esri.views.input.InputHandler"),v=class{constructor(t){this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._hasSideEffects=t}get incomingEventMatches(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(let t in this._incoming){let i=this._incoming[t];for(let n of i)this._incomingEventMatches.push(n.match)}}return this._incomingEventMatches}get incomingEventTypes(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map(t=>t.eventType)),this._incomingEventTypes}get outgoingEventTypes(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes}get hasSideEffects(){return this._hasSideEffects}get hasPendingInputs(){return!1}onInstall(t){this._manager?N.error("This InputHandler has already been registered with an InputManager"):(t.setEventCallback(i=>this._handleEvent(i)),t.setUninstallCallback(()=>this._onUninstall()),this._manager=t)}onUninstall(){}registerIncoming(t,i,n){let r;typeof i=="function"?(n=i,r=[]):r=i||[];let s=typeof t=="string"?new P(t,r):t,o=()=>{this._incomingEventTypes=null,this._incomingEventMatches=null},a=c=>{let _=this._incoming[c.match.eventType];if(_){let z=_.indexOf(c);_.splice(z,1),o(),this._manager&&this._manager.updateDependencies()}},d=new S(s,n,{onPause:a,onRemove:a,onResume:c=>{let _=this._incoming[c.match.eventType];_&&!_.includes(c)&&(_.push(c),o(),this._manager&&this._manager.updateDependencies())}}),g=this._incoming[s.eventType];return g||(g=[],this._incoming[s.eventType]=g),g.push(d),o(),this._manager&&this._manager.updateDependencies(),d}registerOutgoing(t){if(this._outgoing[t])throw new Error("There is already a callback registered for this outgoing InputEvent: "+t);let i=new M(t,{onEmit:(n,r,s,o)=>{this._manager?.emit(n.eventType,r,s,o)},onRemove:n=>{delete this._outgoing[n.eventType],this._manager?.updateDependencies()}});return this._outgoing[t]=i,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),i}startCapturingPointer(t){this._manager?.setPointerCapture(t,!0)}stopCapturingPointer(t){this._manager?.setPointerCapture(t,!1)}refreshHasPendingInputs(){this._manager?.refreshHasPendingInputs()}_onUninstall(){this._manager?(this.onUninstall(),this._manager=null):N.error("This InputHandler is not registered with an InputManager")}_handleEvent(t){let i=this._incoming[t.type];if(i){for(let n of i)if(n.match.matches(t)&&(n.callback?.(t),t.shouldStopPropagation()))break}}},S=class{constructor(t,i,n){this.match=t,this._callback=i,this._handler=n}pause(){this._handler.onPause(this)}resume(){this._handler.onResume(this)}remove(){this._handler.onRemove(this)}get callback(){return this._callback}},M=class{constructor(t,i){this.eventType=t,this._removed=!1,this._handler=i}emit(t,i,n){this._removed||this._handler.onEmit(this,t,i,n)}remove(){this._removed=!0,this._handler.onRemove(this)}};var E=class extends v{constructor(t){super(!0),this._onChange=t,this._value="mouse",this._x=null,this._y=null,this.registerIncoming("pointer-move",i=>{this._update(i.data)})}_update(t){let i=t.native.pointerType==="touch"?"touch":"mouse",{x:n,y:r}=t;i===this._value&&this._x===n&&this._y===r||(this._value=i,this._x=n,this._y=r,this._onChange(i,n,r))}};var T=class extends v{get multiTouchActive(){return this._multiTouchActive.value}constructor(){super(!0),this._activeTouchPointerIds=new Set,this._multiTouchActive=L(!1),this._onPointerAdd=({data:t})=>{t.pointerType==="touch"&&(this._activeTouchPointerIds.add(t.native.pointerId),this._update())},this._onPointerRemove=({data:t})=>{t.pointerType==="touch"&&(this._activeTouchPointerIds.delete(t.native.pointerId),this._update())},this.registerIncoming("pointer-down",this._onPointerAdd),this.registerIncoming("pointer-up",this._onPointerRemove),this.registerIncoming("pointer-capture-lost",this._onPointerRemove),this.registerIncoming("pointer-cancel",this._onPointerRemove)}_update(){this._multiTouchActive.value=this._activeTouchPointerIds.size>1}};var p=class extends K{constructor(e){super(e),this._pointerCaptures=new Map,this._nameToGroup={},this._handlers=[],this._handlersPriority=[],this._currentPropagation=null,this._updateDependenciesAfterPropagation=!1,this._sourceEvents=new Set,this._keyModifiers=new Set,this._activeKeyModifiers=new Set,this._stoppedPropagationEventIds=new Set,this.primaryKey=O,this._latestPointerType="mouse",this._propertiesPool=new f({latestPointerLocation:G},this),this.latestPointerLocation=null,this._paused=!1,this.test={timestamp:void 0,hasCurrentPropagation:()=>!!this._currentPropagation}}initialize(){this.eventSource.onEventReceived=this._onEventReceived.bind(this),this._installRecognizers()}destroy(){let e=Object.keys(this._nameToGroup);for(let t of e)this.uninstallHandlers(t);this.eventSource.destroy(),this._currentPropagation=null,this._propertiesPool.destroy()}get hasPendingInputs(){return this._handlers.some(e=>e.handler.hasPendingInputs)}get latestPointerType(){return this._latestPointerType}get multiTouchActive(){return this._multiTouchHandler.multiTouchActive}get updating(){return this.hasPendingInputs||this._paused}installHandlers(e,t,i=H.INTERNAL){if(this._nameToGroup[e])return void m.getLogger(this).error("There is already an InputHandler group registered under the name `"+e+"`");if(t.length===0)return void m.getLogger(this).error("Can't register a group of zero handlers");let n={name:e,handlers:t.map(r=>({handler:r,active:!0,removed:!1,priorityIndex:0,groupPriority:i,eventCallback:null,uninstallCallback:null}))};this._nameToGroup[e]=n;for(let r=n.handlers.length-1;r>=0;r--){let s=n.handlers[r];this._handlers.push(s),s.handler.onInstall({updateDependencies:()=>{this.updateDependencies()},emit:(o,a,d,g,c)=>{this._emitInputEvent(s.priorityIndex+1,o,a,d,c,g)},setPointerCapture:(o,a)=>{this._setPointerCapture(n,s,o,a)},setEventCallback:o=>{s.eventCallback=o},setUninstallCallback:o=>{s.uninstallCallback=o},refreshHasPendingInputs:()=>{this.notifyChange("hasPendingInputs")}})}this.updateDependencies()}uninstallHandlers(e){let t=this._nameToGroup[e];t?(t.handlers.forEach(i=>{i.removed=!0,i.uninstallCallback?.()}),delete this._nameToGroup[e],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):m.getLogger(this).error("There is no InputHandler group registered under the name `"+e+"`")}hasHandlers(e){return this._nameToGroup[e]!==void 0}updateDependencies(){if(this._currentPropagation)return void(this._updateDependenciesAfterPropagation=!0);this._updateDependenciesAfterPropagation=!1;let e=new Set,t=new Set;this._handlersPriority=[];for(let i=this._handlers.length-1;i>=0;i--){let n=this._handlers[i];n.priorityIndex=i,this._handlersPriority.push(n)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(let i=this._handlersPriority.length-1;i>=0;i--){let n=this._handlersPriority[i];n.priorityIndex=i;let r=n.handler.hasSideEffects;if(!r){for(let s of n.handler.outgoingEventTypes)if(e.has(s)){r=!0;break}}if(r)for(let s of n.handler.incomingEventMatches){e.add(s.eventType);for(let o of s.keyModifiers)U(o)||t.add(o)}n.active=r}this._sourceEvents=e,this._keyModifiers=t,this._pointerCaptures.size>0&&this._sourceEvents.add("pointer-capture-lost"),this._keyModifiers.size>0&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up")),this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)}_setLatestPointer(e,t,i){this._latestPointerType=e;let n=this._get("latestPointerLocation");if(n==null||n.x!==t||n.y!==i){let r=this._propertiesPool.get("latestPointerLocation");r.x=t,r.y=i,this._set("latestPointerLocation",r)}}_onEventReceived(e,t){if(e==="pointer-capture-lost"){let r=t;this._pointerCaptures.delete(r.native.pointerId)}this._updateKeyModifiers(e,t);let i=this.test.timestamp!=null?this.test.timestamp:t.native?t.native.timestamp:void 0,n=t.native?t.native.cancelable:void 0;this._emitInputEventFromSource(e,t,i,n)}_updateKeyModifiers(e,t){if(!t)return;let i=!1,n=()=>{if(!i){let o=new Set;this._activeKeyModifiers.forEach(a=>{o.add(a)}),this._activeKeyModifiers=o,i=!0}},r=(o,a)=>{a&&!this._activeKeyModifiers.has(o)?(n(),this._activeKeyModifiers.add(o)):!a&&this._activeKeyModifiers.has(o)&&(n(),this._activeKeyModifiers.delete(o))};if(e==="key-down"||e==="key-up"){let o=t.key;this._keyModifiers.has(o)&&r(o,e==="key-down")}let s=t.native;r("Alt",!(!s||!s.altKey)),r("Ctrl",!(!s||!s.ctrlKey)),r("Shift",!(!s||!s.shiftKey)),r("Meta",!(!s||!s.metaKey)),r("Primary",this._activeKeyModifiers.has(this.primaryKey))}_installRecognizers(){this._latestPointerHandler=new E((e,t,i)=>this._setLatestPointer(e,t,i)),this._multiTouchHandler=new T,this.installHandlers("input-manager-logic",[this._latestPointerHandler,this._multiTouchHandler],H.ALWAYS),this.recognizers.length>0&&this.installHandlers("default",this.recognizers,H.INTERNAL)}_setPointerCapture(e,t,i,n){let r=e.name+"-"+t.priorityIndex,s=this._pointerCaptures.get(i.pointerId)||new Set;this._pointerCaptures.set(i.pointerId,s),n?(s.add(r),s.size===1&&this.eventSource&&this.eventSource.setPointerCapture(i,!0)):s.has(r)&&(s.delete(r),s.size===0&&(this._pointerCaptures.delete(i.pointerId),this.eventSource&&this.eventSource.setPointerCapture(i,!1)))}_garbageCollectRemovedHandlers(){this._handlers=this._handlers.filter(e=>!e.removed),this.updateDependencies()}_emitInputEventFromSource(e,t,i,n){this._emitInputEvent(0,e,t,i,n)}_emitInputEvent(e,t,i,n,r,s){let o=n!==void 0?n:this._currentPropagation?this._currentPropagation.timestamp:performance.now(),a=r!==void 0&&r,d={event:new k(t,i,o,s||this._activeKeyModifiers,a),priorityIndex:e};this._currentPropagation?this._currentPropagation.events.push(d):this._doNewPropagation(d)}_doNewPropagation(e){this._currentPropagation={events:new C,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:e.event.timestamp},this._currentPropagation.events.push(e),this._continuePropagation()}_continuePropagation(){this._paused=!1;let e=this._currentPropagation;if(e){for(;e.events.length>0;){let{event:t,priorityIndex:i}=e.events.pop(),n=t.data?.eventId;if(!(n!=null&&this._stoppedPropagationEventIds.has(n)))for(e.currentHandler=this._handlersPriority[i];e.currentHandler;){if(e.currentHandler.removed)e.needsHandlerGarbageCollect=!0;else{if(e.currentHandler.active&&!t.shouldStopPropagation()&&e.currentHandler.eventCallback?.(t),t.shouldStopPropagation()){n!=null&&this._stoppedPropagationEventIds.add(n);break}if(t.shouldPausePropagation(()=>this._continuePropagation()))return void this._pausePropagation({event:t,priorityIndex:e.currentHandler.priorityIndex+1})}e.currentHandler=this._handlersPriority[e.currentHandler.priorityIndex+1]}}e.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers(),this.hasPendingInputs||this._stoppedPropagationEventIds.clear(),this._currentPropagation=null,this._updateDependenciesAfterPropagation&&this.updateDependencies()}}_pausePropagation(e){let t=new C;t.push(e);let i=this._currentPropagation;if(i){for(;i.events.length;)t.push(i.events.pop());i.events=t,i.currentHandler=null,this._paused=!0}}_compareHandlerPriority(e,t){if(e.handler.hasSideEffects!==t.handler.hasSideEffects)return e.handler.hasSideEffects?1:-1;if(e.groupPriority!==t.groupPriority)return e.groupPriority>t.groupPriority?-1:1;for(let i of e.handler.incomingEventMatches)for(let n of t.handler.incomingEventMatches){if(i.eventType!==n.eventType)continue;let r=i.keyModifiers.filter(s=>n.keyModifiers.includes(s));if(r.length===i.keyModifiers.length!=(r.length===n.keyModifiers.length))return i.keyModifiers.length>n.keyModifiers.length?-1:1}return e.priorityIndex>t.priorityIndex?-1:1}_sortHandlersPriority(e){let t=[];for(let i of e){let n=0;for(;n<t.length&&this._compareHandlerPriority(i,t[n])>=0;)n++;t.splice(n,0,i)}return t}get debug(){let e=t=>{let i=this._setPointerCapture;this._setPointerCapture=()=>{},t(),this._setPointerCapture=i};return{injectEvent:(t,i)=>{e(()=>{this._onEventReceived(t,i)})},disablePointerCapture:e}}};h([l({readOnly:!0})],p.prototype,"hasPendingInputs",null),h([l({constructOnly:!0})],p.prototype,"eventSource",void 0),h([l({constructOnly:!0})],p.prototype,"recognizers",void 0),h([l()],p.prototype,"_latestPointerType",void 0),h([l()],p.prototype,"latestPointerType",null),h([l()],p.prototype,"multiTouchActive",null),h([l({readOnly:!0})],p.prototype,"latestPointerLocation",void 0),h([l()],p.prototype,"_paused",void 0),h([l({readOnly:!0})],p.prototype,"updating",null),p=h([R("esri.views.input.InputManager")],p);var k=class{constructor(t,i,n,r,s){this.type=t,this.data=i,this.timestamp=n,this.modifiers=r,this.cancelable=s,this._propagationState=u.NONE,this._resumeCallback=null}stopPropagation(){this._propagationState|=u.STOPPED}shouldStopPropagation(){return(this._propagationState&u.STOPPED)!=0}async(t){this._propagationState|=u.PAUSED;let i=(n,r)=>{this._propagationState&=~u.PAUSED;let s=this._resumeCallback;if(this._resumeCallback=null,s&&s(),r)throw n;return n};return(typeof t=="function"?t():t).then(n=>i(n,!1),n=>i(n,!0))}shouldPausePropagation(t){return!!(this._propagationState&u.PAUSED)&&(this._resumeCallback=t,!0)}preventDefault(){this.data.native.preventDefault()}},u;(function(e){e[e.NONE=0]="NONE",e[e.STOPPED=1]="STOPPED",e[e.PAUSED=2]="PAUSED"})(u||(u={}));var H={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3},w=class{},G=w;export{Y as a,v as b,p as c,H as d};
