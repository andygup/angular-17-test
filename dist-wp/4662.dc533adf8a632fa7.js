"use strict";(self.webpackChunkangular_17_test=self.webpackChunkangular_17_test||[]).push([[4662],{4662:(g,h,e)=>{e.r(h),e.d(h,{executeAttachmentQuery:()=>b,fetchAttachments:()=>p,processAttachmentQueryResult:()=>I});var a=e(15861),f=e(26152),i=e(66476),m=e(6785),j=e(90356),v=e(85596);function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function I(n,t){const o={};for(const r of t){const{parentObjectId:s,parentGlobalId:l,attachmentInfos:d}=r;for(const u of d){const{id:O}=u,C=(0,m.qg)((0,f.Dp)(`${n.path}/${s}/attachments/${O}`)),_=v.Z.fromJSON(u);_.set({url:C,parentObjectId:s,parentGlobalId:l}),o[s]?o[s].push(_):o[s]=[_]}}return o}function b(n,t,o){let r={query:(0,j.A)({...n.query,f:"json",...y(t)})};return o&&(r={...o,...r,query:{...o.query,...r.query}}),(0,i.Z)(n.path+"/queryAttachments",r).then(s=>s.data.attachmentGroups)}function p(n,t,o){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)(function*(n,t,o){const{objectIds:r}=t,s=[];for(const l of r)s.push((0,i.Z)(n.path+"/"+l+"/attachments",o));return Promise.all(s).then(l=>r.map((d,u)=>({parentObjectId:d,attachmentInfos:l[u].data.attachmentInfos})))})).apply(this,arguments)}},85596:(g,h,e)=>{e.d(h,{Z:()=>t});var p,a=e(50484),f=e(89317),i=e(80543),m=e(1535),y=(e(57678),e(14007),e(10141));const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let n=p=class extends f.wq{constructor(o){super(o),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:o}=this,r=function I(o){const{exifInfo:r,exifName:s,tagName:l}=o;if(!r||!s||!l)return null;const d=r.find(u=>u.name===s);return d?function b(o){const{tagName:r,tags:s}=o;return s&&r&&s.find(d=>d.name===r)?.value||null}({tagName:l,tags:d.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:o});return c[r]||null}clone(){return new p({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,a._)([(0,i.Cb)({type:String})],n.prototype,"contentType",void 0),(0,a._)([(0,i.Cb)()],n.prototype,"exifInfo",void 0),(0,a._)([(0,i.Cb)({readOnly:!0})],n.prototype,"orientationInfo",null),(0,a._)([(0,i.Cb)({type:m.z8})],n.prototype,"id",void 0),(0,a._)([(0,i.Cb)({type:String})],n.prototype,"globalId",void 0),(0,a._)([(0,i.Cb)({type:String})],n.prototype,"keywords",void 0),(0,a._)([(0,i.Cb)({type:String})],n.prototype,"name",void 0),(0,a._)([(0,i.Cb)({json:{read:!1}})],n.prototype,"parentGlobalId",void 0),(0,a._)([(0,i.Cb)({json:{read:!1}})],n.prototype,"parentObjectId",void 0),(0,a._)([(0,i.Cb)({type:m.z8})],n.prototype,"size",void 0),(0,a._)([(0,i.Cb)({json:{read:!1}})],n.prototype,"url",void 0),n=p=(0,a._)([(0,y.j)("esri.layers.support.AttachmentInfo")],n);const t=n}}]);