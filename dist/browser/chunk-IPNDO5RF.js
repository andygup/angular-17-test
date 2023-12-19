import{h as Q,i as X}from"./chunk-IOMUCP7J.js";import{c as P}from"./chunk-5ZJSZISC.js";import{a as b,d as M}from"./chunk-EVB25YXG.js";import{i as g,j as x}from"./chunk-Z7J4BCLI.js";import{a as y,b as f,k as l,l as d,n as A,p as w,r as v}from"./chunk-TKTKGUCU.js";import{c as h}from"./chunk-XDTDVCGP.js";var _=class{constructor(){this._result=!1}dispose(){this._program=h(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}};var I=class extends _{constructor(s){super(),this._rctx=s;let e=`
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,r=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=s.programCache.acquire(e,r,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){let e=this._rctx;if(!e.gl)return s.dispose(),!0;let r=new g(1);r.wrapMode=d.CLAMP_TO_EDGE,r.samplingMode=l.NEAREST;let o=new M(e,r),p=b.createVertex(e,v.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),u=new P(e,new Map([["a_pos",0]]),Q,{geometry:p}),n=new g;n.samplingMode=l.LINEAR,n.wrapMode=d.CLAMP_TO_EDGE;let E=new x(e,n,a);e.useProgram(s),e.bindTexture(E,0),s.setUniform1i("u_texture",0);let T=e.getBoundFramebufferObject(),{x:S,y:R,width:U,height:L}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clearSafe(y.COLOR_BUFFER_BIT),e.bindVAO(u),e.drawArrays(f.TRIANGLE_STRIP,0,4);let c=new Uint8Array(4);return o.readPixels(0,0,1,1,A.RGBA,w.UNSIGNED_BYTE,c),u.dispose(),o.dispose(),E.dispose(),e.setViewport(S,R,U,L),e.bindFramebuffer(T),c[0]!==255}},a=new Image;a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,a.decode();var m=class{constructor(s,e,r,o,p,u,n,E,T){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=r,this.getResult=o,this.disjoint=p,this.beginTimeElapsed=u,this.endTimeElapsed=n,this.createTimestamp=E,this.timestampBits=T}},i=!1;function J(t,s){if(s.disjointTimerQuery)return null;let e=t.getExtension("EXT_disjoint_timer_query_webgl2");return e&&X(t)?new m(()=>t.createQuery(),r=>{t.deleteQuery(r),i=!1},r=>t.getQueryParameter(r,t.QUERY_RESULT_AVAILABLE),r=>t.getQueryParameter(r,t.QUERY_RESULT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,t.beginQuery(e.TIME_ELAPSED_EXT,r))},()=>{t.endQuery(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>t.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=t.getExtension("EXT_disjoint_timer_query"),e?new m(()=>e.createQueryEXT(),r=>{e.deleteQueryEXT(r),i=!1},r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_AVAILABLE_EXT),r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_EXT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}export{J as a,_ as b,I as c};
