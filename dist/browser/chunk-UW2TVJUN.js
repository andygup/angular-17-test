import{a as c}from"./chunk-LGUXUFJ7.js";import{i}from"./chunk-574KRDZU.js";import{i as f,r as o}from"./chunk-465DRXTW.js";function d(t,s,e){try{return p(t)}catch(a){e?.messages?.push(a)}return null}function w(t,s,e,a){try{let r=l(t);f(e,r,s)}catch(r){a.messages&&a.messages.push(r)}}function l(t){let s=c(t);return s?i(s)?s.map(e=>e.toJSON()):s.map(({scale:e,effects:a})=>({scale:e,value:a.map(r=>r.toJSON())})):null}function p(t){if(!t||t.length===0)return null;if(m(t)){let s=[];for(let e of t)s.push({scale:e.scale,value:u(e.value)});return s}return u(t)}function m(t){let s=t[0];return!!s&&"scale"in s}function u(t){if(!t?.length)return"";let s=[];for(let e of t){let a=[];switch(e.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":a=[n(e,"amount")];break;case"blur":a=[n(e,"radius","pt")];break;case"hue-rotate":a=[n(e,"angle","deg")];break;case"drop-shadow":a=[n(e,"xoffset","pt"),n(e,"yoffset","pt"),n(e,"blurRadius","pt"),h(e,"color")];break;case"bloom":a=[n(e,"strength"),n(e,"radius","pt"),n(e,"threshold")]}let r=`${e.type}(${a.filter(Boolean).join(" ")})`;c(r),s.push(r)}return s.join(" ")}function n(t,s,e){if(t[s]==null)throw new o("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});return e?t[s]+e:""+t[s]}function h(t,s){if(t[s]==null)throw new o("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});let e=t[s];return`rgba(${e[0]||0}, ${e[1]||0}, ${e[2]||0}, ${e[3]/255||0})`}export{d as a,w as b,u as c};
