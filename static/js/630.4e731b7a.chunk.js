"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{5630:function(t,e,r){r.r(e),r.d(e,{default:function(){return z}});var n=r(9439),o=r(2791),i=r(9434),l=r(6727),u=r(4908),a=r(8096),p=r(4554),c=r(5155),d=r(8029),s=r(3466),x=r(3400),h=r(6151),f=r(6099),b=r(6616),g=r(5705),m=r(8730),w=r(3329),y=l.Ry().shape({name:l.Z_().trim().required(),email:l.Z_().email().matches(/^[^@]+@[^@]+\..+$/,"email must be a valid email").required(),password:l.Z_().min(8).required()}),v=function(){var t=(0,o.useState)(!1),e=(0,n.Z)(t,2),r=e[0],l=e[1],v=(0,i.I0)(),z=(0,g.TA)({initialValues:{name:"",email:"",password:""},validationSchema:y,onSubmit:function(t,e){var r=e.setSubmitting;console.log(JSON.stringify(t,null,2)),v((0,u.EH)(t)),r(!1)}});return(0,w.jsxs)(a.Z,{onSubmit:z.handleSubmit,sx:m.cr.cr,component:"form",children:[z.touched.name&&z.errors.name?(0,w.jsx)(p.Z,{sx:m.cr.vU,children:z.errors.name}):null,(0,w.jsx)(c.Z,{name:"name",type:"text",variant:"outlined",placeholder:"Enter your name",value:z.values.name,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.name&&Boolean(z.errors.name),color:"input",fullWidth:!0,sx:m.cr.qH,inputProps:{style:{color:"white"}}}),z.touched.email&&z.errors.email?(0,w.jsx)(p.Z,{component:"div",sx:m.cr.vU,children:z.errors.email}):null,(0,w.jsx)(c.Z,{name:"email",variant:"outlined",placeholder:"Enter your email",value:z.values.email,onChange:z.handleChange,onBlur:z.handleBlur,error:z.touched.email&&Boolean(z.errors.email),fullWidth:!0,inputProps:{style:{color:"white"}},color:"input",sx:m.cr.qH}),z.touched.password&&z.errors.password?(0,w.jsx)(p.Z,{component:"div",sx:m.cr.vU,children:z.errors.password}):null,(0,w.jsx)(d.Z,{name:"password",type:r?"text":"password",placeholder:"Create a password",value:z.values.password,onChange:z.handleChange,error:z.touched.password&&Boolean(z.errors.password),onBlur:z.handleBlur,fullWidth:!0,color:"input",sx:m.cr.qH,endAdornment:(0,w.jsx)(s.Z,{position:"end",children:(0,w.jsx)(x.Z,{onClick:function(){return l((function(t){return!t}))},edge:"end",sx:m.cr.qv,children:r?(0,w.jsx)(f.Z,{}):(0,w.jsx)(b.Z,{})})})}),(0,w.jsx)(h.Z,{color:"button",variant:"contained",fullWidth:!0,type:"submit",sx:m.cr.LI,children:"Register Now"})]})},z=function(){return(0,w.jsx)(v,{})}},8730:function(t,e,r){r.d(e,{LI:function(){return n},In:function(){return o},nC:function(){return i},cr:function(){return p},qv:function(){return c},BH:function(){return l},jY:function(){return u},fL:function(){return a}});var n={};r.r(n),r.d(n,{Z0:function(){return M},zg:function(){return P},VQ:function(){return H},DP:function(){return S},nF:function(){return Z},RA:function(){return R},l0:function(){return d},yX:function(){return s},dc:function(){return f},QP:function(){return h},ZD:function(){return x},uC:function(){return I},HL:function(){return B},a$:function(){return F},jq:function(){return g},Wb:function(){return b},aX:function(){return C},H0:function(){return U},Gi:function(){return k},ni:function(){return j},N5:function(){return v},cv:function(){return z},dh:function(){return W},rS:function(){return m},bM:function(){return y},dM:function(){return w}});var o={};r.r(o),r.d(o,{$Q:function(){return D},Fs:function(){return O},Sl:function(){return q},qY:function(){return _},oE:function(){return A},oD:function(){return L},Am:function(){return T}});var i={};r.r(i),r.d(i,{qS:function(){return pt},I8:function(){return J},IY:function(){return G},IP:function(){return et},pD:function(){return it},Vu:function(){return rt},zF:function(){return nt},k6:function(){return ot},FL:function(){return $},RY:function(){return ut},bI:function(){return at},bK:function(){return Y},DH:function(){return N},oC:function(){return lt},X8:function(){return tt},P$:function(){return V},q7:function(){return X},zv:function(){return Q},d$:function(){return K}});var l={};r.r(l),r.d(l,{d:function(){return ct}});var u={};r.r(u),r.d(u,{nC:function(){return ft},EA:function(){return gt},aW:function(){return bt},fL:function(){return mt},WX:function(){return dt},av:function(){return xt},ID:function(){return st},_n:function(){return ht}});var a={};r.r(a),r.d(a,{cK:function(){return Ut},Vy:function(){return yt},wy:function(){return It},dh:function(){return zt},fi:function(){return kt},FR:function(){return vt},zO:function(){return Ct},d$:function(){return wt}});var p={};r.r(p),r.d(p,{LI:function(){return Ft},vU:function(){return jt},cr:function(){return Wt},qv:function(){return St},qH:function(){return Bt}});var c={};r.r(c),r.d(c,{UQ:function(){return Ht},uO:function(){return Rt},i8:function(){return Pt},_w:function(){return Mt},GN:function(){return Zt}});var d={mt:"48px",width:"100%"},s={height:"49px",fontWeight:500,textAlign:"center",borderRadius:"8px","&:hover, &:focus":{color:"text.white",bgcolor:"text.primary"}},x={width:"100%",display:"flex",gap:"14px",mb:"40px"},h={p:0,display:"inline-flex",width:106},f={display:"inline-flex",color:"rgba(255, 255, 255, 0.30)",fontWeight:500,p:0},b={position:"absolute",top:"14px",right:"14px",width:"24px",height:"24px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center","&:hover, &:focus":{bgcolor:"primary.main"}},g={p:"0",minWidth:{zeroUp:"24px",tablet:"32px"},height:{zeroUp:"24px",tablet:"32px"},color:"text.topTheme"},m={height:"44px",color:"text.topTheme",fontWeight:500,lineHeight:1.5,textTransform:"none"},w={minWidth:"200px",maxWidth:"200px",borderColor:"primary.main","& .MuiPopover-paper":{minWidth:"100px",maxWidth:"100px",py:"6px"}},y={height:"25px",minHeight:"20px",py:"2px","&.Mui-selected":{color:"primary.main",bgcolor:"transparent"}},v={mr:"-8px",color:"text.primary",fontWeight:500,lineHeight:1.5,textTransform:"none"},z={width:"32px",height:"32px",ml:"8px"},k={my:"8px","&::before, &::after":{content:'""',display:"block",width:{zeroUp:"197px",tablet:"212px"},height:"1px",mx:{zeroUp:"14px",tablet:"24px"},bgcolor:"divider.side"}},C={display:"flex",justifyContent:"space-between",width:"100%",height:70,my:"-1px",px:{zeroUp:"14px",tablet:"24px"},color:"text.sideMain",fontWeight:500,textAlign:"start",textTransform:"none",borderRadius:"0","&:hover, &:focus":{bgcolor:"side.activeBtn","& .createBoardBox":{bgcolor:"side.plusBackgroundHov"}}},U={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:36,bgcolor:"side.plusBackground",borderRadius:"6px"},I={display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"4px",mt:"40px",p:0,width:"100%"},B={display:"flex",height:"61px",p:0,pl:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond",fontWeight:500,"&:hover, &:focus":{color:"text.sideMain",bgcolor:"side.activeBtn"},"&.active":{color:"text.sideMain",bgcolor:"side.activeBtn","&::after":{content:'""',display:"block",width:"4px",height:"100%",borderRadius:"4px 0px 0px 4px",bgcolor:"side.activeBoardBox"}}},j={display:"flex",justifyContent:"start",width:"100%",height:"60px",pl:{zeroUp:"14px",tablet:"24px"},mt:"10px",mb:{zeroUp:0,tablet:"10px"},color:"text.sideMain",textAlign:"start",textTransform:"none",borderRadius:0,"&:hover, &:focus":{bgcolor:"side.activeBtn"}},W={width:14,height:14,ml:.05,mt:.9,color:"background.btnPlus"},F={width:28,height:28,bgcolor:"background.boxPlus",mr:1,borderRadius:.75},S={height:56,minWidth:{zeroUp:"90vw",mobileFixed:"335px",tablet:"334px"},bgcolor:"secondary.main",textTransform:"none",color:"text.primary","&:hover, &:focus":{bgcolor:"secondary.dark"}},R={width:28,height:28,bgcolor:"background.boxPlusAnother",mr:1,borderRadius:.75},Z={width:14,height:14,ml:.05,mt:.9,color:"background.btnPlusAnother"},M={width:"100%",height:"56px",lineHeight:1.5,textTransform:"none",boxShadow:"none","&:hover, &:focus":{boxShadow:"none"}},H={width:28,height:28,bgcolor:"background.boxPlusCard",mr:1,borderRadius:.75},P={width:14,height:14,ml:.05,mt:.9,color:"background.btnPlusCard"},D={gap:"14px",width:{zeroUp:"90vw",mobileFixed:"335px",tablet:"334px"},height:"100%"},O={width:"100%",height:"56px",py:"18px",px:"20px",boxShadow:"none",bgcolor:"secondary.main"},q={flexDirection:"row",justifyContent:"space-between",alignItems:"center"},A={py:"14px",pl:"24px",pr:"20px",boxShadow:"none"},T={pb:"14px",mb:"14px",borderBottom:"1px solid",borderColor:"divider.card"},L={display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",color:"text.secondary"},_={content:'""',transform:"translateY(20%)",height:"12px",width:"12px",borderRadius:"50%",display:"inline-block",marginRight:"4px"},E=r(1413),$={display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",p:0,background:"linear-gradient(180deg, #fff 35%, #bedbb0 92.19%)"},Y={width:"100vw",height:"100vh",p:0},N={display:{desktop:"flex"},height:"100%"},Q={position:"fixed",zIndex:"10",display:"flex",justifyContent:"end",alignItems:"center",width:"100%",height:{zeroUp:60,tablet:68},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"},bgcolor:"background.header"},V={display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",zIndex:"20",width:{zeroUp:225,tablet:260},height:"100%",bgcolor:"background.side"},X=(0,E.Z)((0,E.Z)({},V),{},{display:{zeroUp:"none",desktop:"flex"}}),G={zIndex:"0",width:{zeroUp:"100%",desktop:"calc(100% - 260px)"},height:"100%",pt:{zeroUp:"60px",tablet:"68px"}},K={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:473}},J={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:424},bgcolor:"#151515",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:{zeroUp:"24px",tablet:"40px"}},tt={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},et={width:"100%",height:"100%",pt:{zeroUp:"14px",tablet:"20px",desktop:"10px"},pb:{zeroUp:"24px",tablet:"32px",desktop:"8px"},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"}},rt={display:"flex",alignItems:"center",justifyContent:"space-between"},nt={display:"flex",gap:"34px",width:"100%",maxHeight:"100%",mt:{zeroUp:"40px",tablet:"26px",desktop:"10px"}},ot={display:"flex",gap:"34px",height:"100%"},it={width:"100%",mt:"60px"},lt={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.header",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:"24px"},ut={m:"auto",bgcolor:"background.helpBanner",borderRadius:"8px",width:{zeroUp:197,tablet:212}},at={width:{zeroUp:335,tablet:400}},pt={width:{zeroUp:335,tablet:350}},ct={width:{zeroUp:124,tablet:162},height:{zeroUp:124,tablet:162}},dt={display:"flex",alignItems:"center",gap:"14px",mt:{zeroUp:"14px",tablet:"24px"}},st={display:"inline-flex",justifyContent:"center",alignItems:"center",width:{zeroUp:"40px",tablet:"48px"},height:{zeroUp:"40px",tablet:"48px"},borderRadius:"4px",bgcolor:"text.primary"},xt={width:{zeroUp:"27px",tablet:"32px"},height:{zeroUp:"27px",tablet:"32px"}},ht={fontSize:{zeroUp:28,tablet:40},fontWeight:600},ft={display:"flex",alignItems:"center",gap:"8px",mt:{zeroUp:"14px",tablet:"24px"},ml:{zeroUp:"14px",tablet:"24px"}},bt={display:"inline-flex",justifyContent:"center",alignItems:"center",width:32,height:32,borderRadius:"8px",bgcolor:"background.logoIcon"},gt={width:22,height:22},mt={fontSize:16,fontWeight:600,lineHeight:1.5,letterSpacing:"-0.04em",color:"text.sideMain"},wt={mt:"24px",lineHeight:1.3,textAlign:"center"},yt={ml:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond"},vt={ml:2.5,mr:2.5,mb:2,color:"text.sideMain"},zt={ml:1,mb:2.5,color:"text.sideMain",textTransform:"none"},kt={ml:1.5,mb:2.5,color:"text.sideMain"},Ct={width:{zeroUp:"90%",mobileFixed:335,tablet:486},textAlign:"center",color:"text.secondary"},Ut={color:"primary.main"},It={fontSize:{zeroUp:14,tablet:18}},Bt={fontFamily:"Poppins",fontWeight:400,fontFize:"14px",color:"#fff",height:"49px",mb:"14px","& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"}},jt={color:"#FF2D55",ml:"14px",mb:"8px",textTransform:"none"},Wt={display:"flex",flexDirection:"column",bgcolor:"#1F1F1F",width:{zeroUp:"100%",mobileFixed:"287px",tablet:"344px"}},Ft={height:"49px",textTransform:"none",fontFamily:"Poppins",fontWeight:500,fontFize:"14px"},St={color:"#FFF",opacity:.4},Rt={display:"inline-block",width:"inherit",height:"inherit",stroke:"currentColor",strokeWidth:0,"&:hover, &:focus":{stroke:"currentColor"}},Zt={width:"20px",height:"20px",color:"icon.svgPlus",stroke:"currentColor"},Mt={display:"inline-block",strokeWidth:"0",fill:"transparent",color:"icon.svgLogout",stroke:"currentColor",mr:"14px",width:"32px",height:"32px","&:hover, &:focus":{color:"icon.activeSvgLogout",stroke:"currentColor"}},Ht={width:"16px",height:"16px",fill:"transparent",color:"svgBoardList",stroke:"currentColor"},Pt={width:"9",height:"9",fill:"transparent",color:"text.primary",stroke:"currentColor","&:hover, &:focus":{color:"icon.svgPlus",stroke:"currentColor"}}}}]);
//# sourceMappingURL=630.4e731b7a.chunk.js.map