"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{7588:function(e,t,n){n(2791);t.Z=n.p+"static/media/sprite.b4e44d736a5bdf4000b58152e10f4f1c.svg"},4684:function(e,t,n){var r=n(3590),o=n(4554),i=n(890),l=n(6151),a=n(1774),s=n(3329);t.Z=function(e){var t=e.isOpenModal,n=e.onCloseModal,d=e.onConfirm;return(0,s.jsx)(r.Z,{open:t,onClose:n,children:(0,s.jsx)(o.Z,{sx:a.nC.oC,children:(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(i.Z,{variant:"body1",children:"Are you sure you want to delete this item?"}),(0,s.jsx)(i.Z,{variant:"body2",children:"All your columns/tasks in this item will be deleted too."}),(0,s.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",gap:"10px"},children:[(0,s.jsx)(l.Z,{onClick:n,children:"No"}),(0,s.jsx)(l.Z,{onClick:d,children:"Yes"})]})]})})})}},789:function(e,t,n){n.d(t,{J:function(){return l}});n(2791);var r=n(7588),o=n(9259),i=n(3329),l=function(e){var t=e.id,n=e.sx;return(0,i.jsx)(o.Z,{component:"svg",sx:n,children:(0,i.jsx)("use",{href:r.Z+"#icon-"+t})})}},5488:function(e,t,n){var r=n(3590),o=n(4554),i=n(789),l=n(1774),a=n(3329);t.Z=function(e){var t=e.isOpenModal,n=e.onCloseModal,s=e.children;return(0,a.jsx)(r.Z,{open:t,onClose:n,children:(0,a.jsxs)(o.Z,{sx:l.nC.oC,children:[(0,a.jsx)(o.Z,{onClick:n,sx:l.LI.Wb,children:(0,a.jsx)(i.J,{id:"x-close",sx:l.qv.xv})}),s]})})}},7158:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2791),o=n(1495),i=(n(5951),n(3329)),l=function(e){var t=e.children,n=e.width,l=void 0===n?"100%":n,a=e.height,s=void 0===a?"100%":a,d=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=d.current;if(e){var t=e.current;if(t&&"function"===typeof t.destroy)return function(){t.destroy()}}}),[]),(0,i.jsx)(o.E,{ref:d,style:{width:l,height:s},children:t})}},7809:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var r=n(1413),o=n(9434),i=n(9439),l=n(2791),a=n(5488),s=n(789),d=n(7689),c=n(2460),u=n(5705),x=n(6727),p=n(4554),h=n(890),f=n(8096),m=n(5155),b=n(6151),g=n(1774),j=n(3329),v=x.Ry().shape({title:x.Z_().required("Title is required")}),y={title:""},Z=function(e){var t=e.onCloseModal,n=(0,d.UO)().boardId,i=(0,o.I0)(),l=n;return(0,j.jsxs)(p.Z,{sx:g.nC.qS,children:[(0,j.jsx)(h.Z,{variant:"h2",mb:3,children:"Add column"}),(0,j.jsx)(u.J9,{initialValues:y,validationSchema:v,onSubmit:function(e,n){var o=n.resetForm;console.log((0,r.Z)((0,r.Z)({},e),{},{parentBoard:l})),i((0,c.Wf)((0,r.Z)((0,r.Z)({},e),{},{parentBoard:l}))),o(),t()},children:function(e){var t=e.values,n=e.handleChange,r=e.handleSubmit;return(0,j.jsxs)(u.l0,{onSubmit:r,children:[(0,j.jsxs)(f.Z,{fullWidth:!0,children:[(0,j.jsx)(m.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:t.title,onChange:n}),(0,j.jsx)(u.Bc,{name:"Title",component:"div",style:{color:"red",fontSize:12}})]}),(0,j.jsxs)(b.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:g.cr.LI,type:"submit",children:[(0,j.jsx)(p.Z,{sx:g.LI.a$,children:(0,j.jsx)(s.J,{id:"plus",sx:g.qv.ZT})}),"Add"]})]})}})]})},k=function(){var e=(0,l.useState)(!1),t=(0,i.Z)(e,2),n=t[0],r=t[1],o=function(){r(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(b.Z,{sx:g.LI.DP,variant:"contained",color:"secondary",onClick:function(){r(!0)},children:[(0,j.jsx)(p.Z,{sx:g.LI.Qc,children:(0,j.jsx)(s.J,{id:"plus",sx:g.qv.x3})}),(0,j.jsx)(h.Z,{variant:"h3",component:"span",children:"Add another column"})]}),(0,j.jsx)(a.Z,{isOpenModal:n,onCloseModal:o,children:(0,j.jsx)(Z,{onCloseModal:o,title:"New board",type:"Submit"})})]})},C=n(6058),w=n(9164),I=n(7133),M=n(765),S=n(8244),z=n(6934),D=function(e){var t="";switch(e){case"low":t="#8FA1D0";break;case"medium":t="#E09CB5";break;case"high":t="#BEDBB0";break;default:t="#595959"}return t},B=(0,z.ZP)("span")((function(e){return{borderRadius:"50%",width:14,height:14,backgroundColor:e.btncolor||"#BEDBB0"}})),F=(0,z.ZP)(B)((function(e){var t=e.btncolor;return{backgroundColor:"transparent",border:"1px solid ".concat(t||"#BEDBB0"),position:"relative","&:before":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"block",width:8,height:8,borderRadius:"50%",backgroundColor:t||"#BEDBB0",content:'""'}}})),U=function(e){var t=D(e.priority);return(0,j.jsx)(S.Z,(0,r.Z)({disableRipple:!0,icon:(0,j.jsx)(B,{btncolor:t}),checkedIcon:(0,j.jsx)(F,{btncolor:t})},e))},W=n(5523),O=n(9211),P=n(3101),T=(0,z.ZP)((function(e){return(0,j.jsx)(W.Z,(0,r.Z)({},e))}))((function(e){e._;var t=e.checked,n=(0,o.v9)(P.Pu);return{".MuiFormControlLabel-label":t&&{color:"dark"===n?"#FFF":"#161616"}}})),R=function(e){var t=(0,O.Z)(),n=!1;return t&&(n=t.value===e.value),(0,j.jsx)(T,(0,r.Z)({checked:n},e))},A=n(7468),H=function(e){return e.filters.prio},_={color:"text.filterRadio",fontFamily:"Poppins",fontSize:12,fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:-.24},q=function(){var e=(0,o.v9)(H),t=(0,l.useState)(e),n=(0,i.Z)(t,2),a=n[0],s=n[1],d=(0,o.I0)();return(0,l.useEffect)((function(){d((0,A.Q)(a))}),[d,a]),(0,j.jsxs)(w.Z,{sx:{width:300,height:234,p:0},children:[(0,j.jsx)(h.Z,{sx:{borderBottom:1,borderColor:"rgba(255, 255, 255, 0.50)",paddingBottom:1.75,marginBottom:1.75},variant:"h2",component:"h2",children:"Filters"}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:14},children:[(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(I.Z,{sx:{color:"text.primary",fontWeight:500,fontStyle:"normal",letterSpacing:"-0.28px","&.Mui-focused":{color:"text.primary"}},children:"Label color"}),(0,j.jsxs)(M.Z,{value:a,onChange:function(e){s(e.target.value)},children:[(0,j.jsx)(R,{label:"Without priority",value:"without",sx:_,control:(0,j.jsx)(U,{priority:"without"})}),(0,j.jsx)(R,{label:"Low",value:"low",sx:(0,r.Z)({},_),control:(0,j.jsx)(U,{priority:"low"})}),(0,j.jsx)(R,{label:"Medium",value:"medium",sx:_,control:(0,j.jsx)(U,{priority:"medium"})}),(0,j.jsx)(R,{label:"High",value:"high",sx:_,control:(0,j.jsx)(U,{priority:"high"})})]})]}),(0,j.jsx)(b.Z,{variant:"text",sx:(0,r.Z)((0,r.Z)({},_),{},{textDecorationLine:"underline",textTransform:"none",height:18}),style:"all"===a?{pointerEvents:"none",textDecoration:"none"}:null,onClick:function(){s("all")},type:"button",children:(0,j.jsx)(h.Z,{children:"all"===a?"Shown all":"Show all"})})]})]})},L=n(9259),E=function(){var e=(0,l.useState)(!1),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(b.Z,{sx:{textTransform:"none",display:"flex",gap:"8px",alignItems:"center"},type:"button",onClick:function(){r(!0)},children:[(0,j.jsx)(p.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",transition:"all 250ms linear",cursor:"pointer","&:hover":{transform:"scale(1.1)"}},children:(0,j.jsx)(L.Z,{sx:{width:"14px",height:"14px",color:"text.primary"},children:(0,j.jsx)(s.J,{id:"filter",sx:g.qv.hX})})}),(0,j.jsx)(h.Z,{sx:{color:"text.primary"},children:"Filters"})]}),(0,j.jsx)(a.Z,{isOpenModal:n,onCloseModal:function(){r(!1)},children:(0,j.jsx)(q,{})})]})},$=n(7158),J=n(793),Y=n(5987),V=["children"],Q=function(e){var t=e.children,n=(0,Y.Z)(e,V),o=(0,l.useState)(!1),a=(0,i.Z)(o,2),s=a[0],d=a[1];return(0,l.useEffect)((function(){var e=requestAnimationFrame((function(){return d(!0)}));return function(){cancelAnimationFrame(e),d(!1)}}),[]),s?(0,j.jsx)(J.bK,(0,r.Z)((0,r.Z)({},n),{},{children:t})):null},N=n(5671),X=n(3144),G=n(136),K=n(7277),ee=n(7479),te=(0,z.ZP)(ee.Z)((function(e){e.theme;return{padding:0,margin:0,"& .MuiTouchRipple-root":{display:"none"}}})),ne=function(e){var t=e.onClick,n=e.iconId;return(0,j.jsx)(te,{onClick:t,children:(0,j.jsx)(s.J,{id:n,sx:g.qv.pH})})},re=["name"],oe=function(e){var t=e.name,n=(0,Y.Z)(e,re),o=(0,u.U$)(t),l=(0,i.Z)(o,2),a=l[0],s=l[1],d=(0,r.Z)((0,r.Z)((0,r.Z)({},a),n),{},{fullWidth:!0,variant:"outlined"});return s&&s.touched&&s.error&&(d.error=!0,d.helperText=s.error),(0,j.jsx)(m.Z,(0,r.Z)({},d))},ie=n(3457),le=(0,z.ZP)("div")((function(e){return{display:"flex",justifyContent:"center",alignItems:"center",background:e.theme.palette.background.boxPlus,width:"28px",height:"28px",borderRadius:"4px"}})),ae=function(){return(0,j.jsx)(le,{children:(0,j.jsx)(s.J,{id:"plus",sx:g.qv.ZT})})},se=["children"],de=(0,ie.Z)(b.Z)((function(e){e.theme;return{boxShadow:"none",textTransform:"none",paddingTop:"11px",paddingBottom:"11px","&:hover":{boxShadow:"none"}}})),ce=function(e){var t=e.children,n=((0,Y.Z)(e,se),(0,u.u6)().submitForm);return(0,j.jsx)(de,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){n()},startIcon:(0,j.jsx)(ae,{}),children:t})},ue=n(7613),xe=n(1652),pe=n(4750),he=n(7892),fe=n.n(he),me=function(e){var t=e.parentState,n=e.initial;fe()().format();var o=(0,l.useState)(n||""),a=(0,i.Z)(o,2),d=a[0],c=a[1],u=new Date;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(xe._,{dateAdapter:pe.y,children:(0,j.jsx)(ue.M,{views:["month","day"],value:d,desktopModeMediaQuery:"",showDaysOutsideCurrentMonth:!0,fixedWeekNumber:5,onChange:function(e){c(e),t(e)},renderInput:function(e){return(0,j.jsx)(m.Z,(0,r.Z)({},e))},shouldDisableDate:function(e){return function(e){return e<u}(e)&&!function(e){return e.$D===u.getDate()&&e.$M===u.getMonth()&&e.$y===u.getFullYear()}(e)},slots:{openPickerIcon:function(){return(0,j.jsx)(s.J,{id:"dropdown"})}},dayOfWeekFormatter:function(e){return e.slice(0,2)},slotProps:{desktopPaper:{sx:{borderRadius:"8px",color:"text.primary",backgroundColor:"background.calendar","& .MuiPickersCalendarHeader-labelContainer":{position:"absolute",left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap"},"& .MuiPickersCalendarHeader-label":{fontSize:"16px",fontWeight:"500",letterSpacing:"0.32px"},"& .MuiSvgIcon-root":{fill:"text.primary"},"& .MuiTypography-root":{color:"text.additional",height:"24px",marginTop:"14px",fontSize:"14px"},"& .MuiDayCalendar-weekContainer":{justifyContent:"space-between"},"& .MuiButtonBase-root":{color:"text.primary",margin:0,padding:0,fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"18px"},"& .MuiPickersArrowSwitcher-root":{width:"100%",justifyContent:"space-between"},"& .MuiPickersCalendarHeader-switchViewButton":{display:"none"},"& .MuiPickersCalendarHeader-root":{padding:"0",alignItems:"baseline",margin:"0",borderBottomWidth:"2px",borderBottomStyle:"solid",borderColor:"divider.card"},"& .MuiPickersArrowSwitcher-button":{height:"21px"},"& .MuiDateCalendar-root":{width:"233px",height:"254px",padding:"18px",boxSizing:"border-box",background:"background.side"},"& .MuiPickersDay-hiddenDaySpacingFiller":{height:"24px",width:"24px",minWidth:"24px",maxWidth:"24px"}}},day:{sx:{height:"24px",width:"24px",minWidth:"24px",maxWidth:"24px",fontSize:"14px","&.MuiPickersDay-root.Mui-selected":{backgroundColor:"primary.main",color:"text.hover"},"&.MuiPickersDay-root:hover":{backgroundColor:"primary.main",color:"text.additional"},"&.Mui-selected:hover":{backgroundColor:"primary.main",color:"text.hover"},"&.MuiPickersDay-today":{borderWidth:1,borderColor:"primary.main",color:"text.primary"}}},textField:{variant:"outlined",sx:{"& input":{display:"none"},"& fieldset":{border:"none"}}}}})})})},be=n(2426),ge=n.n(be),je=function(e){return ge()(e).format("DD-MM-YYYY")},ve=function(e){ge()().format("MMMM D");return e?function(e){var t=ge()(e),n=ge()().endOf("day"),r=ge()().add(1,"day").endOf("day");return t<n?"Today":t<r?"Tomorrow":"in "+t.fromNow(!0)}(e.$d)+", "+ge()(e.$d).format("MMMM D"):"Today, "+ge()().format("MMMM D")},ye={title:"",description:"",deadline:""},Ze=x.Ry().shape({title:x.Z_().required("Required"),description:x.Z_().required("Required"),deadline:x.nK()}),ke=function(e){var t=e.parentColumn,n=e.onCloseModal,a=e.formTitle,s=e.buttonTitle,d=e.taskOperation,c=e.taskId,x=e.initData,m=(0,o.I0)(),b=(0,l.useState)(Date.now()),g=(0,i.Z)(b,2),v=g[0],y=g[1],Z=(0,l.useState)("without"),k=(0,i.Z)(Z,2),C=k[0],S=k[1];return(0,j.jsx)(w.Z,{sx:{maxWidth:"302px",p:0},children:(0,j.jsx)(u.J9,{initialValues:x||ye,validationSchema:Ze,onSubmit:function(e){m(d((0,r.Z)((0,r.Z)({},e),{},{parentColumn:t,priority:C,taskId:c,deadline:je(v.$d)}))),n()},children:(0,j.jsxs)(u.l0,{children:[(0,j.jsx)(h.Z,{variant:"h2",component:"h2",mb:3,children:a}),(0,j.jsx)(oe,{name:"title",label:"Title",sx:{marginBottom:"14px"}}),(0,j.jsx)(oe,{name:"description",label:"Description",multiline:!0,rows:6,sx:{marginBottom:"24px"}}),(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(I.Z,{id:"priority-radios",sx:{fontSize:12,lineHeight:1.5,letterSpacing:"-0.02em",color:"GrayText"},children:"Label color"}),(0,j.jsxs)(M.Z,{sx:{marginBottom:"14px"},row:!0,defaultValue:"low","aria-labelledby":"priority-radios",name:"priority",value:C,onChange:function(e){S(e.target.value)},children:[(0,j.jsx)(W.Z,{value:"low",control:(0,j.jsx)(U,{priority:"low"})}),(0,j.jsx)(W.Z,{value:"medium",control:(0,j.jsx)(U,{priority:"medium",sx:{ml:"-14px"}})}),(0,j.jsx)(W.Z,{value:"high",control:(0,j.jsx)(U,{priority:"high",sx:{ml:"-14px"}})}),(0,j.jsx)(W.Z,{value:"without",control:(0,j.jsx)(U,{priority:"without",sx:{ml:"-14px"}})})]})]}),(0,j.jsxs)(p.Z,{mb:5,children:[(0,j.jsx)(h.Z,{variant:"body2",component:"h4",mb:.5,children:"Deadline"}),(0,j.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(p.Z,{children:ve(v)}),(0,j.jsx)(me,{parentState:function(e){y(e)}})]})]}),(0,j.jsx)(ce,{children:s})]})})})},Ce=n(7621),we=n(6314),Ie=n(4684),Me=function(){var e={svgAlert:(0,r.Z)((0,r.Z)({},g.qv.Z9),{},{filter:"drop-shadow(0px 2px 4px currentColor)"})};return(0,j.jsx)(s.J,{id:"alert",sx:e.svgAlert})},Se=function(e){var t=e.name,n=e.description,s=e.priority,d=e.deadline,u=e.taskId,x=e.index,f=(0,o.I0)(),m=(0,l.useState)(!1),b=(0,i.Z)(m,2),v=b[0],y=b[1],Z=(0,l.useState)(!1),k=(0,i.Z)(Z,2),C=k[0],w=k[1],I=function(){y(!0)},M=function(){y(!1),w(!1)},S=function(){f((0,c._5)(u)),w(!1)},z=function(){w(!0)},B=D(s),F={textTransform:"capitalize","&::before":(0,r.Z)((0,r.Z)({},g.In.qY),{},{bgcolor:B})},U=function(){};return(0,j.jsx)(J._l,{draggableId:u,index:x,children:function(e,o){return(0,j.jsxs)("div",(0,r.Z)((0,r.Z)((0,r.Z)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,isdragging:"".concat(o.isDragging),children:[(0,j.jsxs)(Ce.Z,{sx:(0,r.Z)((0,r.Z)({},g.In.oE),{},{borderLeft:"4px solid ".concat(B)}),children:[(0,j.jsxs)(p.Z,{children:[(0,j.jsxs)(p.Z,{sx:g.In.Am,children:[(0,j.jsx)(h.Z,{variant:"h5",component:"h3",mb:1,children:t}),(0,j.jsx)(h.Z,{variant:"body2",sx:g.In.oD,children:n})]}),(0,j.jsx)(p.Z,{children:(0,j.jsxs)(we.Z,{direction:"row",children:[(0,j.jsxs)(we.Z,{justifyContent:"flex-end",alignItems:"flex-start",spacing:0,sx:{marginRight:"14px"},children:[(0,j.jsx)(p.Z,{children:(0,j.jsx)(h.Z,{variant:"caption",color:"text.sideSecond",children:"Priority"})}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(h.Z,{variant:"h6",sx:F,children:s})})]}),(0,j.jsxs)(we.Z,{flexGrow:1,justifyContent:"flex-end",alignItems:"flex-start",spacing:0,children:[(0,j.jsx)(p.Z,{children:(0,j.jsx)(h.Z,{variant:"caption",color:"text.sideSecond",children:"Deadline"})}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(h.Z,{variant:"h6",color:"text.primary",children:d})})]}),(0,j.jsxs)(we.Z,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:1,children:[d===je(new Date)&&(0,j.jsx)(Me,{}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(ne,{onClick:U,iconId:"move"})}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(ne,{onClick:I,iconId:"pencil"})}),(0,j.jsx)(p.Z,{children:(0,j.jsx)(ne,{onClick:z,iconId:"trash"})})]})]})})]}),(0,j.jsx)(a.Z,{isOpenModal:v,onCloseModal:M,children:(0,j.jsx)(ke,{onCloseModal:M,taskId:u,formTitle:"Edit card",buttonTitle:"Edit",taskOperation:c.xJ,initData:{title:t,description:n,priority:s,deadline:d}})})]}),(0,j.jsx)(Ie.Z,{isOpenModal:C,onCloseModal:M,onConfirm:S})]}))}})},ze=function(e){(0,G.Z)(n,e);var t=(0,K.Z)(n);function n(){return(0,N.Z)(this,n),t.apply(this,arguments)}return(0,X.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return e.tasks!==this.props.tasks}},{key:"render",value:function(){return this.props.tasks.map((function(e,t){if(!e)return null;var n=e._id,r=e.title,o=e.description,i=e.priority,l=e.deadline;return(0,j.jsx)(Se,{taskId:n,name:r,description:o,priority:i,deadline:l,index:t},n)}))}}]),n}(l.Component),De=function(e){(0,G.Z)(n,e);var t=(0,K.Z)(n);function n(){return(0,N.Z)(this,n),t.apply(this,arguments)}return(0,X.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.column,n=e.tasksArr,r=e.index,o=t.taskOrder.map((function(e){return n.find((function(t){var n=t._id;return e===n}))}));return(0,j.jsx)(Pe,{column:t,tasks:o,index:r})}}]),n}(l.PureComponent),Be=x.Ry().shape({title:x.Z_().required("Title is required")}),Fe=function(e){var t=e.title,n=e.columnId,i=e.onCloseModal,l=(0,o.I0)();return(0,j.jsxs)(p.Z,{sx:g.nC.qS,children:[(0,j.jsx)(h.Z,{variant:"h2",mb:3,children:"Edit column"}),(0,j.jsx)(u.J9,{initialValues:{title:t},validationSchema:Be,onSubmit:function(e,t){var o=t.resetForm;l((0,c.Gw)((0,r.Z)((0,r.Z)({},e),{},{columnId:n}))),o(),i()},children:function(e){var t=e.values,n=e.handleChange,r=e.handleSubmit;return(0,j.jsxs)(u.l0,{onSubmit:r,children:[(0,j.jsxs)(f.Z,{fullWidth:!0,children:[(0,j.jsx)(m.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:t.title,onChange:n}),(0,j.jsx)(u.Bc,{name:"Text",component:"div",style:{color:"red",fontSize:12}})]}),(0,j.jsxs)(b.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:g.cr.LI,type:"submit",children:[(0,j.jsx)(p.Z,{sx:g.LI.a$,children:(0,j.jsx)(s.J,{id:"plus",sx:g.qv.ZT})}),"Add"]})]})}})]})},Ue=function(e){var t=e.title,n=e.columnId,r=(0,l.useState)(!1),s=(0,i.Z)(r,2),d=s[0],u=s[1],x=(0,o.I0)(),p=(0,l.useState)(!1),f=(0,i.Z)(p,2),m=f[0],b=f[1],v=function(){u(!1),b(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(Ce.Z,{sx:g.In.Fs,children:[(0,j.jsxs)(we.Z,{sx:g.In.Sl,children:[(0,j.jsx)(h.Z,{component:"h2",variant:"h3",children:t}),(0,j.jsxs)(we.Z,{direction:"row",spacing:1,children:[(0,j.jsx)(ne,{onClick:function(){u(!0)},iconId:"pencil"}),(0,j.jsx)(ne,{onClick:function(){b(!0)},iconId:"trash"})]})]}),(0,j.jsx)(a.Z,{isOpenModal:d,onCloseModal:v,children:(0,j.jsx)(Fe,{onCloseModal:v,columnId:n,title:t,type:"Submit"})})]}),(0,j.jsx)(Ie.Z,{isOpenModal:m,onCloseModal:v,onConfirm:function(){x((0,c.eA)(n)),b(!1)}})]})},We=function(e){var t=e.cards,n=e.placeholder,r=(0,o.v9)(H),i="all"===r?t:t.filter((function(e){return(null===e||void 0===e?void 0:e.priority)===r}));return(0,j.jsxs)(we.Z,{sx:{gap:"8px"},children:[(0,j.jsx)(ze,{placeholder:n,tasks:i}),n]})},Oe=n(7588),Pe=function(e){var t=e.column,n=e.tasks,o=e.index,s=(0,l.useState)(!1),d=(0,i.Z)(s,2),u=d[0],x=d[1],h=function(){x(!0)},f=function(){x(!1)};return(0,j.jsx)(J._l,{draggableId:t._id,index:o,children:function(e){return(0,j.jsx)("div",(0,r.Z)((0,r.Z)({},e.draggableProps),{},{ref:e.innerRef,children:(0,j.jsxs)(we.Z,{sx:g.In.$Q,children:[(0,j.jsx)("div",(0,r.Z)((0,r.Z)({},e.dragHandleProps),{},{children:(0,j.jsx)(Ue,{title:t.title,columnId:t._id})})),(0,j.jsx)(Q,{droppableId:t._id,type:"task",children:function(e,o){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",(0,r.Z)((0,r.Z)({ref:e.innerRef},e.droppableProps),{},{isdraggingover:"".concat(o.isDraggingOver),style:{minHeight:20},children:(0,j.jsx)(We,{cards:n,placeholder:e.placeholder})})),(0,j.jsxs)(b.Z,{variant:"contained",sx:g.LI.Z0,onClick:h,children:[(0,j.jsx)(p.Z,{sx:g.LI.VQ,children:(0,j.jsx)(L.Z,{sx:g.LI.zg,children:(0,j.jsx)("svg",{stroke:"currentColor",children:(0,j.jsx)("use",{href:Oe.Z+"#icon-plus"})})})}),"Add another card"]}),(0,j.jsx)(a.Z,{isOpenModal:u,onCloseModal:f,children:(0,j.jsx)(ke,{onCloseModal:f,parentColumn:t._id,formTitle:"Add card",buttonTitle:"Add",taskOperation:c.gI})})]})}})]})}))}})},Te=n(2246),Re=n(9655),Ae=(n(5462),function(){var e=(0,o.v9)(C.ZO),t=(0,o.v9)(C.eo),n=(0,o.v9)(H),i=(0,o.I0)();return(0,j.jsx)($.Z,{children:(0,j.jsxs)(p.Z,{sx:g.nC.IY,children:[(0,j.jsxs)(p.Z,{sx:g.nC.IP,children:[(0,j.jsxs)(p.Z,{sx:g.nC.Vu,children:[(0,j.jsx)(h.Z,{component:"h2",variant:"h3",sx:g.fL.wy,children:e.title}),(0,j.jsx)(E,{})]}),(0,j.jsxs)(p.Z,{sx:g.nC.zF,children:[(0,j.jsx)(p.Z,{children:(0,j.jsx)(J.Z5,{onDragStart:function(){},onDragUpdate:function(){},onDragEnd:function(o){"all"===n?function(e){var t=e.result,n=e.board,o=e.columns,i=e.dispatch,l=t.destination,a=t.source,s=t.draggableId,d=t.type;if(l&&(l.droppableId!==a.droppableId||l.index!==a.index)){if("column"===d){var c=Array.from(n.columnOrder);return c.splice(a.index,1),c.splice(l.index,0,s),void i((0,Te.sf)(c))}var u=o.find((function(e){return e._id===a.droppableId})),x=o.find((function(e){return e._id===l.droppableId}));if(u===x){var p=Array.from(u.taskOrder);return p.splice(a.index,1),p.splice(l.index,0,s),void i((0,Te.xh)({columnId:u._id,newTaskOrder:p}))}var h=u.tasks.find((function(e){return e._id===s})),f=(0,r.Z)((0,r.Z)({},h),{},{parentColumn:x._id}),m=Array.from(u.taskOrder);m.splice(a.index,1);var b=Array.from(u.tasks),g=b.findIndex((function(e){return e._id===s}));b.splice(g,1);var j=(0,r.Z)((0,r.Z)({},u),{},{taskOrder:m,tasks:b}),v=Array.from(x.taskOrder);v.splice(l.index,0,s);var y=Array.from(x.tasks);y.push(f);var Z=(0,r.Z)((0,r.Z)({},x),{},{taskOrder:v,tasks:y});i((0,Te.r_)({updatedStartColumn:j,updatedFinishColumn:Z}))}}({result:o,board:e,columns:t,dispatch:i}):Re.Am.error("Please, skip priority filters to drag elements to another position.")},children:(0,j.jsx)(Q,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(n){return(0,j.jsxs)(p.Z,(0,r.Z)((0,r.Z)({sx:g.nC.k6},n.droppableProps),{},{ref:n.innerRef,children:[e.columnOrder.map((function(e,n){var r=t.find((function(t){return t._id===e}));return r?(0,j.jsx)(De,{column:r,tasksArr:r.tasks,index:n},r._id):null})),n.placeholder]}))}})})}),(0,j.jsx)(k,{})]})]}),(0,j.jsx)(Re.Ix,{autoClose:3e3})]})})})},6058:function(e,t,n){n.d(t,{E$:function(){return r},ZO:function(){return o},eo:function(){return i}});var r=function(e){return e.boards.boards},o=function(e){return e.boards.board},i=function(e){return e.boards.columns}},1774:function(e,t,n){n.d(t,{LI:function(){return r},In:function(){return o},nC:function(){return i},cr:function(){return d},qv:function(){return c},BH:function(){return l},jY:function(){return a},fL:function(){return s}});var r={};n.r(r),n.d(r,{Z0:function(){return U},zg:function(){return O},VQ:function(){return W},DP:function(){return F},l0:function(){return u},yX:function(){return x},dc:function(){return f},QP:function(){return h},ZD:function(){return p},pN:function(){return S},mg:function(){return T},uC:function(){return I},HL:function(){return M},a$:function(){return D},Qc:function(){return B},jq:function(){return b},Wb:function(){return m},aX:function(){return C},H0:function(){return w},Gi:function(){return k},BV:function(){return P},ni:function(){return z},N5:function(){return y},cv:function(){return Z},rS:function(){return g},bM:function(){return v},dM:function(){return j}});var o={};n.r(o),n.d(o,{$Q:function(){return R},Fs:function(){return A},Sl:function(){return H},qY:function(){return E},oE:function(){return _},oD:function(){return L},Am:function(){return q}});var i={};n.r(i),n.d(i,{qS:function(){return ce},I8:function(){return ee},IY:function(){return G},IP:function(){return ne},pD:function(){return le},Vu:function(){return re},zF:function(){return oe},k6:function(){return ie},FL:function(){return J},RY:function(){return se},bI:function(){return de},bK:function(){return Y},DH:function(){return V},oC:function(){return ae},X8:function(){return te},P$:function(){return N},q7:function(){return X},zv:function(){return Q},d$:function(){return K}});var l={};n.r(l),n.d(l,{d:function(){return ue}});var a={};n.r(a),n.d(a,{nC:function(){return me},EA:function(){return ge},aW:function(){return be},fL:function(){return je},WX:function(){return xe},av:function(){return he},ID:function(){return pe},_n:function(){return fe}});var s={};n.r(s),n.d(s,{cK:function(){return Ie},Vy:function(){return ye},wy:function(){return Me},dh:function(){return ke},fi:function(){return Ce},FR:function(){return Ze},zO:function(){return we},d$:function(){return ve}});var d={};n.r(d),n.d(d,{LI:function(){return Be},vU:function(){return ze},cr:function(){return De},qv:function(){return Fe},qH:function(){return Se}});var c={};n.r(c),n.d(c,{d6:function(){return He},Z9:function(){return Le},IY:function(){return We},s0:function(){return Oe},jq:function(){return Ue},xv:function(){return _e},RN:function(){return Te},hX:function(){return qe},ZT:function(){return Pe},x3:function(){return Re},pH:function(){return Ae}});var u={mt:"48px",width:"100%"},x={height:"49px",fontWeight:500,textAlign:"center",borderRadius:"8px","&:hover, &:focus":{color:"text.white",bgcolor:"text.primary"}},p={width:"100%",display:"flex",gap:"14px",mb:"40px"},h={p:0,display:"inline-flex",width:106},f={display:"inline-flex",color:"rgba(255, 255, 255, 0.30)",fontWeight:500,p:0},m={position:"absolute",top:"14px",right:"14px",width:"24px",height:"24px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center","&:hover, &:focus":{bgcolor:"primary.main"}},b={p:"0",minWidth:{zeroUp:"24px",tablet:"32px"},height:{zeroUp:"24px",tablet:"32px"},color:"text.topTheme"},g={height:"44px",color:"text.topTheme",fontWeight:500,lineHeight:1.5,textTransform:"none"},j={minWidth:"200px",maxWidth:"200px",borderColor:"primary.main","& .MuiPopover-paper":{minWidth:"100px",maxWidth:"100px",py:"6px"}},v={height:"25px",minHeight:"20px",py:"2px","&.Mui-selected":{color:"primary.main",bgcolor:"transparent"}},y={mr:"-8px",color:"text.primary",fontWeight:500,lineHeight:1.5,textTransform:"none"},Z={width:"32px",height:"32px",ml:"8px",borderRadius:"8px",objectFit:"cover"},k={my:"8px","&::before, &::after":{content:'""',display:"block",width:{zeroUp:"197px",tablet:"212px"},height:"1px",mx:{zeroUp:"14px",tablet:"24px"},bgcolor:"divider.side"}},C={display:"flex",justifyContent:"space-between",width:"100%",height:70,my:"-1px",px:{zeroUp:"14px",tablet:"24px"},color:"text.sideMain",fontWeight:500,textAlign:"start",textTransform:"none",borderRadius:"0","&:hover":{bgcolor:"side.activeBtn","& .createBoardBox":{bgcolor:"side.plusBackgroundHov"}}},w={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:36,bgcolor:"side.plusBackground",borderRadius:"6px"},I={display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"4px",mt:"40px",p:0,width:"100%"},M={display:"flex",height:"61px",p:0,pl:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond",stroke:"currentColor",fontWeight:500,"&:hover, &:focus":{color:"text.sideMain",stroke:"currentColor",bgcolor:"side.activeBtn"},"&.active":{color:"text.sideMain",stroke:"currentColor",bgcolor:"side.activeBtn","&::after":{content:'""',display:"block",width:"4px",height:"100%",borderRadius:"4px 0px 0px 4px",bgcolor:"side.activeBoardBox"}}},S={width:"18px",height:"18px",fill:"transparent",color:"icon.boardEdit",stroke:"currentColor"},z={display:"flex",justifyContent:"start",width:"100%",height:"60px",pl:{zeroUp:"14px",tablet:"24px"},mt:"10px",mb:{zeroUp:0,tablet:"10px"},color:"text.sideMain",stroke:"currentColor",textAlign:"start",textTransform:"none",borderRadius:0,"&:hover, &:focus":{stroke:"currentColor",bgcolor:"side.activeBtn"}},D={display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,bgcolor:"background.boxPlus",mr:1,borderRadius:.75},B={display:"flex",justifyContent:"center",alignItems:"center",width:28,height:28,bgcolor:"background.boxPlusAnother",mr:1,borderRadius:.75},F={height:56,minWidth:{zeroUp:"90vw",mobileFixed:"335px",tablet:"334px"},textTransform:"none",color:"text.primary",boxShadow:"none","&:hover, &:focus":{boxShadow:"none"}},U={width:"100%",height:"56px",lineHeight:1.5,textTransform:"none",boxShadow:"none","&:hover, &:focus":{boxShadow:"none"}},W={width:28,height:28,bgcolor:"background.boxPlusCard",mr:1,borderRadius:.75},O={width:14,height:14,ml:.05,mt:.9,color:"background.btnPlusCard"},P={display:"flex","justify\u0421ontent":"flex-start",alignItems:"flex-start",color:"text.sideMain","&:hover":{color:"primary.main"},p:0,width:{zeroUp:197,tablet:212}},T={display:"flex",justifyContent:"center",alignItems:"center",mr:"8px",width:"28px",height:"28px",bgcolor:"background.boxPlus",borderRadius:.75},R={gap:"14px",width:{zeroUp:"90vw",mobileFixed:"335px",tablet:"334px"},height:"100%"},A={width:"100%",height:"56px",py:"18px",px:"20px",boxShadow:"none",bgcolor:"secondary.main",backgroundImage:"none"},H={flexDirection:"row",justifyContent:"space-between",alignItems:"center"},_={py:"14px",pl:"24px",pr:"20px",boxShadow:"none",backgroundImage:"none"},q={pb:"14px",mb:"14px",borderBottom:"1px solid",borderColor:"divider.card"},L={display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",color:"text.secondary"},E={content:'""',transform:"translateY(20%)",height:"12px",width:"12px",borderRadius:"50%",display:"inline-block",marginRight:"4px"},$=n(1413),J={display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",p:0,background:"linear-gradient(180deg, #fff 35%, #bedbb0 92.19%)"},Y={width:"100vw",height:"100vh",p:0},V={display:{desktop:"flex"},height:"100%"},Q={position:"fixed",zIndex:"10",display:"flex",justifyContent:"end",alignItems:"center",width:"100%",height:{zeroUp:60,tablet:68},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"},bgcolor:"background.header"},N={display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",zIndex:"20",width:{zeroUp:225,tablet:260},height:"100%",bgcolor:"background.side"},X=(0,$.Z)((0,$.Z)({},N),{},{display:{zeroUp:"none",desktop:"flex"}}),G={zIndex:"0",width:{zeroUp:"100%",desktop:"calc(100% - 260px)"},height:"100%",pt:{zeroUp:"60px",tablet:"68px"}},K={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:473}},ee={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:424},bgcolor:"#151515",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:{zeroUp:"24px",tablet:"40px"}},te={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},ne={width:"100%",height:"100%",pt:{zeroUp:"14px",tablet:"20px",desktop:"10px"},pb:{zeroUp:"24px",tablet:"32px",desktop:"8px"},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"}},re={display:"flex",alignItems:"center",justifyContent:"space-between"},oe={display:"flex",gap:"34px",width:"100%",maxHeight:"100%",mt:{zeroUp:"40px",tablet:"26px",desktop:"10px"}},ie={display:"flex",gap:"34px"},le={width:"100%",mt:"60px"},ae={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.header",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:"24px"},se={m:"auto",bgcolor:"background.helpBanner",borderRadius:"8px",width:{zeroUp:197,tablet:212}},de={width:{zeroUp:335,tablet:400}},ce={width:{zeroUp:335,tablet:350}},ue={width:{zeroUp:124,tablet:162},height:{zeroUp:124,tablet:162}},xe={display:"flex",alignItems:"center",gap:"14px",mt:{zeroUp:"14px",tablet:"24px"}},pe={display:"inline-flex",justifyContent:"center",alignItems:"center",width:{zeroUp:"40px",tablet:"48px"},height:{zeroUp:"40px",tablet:"48px"},borderRadius:"4px",bgcolor:"text.primary"},he={width:{zeroUp:"27px",tablet:"32px"},height:{zeroUp:"27px",tablet:"32px"}},fe={fontSize:{zeroUp:28,tablet:40},fontWeight:600},me={display:"flex",alignItems:"center",gap:"8px",mt:{zeroUp:"14px",tablet:"24px"},ml:{zeroUp:"14px",tablet:"24px"}},be={display:"inline-flex",justifyContent:"center",alignItems:"center",width:32,height:32,borderRadius:"8px",bgcolor:"background.logoIcon"},ge={width:22,height:22},je={fontSize:16,fontWeight:600,lineHeight:1.5,letterSpacing:"-0.04em",color:"text.sideMain"},ve={mt:"24px",lineHeight:1.3,textAlign:"center"},ye={ml:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond"},Ze={ml:2.5,mr:2.5,mb:2,color:"text.sideMain"},ke={ml:1,mb:2.5,mr:"auto",textTransform:"none"},Ce={ml:2.5,mb:2.5},we={width:{zeroUp:"90%",mobileFixed:335,tablet:486},textAlign:"center",color:"text.secondary"},Ie={color:"primary.main"},Me={fontSize:{zeroUp:14,tablet:18}},Se={fontFamily:"Poppins",fontWeight:400,fontFize:"14px",color:"#fff",height:"49px",mb:"14px","& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"}},ze={color:"#FF2D55",ml:"14px",mb:"8px",textTransform:"none"},De={display:"flex",flexDirection:"column",bgcolor:"#1F1F1F",width:{zeroUp:"100%",mobileFixed:"287px",tablet:"344px"}},Be={height:"49px",textTransform:"none",fontFamily:"Poppins",fontWeight:500,fontFize:"14px"},Fe={color:"#FFF",opacity:.4},Ue={display:"inline-block",width:"inherit",height:"inherit",stroke:"currentColor",strokeWidth:0,"&:hover, &:focus":{stroke:"currentColor"}},We={mr:"8px",width:"18px",height:"18px",fill:"transparent"},Oe={width:"16px",height:"16px",fill:"transparent",color:"icon.boardItem",stroke:"currentColor","&:hover, &:focus":{color:"icon.boardItemHover",stroke:"currentColor"}},Pe={width:"14px",height:"14px",color:"icon.addColumn",stroke:"currentColor"},Te={width:"20px",height:"20px",color:"icon.createNewBoard",stroke:"currentColor"},Re={width:"14px",height:"14px",color:"icon.addAnotherColumn",stroke:"currentColor"},Ae={width:"16px",height:"16px",fill:"transparent",color:"icon.taskItem",stroke:"currentColor","&:hover, &:focus":{color:"icon.taskItemHover",stroke:"currentColor"}},He={display:"inline-block",strokeWidth:"0",fill:"transparent",mr:"14px",width:"32px",height:"32px",color:"icon.logOut",stroke:"currentColor","&:hover, &:focus":{color:"icon.logOutHover",stroke:"currentColor"}},_e={width:"18px",height:"18px",color:"text.primary",fill:"transparent",stroke:"currentColor","&:hover, &:focus":{stroke:"currentColor"}},qe={width:"16px",height:"16px",color:"icon.filter",fill:"transparent",stroke:"currentColor"},Le={width:"16px",height:"16px",color:"icon.alert",fill:"transparent",stroke:"currentColor"}}}]);
//# sourceMappingURL=677.1c076907.chunk.js.map