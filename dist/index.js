"use strict";var h=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var j=h(function(L,R){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/math-base-special-fast-min/dist');function I(o,a,v,q,n,i,x,r,s,c,g){var f,m,e,l,u,t,b,w;if(f=q.data,m=r.data,e=q.accessors[0],l=r.accessors[1],u=x,t=g,C([n,i])){for(w=0;w<o;w++){for(b=G(0,w+v);b<a;b++)l(m,t+b*c,e(f,u+b*i));u+=n,t+=s}return r}for(w=0;w<a;w++){for(b=0;b<=H(w-v,o-1);b++)l(m,t+b*s,e(f,u+b*n));u+=i,t+=c}return r}R.exports=I
});var p=h(function(D,V){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/array-base-arraylike2object/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist'),U=j();function W(o,a,v,q,n,i,x,r,s,c,g){var f,m,e,l,u,t;if(f=E(q),m=E(r),f.accessorProtocol||m.accessorProtocol)return U(o,a,v,f,n,i,x,m,s,c,g),r;if(e=x,l=g,J([n,i])){for(t=0;t<o;t++){for(u=K(0,t+v);u<a;u++)r[l+u*c]=q[e+u*i];e+=n,l+=s}return r}for(t=0;t<a;t++){for(u=0;u<=Q(t-v,o-1);u++)r[l+u*s]=q[e+u*n];e+=i,l+=c}return r}V.exports=W
});var O=h(function(A,F){
var X=require('@stdlib/blas-base-assert-is-layout/dist'),Y=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=p();function _(o,a,v,q,n,i,x,r){var s,c,g,f,m,e;if(!X(o))throw new TypeError(y('341Fx',o));if(s=Y(o),s?e=v:e=a,i<P(1,e))throw new RangeError(y('341JL',e,i));if(r<P(1,e))throw new RangeError(y('341GM',e,r));return s?(c=i,g=1,f=r,m=1):(c=1,g=i,f=1,m=r),Z(a,v,q,n,c,g,0,x,f,m,0)}F.exports=_
});var T=h(function(B,S){
var $=p();function M(o,a,v,q,n,i,x,r,s,c,g){return $(o,a,v,q,n,i,x,r,s,c,g)}S.exports=M
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=O(),d=T();k(z,"ndarray",d);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
