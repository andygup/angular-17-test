"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[3005],{83005:(Q,m,o)=>{o.r(m),o.d(m,{executeRelationshipQuery:()=>B,executeRelationshipQueryForCount:()=>N});var l=o(15861),R=o(15462),S=o(66476),v=o(33721),Z=o(90356);function I(n,e){const t=n.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!e?.returnCountOnly?t.outFields=t.outFields.includes("*")?"*":t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=(0,v.B9)(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}function d(){return(d=(0,l.Z)(function*(n,e,t){const u=yield x(n,e,t),r=u.data,a=r.geometryType,s=r.spatialReference,i={};for(const c of r.relatedRecordGroups){const j={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:s,hasZ:!!r.hasZ,hasM:!!r.hasM,features:c.relatedRecords};if(null!=c.objectId)i[c.objectId]=j;else for(const F of Object.keys(c))"relatedRecords"!==F&&(i[c[F]]=j)}return{...u,data:i}})).apply(this,arguments)}function f(){return(f=(0,l.Z)(function*(n,e,t){const u=yield x(n,e,t,{returnCountOnly:!0}),r=u.data,a={};for(const s of r.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return{...u,data:a}})).apply(this,arguments)}function x(n,e){return y.apply(this,arguments)}function y(){return(y=(0,l.Z)(function*(n,e,t={},u){const r=(0,Z.A)({...n.query,f:"json",...u,...I(e,u)});return(0,S.Z)(n.path+"/queryRelatedRecords",{...t,query:{...t.query,...r}})})).apply(this,arguments)}var C=o(93792),g=o(46556);function B(n,e,t){return p.apply(this,arguments)}function p(){return p=(0,l.Z)(function*(n,e,t){return e=g.default.from(e),function O(n,e,t){return d.apply(this,arguments)}((0,R.en)(n),e,t).then(r=>{const a=r.data,s={};return Object.keys(a).forEach(i=>s[i]=C.Z.fromJSON(a[i])),s})}),p.apply(this,arguments)}function N(n,e,t){return h.apply(this,arguments)}function h(){return h=(0,l.Z)(function*(n,e,t){return e=g.default.from(e),function b(n,e,t){return f.apply(this,arguments)}((0,R.en)(n),e,{...t}).then(r=>r.data)}),h.apply(this,arguments)}}}]);