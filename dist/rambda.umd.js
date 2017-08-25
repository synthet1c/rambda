(function(c,d){typeof exports==='object'&&typeof module!=='undefined'?d(exports):typeof define==='function'&&define.amd?define(['exports'],d):d(c.R={});})(this,function(e){'use strict';function helper(g,x,y){if(x===void 0){return function(h,j){return helper(g,h,j);};}else if(y===void 0){return function(k){return helper(g,x,k);};}if(y[g]!==void 0){return y[g](x);}}var l=helper;function curry$1(m){return function(x,y){if(y===void 0){return function(n){return m(x,n);};}return m(x,y);};}var q=curry$1;function curryThree(r){return function(x,y,z){if(y===void 0){var helper=function helper(s,t){return r(x,s,t);};return q(helper);}else if(z===void 0){return function(u){return r(x,y,u);};}return r(x,y,z);};}var v=curryThree;function mathHelper(w,x,y){switch(w){case'+':return x+y;case'-':return x-y;case'/':return x/y;case'*':return x*y;case'%':return x%y;}}var A=v(mathHelper);function oppositeHelper(B,x,y){if(x===void 0){return function(C,D){return oppositeHelper(B,C,D);};}else if(y===void 0){return function(E){return oppositeHelper(B,x,E);};}if(x[B]!==void 0){return x[B](y);}}var G=oppositeHelper;function propHelper(H,x){if(x===void 0){return function(I){return propHelper(H,I);};}return x[H];}var J=propHelper;function simpleHelper(K,x){if(x===void 0){return function(L){return simpleHelper(K,L);};}if(x[K]!==void 0){return x[K]();}}var M=simpleHelper;function addIndex$1(N){return function(O){for(var P=0,newFn=function newFn(){for(var Q=arguments.length,R=Array(Q),S=0;S<Q;S++){R[S]=arguments[S];}return O.apply(null,[].concat(R,[P++]));},U=arguments.length,V=Array(U>1?U-1:0),W=1;W<U;W++){V[W-1]=arguments[W];}return N.apply(null,[newFn].concat(V));};}var X=addIndex$1;function adjust$1(Y,Z,a1){var b1=a1.concat();return b1.map(function(c1,d1){if(d1===Z){return Y(a1[Z]);}return c1;});}var e1=v(adjust$1);function any$1(fn,g1){var h1=0;while(h1<g1.length){if(fn(g1[h1])){return!0;}h1++;}return!1;}var i1=q(any$1);function append$1(j1,k1){var l1=k1.concat();l1.push(j1);return l1;}var m1=q(append$1);function filter$1(fn,o1){var p1=-1,q1=0,r1=o1.length,s1=[];while(++p1<r1){var t1=o1[p1];if(fn(t1)){s1[q1++]=t1;}}return s1;}var u1=q(filter$1);function all$1(v1,w1){if(arguments.length===1){return function(x1){return all$1(v1,x1);};}return u1(v1,w1).length===w1.length;}var y1=all$1;function allPass$1(z1,x){if(arguments.length===1){return function(A1){return allPass$1(A1,xHolder);};}return!i1(function(B1){return!B1(x);})(z1);}var C1=allPass$1;function both$1(x,y){return function(D1){return x(D1)&&y(D1);};}var E1=q(both$1);function createCommonjsModule(fn,G1){return G1={exports:{}},fn(G1,G1.exports),G1.exports;}var H1=createCommonjsModule(function(I1){var compose=function compose(){for(var J1=arguments.length,K1=Array(J1),L1=0;L1<J1;L1++){K1[L1]=arguments[L1];}return function(M1){var N1=K1.slice();while(N1.length>0){M1=N1.pop()(M1);}return M1;};};I1.exports=compose;});function type$1(a){if(a===null){return'Null';}else if(Array.isArray(a)){return'Array';}else if(typeof a==='boolean'){return'Boolean';}else if(typeof a==='number'){return'Number';}else if(typeof a==='string'){return'String';}else if(a===void 0){return'Undefined';}else if(a instanceof RegExp){return'RegExp';}var O1=a.toString();if(O1.startsWith('async')){return'Async';}else if(O1==='[object Promise]'){return'Promise';}else if(O1.includes('function')||O1.includes('=>')){return'Function';}return'Object';}var P1=type$1;function equals$1(a,b){if(a===b){return!0;}var Q1=P1(a);if(Q1!==P1(b)){return!1;}if(Q1==='Array'){var R1=Array.from(a),S1=Array.from(b);return R1.sort().toString()===S1.sort().toString();}if(Q1==='Object'){var T1=Object.keys(a);if(T1.length===Object.keys(b).length){if(T1.length===0){return!0;}var U1=!0;T1.map(function(V1){if(U1){var W1=P1(a[V1]),X1=P1(b[V1]);if(W1===X1){if(W1==='Object'){if(Object.keys(a[V1]).length===Object.keys(b[V1]).length){if(Object.keys(a[V1]).length!==0){if(!equals$1(a[V1],b[V1])){U1=!1;}}}else{U1=!1;}}else if(!equals$1(a[V1],b[V1])){U1=!1;}}else{U1=!1;}}});return U1;}}return!1;}var Y1=q(equals$1);function contains$1(Z1,a2){var b2=-1,c2=!1;while(++b2<a2.length&&!c2){if(Y1(a2[b2],Z1)){c2=!0;}}return c2;}var d2=q(contains$1),toConsumableArray=function(e2){if(Array.isArray(e2)){for(var i=0,f2=Array(e2.length);i<e2.length;i++)f2[i]=e2[i];return f2;}else{return Array.from(e2);}};function curry$3(f){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return function(){for(var g2=arguments.length,p=Array(g2),h2=0;h2<g2;h2++){p[h2]=arguments[h2];}return function(o){return o.length>=f.length?f.apply(void 0,toConsumableArray(o)):curry$3(f,o);}([].concat(toConsumableArray(a),p));};}var i2=curry$3;function defaultTo$1(j2,k2){if(arguments.length===1){return function(l2){return defaultTo$1(j2,l2);};}return k2===void 0||!(P1(k2)===P1(j2))?j2:k2;}var m2=defaultTo$1;function drop$1(n2,a){return a.slice(n2);}var o2=q(drop$1);function dropLast$1(p2,a){return a.slice(0,-p2);}var q2=q(dropLast$1);function either$1(x,y){return function(r2){return x(r2)||y(r2);};}var s2=q(either$1);function find$1(fn,u2){return u2.find(fn);}var v2=q(find$1);function findIndex$1(fn,x2){var y2=x2.length,z2=-1;while(++z2<y2){if(fn(x2[z2])){return z2;}}return-1;}var A2=q(findIndex$1);function flatten$1(B2,C2){C2=C2===void 0?[]:C2;for(var i=0;i<B2.length;i++){if(Array.isArray(B2[i])){flatten$1(B2[i],C2);}else{C2.push(B2[i]);}}return C2;}var D2=flatten$1;function has$1(E2,F2){return F2[E2]!==void 0;}var G2=q(has$1);function head$1(a){if(typeof a==='string'){return a[0]||'';}return a[0];}var H2=head$1;function ifElse$1(I2,J2,K2){return function(L2){if(I2(L2)===!0){return J2(L2);}return K2(L2);};}var M2=v(ifElse$1);function indexOf$1(N2,O2){var P2=-1,Q2=O2.length;while(++P2<Q2){if(O2[P2]===N2){return P2;}}return-1;}var R2=q(indexOf$1);function baseSlice(S2,T2,U2){var V2=-1,W2=S2.length;U2=U2>W2?W2:U2;if(U2<0){U2+=W2;}W2=T2>U2?0:U2-T2>>>0;T2>>>=0;var X2=Array(W2);while(++V2<W2){X2[V2]=S2[V2+T2];}return X2;}var Y2=baseSlice;function init$1(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?Y2(a,0,-1):[];}var Z2=init$1;function last$1(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}var a3=last$1;function map$1(fn,c3){var d3=-1,e3=c3.length,f3=Array(e3);while(++d3<e3){f3[d3]=fn(c3[d3]);}return f3;}var g3=q(map$1);function match$1(h3,i3){var j3=i3.match(h3);return j3===null?[]:j3;}var k3=q(match$1);function merge$1(l3,m3){return Object.assign({},l3,m3);}var n3=q(merge$1);function omit$1(o3,p3){if(arguments.length===1){return function(q3){return omit$1(o3,q3);};}if(!(P1(p3)==='Object')){return void 0;}if(P1(o3)==='String'){o3=o3.split(',').map(function(x){return x.trim();});}var r3={};for(var s3 in p3){if(!o3.includes(s3)){r3[s3]=p3[s3];}}return r3;}var t3=omit$1;function partialCurry$1(fn){var v3=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(w3){if(P1(fn)==='Async'||P1(fn)==='Promise'){return new Promise(function(x3,y3){fn(n3(w3,v3)).then(x3).catch(y3);});}return fn(n3(w3,v3));};}var z3=partialCurry$1;function path$1(A3,B3){if(arguments.length===1){return function(C3){return path$1(A3,C3);};}if(!(P1(B3)==='Object')){return void 0;}var D3=B3,E3=0;if(typeof A3==='string'){A3=A3.split('.');}while(E3<A3.length){if(D3===null||D3===void 0){return void 0;}D3=D3[A3[E3]];E3++;}return D3;}var F3=path$1;function pick$1(G3,H3){if(arguments.length===1){return function(I3){return pick$1(G3,I3);};}if(!(P1(H3)==='Object')){return void 0;}if(P1(G3)==='String'){G3=G3.split(',').map(function(x){return x.trim();});}var J3={},K3=0;while(K3<G3.length){if(G3[K3]in H3){J3[G3[K3]]=H3[G3[K3]];}K3++;}return J3;}var L3=pick$1;function pluck$1(M3,N3){var O3=[];g3(function(P3){if(!(P3[M3]===void 0)){O3.push(P3[M3]);}},N3);return O3;}var Q3=q(pluck$1);function prepend$1(R3,S3){var T3=S3.concat();T3.unshift(R3);return T3;}var U3=q(prepend$1);function prop$1(V3,W3){return W3[V3];}var X3=q(prop$1);function propEq$1(Y3,Z3,a4){return a4[Y3]===Z3;}var b4=v(propEq$1);function range$1(c4,d4){for(var e4=[],i=c4;i<d4;i++){e4.push(i);}return e4;}var f4=range$1;function reduce$1(fn,h4,i4){return i4.reduce(fn,h4);}var j4=v(reduce$1);function repeat$1(a,k4){var l4=Array(k4);return l4.fill(a);}var m4=q(repeat$1);function replace$1(n4,o4,p4){return p4.replace(n4,o4);}var q4=v(replace$1);function sort$1(fn,s4){var t4=s4.concat();return t4.sort(fn);}var u4=q(sort$1);function sortBy$1(fn,w4){var x4=w4.concat();return x4.sort(function(a,b){var y4=fn(a),z4=fn(b);return y4<z4?-1:y4>z4?1:0;});}var A4=q(sortBy$1);function split$1(B4,C4){return C4.split(B4);}var D4=q(split$1);function splitEvery$1(E4,a){E4=E4>1?E4:1;var F4=[],G4=0;while(G4<a.length){F4.push(a.slice(G4,G4+=E4));}return F4;}var H4=q(splitEvery$1);function tap$1(fn,J4){fn(J4);return J4;}var K4=q(tap$1);function tail$1(L4){return o2(1,L4);}var M4=tail$1;function take$1(N4,a){if(a===void 0){return function(O4){return take$1(N4,O4);};}else if(typeof a==='string'){return a.slice(0,N4);}return Y2(a,0,N4);}var P4=q(take$1);function takeLast$1(Q4,a){var R4=a.length;Q4=Q4>R4?R4:Q4;if(typeof a==='string'){return a.slice(R4-Q4);}Q4=R4-Q4;return Y2(a,Q4,R4);}var S4=q(takeLast$1);function test$1(T4,U4){return U4.search(T4)!==-1;}var V4=q(test$1);function uniq$1(W4){var X4=-1,Y4=[];while(++X4<W4.length){var Z4=W4[X4];if(!d2(Z4,Y4)){Y4.push(Z4);}}return Y4;}var a5=uniq$1;function update$1(b5,c5,d5){var e5=d5.concat();return e5.fill(c5,b5,b5+1);}var f5=v(update$1);function values$1(g5){var h5=[];for(var i5 in g5){h5.push(g5[i5]);}return h5;}var j5=values$1,k5=A('+'),l5=X,m5=e1,always=function always(x){return function(){return x;};},n5=i1,o5=m1,p5=y1,q5=C1,r5=E1,s5=H1,complement=function complement(fn){return function(u5){return!Boolean(fn(u5));};},v5=G("concat"),w5=d2,x5=i2,y5=m2,z5=A('/'),A5=o2,B5=q2,C5=s2,D5=l("endsWith"),E5=Y1,F=function F(){return!1;},F5=u1,G5=v2,H5=A2,I5=D2,J5=G2,K5=H2,identity=function identity(x){return x;},L5=M2,M5=l("includes"),N5=R2,O5=Z2,P5=l('join'),Q5=a3,R5=l("lastIndexOf"),S5=J("length"),T5=g3,U5=k3,V5=n3,W5=A('%'),X5=A('*'),not=function not(x){return!x;},Y5=t3,Z5=l('padEnd'),a6=l('padStart'),b6=z3,c6=F3,d6=L3,e6=Q3,f6=U3,g6=X3,h6=b4,i6=f4,j6=j4,k6=m4,l6=q4,m6=M('reverse'),n6=u4,o6=A4,p6=D4,q6=H4,r6=l("startsWith"),s6=A('-'),T=function T(){return!0;},t6=K4,u6=M4,v6=P4,w6=S4,x6=V4,y6=M("toLowerCase"),z6=M('toString'),A6=M("toUpperCase"),B6=M("trim"),C6=P1,D6=a5,E6=f5,F6=j5,G6={add:k5,addIndex:l5,adjust:m5,always:always,any:n5,append:o5,all:p5,allPass:q5,both:r5,compose:s5,complement:complement,concat:v5,contains:w5,curry:x5,defaultTo:y5,divide:z5,drop:A5,dropLast:B5,either:C5,endsWith:D5,equals:E5,F:F,filter:F5,find:G5,findIndex:H5,flatten:I5,has:J5,head:K5,identity:identity,ifElse:L5,includes:M5,indexOf:N5,init:O5,join:P5,last:Q5,lastIndexOf:R5,length:S5,map:T5,match:U5,merge:V5,modulo:W5,multiply:X5,not:not,omit:Y5,padEnd:Z5,padStart:a6,partialCurry:b6,path:c6,pick:d6,pluck:e6,prepend:f6,prop:g6,propEq:h6,range:i6,reduce:j6,repeat:k6,replace:l6,reverse:m6,sort:n6,sortBy:o6,split:p6,splitEvery:q6,startsWith:r6,subtract:s6,T:T,tap:t6,tail:u6,take:v6,takeLast:w6,test:x6,toLower:y6,toString:z6,toUpper:A6,trim:B6,type:C6,uniq:D6,update:E6,values:F6};e['default']=G6;e.add=k5;e.addIndex=l5;e.adjust=m5;e.always=always;e.any=n5;e.append=o5;e.all=p5;e.allPass=q5;e.both=r5;e.compose=s5;e.complement=complement;e.concat=v5;e.contains=w5;e.curry=x5;e.defaultTo=y5;e.divide=z5;e.drop=A5;e.dropLast=B5;e.either=C5;e.endsWith=D5;e.equals=E5;e.F=F;e.filter=F5;e.find=G5;e.findIndex=H5;e.flatten=I5;e.has=J5;e.head=K5;e.identity=identity;e.ifElse=L5;e.includes=M5;e.indexOf=N5;e.init=O5;e.join=P5;e.last=Q5;e.lastIndexOf=R5;e.length=S5;e.map=T5;e.match=U5;e.merge=V5;e.modulo=W5;e.multiply=X5;e.not=not;e.omit=Y5;e.padEnd=Z5;e.padStart=a6;e.partialCurry=b6;e.path=c6;e.pick=d6;e.pluck=e6;e.prepend=f6;e.prop=g6;e.propEq=h6;e.range=i6;e.reduce=j6;e.repeat=k6;e.replace=l6;e.reverse=m6;e.sort=n6;e.sortBy=o6;e.split=p6;e.splitEvery=q6;e.startsWith=r6;e.subtract=s6;e.T=T;e.tap=t6;e.tail=u6;e.take=v6;e.takeLast=w6;e.test=x6;e.toLower=y6;e.toString=z6;e.toUpper=A6;e.trim=B6;e.type=C6;e.uniq=D6;e.update=E6;e.values=F6;Object.defineProperty(e,'__esModule',{value:!0});});