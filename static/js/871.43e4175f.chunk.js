"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{5871:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var o=n(9439),a=n(2791),l=n(9434),s=n(6727),t=n(4908),i=n(8096),u=n(4554),d=n(5155),c=n(8029),m=n(3466),h=n(3400),p=n(6151),x=n(6099),v=n(6616),w=n(5705),f=n(3109),Z=n(3329),j=s.Ry().shape({email:s.Z_().email().matches(/^[^@]+@[^@]+\..+$/,"email must be a valid email").required(),password:s.Z_().required()}),b=function(){var e=(0,a.useState)(!1),r=(0,o.Z)(e,2),n=r[0],s=r[1],b=(0,l.I0)(),g=(0,w.TA)({initialValues:{email:"",password:""},validationSchema:j,onSubmit:function(e,r){var n=r.setSubmitting;console.log(JSON.stringify(e,null,2)),b((0,t.t2)(e)),n(!1)}});return(0,Z.jsxs)(i.Z,{onSubmit:g.handleSubmit,sx:f.cr.cr,component:"form",children:[g.touched.email&&g.errors.email?(0,Z.jsx)(u.Z,{component:"div",sx:f.cr.vU,children:g.errors.email.toWellFormed()}):null,(0,Z.jsx)(d.Z,{name:"email",variant:"outlined",placeholder:"Enter your email",value:g.values.email,onChange:g.handleChange,onBlur:g.handleBlur,error:g.touched.email&&Boolean(g.errors.email),fullWidth:!0,color:"input",inputProps:{style:{color:"#FFF"}},sx:f.cr.qH}),g.touched.password&&g.errors.password?(0,Z.jsx)(u.Z,{component:"div",sx:f.cr.vU,children:g.errors.password}):null,(0,Z.jsx)(c.Z,{name:"password",type:n?"text":"password",placeholder:"Create a password",value:g.values.password,onChange:g.handleChange,error:g.touched.password&&Boolean(g.errors.password),onBlur:g.handleBlur,fullWidth:!0,color:"input",sx:f.cr.qH,endAdornment:(0,Z.jsx)(m.Z,{position:"end",children:(0,Z.jsx)(h.Z,{onClick:function(){return s((function(e){return!e}))},edge:"end",sx:f.cr.qv,children:n?(0,Z.jsx)(x.Z,{}):(0,Z.jsx)(v.Z,{})})})}),(0,Z.jsx)(p.Z,{color:"button",variant:"contained",fullWidth:!0,type:"submit",sx:f.cr.LI,children:"Log In Now"})]})},g=function(){return(0,Z.jsx)(b,{})}}}]);
//# sourceMappingURL=871.43e4175f.chunk.js.map