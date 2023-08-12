/*! For license information please see 873.6fb66589.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[873],{1495:function(t,n,r){r.d(n,{E:function(){return Wr}});var e=r(1413),o=r(5987),i=r(9439),u=r(2791),c=r(4942);function a(t,n){if(k(t))for(var r=0;r<t.length&&!1!==n(t[r],r,t);r++);else t&&a(Object.keys(t),(function(r){return n(t[r],r,t)}));return t}function f(t,n){var r=x(n);if(E(n)||r){var e=r?"":{};if(t){var o=window.getComputedStyle(t,null);e=r?Rt(t,o,n):n.reduce((function(n,r){return n[r]=Rt(t,o,r),n}),e)}return e}t&&a(H(n),(function(r){return Pt(t,r,n[r])}))}var l,s,d=function(t,n){var r,e=t.o,o=t.u,i=t._,u=e,c=function(t,n){var e=u,c=t,a=n||(o?!o(e,c):e!==c);return(a||i)&&(u=c,r=e),[u,a,r]};return[n?function(t){return c(n(u,r),t)}:c,function(t){return[u,!!t,r]}]},v=function(){return"undefined"!==typeof window},p=v()&&Node.ELEMENT_NODE,h=Object.prototype,b=h.toString,w=h.hasOwnProperty,g=function(t){return void 0===t},y=function(t){return null===t},m=function(t){return g(t)||y(t)?"".concat(t):b.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},Z=function(t){return"number"===typeof t},x=function(t){return"string"===typeof t},S=function(t){return"boolean"===typeof t},O=function(t){return"function"===typeof t},E=function(t){return Array.isArray(t)},C=function(t){return"object"===typeof t&&!E(t)&&!y(t)},k=function(t){var n=!!t&&t.length,r=Z(n)&&n>-1&&n%1==0;return!!(E(t)||!O(t)&&r)&&(!(n>0&&C(t))||n-1 in t)},M=function(t){if(!t||!C(t)||"object"!==m(t))return!1;var n,r="constructor",e=t[r],o=e&&e.prototype,i=w.call(t,r),u=o&&w.call(o,"isPrototypeOf");if(e&&!i&&!u)return!1;for(n in t);return g(n)||w.call(t,n)},L=function(t){var n=HTMLElement;return!!t&&(n?t instanceof n:t.nodeType===p)},z=function(t){var n=Element;return!!t&&(n?t instanceof n:t.nodeType===p)},A=function(t,n,r){return t.indexOf(n,r)},I=function(t,n,r){return r||x(n)||!k(n)?t.push(n):Array.prototype.push.apply(t,n),t},R=function(t){var n=Array.from,r=[];return n&&t?n(t):(t instanceof Set?t.forEach((function(t){I(r,t)})):a(t,(function(t){I(r,t)})),r)},P=function(t){return!!t&&0===t.length},T=function(t,n,r){a(t,(function(t){return t&&t.apply(void 0,n||[])})),!r&&(t.length=0)},B=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},H=function(t){return t?Object.keys(t):[]},N=function t(n,r,e,o,i,u,c){var f=[r,e,o,i,u,c];return"object"===typeof n&&!y(n)||O(n)||(n={}),a(f,(function(r){a(H(r),(function(e){var o=r[e];if(n===o)return!0;var i=E(o);if(o&&(M(o)||i)){var u=n[e],c=u;i&&!E(u)?c=[]:i||M(u)||(c={}),n[e]=t(c,o)}else n[e]=o}))})),n},V=function(t){for(var n in t)return!1;return!0},X=function(t,n,r,e){if(g(e))return r?r[t]:n;r&&(x(e)||Z(e))&&(r[t]=e)},D=function(t,n,r){if(g(r))return t?t.getAttribute(n):null;t&&t.setAttribute(n,r)},F=function(t,n){t&&t.removeAttribute(n)},_=function(t,n,r,e){if(r){var o=D(t,n)||"",i=new Set(o.split(" "));i[e?"add":"delete"](r);var u=R(i).join(" ").trim();D(t,n,u)}},j=function(t,n){return X("scrollLeft",0,t,n)},q=function(t,n){return X("scrollTop",0,t,n)},W=v()&&Element.prototype,J=function(t,n){var r=[],e=n?z(n)?n:null:document;return e?I(r,e.querySelectorAll(t)):r},K=function(t,n){return!!z(t)&&(W.matches||W.msMatchesSelector).call(t,n)},Y=function(t){return t?R(t.childNodes):[]},G=function(t){return t?t.parentElement:null},$=function(t,n){if(z(t)){var r=W.closest;if(r)return r.call(t,n);do{if(K(t,n))return t;t=G(t)}while(t)}return null},U=function(t,n,r){var e=t&&$(t,n),o=t&&function(t,n){var r=n?z(n)?n:null:document;return r?r.querySelector(t):null}(r,e),i=$(o,n)===e;return!(!e||!o)&&(e===t||o===t||i&&$($(t,r),n)!==e)},Q=function(t,n,r){if(r&&t){var e,o=n;k(r)?(e=document.createDocumentFragment(),a(r,(function(t){t===o&&(o=t.previousSibling),e.appendChild(t)}))):e=r,n&&(o?o!==n&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(e,o||null)}},tt=function(t,n){Q(t,null,n)},nt=function(t,n){Q(G(t),t&&t.nextSibling,n)},rt=function t(n){if(k(n))a(R(n),(function(n){return t(n)}));else if(n){var r=G(n);r&&r.removeChild(n)}},et=function(t){var n=document.createElement("div");return t&&D(n,"class",t),n},ot=function(t){var n=et();return n.innerHTML=t.trim(),a(Y(n),(function(t){return rt(t)}))},it=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},ut=["-webkit-","-moz-","-o-","-ms-"],ct=["WebKit","Moz","O","MS","webkit","moz","o","ms"],at={},ft={},lt=function(t){var n=ft[t];if(B(ft,t))return n;var r=it(t),e=et().style;return a(ut,(function(o){var i=o.replace(/-/g,""),u=[t,o+t,i+r,it(i)+r];return!(n=u.find((function(t){return void 0!==e[t]})))})),ft[t]=n||""},st=function(t){if(v()){var n=at[t]||window[t];return B(at,t)||(a(ct,(function(r){return!(n=n||window[r+it(t)])})),at[t]=n),n}},dt=st("MutationObserver"),vt=st("IntersectionObserver"),pt=st("ResizeObserver"),ht=st("cancelAnimationFrame"),bt=st("requestAnimationFrame"),wt=v()&&window.setTimeout,gt=v()&&window.clearTimeout,yt=/[^\x20\t\r\n\f]+/g,mt=function(t,n,r){var e,o=t&&t.classList,i=0,u=!1;if(o&&n&&x(n)){var c=n.match(yt)||[];for(u=c.length>0;e=c[i++];)u=!!r(o,e)&&u}return u},Zt=function(t,n){mt(t,n,(function(t,n){return t.remove(n)}))},xt=function(t,n){return mt(t,n,(function(t,n){return t.add(n)})),Zt.bind(0,t,n)},St=(Math.max,function(t,n,r,e){if(t&&n){var o=!0;return a(r,(function(r){(e?e(t[r]):t[r])!==(e?e(n[r]):n[r])&&(o=!1)})),o}return!1}),Ot=function(t,n){return St(t,n,["w","h"])},Et=function(t,n){return St(t,n,["x","y"])},Ct=function(t,n){return St(t,n,["t","r","b","l"])},kt=function(t,n,r){return St(t,n,["width","height"],r&&function(t){return Math.round(t)})},Mt=function(){},Lt=function(t){var n,r=t?wt:bt,e=t?gt:ht;return[function(o){e(n),n=r(o,O(t)?t():t)},function(){return e(n)}]},zt=function(t,n){var r,e,o,i=Mt,u=n||{},c=u.v,a=u.g,f=u.p,l=function(n){i(),gt(r),r=e=void 0,i=Mt,t.apply(this,n)},s=function(t){return f&&e?f(e,t):t},d=function(){i!==Mt&&l(s(o)||o)},v=function(){var t=R(arguments),n=O(c)?c():c,u=Z(n)&&n>=0;if(u){var f=O(a)?a():a,v=Z(f)&&f>=0,p=n>0?wt:bt,h=n>0?gt:ht,b=s(t),w=b||t,g=l.bind(0,w);i();var y=p(g,n);i=function(){return h(y)},v&&!r&&(r=wt(d,f)),e=o=w}else l(t)};return v.m=d,v},At={opacity:1,zindex:1},It=function(t,n){var r=n?parseFloat(t):parseInt(t,10);return r===r?r:0},Rt=function(t,n,r){return null!=n?n[r]||n.getPropertyValue(r):t.style[r]},Pt=function(t,n,r){try{var e=t.style;g(e[n])?e.setProperty(n,r):e[n]=function(t,n){return!At[t.toLowerCase()]&&Z(n)?"".concat(n,"px"):n}(n,r)}catch(W){}},Tt=function(t){return"rtl"===f(t,"direction")},Bt=function(t,n,r){var e=n?"".concat(n,"-"):"",o=r?"-".concat(r):"",i="".concat(e,"top").concat(o),u="".concat(e,"right").concat(o),c="".concat(e,"bottom").concat(o),a="".concat(e,"left").concat(o),l=f(t,[i,u,c,a]);return{t:It(l[i],!0),r:It(l[u],!0),b:It(l[c],!0),l:It(l[a],!0)}},Ht=Math.round,Nt={w:0,h:0},Vt=function(t){return t?{w:t.offsetWidth,h:t.offsetHeight}:Nt},Xt=function(t){return t?{w:t.clientWidth,h:t.clientHeight}:Nt},Dt=function(t){return t?{w:t.scrollWidth,h:t.scrollHeight}:Nt},Ft=function(t){var n=parseFloat(f(t,"height"))||0,r=parseFloat(f(t,"width"))||0;return{w:r-Ht(r),h:n-Ht(n)}},_t=function(t){return t.getBoundingClientRect()},jt=function(t){return t.split(" ")},qt=function(t,n,r,e){a(jt(n),(function(n){t.removeEventListener(n,r,e)}))},Wt=function(t,n,r,e){var o,i=function(){if(g(l)){l=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){l=!0}}))}catch(t){}}return l}(),u=null!=(o=i&&e&&e.S)?o:i,c=e&&e.$||!1,f=e&&e.C||!1,s=[],d=i?{passive:u,capture:c}:c;return a(jt(n),(function(n){var e=f?function(o){t.removeEventListener(n,e,c),r&&r(o)}:r;I(s,qt.bind(null,t,n,e,c)),t.addEventListener(n,e,d)})),T.bind(0,s)},Jt=function(t){return t.stopPropagation()},Kt=function(t){return t.preventDefault()},Yt={x:0,y:0},Gt=function(t){var n=t?_t(t):0;return n?{x:n.left+window.pageYOffset,y:n.top+window.pageXOffset}:Yt},$t=function(t,n){a(E(n)?n:[n],t)},Ut=function(t){var n=new Map,r=function(t,r){if(t){var e=n.get(t);$t((function(t){e&&e[t?"delete":"clear"](t)}),r)}else n.forEach((function(t){t.clear()})),n.clear()},e=function t(e,o){if(x(e)){var i=n.get(e)||new Set;return n.set(e,i),$t((function(t){O(t)&&i.add(t)}),o),r.bind(0,e,o)}S(o)&&o&&r();var u=H(e),c=[];return a(u,(function(n){var r=e[n];r&&I(c,t(n,r))})),T.bind(0,c)};return e(t||{}),[e,r,function(t,r){var e=n.get(t);a(R(e),(function(t){r&&!P(r)?t.apply(0,r):t()}))}]},Qt=function(t){return JSON.stringify(t,(function(t,n){if(O(n))throw new Error;return n}))},tn={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},nn=function t(n,r){var e={};return a(H(r).concat(H(n)),(function(o){var i=n[o],u=r[o];if(C(i)&&C(u))N(e[o]={},t(i,u)),V(e[o])&&delete e[o];else if(B(r,o)&&u!==i){var c=!0;if(E(i)||E(u))try{Qt(i)===Qt(u)&&(c=!1)}catch(at){}c&&(e[o]=u)}})),e},rn="os-environment",en="".concat(rn,"-flexbox-glue"),on="".concat(en,"-max"),un="os-scrollbar-hidden",cn="data-overlayscrollbars-initialize",an="data-overlayscrollbars",fn="".concat(an,"-overflow-x"),ln="".concat(an,"-overflow-y"),sn="overflowVisible",dn="scrollbarPressed",vn="updating",pn="data-overlayscrollbars-viewport",hn="arrange",bn="scrollbarHidden",wn=sn,gn="data-overlayscrollbars-padding",yn="data-overlayscrollbars-content",mn="os-size-observer",Zn="".concat(mn,"-appear"),xn="".concat(mn,"-listener"),Sn=("".concat(xn,"-scroll"),"".concat(xn,"-item")),On=("".concat(Sn,"-final"),"os-scrollbar"),En="".concat(On,"-rtl"),Cn="".concat(On,"-horizontal"),kn="".concat(On,"-vertical"),Mn="".concat(On,"-track"),Ln="".concat(On,"-handle"),zn="".concat(On,"-visible"),An="".concat(On,"-cornerless"),In="".concat(On,"-transitionless"),Rn="".concat(On,"-interaction"),Pn="".concat(On,"-unusable"),Tn="".concat(On,"-auto-hidden"),Bn="".concat(On,"-wheel"),Hn="".concat(Mn,"-interactive"),Nn="".concat(Ln,"-interactive"),Vn={},Xn=function(){return Vn},Dn="__osSizeObserverPlugin",Fn=(Math.round,Math.abs,"__osScrollbarsHidingPlugin"),_n="__osClickScrollPlugin",jn=function(t,n,r,e){tt(t,n);var o=Xt(n),i=Vt(n),u=Ft(r);return e&&rt(n),{x:i.h-o.h+u.h,y:i.w-o.w+u.w}},qn=function(t,n){var r="hidden";f(t,{overflowX:r,overflowY:r,direction:"rtl"}),j(t,0);var e=Gt(t),o=Gt(n);j(t,-999);var i=Gt(n);return{i:e.x===o.x,n:o.x!==i.x}},Wn=function(t,n){var r=xt(t,en),e=_t(t),o=_t(n),i=kt(o,e,!0),u=xt(t,on),c=_t(t),a=_t(n),f=kt(a,c,!0);return r(),u(),i&&f},Jn=function(){var t,n=document.body,r=ot('<div class="'.concat(rn,'"><div></div></div>'))[0],e=r.firstChild,o=Ut(),u=(0,i.Z)(o,3),c=u[0],a=u[2],l=d({o:jn(n,r,e),u:Et},jn.bind(0,n,r,e,!0)),s=(0,i.Z)(l,2),v=s[0],p=(0,s[1])(),h=(0,i.Z)(p,1)[0],b=function(t){var n=!1,r=xt(t,un);try{n="none"===f(t,lt("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(e){}return r(),n}(r),w={x:0===h.x,y:0===h.y},g={elements:{host:null,padding:!b,viewport:function(t){return b&&t===t.ownerDocument.body&&t},content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},y=N({},tn),m=N.bind(0,{},y),Z=N.bind(0,{},g),x={k:h,A:w,I:b,L:"-1"===f(r,"zIndex"),B:qn(r,e),V:Wn(r,e),Y:c.bind(0,"z"),j:c.bind(0,"r"),N:Z,q:function(t){return N(g,t)&&Z()},F:m,G:function(t){return N(y,t)&&m()},X:N({},g),U:N({},y)},S=window.addEventListener,O=zt((function(t){return a(t?"z":"r")}),{v:33,g:99});(F(r,"style"),rt(r),S("resize",O.bind(0,!1)),b||w.x&&w.y)||S("resize",(function(){var n=Xn()[Fn];(t=t||n&&n.R())&&t(x,v,O.bind(0,!0))}));return x},Kn=function(){return s||(s=Jn()),s},Yn=function(t,n){return O(n)?n.apply(0,t):n},Gn=function(t,n,r,e){var o=g(e)?r:e;return Yn(t,o)||n.apply(0,t)},$n=function(t,n,r,e){var o=g(e)?r:e,i=Yn(t,o);return!!i&&(L(i)?i:n.apply(0,t))},Un=new WeakMap,Qn=function(t){return Un.get(t)},tr=function(t,n){return t?n.split(".").reduce((function(t,n){return t&&B(t,n)?t[n]:void 0}),t):void 0},nr=function(t,n,r){return function(e){return[tr(t,e),r||void 0!==tr(n,e)]}},rr=function(t){var n=t;return[function(){return n},function(t){n=N({},n,t)}]},er="tabindex",or=et.bind(0,""),ir=function(t){tt(G(t),Y(t)),rt(t)},ur=function(t){var n=Kn(),r=n.N,e=n.I,o=Xn()[Fn],i=o&&o.T,u=r().elements,c=u.host,a=u.padding,f=u.viewport,l=u.content,s=L(t),d=s?{}:t,v=d.elements||{},p=v.host,h=v.padding,b=v.viewport,w=v.content,g=s?t:d.target,y=K(g,"textarea"),m=g.ownerDocument,Z=m.documentElement,x=g===m.body,S=m.defaultView,O=Gn.bind(0,[g]),E=$n.bind(0,[g]),C=Yn.bind(0,[g]),k=O.bind(0,or,f),M=E.bind(0,or,l),z=k(b),R=z===g,P=R&&x,B=!R&&M(w),N=!R&&L(z)&&z===B,V=N&&!!C(l),X=V?k():z,j=V?B:M(),q=P?Z:N?X:z,W=y?O(or,c,p):g,J=P?q:W,$=N?j:B,U=m.activeElement,et=!R&&S.top===S&&U===g,ot={W:g,Z:J,J:q,K:!R&&E(or,a,h),tt:$,nt:!R&&!e&&i&&i(n),ot:P?Z:q,st:P?m:q,et:S,ct:m,rt:y,it:x,lt:s,ut:R,dt:N,ft:function(t,n){return function(t,n,r){var e=D(t,n)||"";return new Set(e.split(" ")).has(r)}(q,R?an:pn,R?n:t)},_t:function(t,n,r){return _(q,R?an:pn,R?n:t,r)}},it=H(ot).reduce((function(t,n){var r=ot[n];return I(t,!(!r||G(r))&&r)}),[]),ut=function(t){return t?A(it,t)>-1:null},ct=ot.W,at=ot.Z,ft=ot.K,lt=ot.J,st=ot.tt,dt=ot.nt,vt=[function(){F(at,an),F(at,cn),F(ct,cn),x&&(F(Z,an),F(Z,cn))}],pt=y&&ut(at),ht=y?ct:Y([st,lt,ft,at,ct].find((function(t){return!1===ut(t)}))),bt=P?ct:st||lt;return[ot,function(){D(at,an,R?"viewport":"host"),D(ft,gn,""),D(st,yn,""),R||D(lt,pn,"");var t=x&&!R?xt(G(g),un):Mt;if(pt&&(nt(ct,at),I(vt,(function(){nt(at,ct),rt(at)}))),tt(bt,ht),tt(at,ft),tt(ft||at,!R&&lt),tt(lt,st),I(vt,(function(){t(),F(ft,gn),F(st,yn),F(lt,fn),F(lt,ln),F(lt,pn),ut(st)&&ir(st),ut(lt)&&ir(lt),ut(ft)&&ir(ft)})),e&&!R&&(_(lt,pn,bn,!0),I(vt,F.bind(0,lt,pn))),dt&&(!function(t,n){Q(G(t),t,n)}(lt,dt),I(vt,rt.bind(0,dt))),et){var n=D(lt,er);D(lt,er,"-1"),lt.focus();var r=function(){return n?D(lt,er,n):F(lt,er)},o=Wt(m,"pointerdown keydown",(function(){r(),o()}));I(vt,[r,o])}else U&&U.focus&&U.focus();ht=0},T.bind(0,vt)]},cr=function(t,n){var r=t.tt,e=(0,i.Z)(n,1)[0];return function(t){var n=Kn().V,o=e().ht,i=t.vt,u=(r||!n)&&i;return u&&f(r,{height:o?"":"100%"}),{gt:u,wt:u}}},ar=function(t,n){var r=(0,i.Z)(n,2),e=r[0],o=r[1],u=t.Z,c=t.K,a=t.J,l=t.ut,s=d({u:Ct,o:Bt()},Bt.bind(0,u,"padding","")),v=(0,i.Z)(s,2),p=v[0],h=v[1];return function(t,n,r){var u=h(r),s=(0,i.Z)(u,2),d=s[0],v=s[1],b=Kn(),w=b.I,g=b.V,y=e().bt,m=t.gt,Z=t.wt,x=t.yt,S=n("paddingAbsolute"),O=(0,i.Z)(S,2),E=O[0],C=O[1];if(m||v||!g&&Z){var k=p(r),M=(0,i.Z)(k,2);d=M[0],v=M[1]}var L=!l&&(C||x||v);if(L){var z=!E||!c&&!w,A=d.r+d.l,I=d.t+d.b,R={marginRight:z&&!y?-A:0,marginBottom:z?-I:0,marginLeft:z&&y?-A:0,top:z?-d.t:0,right:z?y?-d.r:"auto":0,left:z?y?"auto":-d.l:0,width:z?"calc(100% + ".concat(A,"px)"):""},P={paddingTop:z?d.t:0,paddingRight:z?d.r:0,paddingBottom:z?d.b:0,paddingLeft:z?d.l:0};f(c||a,R),f(a,P),o({K:d,St:!z,P:c?P:N({},R,P)})}return{xt:L}}},fr=Math.max,lr=fr.bind(0,0),sr="visible",dr="hidden",vr={u:Ot,o:{w:0,h:0}},pr={u:Et,o:{x:dr,y:dr}},hr=function(t){return 0===t.indexOf(sr)},br=function(t,n){var r=(0,i.Z)(n,2),e=r[0],o=r[1],u=t.Z,c=t.K,a=t.J,l=t.nt,s=t.ut,v=t._t,p=t.it,h=t.et,b=Kn(),w=b.k,g=b.V,y=b.I,m=b.A,Z=Xn()[Fn],x=!s&&!y&&(m.x||m.y),S=p&&s,O=d(vr,Ft.bind(0,a)),E=(0,i.Z)(O,2),C=E[0],k=E[1],M=d(vr,Dt.bind(0,a)),L=(0,i.Z)(M,2),z=L[0],A=L[1],I=d(vr),R=(0,i.Z)(I,2),P=R[0],T=R[1],B=d(vr),H=(0,i.Z)(B,2),N=H[0],V=H[1],X=d(pr),F=(0,i.Z)(X,1)[0],j=function(t,n){if(f(a,{height:""}),n){var r=e(),o=r.St,i=r.K,c=t.$t,l=t.D,s=Ft(u),d=Xt(u),v="content-box"===f(a,"boxSizing"),p=o||v?i.b+i.t:0,h=!(m.x&&v);f(a,{height:d.h+s.h+(c.x&&h?l.x:0)-p})}},q=function(t,n){var r=y||t?0:42,e=function(t,e,o){var i=f(a,t),u="scroll"===(n?n[t]:i);return[i,u,u&&!y?e?r:o:0,e&&!!r]},o=e("overflowX",m.x,w.x),u=(0,i.Z)(o,4),c=u[0],l=u[1],s=u[2],d=u[3],v=e("overflowY",m.y,w.y),p=(0,i.Z)(v,4);return{Ct:{x:c,y:p[0]},$t:{x:l,y:p[1]},D:{x:s,y:p[2]},M:{x:d,y:p[3]}}},W=function(t,n,r,o){var i=t.D,u=t.M,c=u.x,a=u.y,f=i.x,l=i.y,s=e().P,d=n?"marginLeft":"marginRight",v=n?"paddingLeft":"paddingRight",p=s[d],h=s.marginBottom,b=s[v],w=s.paddingBottom;o.width="calc(100% + ".concat(l+-1*p,"px)"),o[d]=-l+p,o.marginBottom=-f+h,r&&(o[v]=b+(a?l:0),o.paddingBottom=w+(c?f:0))},J=Z?Z.H(x,g,a,l,e,q,W):[function(){return x},function(){return[Mt]}],K=(0,i.Z)(J,2),Y=K[0],G=K[1];return function(t,n,r){var l,d=t.gt,p=t.Ot,b=t.wt,w=t.xt,Z=t.vt,x=t.yt,O=e(),E=O.ht,M=O.bt,L=n("showNativeOverlaidScrollbars"),I=(0,i.Z)(L,2),R=I[0],B=I[1],H=n("overflow"),X=(0,i.Z)(H,2),J=X[0],K=X[1],$=R&&m.x&&m.y,U=!s&&!g&&(d||b||p||B||Z),Q=hr(J.x),tt=hr(J.y),nt=Q||tt,rt=k(r),et=A(r),ot=T(r),it=V(r);if(B&&y&&v(bn,"scrollbarHidden",!$),U&&(l=q($),j(l,E)),d||w||b||x||B){nt&&v(wn,sn,!1);var ut=G($,M,l),ct=(0,i.Z)(ut,2),at=ct[0],ft=ct[1],lt=rt=C(r),st=(0,i.Z)(lt,2),dt=st[0],vt=st[1],pt=et=z(r),ht=(0,i.Z)(pt,2),bt=ht[0],wt=ht[1],gt=Xt(a),yt=bt,mt=gt;at(),(wt||vt||B)&&ft&&!$&&Y(ft,bt,dt,M)&&(mt=Xt(a),yt=Dt(a));var Zt={w:lr(fr(bt.w,yt.w)+dt.w),h:lr(fr(bt.h,yt.h)+dt.h)},xt={w:lr((S?h.innerWidth:mt.w+lr(gt.w-bt.w))+dt.w),h:lr((S?h.innerHeight+dt.h:mt.h+lr(gt.h-bt.h))+dt.h)};it=N(xt),ot=P(function(t,n){var r=window.devicePixelRatio%1!==0?1:0,e={w:lr(t.w-n.w),h:lr(t.h-n.h)};return{w:e.w>r?e.w:0,h:e.h>r?e.h:0}}(Zt,xt),r)}var St=it,Ot=(0,i.Z)(St,2),Et=Ot[0],Ct=Ot[1],kt=ot,Mt=(0,i.Z)(kt,2),Lt=Mt[0],zt=Mt[1],At=et,It=(0,i.Z)(At,2),Rt=It[0],Pt=It[1],Tt=rt,Bt=(0,i.Z)(Tt,2),Ht=Bt[0],Nt=Bt[1],Vt={x:Lt.w>0,y:Lt.h>0},Ft=Q&&tt&&(Vt.x||Vt.y)||Q&&Vt.x&&!Vt.y||tt&&Vt.y&&!Vt.x;if(w||x||Nt||Pt||Ct||zt||K||B||U){var _t={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},jt=function(t,n,r,e){var o=function(t,n){var r=hr(t),e=n&&r&&t.replace("".concat(sr,"-"),"")||"";return[n&&!r?t:"",hr(e)?"hidden":e]},u=o(r.x,n.x),c=(0,i.Z)(u,2),a=c[0],f=c[1],l=o(r.y,n.y),s=(0,i.Z)(l,2),d=s[0],v=s[1];return e.overflowX=f&&d?f:a,e.overflowY=v&&a?v:d,q(t,e)}($,Vt,J,_t),qt=Y(jt,Rt,Ht,M);s||W(jt,M,qt,_t),U&&j(jt,E),s?(D(u,fn,_t.overflowX),D(u,ln,_t.overflowY)):f(a,_t)}_(u,an,sn,Ft),_(c,gn,"overflowVisible",Ft),s||_(a,pn,wn,nt);var Wt=F(q($).Ct),Jt=(0,i.Z)(Wt,2),Kt=Jt[0],Yt=Jt[1];return o({Ct:Kt,zt:{x:Et.w,y:Et.h},Tt:{x:Lt.w,y:Lt.h},Et:Vt}),{It:Yt,At:Ct,Lt:zt}}},wr=function(t,n,r){var e={},o=n||{};return a(H(t).concat(H(o)),(function(n){var i=t[n],u=o[n];e[n]=!!(r||i||u)})),e},gr=function(t,n,r,e){var o=!1,u=e||{},c=u.Ht,f=u.Pt,l=u.Dt,s=u.Mt,d=u.Rt,v=u.kt,p=zt((function(){o&&r(!0)}),{v:33,g:99}),h=function(t,n,r){var e,o=!1,u=function(u){if(r){var c=r.reduce((function(n,r){if(r){var e=(0,i.Z)(r,2),o=e[0],c=e[1],a=c&&o&&(u?u(o):J(o,t));a&&a.length&&c&&x(c)&&I(n,[a,c.trim()],!0)}return n}),[]);a(c,(function(r){return a(r[0],(function(i){var u=r[1],c=e.get(i)||[];if(t.contains(i)){var a=Wt(i,u,(function(t){o?(a(),e.delete(i)):n(t)}));e.set(i,I(c,a))}else T(c),e.delete(i)}))}))}};return r&&(e=new WeakMap,u()),[function(){o=!0},u]}(t,p,l),b=(0,i.Z)(h,2),w=b[0],g=b[1],y=f||[],m=(c||[]).concat(y),Z=function(o,i){var u=d||Mt,c=v||Mt,f=new Set,l=new Set,p=!1,h=!1;if(a(o,(function(r){var o=r.attributeName,i=r.target,d=r.type,v=r.oldValue,b=r.addedNodes,w=r.removedNodes,g="attributes"===d,m="childList"===d,Z=t===i,S=g&&x(o)?D(i,o):0,O=0!==S&&v!==S,E=A(y,o)>-1&&O;if(n&&(m||!Z)){var C=!g,k=g&&O,M=k&&s&&K(i,s),L=(M?!u(i,o,v,S):C||k)&&!c(r,!!M,t,e);a(b,(function(t){return f.add(t)})),a(w,(function(t){return f.add(t)})),h=h||L}!n&&Z&&O&&!u(i,o,v,S)&&(l.add(o),p=p||E)})),f.size>0&&g((function(t){return R(f).reduce((function(n,r){return I(n,J(t,r)),K(r,t)?I(n,r):n}),[])})),n)return!i&&h&&r(!1),[!1];if(l.size>0||p){var b=[R(l),p];return!i&&r.apply(0,b),b}},S=new dt((function(t){return Z(t)}));return S.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:m,subtree:n,childList:n,characterData:n}),o=!0,[function(){o&&(w(),S.disconnect(),o=!1)},function(){if(o){p.m();var t=S.takeRecords();return!P(t)&&Z(t,!0)}}]},yr=3333333,mr=function(t){return t&&(t.height||t.width)},Zr=function(t,n,r){var e=r||{},o=e.Bt,u=void 0!==o&&o,c=e.Vt,a=void 0!==c&&c,f=Xn()[Dn],l=Kn().B,s=ot('<div class="'.concat(mn,'"><div class="').concat(xn,'"></div></div>'))[0],v=s.firstChild,p=Tt.bind(0,t),h=d({o:void 0,_:!0,u:function(t,n){return!(!t||!mr(t)&&mr(n))}}),b=(0,i.Z)(h,1)[0],w=function(t){var r=E(t)&&t.length>0&&C(t[0]),e=!r&&S(t[0]),o=!1,c=!1,a=!0;if(r){var f=b(t.pop().contentRect),d=(0,i.Z)(f,3),v=d[0],p=d[2],h=mr(v);c=!mr(p)&&h,a=!(o=!p||!h)}else if(e){a=(0,i.Z)(t,2)[1]}else c=!0===t;if(u&&a){var w=e?t[0]:Tt(s);j(s,w?l.n?-yr:l.i?0:yr:yr),q(s,yr)}o||n({gt:!e,Yt:e?t:void 0,Vt:!!c})},g=[],y=!!a&&w;return[function(){T(g),rt(s)},function(){if(pt){var n=new pt(w);n.observe(v),I(g,(function(){n.disconnect()}))}else if(f){var r=f.O(v,w,a),e=(0,i.Z)(r,2),o=e[0],c=e[1];y=o,I(g,c)}if(u){var l=d({o:void 0},p),h=(0,i.Z)(l,1)[0];I(g,Wt(s,"scroll",(function(t){var n=h(),r=(0,i.Z)(n,3),e=r[0],o=r[1],u=r[2];o&&(Zt(v,"ltr rtl"),xt(v,e?"rtl":"ltr"),w([!!e,o,u])),Jt(t)})))}y&&(xt(s,Zn),I(g,Wt(s,"animationstart",y,{C:!!pt}))),(pt||f)&&tt(t,s)}]},xr=function(t,n){var r,e=et("os-trinsic-observer"),o=[],u=d({o:!1}),c=(0,i.Z)(u,1)[0],a=function(t,r){if(t){var e=c(function(t){return 0===t.h||t.isIntersecting||t.intersectionRatio>0}(t));if((0,i.Z)(e,2)[1])return!r&&n(e),[e]}},f=function(t,n){if(t&&t.length>0)return a(t.pop(),n)};return[function(){T(o),rt(e)},function(){if(vt)(r=new vt((function(t){return f(t)}),{root:t})).observe(e),I(o,(function(){r.disconnect()}));else{var n=function(){var t=Vt(e);a(t)},u=Zr(e,n),c=(0,i.Z)(u,2),l=c[0],s=c[1];I(o,l),s(),n()}tt(t,e)},function(){if(r)return f(r.takeRecords(),!0)}]},Sr="[".concat(an,"]"),Or="[".concat(pn,"]"),Er=["tabindex"],Cr=["wrap","cols","rows"],kr=["id","class","style","open"],Mr=function(t,n,r){var e,o,u,c=t.Z,f=t.J,l=t.tt,s=t.rt,v=t.ut,p=t.ft,h=t._t,b=Kn().V,w=d({u:Ot,o:{w:0,h:0}},(function(){var t=p(wn,sn),n=p(hn,""),r=n&&j(f),e=n&&q(f);h(wn,sn),h(hn,""),h("",vn,!0);var o=Dt(l),i=Dt(f),u=Ft(f);return h(wn,sn,t),h(hn,"",n),h("",vn),j(f,r),q(f,e),{w:i.w+o.w+u.w,h:i.h+o.h+u.h}})),g=(0,i.Z)(w,1)[0],y=s?Cr:kr.concat(Cr),m=zt(r,{v:function(){return e},g:function(){return o},p:function(t,n){var r=(0,i.Z)(t,1)[0],e=(0,i.Z)(n,1)[0];return[H(r).concat(H(e)).reduce((function(t,n){return t[n]=r[n]||e[n],t}),{})]}}),S=function(t){a(t||Er,(function(t){if(A(Er,t)>-1){var n=D(c,t);x(n)?D(f,t,n):F(f,t)}}))},C=function(t,e){var o=(0,i.Z)(t,2),u=o[0],c={vt:o[1]};return n({ht:u}),!e&&r(c),c},k=function(t){var e=t.gt,o=t.Yt,u=t.Vt,c=!e||u?r:m,a=!1;if(o){var f=(0,i.Z)(o,2),l=f[0];a=f[1],n({bt:l})}c({gt:e,yt:a})},M=function(t,n){var e=g(),o=(0,i.Z)(e,2)[1],u={wt:o};return o&&!n&&(t?r:m)(u),u},L=function(t,n,r){var e={Ot:n};return n?!r&&m(e):v||S(t),e},z=l||!b?xr(c,C):[Mt,Mt,Mt],R=(0,i.Z)(z,3),P=R[0],T=R[1],B=R[2],V=v?[Mt,Mt]:Zr(c,k,{Vt:!0,Bt:!0}),X=(0,i.Z)(V,2),_=X[0],W=X[1],J=gr(c,!1,L,{Pt:kr,Ht:kr.concat(Er)}),K=(0,i.Z)(J,2),Y=K[0],G=K[1],Q=v&&pt&&new pt(k.bind(0,{gt:!0}));return Q&&Q.observe(c),S(),[function(){P(),_(),u&&u[0](),Q&&Q.disconnect(),Y()},function(){W(),T()},function(){var t={},n=G(),r=B(),e=u&&u[1]();return n&&N(t,L.apply(0,I(n,!0))),r&&N(t,C.apply(0,I(r,!0))),e&&N(t,M.apply(0,I(e,!0))),t},function(t){var n=t("update.ignoreMutation"),r=(0,i.Z)(n,1)[0],c=t("update.attributes"),a=(0,i.Z)(c,2),s=a[0],d=a[1],p=t("update.elementEvents"),h=(0,i.Z)(p,2),b=h[0],w=h[1],g=t("update.debounce"),x=(0,i.Z)(g,2),S=x[0],C=x[1],k=function(t){return O(r)&&r(t)};if((w||d)&&(u&&(u[1](),u[0]()),u=gr(l||f,!0,M,{Ht:y.concat(s||[]),Dt:b,Mt:Sr,kt:function(t,n){var r=t.target,e=t.attributeName;return!(n||!e||v)&&U(r,Sr,Or)||!!$(r,".".concat(On))||!!k(t)}})),C)if(m.m(),E(S)){var L=S[0],z=S[1];e=Z(L)&&L,o=Z(z)&&z}else Z(S)?(e=S,o=!1):(e=!1,o=!1)}]},Lr={x:0,y:0},zr=function(t,n){var r=nr(n,{}),e=Ut(),o=(0,i.Z)(e,3),u=o[0],c=o[1],f=o[2],l=ur(t),s=(0,i.Z)(l,3),d=s[0],v=s[1],p=s[2],h=rr(function(t){return{K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:Lr,Tt:Lr,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:Tt(t.Z)}}(d)),b=(0,i.Z)(h,2),w=b[0],g=b[1],y=function(t,n){var r=t.W,e=t.J,o=t._t,i=t.ut,u=Kn(),c=u.I,f=u.A,l=u.V,s=!c&&(f.x||f.y),d=[cr(t,n),ar(t,n),br(t,n)];return function(t,n,u){var c=wr(N({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},n),{},u),f=s||!l,v=f&&j(e),p=f&&q(e);o("",vn,!0);var h=c;return a(d,(function(n){h=wr(h,n(h,t,!!u)||{},u)})),j(e,v),q(e,p),o("",vn),i||(j(r,0),q(r,0)),h}}(d,h),m=function(t,n,r){var e=H(t).some((function(n){return t[n]})),o=e||!V(n)||r;return o&&f("u",[t,n,r]),o},Z=Mr(d,g,(function(t){return m(y(r,t),{},!1)})),x=(0,i.Z)(Z,4),S=x[0],O=x[1],E=x[2],C=x[3],k=w.bind(0);return k.jt=function(t){return u("u",t)},k.Nt=function(){var t=d.W,n=d.J,r=j(t),e=q(t);O(),v(),j(n,r),q(n,e)},k.qt=d,[function(t,r){var e=nr(n,t,r);return C(e),m(y(e,E(),r),t,!!r)},k,function(){c(),S(),p()}]},Ar=Math.round,Ir=function(t,n){return Wt(t,"mousedown",Wt.bind(0,n,"click",Jt,{C:!0,$:!0}),{$:!0})},Rr="pointerup pointerleave pointercancel lostpointercapture",Pr=function(t,n,r,e,o,i,u){var c=Kn().B,a=e.Ft,f=e.Gt,l=e.Xt,s="scroll".concat(u?"Left":"Top"),d="client".concat(u?"X":"Y"),v=u?"width":"height",p=u?"left":"top",h=u?"w":"h",b=u?"x":"y",w=function(t,n){return function(r){var e=i().Tt,d=Vt(f)[h]-Vt(a)[h],v=n*r/d*e[b],p=Tt(l)&&u?c.n||c.i?1:-1:1;o[s]=t+v*p}};return Wt(f,"pointerdown",(function(e){var i=$(e.target,".".concat(Ln))===a,u=i?a:f;if(_(n,an,dn,!0),function(t,n,r){var e=n.scrollbars,o=t.button,i=t.isPrimary,u=t.pointerType,c=e.pointers;return 0===o&&i&&e[r?"dragScroll":"clickScroll"]&&(c||[]).includes(u)}(e,t,i)){var c=!i&&e.shiftKey,l=function(){return _t(a)},h=function(){return _t(f)},g=function(t,n){return(t||l())[p]-(n||h())[p]},y=w(o[s]||0,1/function(t){var n=_t(t),r=n.width,e=n.height,o=Vt(t),i=o.w,u=o.h;return{x:Ar(r)/i||1,y:Ar(e)/u||1}}(o)[b]),m=e[d],Z=l(),x=h(),S=Z[v],O=g(Z,x)+S/2,E=m-x[p],C=i?0:E-O,k=function(t){T(M),u.releasePointerCapture(t.pointerId)},M=[_.bind(0,n,an,dn),Wt(r,Rr,k),Wt(r,"selectstart",(function(t){return Kt(t)}),{S:!1}),Wt(f,Rr,k),Wt(f,"pointermove",(function(t){var n=t[d]-m;(i||c)&&y(C+n)}))];if(c)y(C);else if(!i){var L=Xn()[_n];L&&I(M,L.O(y,g,C,S,E))}u.setPointerCapture(e.pointerId)}}))},Tr=Math.min,Br=Math.max,Hr=Math.abs,Nr=Math.round,Vr=function(t,n,r,e){if(e){var o=r?"x":"y",i=e.Tt,u=e.zt[o],c=i[o];return Br(0,Tr(1,u/(u+c)))}var a=r?"width":"height",f=_t(t)[a],l=_t(n)[a];return Br(0,Tr(1,f/l))},Xr=function(t,n,r){var e=Kn(),o=e.N,u=e.L,l=o().scrollbars.slot,s=n.ct,d=n.W,v=n.Z,p=n.J,h=n.lt,b=n.ot,w=n.it,g=n.ut,y=((h?{}:t).scrollbars||{}).slot,m=$n([d,v,p],(function(){return g&&w?d:v}),l,y),Z=function(t,n,r){var e=r?xt:Zt;a(t,(function(t){e(t.Xt,n)}))},x=function(t,n){a(t,(function(t){var r=n(t),e=(0,i.Z)(r,2);f(e[0],e[1])}))},O=function(t,n,r){x(t,(function(t){var e=t.Ft,o=t.Gt;return[e,(0,c.Z)({},r?"width":"height","".concat((100*Vr(e,o,r,n)).toFixed(3),"%"))]}))},E=function(t,n,r){var e=r?"X":"Y";x(t,(function(t){var o=t.Ft,i=t.Gt,u=t.Xt,c=function(t,n,r,e,o,i){var u=Kn().B,c=i?"x":"y",a=i?"Left":"Top",f=e.Tt,l=Nr(f[c]),s=Hr(r["scroll".concat(a)]),d=i&&o,v=u.i?s:l-s,p=Tr(1,(d?v:s)/l),h=Vr(t,n,i);return 1/h*(1-h)*p}(o,i,b,n,Tt(u),r);return[o,{transform:c===c?"translate".concat(e,"(").concat((100*c).toFixed(3),"%)"):""}]}))},C=[],k=[],M=[],L=function(t,n,r){var e=S(r),o=!e||!r;(!e||r)&&Z(k,t,n),o&&Z(M,t,n)},z=function(t){var n=t?Cn:kn,e=t?k:M,o=P(e)?In:"",i=et("".concat(On," ").concat(n," ").concat(o)),c=et(Mn),a=et(Ln),f={Xt:i,Gt:c,Ft:a};return u||xt(i,"os-no-css-vars"),tt(i,c),tt(c,a),I(e,f),I(C,[rt.bind(0,i),r(f,L,s,v,b,t)]),f},A=z.bind(0,!0),R=z.bind(0,!1);return A(),R(),[{Ut:function(t){O(k,t,!0),O(M,t)},Wt:function(t){E(k,t,!0),E(M,t)},Zt:L,Jt:{Kt:k,Qt:A,tn:x.bind(0,k)},nn:{Kt:M,Qt:R,tn:x.bind(0,M)}},function(){tt(m,k[0].Xt),tt(m,M[0].Xt),wt((function(){L(In)}),300)},T.bind(0,C)]},Dr=function(t,n,r,e){var o,u,c,a,f,l=0,s=rr({}),d=(0,i.Z)(s,1)[0],v=Lt(),p=(0,i.Z)(v,2),h=p[0],b=p[1],w=Lt(),g=(0,i.Z)(w,2),y=g[0],m=g[1],Z=Lt(100),x=(0,i.Z)(Z,2),S=x[0],O=x[1],E=Lt(100),C=(0,i.Z)(E,2),k=C[0],M=C[1],L=Lt((function(){return l})),z=(0,i.Z)(L,2),A=z[0],I=z[1],R=Xr(t,r.qt,function(t,n){return function(r,e,o,u,c,a){var f=r.Xt,l=Lt(333),s=(0,i.Z)(l,2),d=s[0],v=s[1],p=!!c.scrollBy,h=!0;return T.bind(0,[Wt(f,"pointerenter",(function(){e(Rn,!0)})),Wt(f,"pointerleave pointercancel",(function(){e(Rn)})),Wt(f,"wheel",(function(t){var n=t.deltaX,r=t.deltaY,o=t.deltaMode;p&&h&&0===o&&G(f)===u&&c.scrollBy({left:n,top:r,behavior:"smooth"}),h=!1,e(Bn,!0),d((function(){h=!0,e(Bn)})),Kt(t)}),{S:!1,$:!0}),Ir(f,o),Pr(t,u,o,r,c,n,a),v])}}(n,r)),P=(0,i.Z)(R,3),B=P[0],H=P[1],N=P[2],V=r.qt,X=V.Z,D=V.J,F=V.ot,_=V.st,W=V.ut,J=V.it,K=B.Jt,Y=B.nn,$=B.Zt,U=B.Ut,Q=B.Wt,tt=K.tn,nt=Y.tn,rt=function(t){var n=t.Xt,r=W&&!J&&G(n)===D&&n;return[r,{transform:r?"translate(".concat(j(F),"px, ").concat(q(F),"px)"):""}]},et=function(t,n){if(I(),t)$(Tn);else{var r=function(){return $(Tn,!0)};l>0&&!n?A(r):r()}},ot=function(){(a=u)&&et(!0)},it=[O,I,M,m,b,N,Wt(X,"pointerover",ot,{C:!0}),Wt(X,"pointerenter",ot),Wt(X,"pointerleave",(function(){a=!1,u&&et(!1)})),Wt(X,"pointermove",(function(){o&&h((function(){O(),et(!0),k((function(){o&&et(!1)}))}))})),Wt(_,"scroll",(function(t){y((function(){Q(r()),c&&et(!0),S((function(){c&&!a&&et(!1)}))})),e(t),W&&tt(rt),W&&nt(rt)}))],ut=d.bind(0);return ut.qt=B,ut.Nt=H,[function(t,e,a){var s=a.At,d=a.Lt,v=a.It,p=a.yt,h=Kn().A,b=nr(n,t,e),w=r(),g=w.Tt,y=w.Ct,m=w.bt,Z=b("showNativeOverlaidScrollbars"),x=(0,i.Z)(Z,2),S=x[0],O=x[1],E=b("scrollbars.theme"),C=(0,i.Z)(E,2),k=C[0],M=C[1],L=b("scrollbars.visibility"),z=(0,i.Z)(L,2),A=z[0],I=z[1],R=b("scrollbars.autoHide"),P=(0,i.Z)(R,2),T=P[0],B=P[1],H=b("scrollbars.autoHideDelay"),N=(0,i.Z)(H,1)[0],V=b("scrollbars.dragScroll"),X=(0,i.Z)(V,2),D=X[0],F=X[1],_=b("scrollbars.clickScroll"),j=(0,i.Z)(_,2),q=j[0],W=j[1],K=s||d||p,Y=v||I,G=S&&h.x&&h.y,tt=function(t,n){var r="visible"===A||"auto"===A&&"scroll"===t;return $(zn,r,n),r};if(l=N,O&&$("os-theme-none",G),M&&($(f),$(k,!0),f=k),B&&(o="move"===T,u="leave"===T,et(!(c="never"!==T),!0)),F&&$(Nn,D),W&&$(Hn,q),Y){var nt=tt(y.x,!0),rt=tt(y.y,!1);$(An,!(nt&&rt))}K&&(U(w),Q(w),$(Pn,!g.x,!0),$(Pn,!g.y,!1),$(En,m&&!J))},ut,T.bind(0,it)]},Fr=function(t,n,r){O(t)&&t(n||void 0,r||void 0)},_r=function(t,n,r){var e=Kn(),o=e.F,u=e.N,c=e.Y,f=e.j,l=Xn(),s=L(t),d=s?t:t.target,v=Qn(d);if(n&&!v){var p=!1,h=function(t){var n=Xn().__osOptionsValidationPlugin,r=n&&n.O;return r?r(t,!0):t},b=N({},o(),h(n)),w=Ut(r),m=(0,i.Z)(w,3),Z=m[0],x=m[1],S=m[2],O=zr(t,b),E=(0,i.Z)(O,3),C=E[0],k=E[1],M=E[2],z=Dr(t,b,k,(function(t){return S("scroll",[_,t])})),A=(0,i.Z)(z,3),I=A[0],R=A[1],P=A[2],T=function(t,n){return C(t,!!n)},B=T.bind(0,{},!0),X=c(B),D=f(B),F=function(t){!function(t){Un.delete(t)}(d),X(),D(),P(),M(),p=!0,S("destroyed",[_,!!t]),x()},_={options:function(t,n){if(t){var r=n?o():{},e=nn(b,N(r,h(t)));V(e)||(N(b,e),T(e))}return N({},b)},on:Z,off:function(t,n){t&&n&&x(t,n)},state:function(){var t=k(),n=t.zt,r=t.Tt,e=t.Ct,o=t.Et,i=t.K,u=t.St,c=t.bt;return N({},{overflowEdge:n,overflowAmount:r,overflowStyle:e,hasOverflow:o,padding:i,paddingAbsolute:u,directionRTL:c,destroyed:p})},elements:function(){var t=k.qt,n=t.W,r=t.Z,e=t.K,o=t.J,i=t.tt,u=t.ot,c=t.st,a=R.qt,f=a.Jt,l=a.nn,s=function(t){var n=t.Ft,r=t.Gt;return{scrollbar:t.Xt,track:r,handle:n}},d=function(t){var n=t.Kt,r=t.Qt,e=s(n[0]);return N({},e,{clone:function(){var t=s(r());return I({},!0,{}),t}})};return N({},{target:n,host:r,padding:e||o,viewport:o,content:i||o,scrollOffsetElement:u,scrollEventElement:c,scrollbarHorizontal:d(f),scrollbarVertical:d(l)})},update:function(t){return T({},t)},destroy:F.bind(0)};return k.jt((function(t,n,r){I(n,r,t)})),function(t,n){Un.set(t,n)}(d,_),a(H(l),(function(t){return Fr(l[t],0,_)})),function(t,n,r){var e=r||{},o=e.nativeScrollbarsOverlaid,i=e.body,u=Kn(),c=u.A,a=u.I,f=n.nativeScrollbarsOverlaid,l=n.body,s=null!=o?o:f,d=g(i)?l:i,v=(c.x||c.y)&&s,p=t&&(y(d)?!a:d);return!!v||!!p}(k.qt.it,u().cancel,!s&&t.cancel)?(F(!0),_):(k.Nt(),R.Nt(),S("initialized",[_]),k.jt((function(t,n,r){var e=t.gt,o=t.yt,i=t.vt,u=t.At,c=t.Lt,a=t.It,f=t.wt,l=t.Ot;S("updated",[_,{updateHints:{sizeChanged:e,directionChanged:o,heightIntrinsicChanged:i,overflowEdgeChanged:u,overflowAmountChanged:c,overflowStyleChanged:a,contentMutation:f,hostMutation:l},changedOptions:n,force:r}])})),_.update(!0),_)}return v};_r.plugin=function(t){a(function(t){var n=[];return a(E(t)?t:[t],(function(t){a(H(t),(function(r){I(n,Vn[r]=t[r])}))})),n}(t),(function(t){return Fr(t,_r)}))},_r.valid=function(t){var n=t&&t.elements,r=O(n)&&n();return M(r)&&!!Qn(r.target)},_r.env=function(){var t=Kn(),n=t.k,r=t.A,e=t.I,o=t.B,i=t.V,u=t.L,c=t.X,a=t.U,f=t.N,l=t.q,s=t.F,d=t.G;return N({},{scrollbarsSize:n,scrollbarsOverlaid:r,scrollbarsHiding:e,rtlScrollBehavior:o,flexboxGlue:i,cssCustomProperties:u,staticDefaultInitialization:c,staticDefaultOptions:a,getDefaultInitialization:f,setDefaultInitialization:l,getDefaultOptions:s,setDefaultOptions:d})};var jr=["element","options","events","defer","children"],qr=function(){if(typeof window>"u"){var t=function(){};return[t,t]}var n,r,e=window,o="function"==typeof e.requestIdleCallback,i=e.requestAnimationFrame,u=e.cancelAnimationFrame,c=o?e.requestIdleCallback:i,a=o?e.cancelIdleCallback:u,f=function(){a(n),u(r)};return[function(t,e){f(),n=c(o?function(){f(),r=i(t)}:t,"object"==typeof e?e:{timeout:2233})},f]},Wr=(0,u.forwardRef)((function(t,n){var r=t.element,c=void 0===r?"div":r,a=t.options,f=t.events,l=t.defer,s=t.children,d=(0,o.Z)(t,jr),v=c,p=(0,u.useRef)(null),h=(0,u.useRef)(null),b=function(t){var n=t||{},r=n.options,e=n.events,o=n.defer,c=(0,u.useMemo)(qr,[]),a=(0,i.Z)(c,2),f=a[0],l=a[1],s=(0,u.useRef)(null),d=(0,u.useRef)(o),v=(0,u.useRef)(r),p=(0,u.useRef)(e);return(0,u.useEffect)((function(){d.current=o}),[o]),(0,u.useEffect)((function(){var t=s.current;v.current=r,_r.valid(t)&&t.options(r||{},!0)}),[r]),(0,u.useEffect)((function(){var t=s.current;p.current=e,_r.valid(t)&&t.on(e||{},!0)}),[e]),(0,u.useEffect)((function(){return function(){var t;l(),null==(t=s.current)||t.destroy()}}),[]),(0,u.useMemo)((function(){return[function(t){var n=s.current;if(!_r.valid(n)){var r=d.current,e=v.current||{},o=p.current||{},i=function(){return s.current=_r(t,e,o)};r?f(i,r):i()}},function(){return s.current}]}),[])}({options:a,events:f,defer:l}),w=(0,i.Z)(b,2),g=w[0],y=w[1];return(0,u.useEffect)((function(){var t=p.current,n=h.current;return t&&n&&g({target:t,elements:{viewport:n,content:n}}),function(){var t;return null==(t=y())?void 0:t.destroy()}}),[g,c]),(0,u.useImperativeHandle)(n,(function(){return{osInstance:y,getElement:function(){return p.current}}}),[]),u.createElement(v,(0,e.Z)({"data-overlayscrollbars-initialize":"",ref:p},d),u.createElement("div",{ref:h},s))}))},5951:function(){}}]);
//# sourceMappingURL=873.6fb66589.chunk.js.map