(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{4468:function(){},798:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Mn}});var i,r,o,l,s=t(9434),a=t(9439),d=t(2791),c=t(6151),x=t(2460),u=t(3905),h=t(5488),p=t(1413),j=t(5705),m=t(6727),f=t(4468),Z=t(3329),v=m.Ry().shape({title:m.Z_().required("Title is required")}),b=function(n){var e=n.title,t=n.columnId,i=n.onCloseModal,r=(0,s.I0)();return(0,Z.jsxs)(f.Section,{children:[(0,Z.jsx)(f.SectionTitle,{children:"Edit column"}),(0,Z.jsx)(j.J9,{initialValues:{title:e},validationSchema:v,onSubmit:function(n,e){var o=e.resetForm;r((0,x.Gw)((0,p.Z)((0,p.Z)({},n),{},{columnId:t}))),o(),i()},children:(0,Z.jsxs)(f.ModalForm,{children:[(0,Z.jsxs)(f.FormWrapper,{children:[(0,Z.jsx)(f.ErrorSection,{name:"title",component:"div"}),(0,Z.jsx)(f.TitleInput,{type:"text ",id:"text",name:"title",placeholder:"Title "})]}),(0,Z.jsxs)(f.AuthFormSubmitButton,{type:"submit",children:[(0,Z.jsx)(f.ButtonPlus,{children:(0,Z.jsx)(f.PlusIcon,{children:(0,Z.jsx)(u.J,{id:"plus"})})}),"Edit"]})]})})]})},y=t(7621),g=t(9585),C=t(3400),k=function(n){var e=n.title,t=n.columnId,i=(0,d.useState)(!1),r=(0,a.Z)(i,2),o=r[0],l=r[1],c=(0,s.I0)(),p=function(){l(!1)};return(0,Z.jsx)("div",{children:(0,Z.jsxs)(y.Z,{children:[(0,Z.jsx)(g.Z,{title:e,action:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(C.Z,{onClick:function(){l(!0)},children:(0,Z.jsx)(u.J,{id:"pencil"})}),(0,Z.jsx)(C.Z,{onClick:function(){window.confirm("Do you really want to delete column ".concat(e,"?"))&&c((0,x.eA)(t))},children:(0,Z.jsx)(u.J,{id:"trash"})})]})}),o&&(0,Z.jsx)(h.Z,{isOpenModal:o,onCloseModal:p,children:(0,Z.jsx)(b,{onCloseModal:p,columnId:t,title:e,type:"Submit"})})]})})},w=t(4554),I=function(n){var e="";switch(n){case"low":e="#8FA1D0";break;case"medium":e="#E09CB5";break;case"high":e="#BEDBB0";break;default:e="#595959"}return e},S=t(3967),B=t(890),T=t(6314),M=function(n){var e=n.text;return(0,Z.jsx)(B.Z,{variant:"body2",color:"text.cardSecond",sx:{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},children:e})},F=t(6934),P=t(3701),_=(0,F.ZP)(P.Z)((function(n){var e=n.theme;return{padding:0,margin:0,"& svg":{stroke:e.palette.text.sideSecond,transition:"stroke 0.3s"},"&:hover":{color:e.palette.text.sideSecond,"& svg":{stroke:e.palette.text.primary}},"& .MuiTouchRipple-root":{display:"none"}}})),D=function(n){var e=n.onClick,t=n.iconId;return(0,Z.jsx)(_,{onClick:e,children:(0,Z.jsx)(u.J,{id:t})})},R=t(9164),W=t(5987),E=t(5155),L=["name"],O=function(n){var e=n.name,t=(0,W.Z)(n,L),i=(0,j.U$)(e),r=(0,a.Z)(i,2),o=r[0],l=r[1],s=(0,p.Z)((0,p.Z)((0,p.Z)({},o),t),{},{fullWidth:!0,variant:"outlined"});return l&&l.touched&&l.error&&(s.error=!0,s.helperText=l.error),(0,Z.jsx)(E.Z,(0,p.Z)({},s))},q=t(5936),J=["children"],A=function(n){var e=n.children,t=((0,W.Z)(n,J),(0,j.u6)().submitForm),i={variant:"contained",color:"primary",fullWidth:!0,onClick:function(){t()}};return(0,Z.jsx)(c.Z,(0,p.Z)((0,p.Z)({startIcon:(0,Z.jsx)(q.Z,{style:{fill:"white",fontSize:"28px"}})},i),{},{children:(0,Z.jsx)("span",(0,p.Z)((0,p.Z)({},{style:{textTransform:"none"}}),{},{children:e}))}))},z=t(8244),V=(0,F.ZP)("span")((function(n){return{borderRadius:"50%",width:14,height:14,backgroundColor:n.btncolor||"#BEDBB0"}})),G=(0,F.ZP)(V)((function(n){var e=n.btncolor;return{backgroundColor:"transparent",border:"1px solid ".concat(e||"#BEDBB0"),position:"relative","&:before":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"block",width:8,height:8,borderRadius:"50%",backgroundColor:e||"#BEDBB0",content:'""'}}})),H=function(n){var e=I(n.priority);return(0,Z.jsx)(z.Z,(0,p.Z)({disableRipple:!0,icon:(0,Z.jsx)(V,{btncolor:e}),checkedIcon:(0,Z.jsx)(G,{btncolor:e})},n))},U=t(5523),Y=t(8096),$=t(7133),N=t(765),Q=["name"],X=function(n){var e=n.name,t=(0,W.Z)(n,Q),i=(0,j.U$)(e),r=(0,a.Z)(i,2),o=r[0],l=r[1],s=(0,p.Z)((0,p.Z)((0,p.Z)({},o),t),{},{type:"date",variant:"standard",fullWidth:!0,InputLabelProps:{shrink:!0}});return l&&l.touched&&l.error&&(s.error=!0,s.helperText=l.error),(0,Z.jsx)(E.Z,(0,p.Z)({},s))},K={title:"",description:"",deadline:""},nn=m.Ry().shape({title:m.Z_().required("Required"),description:m.Z_().required("Required"),deadline:m.hT().required()}),en=function(n){var e=n.parentColumn,t=n.onCloseModal,i=n.formTitle,r=n.buttonTitle,o=n.taskOperation,l=n.taskId,c=n.initData,x=(0,s.I0)(),u=(0,d.useState)("without"),h=(0,a.Z)(u,2),m=h[0],f=h[1];return(0,Z.jsx)(R.Z,{children:(0,Z.jsx)(j.J9,{initialValues:c||K,validationSchema:nn,onSubmit:function(n){var i=n.deadline.split("-").reverse().join("-");x(o((0,p.Z)((0,p.Z)({},n),{},{parentColumn:e,priority:m,taskId:l,deadline:i}))),t()},children:(0,Z.jsxs)(j.l0,{children:[(0,Z.jsx)(B.Z,{variant:"h2",component:"h2",mb:3,children:i}),(0,Z.jsx)(O,{name:"title",label:"Title",sx:{marginBottom:"14px"}}),(0,Z.jsx)(O,{name:"description",label:"Description",multiline:!0,rows:6,sx:{marginBottom:"24px"}}),(0,Z.jsxs)(Y.Z,{children:[(0,Z.jsx)($.Z,{id:"priority-radios",sx:{fontSize:12,lineHeight:1.5,letterSpacing:"-0.02em",color:"GrayText"},children:"Label color"}),(0,Z.jsxs)(N.Z,{sx:{marginBottom:"14px"},row:!0,defaultValue:"low","aria-labelledby":"priority-radios",name:"priority",value:m,onChange:function(n){f(n.target.value)},children:[(0,Z.jsx)(U.Z,{value:"low",control:(0,Z.jsx)(H,{priority:"low"})}),(0,Z.jsx)(U.Z,{value:"medium",control:(0,Z.jsx)(H,{priority:"medium",sx:{ml:"-14px"}})}),(0,Z.jsx)(U.Z,{value:"high",control:(0,Z.jsx)(H,{priority:"high",sx:{ml:"-14px"}})}),(0,Z.jsx)(U.Z,{value:"without",control:(0,Z.jsx)(H,{priority:"without",sx:{ml:"-14px"}})})]})]}),(0,Z.jsx)(B.Z,{variant:"body2",component:"h4",mb:.5,children:"Deadline"}),(0,Z.jsx)(X,{name:"deadline",sx:{marginBottom:"40px"}}),(0,Z.jsx)(A,{children:r})]})})})},tn=function(n){var e=n.name,t=n.description,i=n.priority,r=n.deadline,o=n.taskId,l=(0,S.Z)(),c=(0,s.I0)(),u=(0,d.useState)(!1),p=(0,a.Z)(u,2),j=p[0],m=p[1],f=function(){m(!1)},v=I(i),b={"&::before":{content:'""',transform:"translateY(20%)",height:"12px",width:"12px",backgroundColor:"".concat(v),borderRadius:"50%",display:"inline-block",marginRight:"4px"}},g=function(){};return(0,Z.jsxs)(y.Z,{elevation:2,sx:{py:"14px",pl:"24px",pr:"20px",borderLeft:"4px solid ".concat(v),mb:"14px"},children:[(0,Z.jsxs)(w.Z,{children:[(0,Z.jsxs)(w.Z,{sx:{pb:"14px",mb:"14px",borderBottom:"1px solid ".concat(l.palette.side.divider)},children:[(0,Z.jsx)(B.Z,{variant:"h5",component:"h2",color:"text.primary",mb:1,children:e}),(0,Z.jsx)(M,{text:t})]}),(0,Z.jsx)(w.Z,{children:(0,Z.jsxs)(T.Z,{direction:"row",children:[(0,Z.jsxs)(T.Z,{justifyContent:"flex-end",alignItems:"flex-start",spacing:0,sx:{marginRight:"14px"},children:[(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(B.Z,{variant:"caption",color:"text.sideSecond",children:"Priority"})}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(B.Z,{variant:"h6",sx:b,children:i})})]}),(0,Z.jsxs)(T.Z,{flexGrow:1,justifyContent:"flex-end",alignItems:"flex-start",spacing:0,children:[(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(B.Z,{variant:"caption",color:"text.sideSecond",children:"Deadline"})}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(B.Z,{variant:"h6",color:"text.primary",children:r})})]}),(0,Z.jsxs)(T.Z,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:1,children:[(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(D,{onClick:g,iconId:"alert"})}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(D,{onClick:g,iconId:"move"})}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(D,{onClick:function(){m(!0)},iconId:"pencil"})}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(D,{onClick:function(){window.confirm("Do you really want to delete task ".concat(e,"?"))&&c((0,x._5)(o))},iconId:"trash"})})]})]})})]}),(0,Z.jsx)(h.Z,{isOpenModal:j,onCloseModal:f,children:(0,Z.jsx)(en,{onCloseModal:f,taskId:o,formTitle:"Edit card",buttonTitle:"Edit",taskOperation:x.xJ,initData:{title:e,description:t,priority:i,deadline:r}})})]})},rn=function(n){return n.filters.prio},on=function(n){var e=n.cards,t=(0,s.v9)(rn),i="all"===t?e:e.filter((function(n){return n.priority===t}));return(0,Z.jsx)(w.Z,{sx:{overflowY:"auto",overflowX:"hidden"},children:i&&i.map((function(n){return(0,Z.jsx)(tn,{taskId:n._id,name:n.title,description:n.description,priority:n.priority,deadline:n.deadline},n._id)}))})},ln=function(n){var e=n.column,t=(0,d.useState)(!1),i=(0,a.Z)(t,2),r=i[0],o=i[1],l=function(){o(!1)};return(0,Z.jsxs)(T.Z,{sx:{width:"334px",maxWidth:"334px",height:"100%"},children:[(0,Z.jsx)(k,{title:e.title,columnId:e._id}),(0,Z.jsx)(on,{cards:e.tasks}),(0,Z.jsx)(c.Z,{variant:"contained",startIcon:(0,Z.jsx)(q.Z,{}),onClick:function(){o(!0)},children:"Add another card"}),(0,Z.jsx)(h.Z,{isOpenModal:r,onCloseModal:l,children:(0,Z.jsx)(en,{onCloseModal:l,parentColumn:e._id,formTitle:"Add card",buttonTitle:"Add",taskOperation:x.gI})})]})},sn=t(168),an=t(8789),dn=an.ZP.button(i||(i=(0,sn.Z)(["\n  /* position: absolute;\n  top: 80px;\n  left: 650px; */\n  width: 334px;\n  height: 56px;\n  padding: 14px 79px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: 8px;\n  background: #fff;\n  outline: none;\n  border: none;\n\n  transition: all 250ms linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]))),cn=an.ZP.div(r||(r=(0,sn.Z)(["\n  width: 28px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background-color: #5255bc;\n  transition: all 250ms linear;\n\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),xn=an.ZP.svg(o||(o=(0,sn.Z)(["\n  width: 14px;\n  height: 14px;\n  color: #ffffff;\n"]))),un=an.ZP.p(l||(l=(0,sn.Z)(["\n  color: #161616;\n  font-size: 14px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  width: 150px;\n"]))),hn=t(7689),pn=t(9259),jn=t(3109),mn=t(7588),fn=m.Ry().shape({title:m.Z_().required("Title is required")}),Zn={title:""},vn=function(n){var e=n.onCloseModal,t=(0,hn.UO)().boardId,i=(0,s.I0)(),r=t;return(0,Z.jsxs)(w.Z,{sx:jn.nC.qS,children:[(0,Z.jsx)(B.Z,{variant:"h2",mb:3,children:"Add column"}),(0,Z.jsx)(j.J9,{initialValues:Zn,validationSchema:fn,onSubmit:function(n,t){var o=t.resetForm;console.log((0,p.Z)((0,p.Z)({},n),{},{parentBoard:r})),i((0,x.Wf)((0,p.Z)((0,p.Z)({},n),{},{parentBoard:r}))),o(),e()},children:function(n){var e=n.values,t=n.handleChange,i=n.handleSubmit;return(0,Z.jsxs)(j.l0,{onSubmit:i,children:[(0,Z.jsxs)(Y.Z,{fullWidth:!0,children:[(0,Z.jsx)(E.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:e.title,onChange:t}),(0,Z.jsx)(j.Bc,{name:"Title",component:"div",style:{color:"red",fontSize:12}})]}),(0,Z.jsxs)(c.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:jn.cr.LI,type:"submit",children:[(0,Z.jsx)(w.Z,{sx:jn.LI.a$,children:(0,Z.jsx)(pn.Z,{sx:jn.LI.dh,children:(0,Z.jsx)("svg",{stroke:"currentColor",children:(0,Z.jsx)("use",{href:mn.Z+"#icon-plus"})})})}),"Add"]})]})}})]})},bn=function(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),t=e[0],i=e[1],r=function(){i(!1)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(dn,{type:"button",onClick:function(){i(!0)},children:[(0,Z.jsx)(cn,{children:(0,Z.jsx)(xn,{children:(0,Z.jsx)(u.J,{id:"plus"})})}),(0,Z.jsx)(un,{children:"Add another column"})]}),t&&(0,Z.jsx)(h.Z,{isOpenModal:t,onCloseModal:r,children:(0,Z.jsx)(vn,{onCloseModal:r,title:"New board",type:"Submit"})})]})},yn=t(6058),gn=t(9211),Cn=t(3101),kn=(0,F.ZP)((function(n){return(0,Z.jsx)(U.Z,(0,p.Z)({},n))}))((function(n){n._;var e=n.checked,t=(0,s.v9)(Cn.Pu);return{".MuiFormControlLabel-label":e&&{color:"dark"===t?"#FFF":"#161616"}}})),wn=function(n){var e=(0,gn.Z)(),t=!1;return e&&(t=e.value===n.value),(0,Z.jsx)(kn,(0,p.Z)({checked:t},n))},In=t(7468),Sn={color:"text.filterRadio",fontFamily:"Poppins",fontSize:12,fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:-.24},Bn=function(){var n=(0,s.v9)(rn),e=(0,d.useState)(n),t=(0,a.Z)(e,2),i=t[0],r=t[1],o=(0,s.I0)();return(0,d.useEffect)((function(){o((0,In.Q)(i))}),[o,i]),(0,Z.jsxs)(R.Z,{sx:{width:300,height:234,p:0},children:[(0,Z.jsx)(B.Z,{sx:{borderBottom:1,borderColor:"rgba(255, 255, 255, 0.50)",paddingBottom:1.75,marginBottom:1.75},variant:"h2",component:"h2",children:"Filters"}),(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:14},children:[(0,Z.jsxs)(Y.Z,{children:[(0,Z.jsx)($.Z,{sx:{color:"text.primary",fontWeight:500,fontStyle:"normal",letterSpacing:"-0.28px","&.Mui-focused":{color:"text.primary"}},children:"Label color"}),(0,Z.jsxs)(N.Z,{value:i,onChange:function(n){r(n.target.value)},children:[(0,Z.jsx)(wn,{label:"Without priority",value:"without",sx:Sn,control:(0,Z.jsx)(H,{priority:"without"})}),(0,Z.jsx)(wn,{label:"Low",value:"low",sx:(0,p.Z)({},Sn),control:(0,Z.jsx)(H,{priority:"low"})}),(0,Z.jsx)(wn,{label:"Medium",value:"medium",sx:Sn,control:(0,Z.jsx)(H,{priority:"medium"})}),(0,Z.jsx)(wn,{label:"High",value:"high",sx:Sn,control:(0,Z.jsx)(H,{priority:"high"})})]})]}),(0,Z.jsx)(c.Z,{variant:"text",sx:(0,p.Z)((0,p.Z)({},Sn),{},{textDecorationLine:"underline",textTransform:"none",height:18}),style:"all"===i?{pointerEvents:"none",textDecoration:"none"}:null,onClick:function(){r("all")},type:"button",children:(0,Z.jsx)(B.Z,{children:"all"===i?"Shown all":"Show all"})})]})]})},Tn=function(){var n=(0,d.useState)(!1),e=(0,a.Z)(n,2),t=e[0],i=e[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(c.Z,{sx:{textTransform:"none",display:"flex",gap:"8px",alignItems:"center"},type:"button",onClick:function(){i(!0)},children:[(0,Z.jsx)(w.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",transition:"all 250ms linear",cursor:"pointer","&:hover":{transform:"scale(1.1)"}},children:(0,Z.jsx)(pn.Z,{sx:{width:"14px",height:"14px",color:"text.primary"},children:(0,Z.jsx)(u.J,{id:"filter"})})}),(0,Z.jsx)(B.Z,{sx:{color:"text.primary"},children:"Filters"})]}),t&&(0,Z.jsx)(h.Z,{isOpenModal:t,onCloseModal:function(){i(!1)},children:(0,Z.jsx)(Bn,{})})]})},Mn=function(){var n=(0,s.v9)(yn.ZO),e=(0,s.v9)(yn.eo);return(0,Z.jsx)(w.Z,{sx:jn.nC.IY,children:(0,Z.jsxs)(w.Z,{sx:jn.nC.IP,children:[(0,Z.jsxs)(w.Z,{sx:jn.nC.Vu,children:[(0,Z.jsx)(B.Z,{component:"h2",variant:"h3",sx:jn.fL.wy,children:n.title}),(0,Z.jsx)(Tn,{})]}),(0,Z.jsxs)(w.Z,{sx:jn.nC.zF,children:[(0,Z.jsx)(w.Z,{sx:jn.nC.k6,children:e.map((function(n){return(0,Z.jsx)(ln,{column:n},n._id)}))}),(0,Z.jsx)(bn,{})]})]})})}}}]);
//# sourceMappingURL=798.4761d2d8.chunk.js.map