"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[8065],{58065:(d,S,f)=>{f.r(S),f.d(S,{createSymbolSchema:()=>b});var V=f(84176),i=f(43101),n=f(10827);function h(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function u(e){return(0,n.hF)(e)}function b(e,a,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function g(e,a,t){const l=(0,n.jj)(i.LW.FILL,a),s=t?u(l):l,r=e.clone(),o=r.outline,c=(0,n.jy)(a.symbologyType);c||(r.outline=null);const p={materialKey:s,hash:r.hash(),...h(r)};if(c)return p;const m=[];if(m.push(p),o){const y=(0,n.jj)(i.LW.LINE,{...a,isOutline:!0}),_={materialKey:t?u(y):y,hash:o.hash(),...h(o)};m.push(_)}return{type:"composite-symbol",layers:m,hash:m.reduce((y,_)=>_.hash+y,"")}}(e,a,t);case"simple-marker":case"picture-marker":return function K(e,a,t){if("simple-marker"===e.type&&("path"===e.style||e.outline&&"solid"!==e.outline.style&&"none"!==e.outline.style))return b({type:"CIMSymbolReference",symbol:V.B$.fromSimpleMarker(e)},a,t);const l=(0,n.jj)(i.LW.MARKER,a),s=t?u(l):l,r=h(e);return{materialKey:s,hash:e.hash(),...r,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"simple-line":return function E(e,a,t){const l=(0,n.jy)(a.symbologyType)?i.mD.DEFAULT:a.symbologyType,s=(0,n.jj)(i.LW.LINE,{...a,symbologyType:l}),r=t?u(s):s,o=e.clone(),c=o.marker;o.marker=null;const p=[];if(p.push({materialKey:r,hash:o.hash(),...h(o)}),c){const m=(0,n.jj)(i.LW.MARKER,a),y=t?u(m):m;c.color=c.color??o.color,p.push({materialKey:y,hash:c.hash(),lineWidth:o.width,...h(c)})}return{type:"composite-symbol",layers:p,hash:p.reduce((m,y)=>y.hash+m,"")}}(e,a,t);case"text":return function L(e,a,t){const l=(0,n.jj)(i.LW.TEXT,a),s=t?u(l):l,r=h(e);return{materialKey:s,hash:e.hash(),...r,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"label":return function j(e,a,t){const l=e.toJSON(),s=(0,n.jj)(i.LW.LABEL,{...a,placement:l.labelPlacement});return{materialKey:t?u(s):s,hash:e.hash(),...l,labelPlacement:l.labelPlacement}}(e,a,t);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return{...h(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);