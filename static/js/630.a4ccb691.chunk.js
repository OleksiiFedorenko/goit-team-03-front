"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{5630:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(9439),o=n(2791),i=n(9434),a=n(6727),l=n(4908),u=n(8096),p=n(4554),d=n(5155),c=n(8029),s=n(3466),x=n(3400),h=n(6151),f=n(6099),m=n(6616),g=n(5705),b=n(4469),y=n(3329),v=a.Ry().shape({name:a.Z_().trim().required(),email:a.Z_().email().matches(/^[^@]+@[^@]+\..+$/,"email must be a valid email").required(),password:a.Z_().min(8).required()}),w=function(){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1],w=(0,i.I0)(),C=(0,g.TA)({initialValues:{name:"",email:"",password:""},validationSchema:v,onSubmit:function(e,t){var n=t.setSubmitting;console.log(JSON.stringify(e,null,2)),w((0,l.EH)(e)),n(!1)}});return(0,y.jsxs)(u.Z,{onSubmit:C.handleSubmit,sx:b.cr.cr,component:"form",children:[C.touched.name&&C.errors.name?(0,y.jsx)(p.Z,{sx:b.cr.vU,children:C.errors.name}):null,(0,y.jsx)(d.Z,{name:"name",type:"text",variant:"outlined",placeholder:"Enter your name",value:C.values.name,onChange:C.handleChange,onBlur:C.handleBlur,error:C.touched.name&&Boolean(C.errors.name),color:"input",fullWidth:!0,sx:b.cr.qH,inputProps:{style:{color:"white"}}}),C.touched.email&&C.errors.email?(0,y.jsx)(p.Z,{component:"div",sx:b.cr.vU,children:C.errors.email}):null,(0,y.jsx)(d.Z,{name:"email",variant:"outlined",placeholder:"Enter your email",value:C.values.email,onChange:C.handleChange,onBlur:C.handleBlur,error:C.touched.email&&Boolean(C.errors.email),fullWidth:!0,inputProps:{style:{color:"white"}},color:"input",sx:b.cr.qH}),C.touched.password&&C.errors.password?(0,y.jsx)(p.Z,{component:"div",sx:b.cr.vU,children:C.errors.password}):null,(0,y.jsx)(c.Z,{name:"password",type:n?"text":"password",placeholder:"Create a password",value:C.values.password,onChange:C.handleChange,error:C.touched.password&&Boolean(C.errors.password),onBlur:C.handleBlur,fullWidth:!0,color:"input",sx:b.cr.qH,endAdornment:(0,y.jsx)(s.Z,{position:"end",children:(0,y.jsx)(x.Z,{onClick:function(){return a((function(e){return!e}))},edge:"end",sx:b.cr.qv,children:n?(0,y.jsx)(f.Z,{}):(0,y.jsx)(m.Z,{})})})}),(0,y.jsx)(h.Z,{color:"button",variant:"contained",fullWidth:!0,type:"submit",sx:b.cr.LI,children:"Register Now"})]})},C=function(){return(0,y.jsx)(w,{})}},4469:function(e,t,n){n.d(t,{LI:function(){return r},nC:function(){return o},cr:function(){return u},BH:function(){return i},jY:function(){return a},fL:function(){return l}});var r={};n.r(r),n.d(r,{l0:function(){return p},yX:function(){return d},OM:function(){return z},uC:function(){return w},HL:function(){return C},jq:function(){return s},Wb:function(){return c},aX:function(){return y},H0:function(){return v},Gi:function(){return b},ni:function(){return k},N5:function(){return m},cv:function(){return g},rS:function(){return x},bM:function(){return f},dM:function(){return h}});var o={};n.r(o),n.d(o,{IY:function(){return H},pD:function(){return O},FL:function(){return B},bK:function(){return I},DH:function(){return j},oC:function(){return q},X8:function(){return S},P$:function(){return Z},q7:function(){return F},zv:function(){return W},d$:function(){return M}});var i={};n.r(i),n.d(i,{d:function(){return R}});var a={};n.r(a),n.d(a,{nC:function(){return L},EA:function(){return P},aW:function(){return E},fL:function(){return X},WX:function(){return D},av:function(){return T},ID:function(){return A},_n:function(){return _}});var l={};n.r(l),n.d(l,{cK:function(){return K},Vy:function(){return V},zO:function(){return N},d$:function(){return $}});var u={};n.r(u),n.d(u,{LI:function(){return Q},vU:function(){return G},cr:function(){return J},qv:function(){return ee},qH:function(){return Y}});var p={mt:"48px",width:"100%"},d={height:"49px",fontWeight:500,textAlign:"center",borderRadius:"8px","&:hover, &:focus":{color:"text.white",backgroundColor:"text.primary"}},c={position:"absolute",top:"14px",right:"14px",width:"24px",height:"24px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center","&:hover, &:focus":{backgroundColor:"primary.main"}},s={p:"0",minWidth:"32px",height:"32px"},x={height:"44px",color:"text.topTheme",fontWeight:500,lineHeight:1.5,textTransform:"none"},h={minWidth:"200px",maxWidth:"200px",borderColor:"primary.main","& .MuiPopover-paper":{minWidth:"100px",maxWidth:"100px",py:"6px"}},f={height:"25px",minHeight:"20px",py:"2px","&.Mui-selected":{color:"primary.main",backgroundColor:"transparent"}},m={mr:"-8px",color:"text.primary",fontWeight:500,lineHeight:1.5,textTransform:"none"},g={width:"32px",height:"32px",ml:"8px"},b={my:"8px","&::before, &::after":{content:'""',display:"block",width:{zeroUp:"197px",tablet:"212px"},height:"1px",mx:{zeroUp:"14px",tablet:"24px"},backgroundColor:"side.divider"}},y={display:"flex",justifyContent:"space-between",width:"100%",height:70,my:"-1px",px:{zeroUp:"14px",tablet:"24px"},color:"text.sideMain",textAlign:"start",textTransform:"none",borderRadius:"0","&:hover, &:focus":{backgroundColor:"side.activeBtn","& .createBoardBox":{backgroundColor:"side.plusBackgroundHov"}}},v={width:40,height:36,backgroundColor:"side.plusBackground",borderRadius:"6px"},w={display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"4px",mt:"40px",p:0,width:"100%"},C={display:"flex",height:"61px",p:0,pl:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond",fontWeight:500,"&:hover, &:focus, &.active":{color:"text.sideMain",backgroundColor:"side.activeBtn","& .activeBoardBtn":{backgroundColor:"side.activeBoardBox"}}},z={width:"4px",height:"100%",borderRadius:"4px 0px 0px 4px"},k={display:"flex",justifyContent:"start",width:"100%",height:"60px",pl:{zeroUp:"14px",tablet:"24px"},mt:"10px",mb:{zeroUp:0,tablet:"10px"},color:"text.sideMain",textAlign:"start",textTransform:"none",borderRadius:0,"&:hover, &:focus":{backgroundColor:"side.activeBtn"}},U=n(1413),B={display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",p:0,background:"linear-gradient(180deg, #fff 35%, #bedbb0 92.19%)"},I={width:"100vw",height:"100vh",p:0},j={display:{desktop:"flex"},height:"100%"},W={position:"fixed",zIndex:"10",display:"flex",justifyContent:"end",alignItems:"center",width:"100%",height:{zeroUp:60,tablet:68},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"},backgroundColor:"background.header"},Z={display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",zIndex:"20",width:{zeroUp:225,tablet:260},height:"100%",backgroundColor:"background.side"},F=(0,U.Z)((0,U.Z)({},Z),{},{display:{zeroUp:"none",desktop:"flex"}}),H={zIndex:"0",width:{zeroUp:"100%",desktop:"calc(100% - 260px)"},height:"100%",pt:{zeroUp:"60px",tablet:"68px"}},M={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:473}},S={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},O={width:"100%",mt:"60px"},q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.header",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:"24px"},R={width:{zeroUp:124,tablet:162},height:{zeroUp:124,tablet:162}},D={display:"flex",alignItems:"center",gap:"14px",mt:{zeroUp:"14px",tablet:"24px"}},A={display:"inline-flex",justifyContent:"center",alignItems:"center",width:{zeroUp:"40px",tablet:"48px"},height:{zeroUp:"40px",tablet:"48px"},borderRadius:"4px",backgroundColor:"text.primary"},T={width:{zeroUp:"27px",tablet:"32px"},height:{zeroUp:"27px",tablet:"32px"}},_={fontSize:{zeroUp:28,tablet:40},fontWeight:600},L={display:"flex",alignItems:"center",gap:"8px",mt:{zeroUp:"14px",tablet:"24px"},ml:{zeroUp:"14px",tablet:"24px"}},E={display:"inline-flex",justifyContent:"center",alignItems:"center",width:32,height:32,borderRadius:"8px",backgroundColor:"background.logoIcon"},P={width:22,height:22},X={fontSize:16,fontWeight:600,lineHeight:1.5,letterSpacing:"-0.04em",color:"text.sideMain"},$={mt:"24px",lineHeight:1.3,textAlign:"center"},N={width:{zeroUp:"90%",mobileFixed:335,tablet:486},textAlign:"center",color:"text.secondary"},K={color:"primary.main"},V={ml:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond"},Y={fontFamily:"Poppins",fontWeight:400,fontFize:"14px",color:"#fff",height:"49px",mb:"14px","& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"}},G={color:"#FF2D55",ml:"14px",mb:"8px",textTransform:"none"},J={display:"flex",flexDirection:"column",backgroundColor:"#1F1F1F",width:{zeroUp:"287px",tablet:"344px"}},Q={height:"49px",textTransform:"none",fontFamily:"Poppins",fontWeight:500,fontFize:"14px"},ee={color:"#FFF",opacity:.4}}}]);
//# sourceMappingURL=630.a4ccb691.chunk.js.map