"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[299],{7588:function(e,t,n){n(2791);t.Z=n.p+"static/media/sprite.0b7cd4a54616df5e150af1b688dec1e7.svg"},789:function(e,t,n){n.d(t,{J:function(){return l}});n(2791);var r=n(7588),i=n(9259),o=n(3329),l=function(e){var t=e.id,n=e.sx;return(0,o.jsx)(i.Z,{component:"svg",sx:n,children:(0,o.jsx)("use",{href:r.Z+"#icon-"+t})})}},5488:function(e,t,n){var r=n(3590),i=n(4554),o=n(789),l=n(1774),a=n(3329);t.Z=function(e){var t=e.isOpenModal,n=e.onCloseModal,d=e.children;return(0,a.jsx)(r.Z,{open:t,onClose:n,children:(0,a.jsxs)(i.Z,{sx:l.nC.oC,children:[(0,a.jsx)(i.Z,{onClick:n,sx:l.LI.Wb,children:(0,a.jsx)(o.J,{id:"x-close",sx:l.qv.xv})}),d]})})}},7158:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2791),i=n(1495),o=(n(5951),n(3329)),l=function(e){var t=e.children,n=e.width,l=void 0===n?"100%":n,a=e.height,d=void 0===a?"100%":a,s=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=s.current;if(e){var t=e.current;if(t&&"function"===typeof t.destroy)return function(){t.destroy()}}}),[]),(0,o.jsx)(i.E,{ref:s,style:{width:l,height:d},children:t})}},1016:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ue}});var r=n(1413),i=n(9434),o=n(9439),l=n(2791),a=n(5488),d=n(789),s=n(7689),c=n(2460),u=n(5705),x=n(6727),p=n(4554),h=n(890),f=n(8096),m=n(5155),b=n(6151),g=n(1774),v=n(3329),j=x.Ry().shape({title:x.Z_().required("Title is required")}),y={title:""},Z=function(e){var t=e.onCloseModal,n=(0,s.UO)().boardId,o=(0,i.I0)(),l=n;return(0,v.jsxs)(p.Z,{sx:g.nC.qS,children:[(0,v.jsx)(h.Z,{variant:"h2",mb:3,children:"Add column"}),(0,v.jsx)(u.J9,{initialValues:y,validationSchema:j,onSubmit:function(e,n){var i=n.resetForm;console.log((0,r.Z)((0,r.Z)({},e),{},{parentBoard:l})),o((0,c.Wf)((0,r.Z)((0,r.Z)({},e),{},{parentBoard:l}))),i(),t()},children:function(e){var t=e.values,n=e.handleChange,r=e.handleSubmit;return(0,v.jsxs)(u.l0,{onSubmit:r,children:[(0,v.jsxs)(f.Z,{fullWidth:!0,children:[(0,v.jsx)(m.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:t.title,onChange:n}),(0,v.jsx)(u.Bc,{name:"Title",component:"div",style:{color:"red",fontSize:12}})]}),(0,v.jsxs)(b.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:g.cr.LI,type:"submit",children:[(0,v.jsx)(p.Z,{sx:g.LI.a$,children:(0,v.jsx)(d.J,{id:"plus",sx:g.qv.ZT})}),"Add"]})]})}})]})},k=function(){var e=(0,l.useState)(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1],i=function(){r(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(b.Z,{sx:g.LI.DP,variant:"contained",color:"secondary",onClick:function(){r(!0)},children:[(0,v.jsx)(p.Z,{sx:g.LI.Qc,children:(0,v.jsx)(d.J,{id:"plus",sx:g.qv.x3})}),(0,v.jsx)(h.Z,{variant:"h3",component:"span",children:"Add another column"})]}),(0,v.jsx)(a.Z,{isOpenModal:n,onCloseModal:i,children:(0,v.jsx)(Z,{onCloseModal:i,title:"New board",type:"Submit"})})]})},w=n(6058),C=n(9164),I=n(7133),M=n(765),S=n(8244),z=n(6934),D=function(e){var t="";switch(e){case"low":t="#8FA1D0";break;case"medium":t="#E09CB5";break;case"high":t="#BEDBB0";break;default:t="#595959"}return t},B=(0,z.ZP)("span")((function(e){return{borderRadius:"50%",width:14,height:14,backgroundColor:e.btncolor||"#BEDBB0"}})),F=(0,z.ZP)(B)((function(e){var t=e.btncolor;return{backgroundColor:"transparent",border:"1px solid ".concat(t||"#BEDBB0"),position:"relative","&:before":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"block",width:8,height:8,borderRadius:"50%",backgroundColor:t||"#BEDBB0",content:'""'}}})),U=function(e){var t=D(e.priority);return(0,v.jsx)(S.Z,(0,r.Z)({disableRipple:!0,icon:(0,v.jsx)(B,{btncolor:t}),checkedIcon:(0,v.jsx)(F,{btncolor:t})},e))},W=n(5523),P=n(9211),T=n(3101),O=(0,z.ZP)((function(e){return(0,v.jsx)(W.Z,(0,r.Z)({},e))}))((function(e){e._;var t=e.checked,n=(0,i.v9)(T.Pu);return{".MuiFormControlLabel-label":t&&{color:"dark"===n?"#FFF":"#161616"}}})),R=function(e){var t=(0,P.Z)(),n=!1;return t&&(n=t.value===e.value),(0,v.jsx)(O,(0,r.Z)({checked:n},e))},A=n(7468),_=function(e){return e.filters.prio},q={color:"text.filterRadio",fontFamily:"Poppins",fontSize:12,fontStyle:"normal",fontWeight:400,lineHeight:"normal",letterSpacing:-.24},H=function(){var e=(0,i.v9)(_),t=(0,l.useState)(e),n=(0,o.Z)(t,2),a=n[0],d=n[1],s=(0,i.I0)();return(0,l.useEffect)((function(){s((0,A.Q)(a))}),[s,a]),(0,v.jsxs)(C.Z,{sx:{width:300,height:234,p:0},children:[(0,v.jsx)(h.Z,{sx:{borderBottom:1,borderColor:"rgba(255, 255, 255, 0.50)",paddingBottom:1.75,marginBottom:1.75},variant:"h2",component:"h2",children:"Filters"}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:14},children:[(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(I.Z,{sx:{color:"text.primary",fontWeight:500,fontStyle:"normal",letterSpacing:"-0.28px","&.Mui-focused":{color:"text.primary"}},children:"Label color"}),(0,v.jsxs)(M.Z,{value:a,onChange:function(e){d(e.target.value)},children:[(0,v.jsx)(R,{label:"Without priority",value:"without",sx:q,control:(0,v.jsx)(U,{priority:"without"})}),(0,v.jsx)(R,{label:"Low",value:"low",sx:(0,r.Z)({},q),control:(0,v.jsx)(U,{priority:"low"})}),(0,v.jsx)(R,{label:"Medium",value:"medium",sx:q,control:(0,v.jsx)(U,{priority:"medium"})}),(0,v.jsx)(R,{label:"High",value:"high",sx:q,control:(0,v.jsx)(U,{priority:"high"})})]})]}),(0,v.jsx)(b.Z,{variant:"text",sx:(0,r.Z)((0,r.Z)({},q),{},{textDecorationLine:"underline",textTransform:"none",height:18}),style:"all"===a?{pointerEvents:"none",textDecoration:"none"}:null,onClick:function(){d("all")},type:"button",children:(0,v.jsx)(h.Z,{children:"all"===a?"Shown all":"Show all"})})]})]})},L=n(9259),E=function(){var e=(0,l.useState)(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(b.Z,{sx:{textTransform:"none",display:"flex",gap:"8px",alignItems:"center"},type:"button",onClick:function(){r(!0)},children:[(0,v.jsx)(p.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",transition:"all 250ms linear",cursor:"pointer","&:hover":{transform:"scale(1.1)"}},children:(0,v.jsx)(L.Z,{sx:{width:"14px",height:"14px",color:"text.primary"},children:(0,v.jsx)(d.J,{id:"filter",sx:g.qv.hX})})}),(0,v.jsx)(h.Z,{sx:{color:"text.primary"},children:"Filters"})]}),(0,v.jsx)(a.Z,{isOpenModal:n,onCloseModal:function(){r(!1)},children:(0,v.jsx)(H,{})})]})},$=n(7158),J=n(793),Y=n(5987),V=["children"],Q=function(e){var t=e.children,n=(0,Y.Z)(e,V),i=(0,l.useState)(!1),a=(0,o.Z)(i,2),d=a[0],s=a[1];return(0,l.useEffect)((function(){var e=requestAnimationFrame((function(){return s(!0)}));return function(){cancelAnimationFrame(e),s(!1)}}),[]),d?(0,v.jsx)(J.bK,(0,r.Z)((0,r.Z)({},n),{},{children:t})):null},N=n(5671),X=n(3144),G=n(136),K=n(7277),ee=n(7479),te=(0,z.ZP)(ee.Z)((function(e){e.theme;return{padding:0,margin:0,"& .MuiTouchRipple-root":{display:"none"}}})),ne=function(e){var t=e.onClick,n=e.iconId;return(0,v.jsx)(te,{onClick:t,children:(0,v.jsx)(d.J,{id:n,sx:g.qv.pH})})},re=["name"],ie=function(e){var t=e.name,n=(0,Y.Z)(e,re),i=(0,u.U$)(t),l=(0,o.Z)(i,2),a=l[0],d=l[1],s=(0,r.Z)((0,r.Z)((0,r.Z)({},a),n),{},{fullWidth:!0,variant:"outlined"});return d&&d.touched&&d.error&&(s.error=!0,s.helperText=d.error),(0,v.jsx)(m.Z,(0,r.Z)({},s))},oe=(0,z.ZP)("div")((function(e){return{display:"flex",justifyContent:"center",alignItems:"center",background:e.theme.palette.background.boxPlus,width:"28px",height:"28px",borderRadius:"4px"}})),le=function(){return(0,v.jsx)(oe,{children:(0,v.jsx)(d.J,{id:"plus",sx:g.qv.ZT})})},ae=["children"],de=function(e){var t=e.children,n=((0,Y.Z)(e,ae),(0,u.u6)().submitForm),i={variant:"contained",color:"primary",fullWidth:!0,onClick:function(){n()}};return(0,v.jsx)(b.Z,(0,r.Z)((0,r.Z)({startIcon:(0,v.jsx)(le,{})},i),{},{children:(0,v.jsx)("span",(0,r.Z)((0,r.Z)({},{style:{textTransform:"none"}}),{},{children:t}))}))},se=n(7613),ce=n(1652),ue=n(4750),xe=n(7892),pe=n.n(xe),he=function(e){var t=e.parentState,n=e.initial;pe()().format();var i=(0,l.useState)(n||""),a=(0,o.Z)(i,2),s=a[0],c=a[1],u=new Date;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(ce._,{dateAdapter:ue.y,children:(0,v.jsx)(se.M,{views:["month","day"],value:s,desktopModeMediaQuery:"",showDaysOutsideCurrentMonth:!0,fixedWeekNumber:5,onChange:function(e){c(e),t(e)},renderInput:function(e){return(0,v.jsx)(m.Z,(0,r.Z)({},e))},shouldDisableDate:function(e){return function(e){return e<u}(e)&&!function(e){return e.$D===u.getDate()&&e.$M===u.getMonth()&&e.$y===u.getFullYear()}(e)},slots:{openPickerIcon:function(){return(0,v.jsx)(d.J,{id:"dropdown"})}},dayOfWeekFormatter:function(e){return e.slice(0,2)},slotProps:{desktopPaper:{sx:{borderRadius:"8px",color:"text.primary",backgroundColor:"background.calendar","& .MuiPickersCalendarHeader-labelContainer":{position:"absolute",left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap"},"& .MuiPickersCalendarHeader-label":{fontSize:"16px",fontWeight:"500",letterSpacing:"0.32px"},"& .MuiSvgIcon-root":{fill:"text.primary"},"& .MuiTypography-root":{color:"text.additional",height:"24px",marginTop:"14px",fontSize:"14px"},"& .MuiDayCalendar-weekContainer":{justifyContent:"space-between"},"& .MuiButtonBase-root":{color:"text.primary",margin:0,padding:0,fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"18px"},"& .MuiPickersArrowSwitcher-root":{width:"100%",justifyContent:"space-between"},"& .MuiPickersCalendarHeader-switchViewButton":{display:"none"},"& .MuiPickersCalendarHeader-root":{padding:"0",alignItems:"baseline",margin:"0",borderBottomWidth:"2px",borderBottomStyle:"solid",borderColor:"divider.card"},"& .MuiPickersArrowSwitcher-button":{height:"21px"},"& .MuiDateCalendar-root":{width:"233px",height:"254px",padding:"18px",boxSizing:"border-box",background:"background.side"},"& .MuiPickersDay-hiddenDaySpacingFiller":{height:"24px",width:"24px",minWidth:"24px",maxWidth:"24px"}}},day:{sx:{height:"24px",width:"24px",minWidth:"24px",maxWidth:"24px",fontSize:"14px","&.MuiPickersDay-root.Mui-selected":{backgroundColor:"primary.main",color:"text.hover"},"&.MuiPickersDay-root:hover":{backgroundColor:"primary.main",color:"text.additional"},"&.Mui-selected:hover":{backgroundColor:"primary.main",color:"text.hover"},"&.MuiPickersDay-today":{borderWidth:1,borderColor:"primary.main",color:"text.primary"}}},textField:{variant:"outlined",sx:{"& input":{display:"none"},"& fieldset":{border:"none"}}}}})})})},fe=n(2426),me=n.n(fe),be=function(e){me()().format("MMMM D");return e?function(e){var t=me()(e),n=me()().endOf("day"),r=me()().add(1,"day").endOf("day");return t<n?"Today":t<r?"Tomorrow":"in "+t.fromNow(!0)}(e.$d)+", "+me()(e.$d).format("MMMM D"):"Today, "+me()().format("MMMM D")},ge={title:"",description:"",deadline:""},ve=x.Ry().shape({title:x.Z_().required("Required"),description:x.Z_().required("Required"),deadline:x.hT().required()}),je=function(e){var t=e.parentColumn,n=e.onCloseModal,a=e.formTitle,d=e.buttonTitle,s=e.taskOperation,c=e.taskId,x=e.initData,m=(0,i.I0)(),b=(0,l.useState)(),g=(0,o.Z)(b,2),j=g[0],y=g[1],Z=(0,l.useState)("without"),k=(0,o.Z)(Z,2),w=k[0],S=k[1];return(0,v.jsx)(C.Z,{sx:{maxWidth:"302px",p:0},children:(0,v.jsx)(u.J9,{initialValues:x||ge,validationSchema:ve,onSubmit:function(e){var i;m(s((0,r.Z)((0,r.Z)({},e),{},{parentColumn:t,priority:w,taskId:c,deadline:(i=j.$d,me()(i).format("DD-MM-YYYY"))}))),n()},children:(0,v.jsxs)(u.l0,{children:[(0,v.jsx)(h.Z,{variant:"h2",component:"h2",mb:3,children:a}),(0,v.jsx)(ie,{name:"title",label:"Title",sx:{marginBottom:"14px"}}),(0,v.jsx)(ie,{name:"description",label:"Description",multiline:!0,rows:6,sx:{marginBottom:"24px"}}),(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(I.Z,{id:"priority-radios",sx:{fontSize:12,lineHeight:1.5,letterSpacing:"-0.02em",color:"GrayText"},children:"Label color"}),(0,v.jsxs)(M.Z,{sx:{marginBottom:"14px"},row:!0,defaultValue:"low","aria-labelledby":"priority-radios",name:"priority",value:w,onChange:function(e){S(e.target.value)},children:[(0,v.jsx)(W.Z,{value:"low",control:(0,v.jsx)(U,{priority:"low"})}),(0,v.jsx)(W.Z,{value:"medium",control:(0,v.jsx)(U,{priority:"medium",sx:{ml:"-14px"}})}),(0,v.jsx)(W.Z,{value:"high",control:(0,v.jsx)(U,{priority:"high",sx:{ml:"-14px"}})}),(0,v.jsx)(W.Z,{value:"without",control:(0,v.jsx)(U,{priority:"without",sx:{ml:"-14px"}})})]})]}),(0,v.jsxs)(p.Z,{mb:5,children:[(0,v.jsx)(h.Z,{variant:"body2",component:"h4",mb:.5,children:"Deadline"}),(0,v.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(p.Z,{children:be(j)}),(0,v.jsx)(he,{parentState:function(e){y(e)}})]})]}),(0,v.jsx)(de,{children:d})]})})})},ye=n(7621),Ze=n(6314),ke=function(e){var t=e.name,n=e.description,d=e.priority,s=e.deadline,u=e.taskId,x=e.index,f=(0,i.I0)(),m=(0,l.useState)(!1),b=(0,o.Z)(m,2),j=b[0],y=b[1],Z=function(){y(!0)},k=function(){y(!1)},w=function(){window.confirm("Do you really want to delete task ".concat(t,"?"))&&f((0,c._5)(u))},C=D(d),I={textTransform:"capitalize","&::before":(0,r.Z)((0,r.Z)({},g.In.qY),{},{bgcolor:C})},M=function(){};return(0,v.jsx)(J._l,{draggableId:u,index:x,children:function(e,i){return(0,v.jsx)("div",(0,r.Z)((0,r.Z)((0,r.Z)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,isdragging:"".concat(i.isDragging),children:(0,v.jsxs)(ye.Z,{sx:(0,r.Z)((0,r.Z)({},g.In.oE),{},{borderLeft:"4px solid ".concat(C)}),children:[(0,v.jsxs)(p.Z,{children:[(0,v.jsxs)(p.Z,{sx:g.In.Am,children:[(0,v.jsx)(h.Z,{variant:"h5",component:"h3",mb:1,children:t}),(0,v.jsx)(h.Z,{variant:"body2",sx:g.In.oD,children:n})]}),(0,v.jsx)(p.Z,{children:(0,v.jsxs)(Ze.Z,{direction:"row",children:[(0,v.jsxs)(Ze.Z,{justifyContent:"flex-end",alignItems:"flex-start",spacing:0,sx:{marginRight:"14px"},children:[(0,v.jsx)(p.Z,{children:(0,v.jsx)(h.Z,{variant:"caption",color:"text.sideSecond",children:"Priority"})}),(0,v.jsx)(p.Z,{children:(0,v.jsx)(h.Z,{variant:"h6",sx:I,children:d})})]}),(0,v.jsxs)(Ze.Z,{flexGrow:1,justifyContent:"flex-end",alignItems:"flex-start",spacing:0,children:[(0,v.jsx)(p.Z,{children:(0,v.jsx)(h.Z,{variant:"caption",color:"text.sideSecond",children:"Deadline"})}),(0,v.jsx)(p.Z,{children:(0,v.jsx)(h.Z,{variant:"h6",color:"text.primary",children:s})})]}),(0,v.jsxs)(Ze.Z,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:1,children:[(0,v.jsx)(p.Z,{children:(0,v.jsx)(ne,{onClick:M,iconId:"alert"})}),(0,v.jsx)(p.Z,{children:(0,v.jsx)(ne,{onClick:M,iconId:"move"})}),(0,v.jsx)(p.Z,{children:(0,v.jsx)(ne,{onClick:Z,iconId:"pencil"})}),(0,v.jsx)(p.Z,{children:(0,v.jsx)(ne,{onClick:w,iconId:"trash"})})]})]})})]}),(0,v.jsx)(a.Z,{isOpenModal:j,onCloseModal:k,children:(0,v.jsx)(je,{onCloseModal:k,taskId:u,formTitle:"Edit card",buttonTitle:"Edit",taskOperation:c.xJ,initData:{title:t,description:n,priority:d,deadline:s}})})]})}))}})},we=function(e){(0,G.Z)(n,e);var t=(0,K.Z)(n);function n(){return(0,N.Z)(this,n),t.apply(this,arguments)}return(0,X.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return e.tasks!==this.props.tasks}},{key:"render",value:function(){return this.props.tasks.map((function(e,t){var n=e._id,r=e.title,i=e.description,o=e.priority,l=e.deadline;return(0,v.jsx)(ke,{taskId:n,name:r,description:i,priority:o,deadline:l,index:t},n)}))}}]),n}(l.Component),Ce=function(e){(0,G.Z)(n,e);var t=(0,K.Z)(n);function n(){return(0,N.Z)(this,n),t.apply(this,arguments)}return(0,X.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.column,n=e.tasksArr,r=e.index,i=t.taskOrder.map((function(e){return n.find((function(t){var n=t._id;return e===n}))}));return(0,v.jsx)(Be,{column:t,tasks:i,index:r})}}]),n}(l.PureComponent),Ie=x.Ry().shape({title:x.Z_().required("Title is required")}),Me=function(e){var t=e.title,n=e.columnId,o=e.onCloseModal,l=(0,i.I0)();return(0,v.jsxs)(p.Z,{sx:g.nC.qS,children:[(0,v.jsx)(h.Z,{variant:"h2",mb:3,children:"Edit column"}),(0,v.jsx)(u.J9,{initialValues:{title:t},validationSchema:Ie,onSubmit:function(e,t){var i=t.resetForm;l((0,c.Gw)((0,r.Z)((0,r.Z)({},e),{},{columnId:n}))),i(),o()},children:function(e){var t=e.values,n=e.handleChange,r=e.handleSubmit;return(0,v.jsxs)(u.l0,{onSubmit:r,children:[(0,v.jsxs)(f.Z,{fullWidth:!0,children:[(0,v.jsx)(m.Z,{label:"Title",variant:"outlined",type:"text",id:"text",name:"title",sx:{mb:3},value:t.title,onChange:n}),(0,v.jsx)(u.Bc,{name:"Text",component:"div",style:{color:"red",fontSize:12}})]}),(0,v.jsxs)(b.Z,{color:"primary",variant:"contained",fullWidth:!0,sx:g.cr.LI,type:"submit",children:[(0,v.jsx)(p.Z,{sx:g.LI.a$,children:(0,v.jsx)(d.J,{id:"plus",sx:g.qv.ZT})}),"Add"]})]})}})]})},Se=function(e){var t=e.title,n=e.columnId,r=(0,l.useState)(!1),d=(0,o.Z)(r,2),s=d[0],u=d[1],x=(0,i.I0)(),p=function(){u(!1)};return(0,v.jsxs)(ye.Z,{sx:g.In.Fs,children:[(0,v.jsxs)(Ze.Z,{sx:g.In.Sl,children:[(0,v.jsx)(h.Z,{component:"h2",variant:"h3",children:t}),(0,v.jsxs)(Ze.Z,{direction:"row",spacing:1,children:[(0,v.jsx)(ne,{onClick:function(){u(!0)},iconId:"pencil"}),(0,v.jsx)(ne,{onClick:function(){window.confirm("Do you really want to delete column ".concat(t,"?"))&&x((0,c.eA)(n))},iconId:"trash"})]})]}),(0,v.jsx)(a.Z,{isOpenModal:s,onCloseModal:p,children:(0,v.jsx)(Me,{onCloseModal:p,columnId:n,title:t,type:"Submit"})})]})},ze=function(e){var t=e.cards,n=e.placeholder,r=(0,i.v9)(_),o="all"===r?t:t.filter((function(e){return(null===e||void 0===e?void 0:e.priority)===r}));return(0,v.jsxs)(Ze.Z,{sx:{gap:"8px"},children:[(0,v.jsx)(we,{tasks:o}),n]})},De=n(7588),Be=function(e){var t=e.column,n=e.tasks,i=e.index,d=(0,l.useState)(!1),s=(0,o.Z)(d,2),u=s[0],x=s[1],h=function(){x(!0)},f=function(){x(!1)};return(0,v.jsx)(J._l,{draggableId:t._id,index:i,children:function(e){return(0,v.jsx)("div",(0,r.Z)((0,r.Z)({},e.draggableProps),{},{ref:e.innerRef,children:(0,v.jsxs)(Ze.Z,{sx:g.In.$Q,children:[(0,v.jsx)("div",(0,r.Z)((0,r.Z)({},e.dragHandleProps),{},{children:(0,v.jsx)(Se,{title:t.title,columnId:t._id})})),(0,v.jsx)(Q,{droppableId:t._id,type:"task",children:function(e,i){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",(0,r.Z)((0,r.Z)({ref:e.innerRef},e.droppableProps),{},{isdraggingover:"".concat(i.isDraggingOver),children:(0,v.jsx)(ze,{cards:n,placeholder:e.placeholder})})),(0,v.jsxs)(b.Z,{variant:"contained",sx:g.LI.Z0,onClick:h,children:[(0,v.jsx)(p.Z,{sx:g.LI.VQ,children:(0,v.jsx)(L.Z,{sx:g.LI.zg,children:(0,v.jsx)("svg",{stroke:"currentColor",children:(0,v.jsx)("use",{href:De.Z+"#icon-plus"})})})}),"Add another card"]}),(0,v.jsx)(a.Z,{isOpenModal:u,onCloseModal:f,children:(0,v.jsx)(je,{onCloseModal:f,parentColumn:t._id,formTitle:"Add card",buttonTitle:"Add",taskOperation:c.gI})})]})}})]})}))}})},Fe=n(2246),Ue=function(){var e=(0,i.v9)(w.ZO),t=(0,i.v9)(w.eo),n=(0,i.v9)(_),o=(0,i.I0)();return""===e._id||""===t[0]._id?(0,v.jsx)("div",{children:"Loading..."}):(0,v.jsx)($.Z,{children:(0,v.jsx)(p.Z,{sx:g.nC.IY,children:(0,v.jsxs)(p.Z,{sx:g.nC.IP,children:[(0,v.jsxs)(p.Z,{sx:g.nC.Vu,children:[(0,v.jsx)(h.Z,{component:"h2",variant:"h3",sx:g.fL.wy,children:e.title}),(0,v.jsx)(E,{})]}),(0,v.jsxs)(p.Z,{sx:g.nC.zF,children:[(0,v.jsx)(p.Z,{children:(0,v.jsx)(J.Z5,{onDragStart:function(){},onDragUpdate:function(){},onDragEnd:function(i){"all"===n?function(e){var t=e.result,n=e.board,i=e.columns,o=e.dispatch,l=t.destination,a=t.source,d=t.draggableId,s=t.type;if(l&&(l.droppableId!==a.droppableId||l.index!==a.index)){if("column"===s){var c=Array.from(n.columnOrder);return c.splice(a.index,1),c.splice(l.index,0,d),void o((0,Fe.sf)(c))}var u=i.find((function(e){return e._id===a.droppableId})),x=i.find((function(e){return e._id===l.droppableId}));if(u===x){var p=Array.from(u.taskOrder);return p.splice(a.index,1),p.splice(l.index,0,d),void o((0,Fe.xh)({columnId:u._id,newTaskOrder:p}))}var h=u.tasks.find((function(e){return e._id===d})),f=(0,r.Z)((0,r.Z)({},h),{},{parentColumn:x._id}),m=Array.from(u.taskOrder);m.splice(a.index,1);var b=Array.from(u.tasks),g=b.findIndex((function(e){return e._id===d}));b.splice(g,1);var v=(0,r.Z)((0,r.Z)({},u),{},{taskOrder:m,tasks:b}),j=Array.from(x.taskOrder);j.splice(l.index,0,d);var y=Array.from(x.tasks);y.push(f);var Z=(0,r.Z)((0,r.Z)({},x),{},{taskOrder:j,tasks:y});o((0,Fe.r_)({updatedStartColumn:v,updatedFinishColumn:Z}))}}({result:i,board:e,columns:t,dispatch:o}):alert("Please, change skip to drag elements.")},children:(0,v.jsx)(Q,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(n){return(0,v.jsxs)(p.Z,(0,r.Z)((0,r.Z)({sx:g.nC.k6},n.droppableProps),{},{ref:n.innerRef,children:[e.columnOrder.map((function(e,n){var r=t.find((function(t){return t._id===e}));return(0,v.jsx)(Ce,{column:r,tasksArr:r.tasks,index:n},r._id)})),n.placeholder]}))}})})}),(0,v.jsx)(k,{})]})]})})})}},6058:function(e,t,n){n.d(t,{E$:function(){return r},ZO:function(){return i},eo:function(){return o}});var r=function(e){return e.boards.boards},i=function(e){return e.boards.board},o=function(e){return e.boards.columns}},1774:function(e,t,n){n.d(t,{LI:function(){return r},In:function(){return i},nC:function(){return o},cr:function(){return s},qv:function(){return c},BH:function(){return l},jY:function(){return a},fL:function(){return d}});var r={};n.r(r),n.d(r,{Z0:function(){return U},zg:function(){return P},VQ:function(){return W},DP:function(){return F},l0:function(){return u},yX:function(){return x},dc:function(){return f},QP:function(){return h},ZD:function(){return p},pN:function(){return S},uC:function(){return I},HL:function(){return M},a$:function(){return D},Qc:function(){return B},jq:function(){return b},Wb:function(){return m},aX:function(){return w},H0:function(){return C},Gi:function(){return k},BV:function(){return T},ni:function(){return z},N5:function(){return y},cv:function(){return Z},rS:function(){return g},bM:function(){return j},dM:function(){return v}});var i={};n.r(i),n.d(i,{$Q:function(){return O},Fs:function(){return R},Sl:function(){return A},qY:function(){return L},oE:function(){return _},oD:function(){return H},Am:function(){return q}});var o={};n.r(o),n.d(o,{qS:function(){return se},I8:function(){return K},IY:function(){return X},IP:function(){return te},pD:function(){return oe},Vu:function(){return ne},zF:function(){return re},k6:function(){return ie},FL:function(){return $},RY:function(){return ae},bI:function(){return de},bK:function(){return J},DH:function(){return Y},oC:function(){return le},X8:function(){return ee},P$:function(){return Q},q7:function(){return N},zv:function(){return V},d$:function(){return G}});var l={};n.r(l),n.d(l,{d:function(){return ce}});var a={};n.r(a),n.d(a,{nC:function(){return fe},EA:function(){return be},aW:function(){return me},fL:function(){return ge},WX:function(){return ue},av:function(){return pe},ID:function(){return xe},_n:function(){return he}});var d={};n.r(d),n.d(d,{cK:function(){return Ce},Vy:function(){return je},wy:function(){return Ie},dh:function(){return Ze},fi:function(){return ke},FR:function(){return ye},zO:function(){return we},d$:function(){return ve}});var s={};n.r(s),n.d(s,{LI:function(){return De},vU:function(){return Se},cr:function(){return ze},qv:function(){return Be},qH:function(){return Me}});var c={};n.r(c),n.d(c,{d6:function(){return Ae},IY:function(){return Ue},s0:function(){return We},jq:function(){return Fe},xv:function(){return _e},RN:function(){return Te},hX:function(){return qe},ZT:function(){return Pe},x3:function(){return Oe},pH:function(){return Re}});var u={mt:"48px",width:"100%"},x={height:"49px",fontWeight:500,textAlign:"center",borderRadius:"8px","&:hover, &:focus":{color:"text.white",bgcolor:"text.primary"}},p={width:"100%",display:"flex",gap:"14px",mb:"40px"},h={p:0,display:"inline-flex",width:106},f={display:"inline-flex",color:"rgba(255, 255, 255, 0.30)",fontWeight:500,p:0},m={position:"absolute",top:"14px",right:"14px",width:"24px",height:"24px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center","&:hover, &:focus":{bgcolor:"primary.main"}},b={p:"0",minWidth:{zeroUp:"24px",tablet:"32px"},height:{zeroUp:"24px",tablet:"32px"},color:"text.topTheme"},g={height:"44px",color:"text.topTheme",fontWeight:500,lineHeight:1.5,textTransform:"none"},v={minWidth:"200px",maxWidth:"200px",borderColor:"primary.main","& .MuiPopover-paper":{minWidth:"100px",maxWidth:"100px",py:"6px"}},j={height:"25px",minHeight:"20px",py:"2px","&.Mui-selected":{color:"primary.main",bgcolor:"transparent"}},y={mr:"-8px",color:"text.primary",fontWeight:500,lineHeight:1.5,textTransform:"none"},Z={width:"32px",height:"32px",ml:"8px",borderRadius:"8px",objectFit:"cover"},k={my:"8px","&::before, &::after":{content:'""',display:"block",width:{zeroUp:"197px",tablet:"212px"},height:"1px",mx:{zeroUp:"14px",tablet:"24px"},bgcolor:"divider.side"}},w={display:"flex",justifyContent:"space-between",width:"100%",height:70,my:"-1px",px:{zeroUp:"14px",tablet:"24px"},color:"text.sideMain",fontWeight:500,textAlign:"start",textTransform:"none",borderRadius:"0","&:hover":{bgcolor:"side.activeBtn","& .createBoardBox":{bgcolor:"side.plusBackgroundHov"}}},C={display:"flex",alignItems:"center",justifyContent:"center",width:40,height:36,bgcolor:"side.plusBackground",borderRadius:"6px"},I={display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"4px",mt:"40px",p:0,width:"100%"},M={display:"flex",height:"61px",p:0,pl:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond",stroke:"currentColor",fontWeight:500,"&:hover, &:focus":{color:"text.sideMain",stroke:"currentColor",bgcolor:"side.activeBtn"},"&.active":{color:"text.sideMain",stroke:"currentColor",bgcolor:"side.activeBtn","&::after":{content:'""',display:"block",width:"4px",height:"100%",borderRadius:"4px 0px 0px 4px",bgcolor:"side.activeBoardBox"}}},S={width:"18px",height:"18px",fill:"transparent",color:"icon.boardEdit",stroke:"currentColor"},z={display:"flex",justifyContent:"start",width:"100%",height:"60px",pl:{zeroUp:"14px",tablet:"24px"},mt:"10px",mb:{zeroUp:0,tablet:"10px"},color:"text.sideMain",stroke:"currentColor",textAlign:"start",textTransform:"none",borderRadius:0,"&:hover, &:focus":{stroke:"currentColor",bgcolor:"side.activeBtn"}},D={display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,bgcolor:"background.boxPlus",mr:1,borderRadius:.75},B={display:"flex",justifyContent:"center",alignItems:"center",width:28,height:28,bgcolor:"background.boxPlusAnother",mr:1,borderRadius:.75},F={height:56,minWidth:{zeroUp:"90vw",mobileFixed:"335px",tablet:"334px"},textTransform:"none",color:"text.primary",boxShadow:"none","&:hover, &:focus":{boxShadow:"none"}},U={width:"100%",height:"56px",lineHeight:1.5,textTransform:"none",boxShadow:"none","&:hover, &:focus":{boxShadow:"none"}},W={width:28,height:28,bgcolor:"background.boxPlusCard",mr:1,borderRadius:.75},P={width:14,height:14,ml:.05,mt:.9,color:"background.btnPlusCard"},T={display:"flex","justify\u0421ontent":"flex-start",alignItems:"flex-start",color:"text.sideMain","&:hover":{color:"primary.main"},p:0,width:{zeroUp:197,tablet:212}},O={gap:"14px",width:{zeroUp:"90vw",mobileFixed:"335px",tablet:"334px"},height:"100%"},R={width:"100%",height:"56px",py:"18px",px:"20px",boxShadow:"none",bgcolor:"secondary.main",backgroundImage:"none"},A={flexDirection:"row",justifyContent:"space-between",alignItems:"center"},_={py:"14px",pl:"24px",pr:"20px",boxShadow:"none",backgroundImage:"none"},q={pb:"14px",mb:"14px",borderBottom:"1px solid",borderColor:"divider.card"},H={display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",color:"text.secondary"},L={content:'""',transform:"translateY(20%)",height:"12px",width:"12px",borderRadius:"50%",display:"inline-block",marginRight:"4px"},E=n(1413),$={display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",p:0,background:"linear-gradient(180deg, #fff 35%, #bedbb0 92.19%)"},J={width:"100vw",height:"100vh",p:0},Y={display:{desktop:"flex"},height:"100%"},V={position:"fixed",zIndex:"10",display:"flex",justifyContent:"end",alignItems:"center",width:"100%",height:{zeroUp:60,tablet:68},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"},bgcolor:"background.header"},Q={display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",zIndex:"20",width:{zeroUp:225,tablet:260},height:"100%",bgcolor:"background.side"},N=(0,E.Z)((0,E.Z)({},Q),{},{display:{zeroUp:"none",desktop:"flex"}}),X={zIndex:"0",width:{zeroUp:"100%",desktop:"calc(100% - 260px)"},height:"100%",pt:{zeroUp:"60px",tablet:"68px"}},G={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:473}},K={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{zeroUp:"90%",mobileFixed:335,tablet:424},bgcolor:"#151515",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:{zeroUp:"24px",tablet:"40px"}},ee={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},te={width:"100%",height:"100%",pt:{zeroUp:"14px",tablet:"20px",desktop:"10px"},pb:{zeroUp:"24px",tablet:"32px",desktop:"8px"},px:{zeroUp:"20px",tablet:"32px",desktop:"24px"}},ne={display:"flex",alignItems:"center",justifyContent:"space-between"},re={display:"flex",gap:"34px",width:"100%",maxHeight:"100%",mt:{zeroUp:"40px",tablet:"26px",desktop:"10px"}},ie={display:"flex",gap:"34px"},oe={width:"100%",mt:"60px"},le={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.header",border:"1px solid rgba(190, 219, 176, 0.5)",borderRadius:"8px",boxShadow:24,p:"24px"},ae={m:"auto",bgcolor:"background.helpBanner",borderRadius:"8px",width:{zeroUp:197,tablet:212}},de={width:{zeroUp:335,tablet:400}},se={width:{zeroUp:335,tablet:350}},ce={width:{zeroUp:124,tablet:162},height:{zeroUp:124,tablet:162}},ue={display:"flex",alignItems:"center",gap:"14px",mt:{zeroUp:"14px",tablet:"24px"}},xe={display:"inline-flex",justifyContent:"center",alignItems:"center",width:{zeroUp:"40px",tablet:"48px"},height:{zeroUp:"40px",tablet:"48px"},borderRadius:"4px",bgcolor:"text.primary"},pe={width:{zeroUp:"27px",tablet:"32px"},height:{zeroUp:"27px",tablet:"32px"}},he={fontSize:{zeroUp:28,tablet:40},fontWeight:600},fe={display:"flex",alignItems:"center",gap:"8px",mt:{zeroUp:"14px",tablet:"24px"},ml:{zeroUp:"14px",tablet:"24px"}},me={display:"inline-flex",justifyContent:"center",alignItems:"center",width:32,height:32,borderRadius:"8px",bgcolor:"background.logoIcon"},be={width:22,height:22},ge={fontSize:16,fontWeight:600,lineHeight:1.5,letterSpacing:"-0.04em",color:"text.sideMain"},ve={mt:"24px",lineHeight:1.3,textAlign:"center"},je={ml:{zeroUp:"14px",tablet:"24px"},color:"text.sideSecond"},ye={ml:2.5,mr:2.5,mb:2,color:"text.sideMain"},Ze={ml:1,mb:2.5,mr:"auto",textTransform:"none"},ke={ml:2.5,mb:2.5},we={width:{zeroUp:"90%",mobileFixed:335,tablet:486},textAlign:"center",color:"text.secondary"},Ce={color:"primary.main"},Ie={fontSize:{zeroUp:14,tablet:18}},Me={fontFamily:"Poppins",fontWeight:400,fontFize:"14px",color:"#fff",height:"49px",mb:"14px","& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#596453"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#BEDBB0"}},Se={color:"#FF2D55",ml:"14px",mb:"8px",textTransform:"none"},ze={display:"flex",flexDirection:"column",bgcolor:"#1F1F1F",width:{zeroUp:"100%",mobileFixed:"287px",tablet:"344px"}},De={height:"49px",textTransform:"none",fontFamily:"Poppins",fontWeight:500,fontFize:"14px"},Be={color:"#FFF",opacity:.4},Fe={display:"inline-block",width:"inherit",height:"inherit",stroke:"currentColor",strokeWidth:0,"&:hover, &:focus":{stroke:"currentColor"}},Ue={mr:"8px",width:"18px",height:"18px",fill:"transparent"},We={width:"16px",height:"16px",fill:"transparent",color:"icon.boardItem",stroke:"currentColor","&:hover, &:focus":{color:"icon.boardItemHover",stroke:"currentColor"}},Pe={width:"14px",height:"14px",color:"icon.addColumn",stroke:"currentColor"},Te={width:"20px",height:"20px",color:"icon.createNewBoard",stroke:"currentColor"},Oe={width:"24px",height:"24px",color:"icon.addAnotherColumn",stroke:"currentColor"},Re={width:"16px",height:"16px",fill:"transparent",color:"icon.taskItem",stroke:"currentColor","&:hover, &:focus":{color:"icon.taskItemHover",stroke:"currentColor"}},Ae={display:"inline-block",strokeWidth:"0",fill:"transparent",mr:"14px",width:"32px",height:"32px",color:"icon.logOut",stroke:"currentColor","&:hover, &:focus":{color:"icon.logOutHover",stroke:"currentColor"}},_e={width:"18px",height:"18px",color:"text.primary",fill:"transparent",stroke:"currentColor","&:hover, &:focus":{stroke:"currentColor"}},qe={width:"16px",height:"16px",color:"icon.filter",fill:"transparent",stroke:"currentColor"}}}]);
//# sourceMappingURL=299.aab56a4f.chunk.js.map