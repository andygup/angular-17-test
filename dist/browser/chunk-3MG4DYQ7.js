import{a as R}from"./chunk-Q7TY7XC3.js";import{a as M,b as W,m as P}from"./chunk-XZCX6BPD.js";import{b as D,c as B,d as E}from"./chunk-MYYAF3XU.js";import{e as j}from"./chunk-DWAHQUVA.js";import{b as A}from"./chunk-JV7BL2Y3.js";import"./chunk-VGW7YJZ7.js";import"./chunk-UW2TVJUN.js";import"./chunk-LGUXUFJ7.js";import"./chunk-MYELF7MV.js";import"./chunk-MS3ZOARX.js";import"./chunk-KCKP7FIY.js";import"./chunk-7K4WIBFN.js";import"./chunk-PUCLHWWW.js";import"./chunk-DMYB246F.js";import{d as L}from"./chunk-C7M5MSEL.js";import{a as F}from"./chunk-HPJ6EQFO.js";import"./chunk-O5K35OSE.js";import"./chunk-D6LLE2YP.js";import"./chunk-QAVDKCSH.js";import"./chunk-H2AOS66Z.js";import"./chunk-CJJRHJ2S.js";import"./chunk-574KRDZU.js";import"./chunk-JOYABHZZ.js";import"./chunk-VDN3XKL2.js";import"./chunk-SVEGZVCP.js";import{a as y,b as O}from"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-6MGDEI2H.js";import"./chunk-QSGARGRB.js";import"./chunk-SREKDU6P.js";import"./chunk-IXIJFOEL.js";import"./chunk-QZ4L25WE.js";import"./chunk-4ATIL3QV.js";import"./chunk-WUM4JBII.js";import"./chunk-U62SHMHB.js";import"./chunk-55ESOXMJ.js";import"./chunk-BCREO4Q5.js";import"./chunk-EJ3VIBAJ.js";import"./chunk-4LHUJTP5.js";import"./chunk-NBRBW7H5.js";import"./chunk-OOYAVZJN.js";import"./chunk-CBOFHDSC.js";import"./chunk-HB7BVTLV.js";import"./chunk-WZKL6OPG.js";import"./chunk-WF37UVOV.js";import"./chunk-UZQ577CU.js";import"./chunk-FC3MPJI4.js";import"./chunk-5ETRXDS4.js";import"./chunk-QDNKD3H5.js";import"./chunk-B4PK7RBX.js";import"./chunk-6J4Y65BV.js";import"./chunk-RXHILZH7.js";import"./chunk-PEPXQ7N3.js";import"./chunk-VU5W7W6Y.js";import"./chunk-6QIKBCPR.js";import"./chunk-AHKJJNRE.js";import"./chunk-HBTOKQC5.js";import"./chunk-A52LT7YB.js";import"./chunk-CZPMRK53.js";import"./chunk-IDSF2RZ6.js";import"./chunk-2BBIRZVO.js";import"./chunk-WQAXQD4X.js";import"./chunk-IUPUERVS.js";import"./chunk-XF4NUYV7.js";import"./chunk-FNDPIYNC.js";import"./chunk-WMYPRHRR.js";import"./chunk-IAMDMFZ7.js";import"./chunk-53MWZ23O.js";import"./chunk-PT7S6WNL.js";import"./chunk-XDTDVCGP.js";import"./chunk-JPDAKIWT.js";import{r as q}from"./chunk-465DRXTW.js";import"./chunk-AC62Z3FX.js";import{a as k,b as x,g as S}from"./chunk-ESDYQQXO.js";var H="picture-fill",J="picture-marker",K="simple-fill",N="simple-line",Q="simple-marker",X="text",Y="Aa",_=M.size,C=M.maxSize,$=M.maxOutlineSize,ee=M.lineWidth,U=225,te=document.createElement("canvas");function G(t,e){let l=te.getContext("2d"),a=[];return e&&(e.weight&&a.push(e.weight),e.size&&a.push(e.size+"px"),e.family&&a.push(e.family)),l.font=a.join(" "),l.measureText(t).width}var ae=7.2/2.54,le=72/2.54;function ne(t){if(t.length===0)return 0;if(t.length>2){let e=O(1),l=parseFloat(t);switch(t.slice(-2)){case"px":return l;case"pt":return l*e;case"in":return 72*l*e;case"pc":return 12*l*e;case"mm":return l*ae*e;case"cm":return l*le*e}}return parseFloat(t)}function z(t){let e=t?.size;return{width:e!=null&&typeof e=="object"&&"width"in e?y(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?y(e.height):null}}function oe(t,e){return S(this,null,function*(){let l=e.fill,a=t.color;if(l?.type==="pattern"&&a&&t.type!==H){let r=yield B(l.src,a.toCss(!0));l.src=r,e.fill=l}})}function ie(t,e,l,a){return S(this,null,function*(){if(!("font"in t)||!t.font||e.shape.type!=="text")return;try{yield A(t.font)}catch{}let{width:r}=z(a),s=/[\uE600-\uE6FF]/.test(e.shape.text);r!=null||s||(l[0]=G(e.shape.text,{weight:e.font?.weight,size:e.font?.size,family:e.font?.family}))})}function se(t,e,l,a,r){if(t.haloColor!=null&&t.haloSize!=null){r.masking??=l.map(()=>[]);let s=y(t.haloSize);a[0]+=s,a[1]+=s,l.unshift([x(k({},e),{fill:null,stroke:{color:t.haloColor,width:2*s,join:"round",cap:"round"}})]),r.masking.unshift([{shape:{type:"rect",x:0,y:0,width:a[0]+2*L,height:a[1]+2*L},fill:[255,255,255],stroke:null},x(k({},e),{fill:[0,0,0,0],stroke:null})])}t.backgroundColor==null&&t.borderLineColor==null||(a[0]+=2*L,a[1]+=2*L,l.unshift([{shape:{type:"rect",x:0,y:0,width:a[0],height:a[1]},fill:t.backgroundColor,stroke:{color:t.borderLineColor,width:y(t.borderLineSize)}}]),r.masking?.unshift([]))}function V(t,e){return t>e?"dark":"light"}function re(t,e){let l=typeof e?.size=="number"?e?.size:null,a=l!=null?y(l):null,r=e?.maxSize!=null?y(e.maxSize):null,s=e?.rotation!=null?e.rotation:"angle"in t?t.angle:null,g=D(t),m=E(t);ce(t,245)!=="dark"||e?.ignoreWhiteSymbols||(m=x(k({width:.75},m),{color:"#bdc3c7"}));let h={shape:null,fill:g,stroke:m,offset:[0,0]};m?.width&&(m.width=Math.min(m.width,$));let p=m?.width||0,w=e?.size!=null&&(e?.scale==null||e?.scale),n=0,o=0,v=!1;switch(t.type){case Q:{let c=t.style,{width:u,height:i}=z(e),b=u===i&&u!=null?u:a??Math.min(y(t.size),r||C);switch(n=b,o=b,c){case"circle":h.shape={type:"circle",cx:0,cy:0,r:.5*b},w||(n+=p,o+=p);break;case"cross":h.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[n,.5*o]},{command:"M",values:[.5*n,0]},{command:"L",values:[.5*n,o]}]};break;case"diamond":h.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,.5*o]},{command:"L",values:[.5*n,o]},{command:"Z",values:[]}]},w||(n+=p,o+=p);break;case"square":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},w||(n+=p,o+=p),s&&(v=!0);break;case"triangle":h.shape={type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[n,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},w||(n+=p,o+=p),s&&(v=!0);break;case"x":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,o]},{command:"M",values:[n,0]},{command:"L",values:[0,o]}]},s&&(v=!0);break;case"path":h.shape={type:"path",path:t.path||""},w||(n+=p,o+=p),s&&(v=!0),w=!0}break}case N:{let{width:c,height:u}=z(e),i=u??a??p,b=c??ee;m&&(m.width=i),n=b,o=i;let f=h?.stroke?.cap||"butt",d=f==="round";w=!0,h.stroke&&(h.stroke.cap=f==="butt"?"square":f),h.shape={type:"path",path:[{command:"M",values:[d?i/2:0,o/2]},{command:"L",values:[d?n-i/2:n,o/2]}]};break}case H:case K:{let c=typeof e?.symbolConfig=="object"&&!!e?.symbolConfig?.isSquareFill,{width:u,height:i}=z(e);n=!c&&u!==i||u==null?a??_:u,o=!c&&u!==i||i==null?n:i,w||(n+=p,o+=p),w=!0,h.shape=c?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,o]},{command:"L",values:[0,o]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:W.fill[0];break}case J:{let c=Math.min(y(t.width),r||C),u=Math.min(y(t.height),r||C),{width:i,height:b}=z(e),f=i===b&&i!=null?i:a??Math.max(c,u),d=c/u;n=d<=1?Math.ceil(f*d):f,o=d<=1?f:Math.ceil(f/d),h.shape={type:"image",x:-Math.round(n/2),y:-Math.round(o/2),width:n,height:o,src:t.url||""},s&&(v=!0);break}case X:{let c=t,u=e?.overrideText||c.text||Y,i=c.font,{width:b,height:f}=z(e),d=f??a??Math.min(y(i.size),r||C),I=G(u,{weight:i.weight,size:d,family:i.family}),T=/[\uE600-\uE6FF]/.test(u);n=b??(T?d:I),o=d;let Z=.25*ne((i?d:0).toString());T&&(Z+=5),h.shape={type:"text",text:u,x:c.xoffset||0,y:c.yoffset||Z,align:"middle",alignBaseline:c.verticalAlignment,decoration:i&&i.decoration,rotated:c.rotated,kerning:c.kerning},h.font=i&&{size:d,style:i.style,decoration:i.decoration,weight:i.weight,family:i.family};break}}return{shapeDescriptor:h,size:[n,o],renderOptions:{node:e?.node,scale:w,opacity:e?.opacity,rotation:s,useRotationSize:v,effectView:e?.effectView,ariaLabel:e?.ariaLabel}}}function be(t,e){return S(this,null,function*(){let{shapeDescriptor:l,size:a,renderOptions:r}=re(t,e);if(!l.shape)throw new q("symbolPreview: renderPreviewHTML2D","symbol not supported.");yield oe(t,l),yield ie(t,l,a,e);let s=[[l]];if(typeof e?.symbolConfig=="object"&&e?.symbolConfig?.applyColorModulation){let g=.6*a[0];s.unshift([x(k({},l),{offset:[-g,0],fill:P(l.fill,-.3)})]),s.push([x(k({},l),{offset:[g,0],fill:P(l.fill,.3)})]),a[0]+=2*g,r.scale=!1}return t.type==="text"&&se(t,l,s,a,r),R(s,a,r)})}function ce(t,e=U){let l=D(t),a=E(t),r=!l||"type"in l?null:new F(l),s=a?.color?new F(a?.color):null,g=r?V(j(r),e):null,m=s?V(j(s),e):null;return m?g?g===m?g:e>=U?"light":"dark":m:g}export{ce as getContrastingBackgroundTheme,re as getRenderSymbolParameters,be as previewSymbol2D};
