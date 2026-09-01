"use strict";var h=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var j=h(function(L,R){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/math-base-special-fast-min/dist');function I(t,a,v,q,s,i,x,r,c,f,g){var l,m,e,n,u,o,b,w;if(l=q.data,m=r.data,e=q.accessors[0],n=r.accessors[1],u=x,o=g,C([s,i])){for(w=0;w<t;w++){for(b=G(0,w+v);b<a;b++)n(m,o+b*f,e(l,u+b*i));u+=s,o+=c}return r}for(w=0;w<a;w++){for(b=0;b<=H(w-v,t-1);b++)n(m,o+b*c,e(l,u+b*s));u+=i,o+=f}return r}R.exports=I
});var p=h(function(D,V){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/array-base-arraylike2object/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist'),U=j();function W(t,a,v,q,s,i,x,r,c,f,g){var l,m,e,n,u,o;if(l=E(q),m=E(r),l.accessorProtocol||m.accessorProtocol)return U(t,a,v,l,s,i,x,m,c,f,g),r;if(e=x,n=g,J([s,i])){for(o=0;o<t;o++){for(u=K(0,o+v);u<a;u++)r[n+u*f]=q[e+u*i];e+=s,n+=c}return r}for(o=0;o<a;o++){for(u=0;u<=Q(o-v,t-1);u++)r[n+u*c]=q[e+u*s];e+=i,n+=f}return r}V.exports=W
});var O=h(function(A,F){
var X=require('@stdlib/blas-base-layout-resolve-str/dist'),Y=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=p();function _(t,a,v,q,s,i,x,r){var c,f,g,l,m,e,n;if(n=X(t),n===null)throw new TypeError(y('341Fx',t));if(c=Y(n),c?e=v:e=a,i<P(1,e))throw new RangeError(y('341JL',e,i));if(r<P(1,e))throw new RangeError(y('341GM',e,r));return c?(f=i,g=1,l=r,m=1):(f=1,g=i,l=1,m=r),Z(a,v,q,s,f,g,0,x,l,m,0)}F.exports=_
});var T=h(function(B,S){
var $=p();function M(t,a,v,q,s,i,x,r,c,f,g){return $(t,a,v,q,s,i,x,r,c,f,g)}S.exports=M
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=O(),d=T();k(z,"ndarray",d);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
