import{a as h}from"./chunk-SREKDU6P.js";var x=h(),l=class{constructor(r){this.message=r}toString(){return`AssertException: ${this.message}`}};function M(t,r){if(!t){r=r||"Assertion";let f=new Error(r).stack;throw new l(`${r} at ${f}`)}}function E(t,r,f,u){let o,s=(f[0]-t[0])/r[0],a=(u[0]-t[0])/r[0];s>a&&(o=s,s=a,a=o);let e=(f[1]-t[1])/r[1],n=(u[1]-t[1])/r[1];if(e>n&&(o=e,e=n,n=o),s>n||e>a)return!1;e>s&&(s=e),n<a&&(a=n);let c=(f[2]-t[2])/r[2],i=(u[2]-t[2])/r[2];return c>i&&(o=c,c=i,i=o),!(s>i||c>a)&&(i<a&&(a=i),!(a<0))}export{M as a,E as b};