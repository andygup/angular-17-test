import{k as E}from"./chunk-RIZAJ3RX.js";function e(i){return"opened"in i?i.opened:i.open}function f(i,r=!1){(r?i[i.transitionProp]:e(i))?i.onBeforeOpen():i.onBeforeClose(),(r?i[i.transitionProp]:e(i))?i.onOpen():i.onClose()}function g(i,r=!1){E(()=>{if(i.transitionEl){let s=function(a){a.propertyName===i.openTransitionProp&&a.target===i.transitionEl&&(clearTimeout(v),i.transitionEl.removeEventListener("transitionstart",s),(r?i[i.transitionProp]:e(i))?i.onBeforeOpen():i.onBeforeClose())},t=function(a){a.propertyName===i.openTransitionProp&&a.target===i.transitionEl&&((r?i[i.transitionProp]:e(i))?i.onOpen():i.onClose(),i.transitionEl.removeEventListener("transitionend",t),i.transitionEl.removeEventListener("transitioncancel",t))};var P=s,T=t;let{transitionDuration:d,transitionProperty:o}=getComputedStyle(i.transitionEl),n=d.split(","),u=o.split(",").indexOf(i.openTransitionProp),l=n[u]??n[0];if(l==="0s"){f(i,r);return}let v=setTimeout(()=>{i.transitionEl.removeEventListener("transitionstart",s),i.transitionEl.removeEventListener("transitionend",t),i.transitionEl.removeEventListener("transitioncancel",t),f(i,r)},parseFloat(l)*1e3);i.transitionEl.addEventListener("transitionstart",s),i.transitionEl.addEventListener("transitionend",t),i.transitionEl.addEventListener("transitioncancel",t)}})}export{g as a};
