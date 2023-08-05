"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[826],{4826:function(e,n,t){t.d(n,{Z:function(){return ke}});var o=t(9439),r=t(3366),i=t(7462),a=t(2791),s=t(3733),l=t(6117),u=t(4913),c=t(7054),d=t(8949),f=t(4419),p=t(4164),v=t(2876),m=t(2971),h=t(3329);var b=a.forwardRef((function(e,n){var t=e.children,r=e.container,i=e.disablePortal,s=void 0!==i&&i,u=a.useState(null),c=(0,o.Z)(u,2),d=c[0],f=c[1],b=(0,l.Z)(a.isValidElement(t)?t.ref:null,n);if((0,v.Z)((function(){s||f(function(e){return"function"===typeof e?e():e}(r)||document.body)}),[r,s]),(0,v.Z)((function(){if(d&&!s)return(0,m.Z)(n,d),function(){(0,m.Z)(n,null)}}),[n,d,s]),s){if(a.isValidElement(t)){var E={ref:b};return a.cloneElement(t,E)}return(0,h.jsx)(a.Fragment,{children:t})}return(0,h.jsx)(a.Fragment,{children:d?p.createPortal(t,d):d})})),E=t(5671),x=t(3144),y=t(3433),k=t(5202);function g(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Z(e){return parseInt((0,k.Z)(e).getComputedStyle(e).paddingRight,10)||0}function S(e,n,t,o,r){var i=[n,t].concat((0,y.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===i.indexOf(e),t=!function(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}(e);n&&t&&g(e,r)}))}function R(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function T(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,u.Z)(e);return n.body===e?(0,k.Z)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=function(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}((0,u.Z)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(Z(o)+r,"px");var i=(0,u.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(i,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(Z(e)+r,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=(0,u.Z)(o).body;else{var s=o.parentElement,l=(0,k.Z)(o);a="HTML"===(null==s?void 0:s.nodeName)&&"scroll"===l.getComputedStyle(s).overflowY?s:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var C=function(){function e(){(0,E.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,x.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&g(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);S(n,e.mount,e.modalRef,o,!0);var r=R(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=R(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=T(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=R(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&g(e.modalRef,n),S(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&g(i.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),N=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function P(e){var n=[],t=[];return Array.from(e.querySelectorAll(N)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function w(){return!0}var O=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,i=void 0!==r&&r,s=e.disableRestoreFocus,c=void 0!==s&&s,d=e.getTabbable,f=void 0===d?P:d,p=e.isEnabled,v=void 0===p?w:p,m=e.open,b=a.useRef(!1),E=a.useRef(null),x=a.useRef(null),y=a.useRef(null),k=a.useRef(null),g=a.useRef(!1),Z=a.useRef(null),S=(0,l.Z)(n.ref,Z),R=a.useRef(null);a.useEffect((function(){m&&Z.current&&(g.current=!o)}),[o,m]),a.useEffect((function(){if(m&&Z.current){var e=(0,u.Z)(Z.current);return Z.current.contains(e.activeElement)||(Z.current.hasAttribute("tabIndex")||Z.current.setAttribute("tabIndex","-1"),g.current&&Z.current.focus()),function(){c||(y.current&&y.current.focus&&(b.current=!0,y.current.focus()),y.current=null)}}}),[m]),a.useEffect((function(){if(m&&Z.current){var e=(0,u.Z)(Z.current),n=function(n){var t=Z.current;if(null!==t)if(e.hasFocus()&&!i&&v()&&!b.current){if(!t.contains(e.activeElement)){if(n&&k.current!==n.target||e.activeElement!==k.current)k.current=null;else if(null!==k.current)return;if(!g.current)return;var o=[];if(e.activeElement!==E.current&&e.activeElement!==x.current||(o=f(Z.current)),o.length>0){var r,a,s=Boolean((null==(r=R.current)?void 0:r.shiftKey)&&"Tab"===(null==(a=R.current)?void 0:a.key)),l=o[0],u=o[o.length-1];"string"!==typeof l&&"string"!==typeof u&&(s?u.focus():l.focus())}else t.focus()}}else b.current=!1},t=function(n){R.current=n,!i&&v()&&"Tab"===n.key&&e.activeElement===Z.current&&n.shiftKey&&(b.current=!0,x.current&&x.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);var o=setInterval((function(){e.activeElement&&"BODY"===e.activeElement.tagName&&n(null)}),50);return function(){clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}}),[o,i,c,v,m,f]);var T=function(e){null===y.current&&(y.current=e.relatedTarget),g.current=!0};return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("div",{tabIndex:m?0:-1,onFocus:T,ref:E,"data-testid":"sentinelStart"}),a.cloneElement(n,{ref:S,onFocus:function(e){null===y.current&&(y.current=e.relatedTarget),g.current=!0,k.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,h.jsx)("div",{tabIndex:m?0:-1,onFocus:T,ref:x,"data-testid":"sentinelEnd"})]})},F=t(5878),M=t(1217);function A(e){return(0,M.Z)("MuiModal",e)}(0,F.Z)("MuiModal",["root","hidden","backdrop"]);function I(e){return"string"===typeof e}function D(e){if(void 0===e)return{};var n={};return Object.keys(e).filter((function(n){return!(n.match(/^on[A-Z]/)&&"function"===typeof e[n])})).forEach((function(t){n[t]=e[t]})),n}function L(e){var n=e.getSlotProps,t=e.additionalProps,o=e.externalSlotProps,r=e.externalForwardedProps,a=e.className;if(!n){var l=(0,s.Z)(null==r?void 0:r.className,null==o?void 0:o.className,a,null==t?void 0:t.className),u=(0,i.Z)({},null==t?void 0:t.style,null==r?void 0:r.style,null==o?void 0:o.style),c=(0,i.Z)({},t,r,o);return l.length>0&&(c.className=l),Object.keys(u).length>0&&(c.style=u),{props:c,internalRef:void 0}}var d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};var t={};return Object.keys(e).filter((function(t){return t.match(/^on[A-Z]/)&&"function"===typeof e[t]&&!n.includes(t)})).forEach((function(n){t[n]=e[n]})),t}((0,i.Z)({},r,o)),f=D(o),p=D(r),v=n(d),m=(0,s.Z)(null==v?void 0:v.className,null==t?void 0:t.className,a,null==r?void 0:r.className,null==o?void 0:o.className),h=(0,i.Z)({},null==v?void 0:v.style,null==t?void 0:t.style,null==r?void 0:r.style,null==o?void 0:o.style),b=(0,i.Z)({},v,t,p,f);return m.length>0&&(b.className=m),Object.keys(h).length>0&&(b.style=h),{props:b,internalRef:v.ref}}function B(e,n,t){return"function"===typeof e?e(n,t):e}var j=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function K(e){var n,t=e.elementType,o=e.externalSlotProps,a=e.ownerState,s=e.skipResolvingSlotProps,u=void 0!==s&&s,c=(0,r.Z)(e,j),d=u?{}:B(o,a),f=L((0,i.Z)({},c,{externalSlotProps:d})),p=f.props,v=f.internalRef,m=(0,l.Z)(v,null==d?void 0:d.ref,null==(n=e.additionalProps)?void 0:n.ref),h=function(e,n,t){return void 0===e||I(e)?n:(0,i.Z)({},n,{ownerState:(0,i.Z)({},n.ownerState,t)})}(t,(0,i.Z)({},p,{ref:m}),a);return h}var U={disableDefaultClasses:!1},W=a.createContext(U);var H=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],Y=function(e){var n=e.open,t=e.exited,o={root:["root",!n&&t&&"hidden"],backdrop:["backdrop"]};return(0,f.Z)(o,function(e){var n=a.useContext(W).disableDefaultClasses;return function(t){return n?"":e(t)}}(A))};var _=new C,q=a.forwardRef((function(e,n){var t,s,f=e.children,p=e.closeAfterTransition,v=void 0!==p&&p,m=e.container,E=e.disableAutoFocus,x=void 0!==E&&E,y=e.disableEnforceFocus,k=void 0!==y&&y,Z=e.disableEscapeKeyDown,S=void 0!==Z&&Z,R=e.disablePortal,T=void 0!==R&&R,C=e.disableRestoreFocus,N=void 0!==C&&C,P=e.disableScrollLock,w=void 0!==P&&P,F=e.hideBackdrop,M=void 0!==F&&F,A=e.keepMounted,I=void 0!==A&&A,D=e.manager,L=void 0===D?_:D,B=e.onBackdropClick,j=e.onClose,U=e.onKeyDown,W=e.open,q=e.onTransitionEnter,z=e.onTransitionExited,G=e.slotProps,V=void 0===G?{}:G,X=e.slots,J=void 0===X?{}:X,Q=(0,r.Z)(e,H),$=L,ee=a.useState(!W),ne=(0,o.Z)(ee,2),te=ne[0],oe=ne[1],re=a.useRef({}),ie=a.useRef(null),ae=a.useRef(null),se=(0,l.Z)(ae,n),le=function(e){return!!e&&e.props.hasOwnProperty("in")}(f),ue=null==(t=e["aria-hidden"])||t,ce=function(){return re.current.modalRef=ae.current,re.current.mountNode=ie.current,re.current},de=function(){$.mount(ce(),{disableScrollLock:w}),ae.current&&(ae.current.scrollTop=0)},fe=(0,c.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(m)||(0,u.Z)(ie.current).body;$.add(ce(),e),ae.current&&de()})),pe=a.useCallback((function(){return $.isTopModal(ce())}),[$]),ve=(0,c.Z)((function(e){ie.current=e,e&&ae.current&&(W&&pe()?de():g(ae.current,ue))})),me=a.useCallback((function(){$.remove(ce(),ue)}),[$,ue]);a.useEffect((function(){return function(){me()}}),[me]),a.useEffect((function(){W?fe():le&&v||me()}),[W,me,le,v,fe]);var he=(0,i.Z)({},e,{closeAfterTransition:v,disableAutoFocus:x,disableEnforceFocus:k,disableEscapeKeyDown:S,disablePortal:T,disableRestoreFocus:N,disableScrollLock:w,exited:te,hideBackdrop:M,keepMounted:I}),be=Y(he),Ee={};void 0===f.props.tabIndex&&(Ee.tabIndex="-1"),le&&(Ee.onEnter=(0,d.Z)((function(){oe(!1),q&&q()}),f.props.onEnter),Ee.onExited=(0,d.Z)((function(){oe(!0),z&&z(),v&&me()}),f.props.onExited));var xe=null!=(s=J.root)?s:"div",ye=K({elementType:xe,externalSlotProps:V.root,externalForwardedProps:Q,additionalProps:{ref:se,role:"presentation",onKeyDown:function(e){U&&U(e),"Escape"===e.key&&pe()&&(S||(e.stopPropagation(),j&&j(e,"escapeKeyDown")))}},className:be.root,ownerState:he}),ke=J.backdrop,ge=K({elementType:ke,externalSlotProps:V.backdrop,additionalProps:{"aria-hidden":!0,onClick:function(e){e.target===e.currentTarget&&(B&&B(e),j&&j(e,"backdropClick"))},open:W},className:be.backdrop,ownerState:he});return I||W||le&&!te?(0,h.jsx)(b,{ref:ve,container:m,disablePortal:T,children:(0,h.jsxs)(xe,(0,i.Z)({},ye,{children:[!M&&ke?(0,h.jsx)(ke,(0,i.Z)({},ge)):null,(0,h.jsx)(O,{disableEnforceFocus:k,disableAutoFocus:x,disableRestoreFocus:N,isEnabled:pe,open:W,children:a.cloneElement(f,Ee)})]}))}):null})),z=t(6934),G=t(1402),V=t(4578),X=!1,J=t(5545),Q="unmounted",$="exited",ee="entering",ne="entered",te="exiting",oe=function(e){function n(n,t){var o;o=e.call(this,n,t)||this;var r,i=t&&!t.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?i?(r=$,o.appearStatus=ee):r=ne:r=n.unmountOnExit||n.mountOnEnter?Q:$,o.state={status:r},o.nextCallback=null,o}(0,V.Z)(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===Q?{status:$}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==ee&&t!==ne&&(n=ee):t!==ee&&t!==ne||(n=te)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,o=this.props.timeout;return e=n=t=o,null!=o&&"number"!==typeof o&&(e=o.exit,n=o.enter,t=void 0!==o.appear?o.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this);t&&function(e){e.scrollTop}(t)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===$&&this.setState({status:Q})},t.performEnter=function(e){var n=this,t=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[p.findDOMNode(this),o],i=r[0],a=r[1],s=this.getTimeouts(),l=o?s.appear:s.enter;!e&&!t||X?this.safeSetState({status:ne},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:ee},(function(){n.props.onEntering(i,a),n.onTransitionEnd(l,(function(){n.safeSetState({status:ne},(function(){n.props.onEntered(i,a)}))}))})))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),o=this.props.nodeRef?void 0:p.findDOMNode(this);n&&!X?(this.props.onExit(o),this.safeSetState({status:te},(function(){e.props.onExiting(o),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:$},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:$},(function(){e.props.onExited(o)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(o){t&&(t=!1,n.nextCallback=null,e(o))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(t&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===Q)return null;var n=this.props,t=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,r.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(J.Z.Provider,{value:null},"function"===typeof t?t(e,o):a.cloneElement(a.Children.only(t),o))},n}(a.Component);function re(){}oe.contextType=J.Z,oe.propTypes={},oe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:re,onEntering:re,onEntered:re,onExit:re,onExiting:re,onExited:re},oe.UNMOUNTED=Q,oe.EXITED=$,oe.ENTERING=ee,oe.ENTERED=ne,oe.EXITING=te;var ie=oe,ae=t(418),se=t(6482),le=t(988);function ue(e,n){var t,o,r=e.timeout,i=e.easing,a=e.style,s=void 0===a?{}:a;return{duration:null!=(t=s.transitionDuration)?t:"number"===typeof r?r:r[n.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof i?i[n.mode]:i,delay:s.transitionDelay}}var ce=t(2071),de=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],fe={entering:{opacity:1},entered:{opacity:1}},pe=a.forwardRef((function(e,n){var t=function(){var e=(0,ae.Z)(se.Z);return e[le.Z]||e}(),o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=e.addEndListener,l=e.appear,u=void 0===l||l,c=e.children,d=e.easing,f=e.in,p=e.onEnter,v=e.onEntered,m=e.onEntering,b=e.onExit,E=e.onExited,x=e.onExiting,y=e.style,k=e.timeout,g=void 0===k?o:k,Z=e.TransitionComponent,S=void 0===Z?ie:Z,R=(0,r.Z)(e,de),T=a.useRef(null),C=(0,ce.Z)(T,c.ref,n),N=function(e){return function(n){if(e){var t=T.current;void 0===n?e(t):e(t,n)}}},P=N(m),w=N((function(e,n){!function(e){e.scrollTop}(e);var o=ue({style:y,timeout:g,easing:d},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),p&&p(e,n)})),O=N(v),F=N(x),M=N((function(e){var n=ue({style:y,timeout:g,easing:d},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),b&&b(e)})),A=N(E);return(0,h.jsx)(S,(0,i.Z)({appear:u,in:f,nodeRef:T,onEnter:w,onEntered:O,onEntering:P,onExit:M,onExited:A,onExiting:F,addEndListener:function(e){s&&s(T.current,e)},timeout:g},R,{children:function(e,n){return a.cloneElement(c,(0,i.Z)({style:(0,i.Z)({opacity:0,visibility:"exited"!==e||f?void 0:"hidden"},fe[e],y,c.props.style),ref:C},n))}}))}));function ve(e){return(0,M.Z)("MuiBackdrop",e)}(0,F.Z)("MuiBackdrop",["root","invisible"]);var me=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],he=(0,z.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,i.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),be=a.forwardRef((function(e,n){var t,o,a,l=(0,G.Z)({props:e,name:"MuiBackdrop"}),u=l.children,c=l.className,d=l.component,p=void 0===d?"div":d,v=l.components,m=void 0===v?{}:v,b=l.componentsProps,E=void 0===b?{}:b,x=l.invisible,y=void 0!==x&&x,k=l.open,g=l.slotProps,Z=void 0===g?{}:g,S=l.slots,R=void 0===S?{}:S,T=l.TransitionComponent,C=void 0===T?pe:T,N=l.transitionDuration,P=(0,r.Z)(l,me),w=(0,i.Z)({},l,{component:p,invisible:y}),O=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,f.Z)(t,ve,n)}(w),F=null!=(t=Z.root)?t:E.root;return(0,h.jsx)(C,(0,i.Z)({in:k,timeout:N},P,{children:(0,h.jsx)(he,(0,i.Z)({"aria-hidden":!0},F,{as:null!=(o=null!=(a=R.root)?a:m.Root)?o:p,className:(0,s.Z)(O.root,c,null==F?void 0:F.className),ownerState:(0,i.Z)({},w,null==F?void 0:F.ownerState),classes:O,ref:n,children:u}))}))})),Ee=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],xe=(0,z.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),ye=(0,z.ZP)(be,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),ke=a.forwardRef((function(e,n){var t,l,u,c,d,f,p=(0,G.Z)({name:"MuiModal",props:e}),v=p.BackdropComponent,m=void 0===v?ye:v,b=p.BackdropProps,E=p.classes,x=p.className,y=p.closeAfterTransition,k=void 0!==y&&y,g=p.children,Z=p.container,S=p.component,R=p.components,T=void 0===R?{}:R,C=p.componentsProps,N=void 0===C?{}:C,P=p.disableAutoFocus,w=void 0!==P&&P,O=p.disableEnforceFocus,F=void 0!==O&&O,M=p.disableEscapeKeyDown,A=void 0!==M&&M,D=p.disablePortal,L=void 0!==D&&D,j=p.disableRestoreFocus,K=void 0!==j&&j,U=p.disableScrollLock,W=void 0!==U&&U,H=p.hideBackdrop,Y=void 0!==H&&H,_=p.keepMounted,z=void 0!==_&&_,V=p.onBackdropClick,X=p.onClose,J=p.open,Q=p.slotProps,$=p.slots,ee=p.theme,ne=(0,r.Z)(p,Ee),te=a.useState(!0),oe=(0,o.Z)(te,2),re=oe[0],ie=oe[1],ae={container:Z,closeAfterTransition:k,disableAutoFocus:w,disableEnforceFocus:F,disableEscapeKeyDown:A,disablePortal:L,disableRestoreFocus:K,disableScrollLock:W,hideBackdrop:Y,keepMounted:z,onBackdropClick:V,onClose:X,open:J},se=(0,i.Z)({},p,ae,{exited:re}),le=null!=(t=null!=(l=null==$?void 0:$.root)?l:T.Root)?t:xe,ue=null!=(u=null!=(c=null==$?void 0:$.backdrop)?c:T.Backdrop)?u:m,ce=null!=(d=null==Q?void 0:Q.root)?d:N.root,de=null!=(f=null==Q?void 0:Q.backdrop)?f:N.backdrop;return(0,h.jsx)(q,(0,i.Z)({slots:{root:le,backdrop:ue},slotProps:{root:function(){return(0,i.Z)({},B(ce,se),!I(le)&&{as:S,theme:ee},{className:(0,s.Z)(x,null==ce?void 0:ce.className,null==E?void 0:E.root,!se.open&&se.exited&&(null==E?void 0:E.hidden))})},backdrop:function(){return(0,i.Z)({},b,B(de,se),{className:(0,s.Z)(null==de?void 0:de.className,null==b?void 0:b.className,null==E?void 0:E.backdrop)})}},onTransitionEnter:function(){return ie(!1)},onTransitionExited:function(){return ie(!0)},ref:n},ne,ae,{children:g}))}))}}]);
//# sourceMappingURL=826.88006104.chunk.js.map