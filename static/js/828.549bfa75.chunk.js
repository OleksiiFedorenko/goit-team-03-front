"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{3701:function(e,n,t){t.d(n,{Z:function(){return ee}});var r=t(9439),i=t(4942),o=t(7462),a=t(3366),u=t(2791),l=t(3733),c=t(4419),s=t(6934),p=t(1402),d=t(2071),f=t(9683),h=t(3031),m=t(3433),v=t(168),g=t(7326),b=t(4578),y=t(5545);function Z(e,n){var t=Object.create(null);return e&&u.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,u.isValidElement)(e)?n(e):e}(e)})),t}function x(e,n,t){return null!=t[n]?t[n]:e.props[n]}function R(e,n,t){var r=Z(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var a in e)a in n?o.length&&(i[a]=o,o=[]):o.push(a);var u={};for(var l in n){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];u[i[l][r]]=t(c)}u[l]=t(l)}for(r=0;r<o.length;r++)u[o[r]]=t(o[r]);return u}(n,r);return Object.keys(i).forEach((function(o){var a=i[o];if((0,u.isValidElement)(a)){var l=o in n,c=o in r,s=n[o],p=(0,u.isValidElement)(s)&&!s.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,u.isValidElement)(s)&&(i[o]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:s.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)})):i[o]=(0,u.cloneElement)(a,{in:!1}):i[o]=(0,u.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)})}})),i}var M=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},E=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind((0,g.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,b.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,Z(t.children,(function(e){return(0,u.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",t),enter:x(e,"enter",t),exit:x(e,"exit",t)})}))):R(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=Z(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,o.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,a.Z)(e,["component","childFactory"]),i=this.state.contextValue,o=M(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?u.createElement(y.Z.Provider,{value:i},o):u.createElement(y.Z.Provider,{value:i},u.createElement(n,r,o))},n}(u.Component);E.propTypes={},E.defaultProps={component:"div",childFactory:function(e){return e}};var w=E,T=t(2554),k=t(3329);var P=function(e){var n=e.className,t=e.classes,i=e.pulsate,o=void 0!==i&&i,a=e.rippleX,c=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=u.useState(!1),m=(0,r.Z)(h,2),v=m[0],g=m[1],b=(0,l.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),y={width:s,height:s,top:-s/2+c,left:-s/2+a},Z=(0,l.Z)(t.child,v&&t.childLeaving,o&&t.childPulsate);return p||v||g(!0),u.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,k.jsx)("span",{className:b,style:y,children:(0,k.jsx)("span",{className:Z})})},C=t(5878);var B,S,V,L,N,D,F,j,W=(0,C.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),I=["center","classes","className"],O=(0,T.F4)(N||(N=B||(B=(0,v.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),z=(0,T.F4)(D||(D=S||(S=(0,v.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),K=(0,T.F4)(F||(F=V||(V=(0,v.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),X=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),A=(0,s.ZP)(P,{name:"MuiTouchRipple",slot:"Ripple"})(j||(j=L||(L=(0,v.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),W.rippleVisible,O,550,(function(e){return e.theme.transitions.easing.easeInOut}),W.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),W.child,W.childLeaving,z,550,(function(e){return e.theme.transitions.easing.easeInOut}),W.childPulsate,K,(function(e){return e.theme.transitions.easing.easeInOut})),U=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),i=t.center,c=void 0!==i&&i,s=t.classes,d=void 0===s?{}:s,f=t.className,h=(0,a.Z)(t,I),v=u.useState([]),g=(0,r.Z)(v,2),b=g[0],y=g[1],Z=u.useRef(0),x=u.useRef(null);u.useEffect((function(){x.current&&(x.current(),x.current=null)}),[b]);var R=u.useRef(!1),M=u.useRef(0),E=u.useRef(null),T=u.useRef(null);u.useEffect((function(){return function(){M.current&&clearTimeout(M.current)}}),[]);var P=u.useCallback((function(e){var n=e.pulsate,t=e.rippleX,r=e.rippleY,i=e.rippleSize,o=e.cb;y((function(e){return[].concat((0,m.Z)(e),[(0,k.jsx)(A,{classes:{ripple:(0,l.Z)(d.ripple,W.ripple),rippleVisible:(0,l.Z)(d.rippleVisible,W.rippleVisible),ripplePulsate:(0,l.Z)(d.ripplePulsate,W.ripplePulsate),child:(0,l.Z)(d.child,W.child),childLeaving:(0,l.Z)(d.childLeaving,W.childLeaving),childPulsate:(0,l.Z)(d.childPulsate,W.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:r,rippleSize:i},Z.current)])})),Z.current+=1,x.current=o}),[d]),C=u.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=n.pulsate,i=void 0!==r&&r,o=n.center,a=void 0===o?c||n.pulsate:o,u=n.fakeElement,l=void 0!==u&&u;if("mousedown"===(null==e?void 0:e.type)&&R.current)R.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(R.current=!0);var s,p,d,f=l?null:T.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var m=e.touches&&e.touches.length>0?e.touches[0]:e,v=m.clientX,g=m.clientY;s=Math.round(v-h.left),p=Math.round(g-h.top)}if(a)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var b=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,y=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(b,2)+Math.pow(y,2))}null!=e&&e.touches?null===E.current&&(E.current=function(){P({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})},M.current=setTimeout((function(){E.current&&(E.current(),E.current=null)}),80)):P({pulsate:i,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[c,P]),B=u.useCallback((function(){C({},{pulsate:!0})}),[C]),S=u.useCallback((function(e,n){if(clearTimeout(M.current),"touchend"===(null==e?void 0:e.type)&&E.current)return E.current(),E.current=null,void(M.current=setTimeout((function(){S(e,n)})));E.current=null,y((function(e){return e.length>0?e.slice(1):e})),x.current=n}),[]);return u.useImperativeHandle(n,(function(){return{pulsate:B,start:C,stop:S}}),[B,C,S]),(0,k.jsx)(X,(0,o.Z)({className:(0,l.Z)(W.root,d.root,f),ref:T},h,{children:(0,k.jsx)(w,{component:null,exit:!0,children:b})}))})),Y=U,H=t(1217);function _(e){return(0,H.Z)("MuiButtonBase",e)}var q,J=(0,C.Z)("MuiButtonBase",["root","disabled","focusVisible"]),G=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Q=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((q={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,i.Z)(q,"&.".concat(J.disabled),{pointerEvents:"none",cursor:"default"}),(0,i.Z)(q,"@media print",{colorAdjust:"exact"}),q)),$=u.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),i=t.action,s=t.centerRipple,m=void 0!==s&&s,v=t.children,g=t.className,b=t.component,y=void 0===b?"button":b,Z=t.disabled,x=void 0!==Z&&Z,R=t.disableRipple,M=void 0!==R&&R,E=t.disableTouchRipple,w=void 0!==E&&E,T=t.focusRipple,P=void 0!==T&&T,C=t.LinkComponent,B=void 0===C?"a":C,S=t.onBlur,V=t.onClick,L=t.onContextMenu,N=t.onDragLeave,D=t.onFocus,F=t.onFocusVisible,j=t.onKeyDown,W=t.onKeyUp,I=t.onMouseDown,O=t.onMouseLeave,z=t.onMouseUp,K=t.onTouchEnd,X=t.onTouchMove,A=t.onTouchStart,U=t.tabIndex,H=void 0===U?0:U,q=t.TouchRippleProps,J=t.touchRippleRef,$=t.type,ee=(0,a.Z)(t,G),ne=u.useRef(null),te=u.useRef(null),re=(0,d.Z)(te,J),ie=(0,h.Z)(),oe=ie.isFocusVisibleRef,ae=ie.onFocus,ue=ie.onBlur,le=ie.ref,ce=u.useState(!1),se=(0,r.Z)(ce,2),pe=se[0],de=se[1];x&&pe&&de(!1),u.useImperativeHandle(i,(function(){return{focusVisible:function(){de(!0),ne.current.focus()}}}),[]);var fe=u.useState(!1),he=(0,r.Z)(fe,2),me=he[0],ve=he[1];u.useEffect((function(){ve(!0)}),[]);var ge=me&&!M&&!x;function be(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;return(0,f.Z)((function(r){return n&&n(r),!t&&te.current&&te.current[e](r),!0}))}u.useEffect((function(){pe&&P&&!M&&me&&te.current.pulsate()}),[M,P,pe,me]);var ye=be("start",I),Ze=be("stop",L),xe=be("stop",N),Re=be("stop",z),Me=be("stop",(function(e){pe&&e.preventDefault(),O&&O(e)})),Ee=be("start",A),we=be("stop",K),Te=be("stop",X),ke=be("stop",(function(e){ue(e),!1===oe.current&&de(!1),S&&S(e)}),!1),Pe=(0,f.Z)((function(e){ne.current||(ne.current=e.currentTarget),ae(e),!0===oe.current&&(de(!0),F&&F(e)),D&&D(e)})),Ce=function(){var e=ne.current;return y&&"button"!==y&&!("A"===e.tagName&&e.href)},Be=u.useRef(!1),Se=(0,f.Z)((function(e){P&&!Be.current&&pe&&te.current&&" "===e.key&&(Be.current=!0,te.current.stop(e,(function(){te.current.start(e)}))),e.target===e.currentTarget&&Ce()&&" "===e.key&&e.preventDefault(),j&&j(e),e.target===e.currentTarget&&Ce()&&"Enter"===e.key&&!x&&(e.preventDefault(),V&&V(e))})),Ve=(0,f.Z)((function(e){P&&" "===e.key&&te.current&&pe&&!e.defaultPrevented&&(Be.current=!1,te.current.stop(e,(function(){te.current.pulsate(e)}))),W&&W(e),V&&e.target===e.currentTarget&&Ce()&&" "===e.key&&!e.defaultPrevented&&V(e)})),Le=y;"button"===Le&&(ee.href||ee.to)&&(Le=B);var Ne={};"button"===Le?(Ne.type=void 0===$?"button":$,Ne.disabled=x):(ee.href||ee.to||(Ne.role="button"),x&&(Ne["aria-disabled"]=x));var De=(0,d.Z)(n,le,ne);var Fe=(0,o.Z)({},t,{centerRipple:m,component:y,disabled:x,disableRipple:M,disableTouchRipple:w,focusRipple:P,tabIndex:H,focusVisible:pe}),je=function(e){var n=e.disabled,t=e.focusVisible,r=e.focusVisibleClassName,i=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},a=(0,c.Z)(o,_,i);return t&&r&&(a.root+=" ".concat(r)),a}(Fe);return(0,k.jsxs)(Q,(0,o.Z)({as:Le,className:(0,l.Z)(je.root,g),ownerState:Fe,onBlur:ke,onClick:V,onContextMenu:Ze,onFocus:Pe,onKeyDown:Se,onKeyUp:Ve,onMouseDown:ye,onMouseLeave:Me,onMouseUp:Re,onDragLeave:xe,onTouchEnd:we,onTouchMove:Te,onTouchStart:Ee,ref:De,tabIndex:x?-1:H,type:$},Ne,ee,{children:[v,ge?(0,k.jsx)(Y,(0,o.Z)({ref:re,center:m},q)):null]}))})),ee=$},890:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(3366),i=t(7462),o=t(2791),a=t(3733),u=t(8519),l=t(4419),c=t(6934),s=t(1402),p=t(4036),d=t(5878),f=t(1217);function h(e){return(0,f.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=t(3329),v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.variant&&n[t.variant],"inherit"!==t.align&&n["align".concat((0,p.Z)(t.align))],t.noWrap&&n.noWrap,t.gutterBottom&&n.gutterBottom,t.paragraph&&n.paragraph]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({margin:0},t.variant&&n.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=o.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiTypography"}),o=function(e){return y[e]||e}(t.color),c=(0,u.Z)((0,i.Z)({},t,{color:o})),d=c.align,f=void 0===d?"inherit":d,Z=c.className,x=c.component,R=c.gutterBottom,M=void 0!==R&&R,E=c.noWrap,w=void 0!==E&&E,T=c.paragraph,k=void 0!==T&&T,P=c.variant,C=void 0===P?"body1":P,B=c.variantMapping,S=void 0===B?b:B,V=(0,r.Z)(c,v),L=(0,i.Z)({},c,{align:f,color:o,className:Z,component:x,gutterBottom:M,noWrap:w,paragraph:k,variant:C,variantMapping:S}),N=x||(k?"p":S[C]||b[C])||"span",D=function(e){var n=e.align,t=e.gutterBottom,r=e.noWrap,i=e.paragraph,o=e.variant,a=e.classes,u={root:["root",o,"inherit"!==e.align&&"align".concat((0,p.Z)(n)),t&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return(0,l.Z)(u,h,a)}(L);return(0,m.jsx)(g,(0,i.Z)({as:N,ref:n,ownerState:L,className:(0,a.Z)(D.root,Z)},V))}))},4036:function(e,n,t){var r=t(1122);n.Z=r.Z},9103:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2791);var i=function(e,n){return r.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},162:function(e,n,t){var r=t(2876);n.Z=r.Z},9683:function(e,n,t){var r=t(7054);n.Z=r.Z},3031:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(2791),o=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function c(){o=!1}function s(){"hidden"===this.visibilityState&&a&&(o=!0)}function p(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return o||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!u[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var d=function(){var e=i.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",l,!0),n.addEventListener("mousedown",c,!0),n.addEventListener("pointerdown",c,!0),n.addEventListener("touchstart",c,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=i.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!p(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(a=!0,window.clearTimeout(r),r=window.setTimeout((function(){a=!1}),100),n.current=!1,!0)},ref:e}}},3457:function(e,n,t){var r=(0,t(4046).ZP)();n.Z=r}}]);
//# sourceMappingURL=828.549bfa75.chunk.js.map