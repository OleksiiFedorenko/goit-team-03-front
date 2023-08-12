"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[49],{2049:function(n,e,t){t.r(e),t.d(e,{default:function(){return Cn}});var i=t(9434),r=t(9439),o=t(2791),l=t(2460),s=t(5488),a=t(1413),d=t(5705),c=t(6727),x=t(4554),u=t(890),h=t(8096),j=t(5155),p=t(6151),m=t(789),Z=t(8730),f=t(3329),v=c.Ry().shape({title:c.Z_().required("Title is required")}),y=function(n){var e=n.title,t=n.columnId,r=n.onCloseModal,o=(0,i.I0)();return(0,f.jsxs)(x.Z,{sx:Z.nC.qS,children:[(0,f.jsx)(u.Z,{variant:"h2",mb:3,children:"Edit column"}),(0,f.jsx)(d.J9,{initialValues:{title:e},validationSchema:v,onSubmit:function(n,e){var i=e.resetForm;o((0,l.Gw)((0,a.Z)((0,a.Z)({},n),{},{columnId:t}))),i(),r()},children:function(n){var e=n.values,t=n.handleChange,i=n.handleSubmit;return(0,f.jsxs)(d.l0,{onSubmit:i,children:[(0,f.jsxs)(h.Z,{fullWidth:!0,children:[(0,f.jsx)(j.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:e.title,onChange:t}),(0,f.jsx)(d.Bc,{name:"Text",component:"div",style:{color:"red",fontSize:12}})]}),(0,f.jsxs)(p.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:Z.cr.LI,type:"submit",children:[(0,f.jsx)(x.Z,{sx:Z.LI.a$,children:(0,f.jsx)(m.J,{id:"plus",sx:Z.qv.ah})}),"Add"]})]})}})]})},b=t(6934),g=t(7479),C=(0,b.ZP)(g.Z)((function(n){n.theme;return{padding:0,margin:0,"& .MuiTouchRipple-root":{display:"none"}}})),I=function(n){var e=n.onClick,t=n.iconId;return(0,f.jsx)(C,{onClick:e,children:(0,f.jsx)(m.J,{id:t,sx:Z.qv.wY})})},k=t(7621),w=t(6314),S=function(n){var e=n.title,t=n.columnId,a=(0,o.useState)(!1),d=(0,r.Z)(a,2),c=d[0],x=d[1],h=(0,i.I0)(),j=function(){x(!1)};return(0,f.jsxs)(k.Z,{sx:Z.In.Fs,children:[(0,f.jsxs)(w.Z,{sx:Z.In.Sl,children:[(0,f.jsx)(u.Z,{component:"h2",variant:"h3",children:e}),(0,f.jsxs)(w.Z,{direction:"row",spacing:1,children:[(0,f.jsx)(I,{onClick:function(){x(!0)},iconId:"pencil"}),(0,f.jsx)(I,{onClick:function(){window.confirm("Do you really want to delete column ".concat(e,"?"))&&h((0,l.eA)(t))},iconId:"trash"})]})]}),(0,f.jsx)(s.Z,{isOpenModal:c,onCloseModal:j,children:(0,f.jsx)(y,{onCloseModal:j,columnId:t,title:e,type:"Submit"})})]})},M=function(n){var e="";switch(n){case"low":e="#8FA1D0";break;case"medium":e="#E09CB5";break;case"high":e="#BEDBB0";break;default:e="#595959"}return e},T=t(9164),D=t(5987),B=["name"],q=function(n){var e=n.name,t=(0,D.Z)(n,B),i=(0,d.U$)(e),o=(0,r.Z)(i,2),l=o[0],s=o[1],c=(0,a.Z)((0,a.Z)((0,a.Z)({},l),t),{},{fullWidth:!0,variant:"outlined"});return s&&s.touched&&s.error&&(c.error=!0,c.helperText=s.error),(0,f.jsx)(j.Z,(0,a.Z)({},c))},F=(0,b.ZP)("div")((function(n){return{display:"flex",justifyContent:"center",alignItems:"center",background:n.theme.palette.background.boxPlus,width:"28px",height:"28px",borderRadius:"4px"}})),L=function(){return(0,f.jsx)(F,{children:(0,f.jsx)(m.J,{id:"plus",sx:Z.qv.ah})})},_=["children"],O=function(n){var e=n.children,t=((0,D.Z)(n,_),(0,d.u6)().submitForm),i={variant:"contained",color:"primary",fullWidth:!0,onClick:function(){t()}};return(0,f.jsx)(p.Z,(0,a.Z)((0,a.Z)({startIcon:(0,f.jsx)(L,{})},i),{},{children:(0,f.jsx)("span",(0,a.Z)((0,a.Z)({},{style:{textTransform:"none"}}),{},{children:e}))}))},P=t(7613),R=t(1652),W=t(4750),A=t(7892),E=t.n(A),J=function(n){var e=n.parentState,t=n.initial;E()().format();var i=(0,o.useState)(t||""),l=(0,r.Z)(i,2),s=l[0],d=l[1],c=new Date;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(R._,{dateAdapter:W.y,children:(0,f.jsx)(P.M,{views:["month","day"],value:s,desktopModeMediaQuery:"",onChange:function(n){d(n),e(n)},renderInput:function(n){return(0,f.jsx)(j.Z,(0,a.Z)({},n))},shouldDisableDate:function(n){return n<c},slots:{openPickerIcon:function(){return(0,f.jsx)(m.J,{id:"dropdown"})}},dayOfWeekFormatter:function(n){return n.slice(0,2)},slotProps:{textField:{variant:"outlined"}}})})})},Y=t(8244),$=(0,b.ZP)("span")((function(n){return{borderRadius:"50%",width:14,height:14,backgroundColor:n.btncolor||"#BEDBB0"}})),z=(0,b.ZP)($)((function(n){var e=n.btncolor;return{backgroundColor:"transparent",border:"1px solid ".concat(e||"#BEDBB0"),position:"relative","&:before":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"block",width:8,height:8,borderRadius:"50%",backgroundColor:e||"#BEDBB0",content:'""'}}})),V=function(n){var e=M(n.priority);return(0,f.jsx)(Y.Z,(0,a.Z)({disableRipple:!0,icon:(0,f.jsx)($,{btncolor:e}),checkedIcon:(0,f.jsx)(z,{btncolor:e})},n))},Q=t(5523),G=t(7133),H=t(765),N=t(2426),U=t.n(N),K=function(n){U()().format("MMMM D");return n?function(n){var e=U()(n),t=U()().endOf("day"),i=U()().add(1,"day").endOf("day");return e<t?"Today":e<i?"Tomorrow":"in "+e.fromNow(!0)}(n.$d)+", "+U()(n.$d).format("MMMM D"):"Today, "+U()().format("MMMM D")},X={title:"",description:"",deadline:""},nn=c.Ry().shape({title:c.Z_().required("Required"),description:c.Z_().required("Required"),deadline:c.hT().required()}),en=function(n){var e=n.parentColumn,t=n.onCloseModal,l=n.formTitle,s=n.buttonTitle,c=n.taskOperation,j=n.taskId,p=n.initData,m=(0,i.I0)(),Z=(0,o.useState)(),v=(0,r.Z)(Z,2),y=v[0],b=v[1],g=(0,o.useState)("without"),C=(0,r.Z)(g,2),I=C[0],k=C[1];return(0,f.jsx)(T.Z,{sx:{maxWidth:"302px",p:0},children:(0,f.jsx)(d.J9,{initialValues:p||X,validationSchema:nn,onSubmit:function(n){var i;m(c((0,a.Z)((0,a.Z)({},n),{},{parentColumn:e,priority:I,taskId:j,deadline:(i=y.$d,U()(i).format("DD-MM-YYYY"))}))),t()},children:(0,f.jsxs)(d.l0,{children:[(0,f.jsx)(u.Z,{variant:"h2",component:"h2",mb:3,children:l}),(0,f.jsx)(q,{name:"title",label:"Title",sx:{marginBottom:"14px"}}),(0,f.jsx)(q,{name:"description",label:"Description",multiline:!0,rows:6,sx:{marginBottom:"24px"}}),(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(G.Z,{id:"priority-radios",sx:{fontSize:12,lineHeight:1.5,letterSpacing:"-0.02em",color:"GrayText"},children:"Label color"}),(0,f.jsxs)(H.Z,{sx:{marginBottom:"14px"},row:!0,defaultValue:"low","aria-labelledby":"priority-radios",name:"priority",value:I,onChange:function(n){k(n.target.value)},children:[(0,f.jsx)(Q.Z,{value:"low",control:(0,f.jsx)(V,{priority:"low"})}),(0,f.jsx)(Q.Z,{value:"medium",control:(0,f.jsx)(V,{priority:"medium",sx:{ml:"-14px"}})}),(0,f.jsx)(Q.Z,{value:"high",control:(0,f.jsx)(V,{priority:"high",sx:{ml:"-14px"}})}),(0,f.jsx)(Q.Z,{value:"without",control:(0,f.jsx)(V,{priority:"without",sx:{ml:"-14px"}})})]})]}),(0,f.jsxs)(x.Z,{mb:5,children:[(0,f.jsx)(u.Z,{variant:"body2",component:"h4",mb:.5,children:"Deadline"}),(0,f.jsx)(x.Z,{children:K(y)}),(0,f.jsx)(J,{parentState:function(n){b(n)}})]}),(0,f.jsx)(O,{children:s})]})})})},tn=function(n){var e=n.name,t=n.description,d=n.priority,c=n.deadline,h=n.taskId,j=(0,i.I0)(),p=(0,o.useState)(!1),m=(0,r.Z)(p,2),v=m[0],y=m[1],b=function(){y(!1)},g=M(d),C={textTransform:"capitalize","&::before":(0,a.Z)((0,a.Z)({},Z.In.qY),{},{bgcolor:g})},S=function(){};return(0,f.jsxs)(k.Z,{sx:(0,a.Z)((0,a.Z)({},Z.In.oE),{},{borderLeft:"4px solid ".concat(g)}),children:[(0,f.jsxs)(x.Z,{children:[(0,f.jsxs)(x.Z,{sx:Z.In.Am,children:[(0,f.jsx)(u.Z,{variant:"h5",component:"h3",mb:1,children:e}),(0,f.jsx)(u.Z,{variant:"body2",sx:Z.In.oD,children:t})]}),(0,f.jsx)(x.Z,{children:(0,f.jsxs)(w.Z,{direction:"row",children:[(0,f.jsxs)(w.Z,{justifyContent:"flex-end",alignItems:"flex-start",spacing:0,sx:{marginRight:"14px"},children:[(0,f.jsx)(x.Z,{children:(0,f.jsx)(u.Z,{variant:"caption",color:"text.sideSecond",children:"Priority"})}),(0,f.jsx)(x.Z,{children:(0,f.jsx)(u.Z,{variant:"h6",sx:C,children:d})})]}),(0,f.jsxs)(w.Z,{flexGrow:1,justifyContent:"flex-end",alignItems:"flex-start",spacing:0,children:[(0,f.jsx)(x.Z,{children:(0,f.jsx)(u.Z,{variant:"caption",color:"text.sideSecond",children:"Deadline"})}),(0,f.jsx)(x.Z,{children:(0,f.jsx)(u.Z,{variant:"h6",color:"text.primary",children:c})})]}),(0,f.jsxs)(w.Z,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:1,children:[(0,f.jsx)(x.Z,{children:(0,f.jsx)(I,{onClick:S,iconId:"alert"})}),(0,f.jsx)(x.Z,{children:(0,f.jsx)(I,{onClick:S,iconId:"move"})}),(0,f.jsx)(x.Z,{children:(0,f.jsx)(I,{onClick:function(){y(!0)},iconId:"pencil"})}),(0,f.jsx)(x.Z,{children:(0,f.jsx)(I,{onClick:function(){window.confirm("Do you really want to delete task ".concat(e,"?"))&&j((0,l._5)(h))},iconId:"trash"})})]})]})})]}),(0,f.jsx)(s.Z,{isOpenModal:v,onCloseModal:b,children:(0,f.jsx)(en,{onCloseModal:b,taskId:h,formTitle:"Edit card",buttonTitle:"Edit",taskOperation:l.xJ,initData:{title:e,description:t,priority:d,deadline:c}})})]})},rn=function(n){return n.filters.prio},on=function(n){var e=n.cards,t=(0,i.v9)(rn),r="all"===t?e:e.filter((function(n){return n.priority===t}));return(0,f.jsx)(w.Z,{sx:{gap:"8px"},children:r&&r.map((function(n){return(0,f.jsx)(tn,{taskId:n._id,name:n.title,description:n.description,priority:n.priority,deadline:n.deadline},n._id)}))})},ln=function(n){var e=n.column,t=(0,o.useState)(!1),i=(0,r.Z)(t,2),a=i[0],d=i[1],c=function(){d(!1)};return(0,f.jsxs)(w.Z,{sx:Z.In.$Q,children:[(0,f.jsx)(S,{title:e.title,columnId:e._id}),(0,f.jsx)(on,{cards:e.tasks}),(0,f.jsxs)(p.Z,{variant:"contained",sx:Z.LI.Z0,onClick:function(){d(!0)},children:[(0,f.jsx)(x.Z,{sx:Z.LI.Lj,children:(0,f.jsx)(m.J,{id:"plus",sx:Z.qv.mt})}),"Add another card"]}),(0,f.jsx)(s.Z,{isOpenModal:a,onCloseModal:c,children:(0,f.jsx)(en,{onCloseModal:c,parentColumn:e._id,formTitle:"Add card",buttonTitle:"Add",taskOperation:l.gI})})]})},sn=t(7689),an=t(9259),dn=t(7588),cn=c.Ry().shape({title:c.Z_().required("Title is required")}),xn={title:""},un=function(n){var e=n.onCloseModal,t=(0,sn.UO)().boardId,r=(0,i.I0)(),o=t;return(0,f.jsxs)(x.Z,{sx:Z.nC.qS,children:[(0,f.jsx)(u.Z,{variant:"h2",mb:3,children:"Add column"}),(0,f.jsx)(d.J9,{initialValues:xn,validationSchema:cn,onSubmit:function(n,t){var i=t.resetForm;console.log((0,a.Z)((0,a.Z)({},n),{},{parentBoard:o})),r((0,l.Wf)((0,a.Z)((0,a.Z)({},n),{},{parentBoard:o}))),i(),e()},children:function(n){var e=n.values,t=n.handleChange,i=n.handleSubmit;return(0,f.jsxs)(d.l0,{onSubmit:i,children:[(0,f.jsxs)(h.Z,{fullWidth:!0,children:[(0,f.jsx)(j.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:e.title,onChange:t}),(0,f.jsx)(d.Bc,{name:"Title",component:"div",style:{color:"red",fontSize:12}})]}),(0,f.jsxs)(p.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:Z.cr.LI,type:"submit",children:[(0,f.jsx)(x.Z,{sx:Z.LI.a$,children:(0,f.jsx)(an.Z,{sx:Z.LI.dh,children:(0,f.jsx)("svg",{stroke:"currentColor",children:(0,f.jsx)("use",{href:dn.Z+"#icon-plus"})})})}),"Add"]})]})}})]})},hn=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1],l=function(){i(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(p.Z,{sx:Z.LI.DP,color:"secondary",onClick:function(){i(!0)},children:[(0,f.jsx)(x.Z,{sx:Z.LI.Qc,children:(0,f.jsx)(m.J,{id:"plus",sx:Z.qv.qZ})}),(0,f.jsx)(u.Z,{variant:"h3",component:"span",children:"Add another column"})]}),(0,f.jsx)(s.Z,{isOpenModal:t,onCloseModal:l,children:(0,f.jsx)(un,{onCloseModal:l,title:"New board",type:"Submit"})})]})},jn=t(6058),pn=t(9211),mn=t(3101),Zn=(0,b.ZP)((function(n){return(0,f.jsx)(Q.Z,(0,a.Z)({},n))}))((function(n){n._;var e=n.checked,t=(0,i.v9)(mn.Pu);return{".MuiFormControlLabel-label":e&&{color:"dark"===t?"#FFF":"#161616"}}})),fn=function(n){var e=(0,pn.Z)(),t=!1;return e&&(t=e.value===n.value),(0,f.jsx)(Zn,(0,a.Z)({checked:t},n))},vn=t(7468),yn={color:"text.filterRadio",fontFamily:"Poppins",fontSize:12,fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:-.24},bn=function(){var n=(0,i.v9)(rn),e=(0,o.useState)(n),t=(0,r.Z)(e,2),l=t[0],s=t[1],d=(0,i.I0)();return(0,o.useEffect)((function(){d((0,vn.Q)(l))}),[d,l]),(0,f.jsxs)(T.Z,{sx:{width:300,height:234,p:0},children:[(0,f.jsx)(u.Z,{sx:{borderBottom:1,borderColor:"rgba(255, 255, 255, 0.50)",paddingBottom:1.75,marginBottom:1.75},variant:"h2",component:"h2",children:"Filters"}),(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:14},children:[(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(G.Z,{sx:{color:"text.primary",fontWeight:500,fontStyle:"normal",letterSpacing:"-0.28px","&.Mui-focused":{color:"text.primary"}},children:"Label color"}),(0,f.jsxs)(H.Z,{value:l,onChange:function(n){s(n.target.value)},children:[(0,f.jsx)(fn,{label:"Without priority",value:"without",sx:yn,control:(0,f.jsx)(V,{priority:"without"})}),(0,f.jsx)(fn,{label:"Low",value:"low",sx:(0,a.Z)({},yn),control:(0,f.jsx)(V,{priority:"low"})}),(0,f.jsx)(fn,{label:"Medium",value:"medium",sx:yn,control:(0,f.jsx)(V,{priority:"medium"})}),(0,f.jsx)(fn,{label:"High",value:"high",sx:yn,control:(0,f.jsx)(V,{priority:"high"})})]})]}),(0,f.jsx)(p.Z,{variant:"text",sx:(0,a.Z)((0,a.Z)({},yn),{},{textDecorationLine:"underline",textTransform:"none",height:18}),style:"all"===l?{pointerEvents:"none",textDecoration:"none"}:null,onClick:function(){s("all")},type:"button",children:(0,f.jsx)(u.Z,{children:"all"===l?"Shown all":"Show all"})})]})]})},gn=function(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(p.Z,{sx:{textTransform:"none",display:"flex",gap:"8px",alignItems:"center"},type:"button",onClick:function(){i(!0)},children:[(0,f.jsx)(x.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",transition:"all 250ms linear",cursor:"pointer","&:hover":{transform:"scale(1.1)"}},children:(0,f.jsx)(an.Z,{sx:{width:"14px",height:"14px",color:"text.primary"},children:(0,f.jsx)(m.J,{id:"filter"})})}),(0,f.jsx)(u.Z,{sx:{color:"text.primary"},children:"Filters"})]}),(0,f.jsx)(s.Z,{isOpenModal:t,onCloseModal:function(){i(!1)},children:(0,f.jsx)(bn,{})})]})},Cn=function(){var n=(0,i.v9)(jn.ZO),e=(0,i.v9)(jn.eo);return(0,f.jsx)(x.Z,{sx:Z.nC.IY,children:(0,f.jsxs)(x.Z,{sx:Z.nC.IP,children:[(0,f.jsxs)(x.Z,{sx:Z.nC.Vu,children:[(0,f.jsx)(u.Z,{component:"h2",variant:"h3",sx:Z.fL.wy,children:n.title}),(0,f.jsx)(gn,{})]}),(0,f.jsxs)(x.Z,{sx:Z.nC.zF,children:[(0,f.jsx)(x.Z,{sx:Z.nC.k6,children:e.map((function(n){return(0,f.jsx)(ln,{column:n},n._id)}))}),(0,f.jsx)(hn,{})]})]})})}}}]);
//# sourceMappingURL=49.36c6fe15.chunk.js.map