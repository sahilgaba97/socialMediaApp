"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5],{9005:function(e,a,r){r.r(a);var s=r(4165),c=r(5861),t=r(885),n=r(7022),o=r(9743),l=r(2677),d=r(9140),i=r(3855),u=r(3360),f=r(2791),m=r(9289),x=r(184);a.default=function(){console.log("render");var e=(0,f.useRef)(""),a=(0,f.useRef)(""),r=(0,f.useRef)(""),v=(0,f.useState)({lowercase:!1,uppercase:!1,number:!1,symbol:!1,length:!1}),p=(0,t.Z)(v,2),h=p[0],Z=p[1],b=(0,f.useState)(!1),g=(0,t.Z)(b,2),j=g[0],N=g[1],w=h.lowercase,y=h.uppercase,P=h.number,C=h.symbol,k=h.length;(0,f.useEffect)((function(){var e=Object.values(h).every(Boolean);console.log({isPwdValid:e}),N(e),console.log({isValid:j})}),[h]);var E=function(){var t=(0,c.Z)((0,s.Z)().mark((function c(t){var n,o,l;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n={name:e.current.value,username:a.current.value,password:r.current.value},console.log(n),s.prev=2,s.next=5,(0,m.hd)(n);case 5:if(s.t1=o=s.sent,s.t0=null===s.t1,s.t0){s.next=9;break}s.t0=void 0===o;case 9:if(!s.t0){s.next=13;break}s.t2=void 0,s.next=14;break;case 13:s.t2=o.data;case 14:l=s.t2,console.log(l),s.next=21;break;case 18:s.prev=18,s.t3=s.catch(2),console.log(s.t3);case 21:case"end":return s.stop()}}),c,null,[[2,18]])})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsx)(n.Z,{fluid:!0,children:(0,x.jsx)(o.Z,{children:(0,x.jsx)(l.Z,{lg:{offset:4,span:4},md:{offset:3,span:6},sm:{offset:1,span:10},children:(0,x.jsxs)(d.Z,{className:"mt-3 p-3 signup",children:[(0,x.jsx)(d.Z.Title,{children:"Signup"}),(0,x.jsxs)(d.Z.Body,{children:[(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,x.jsx)(i.Z.Label,{children:"Name"}),(0,x.jsx)(i.Z.Control,{placeholder:"Enter name",ref:e})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"username",children:[(0,x.jsx)(i.Z.Label,{children:"Username"}),(0,x.jsx)(i.Z.Control,{placeholder:"Enter username",ref:a})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,x.jsx)(i.Z.Label,{children:"Password"}),(0,x.jsx)(i.Z.Control,{type:"password",onChange:function(e){var a=e.target.value;console.log(a);var r=/(?=.*[a-z])/.test(a),s=/(?=.*[A-Z])/.test(a),c=/(?=.*\d)/.test(a),t=/(?=.*[\W_])/.test(a),n=a.length>=8;Z({lowercase:r,uppercase:s,number:c,symbol:t,length:n})},placeholder:"Password",ref:r})]}),(0,x.jsx)(u.Z,{variant:"primary",type:"submit",disabled:!j,onClick:E,children:"Signup"})]}),(0,x.jsxs)("div",{className:"pwd-strength",children:[(0,x.jsx)("div",{className:w?"text-success":"text-danger",children:"Lowercase character :- a-z"}),(0,x.jsx)("div",{className:y?"text-success":"text-danger",children:"Uppercase character :- A-Z"}),(0,x.jsx)("div",{className:P?"text-success":"text-danger",children:"Numeric character :- 0-9"}),(0,x.jsx)("div",{className:C?"text-success":"text-danger",children:"Special character :- !@#$%^&*()_+"}),(0,x.jsx)("div",{className:k?"text-success":"text-danger",children:"Password should consist of 8 or more character"})]})]})})})})}},9140:function(e,a,r){r.d(a,{Z:function(){return B}});var s=r(1413),c=r(5987),t=r(1694),n=r.n(t),o=r(2791),l=r(162),d=r(6543),i=r(3689),u=r(184),f=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.variant,d=e.as,i=void 0===d?"img":d,m=(0,c.Z)(e,f),x=(0,l.vE)(r,"card-img");return(0,u.jsx)(i,(0,s.Z)({ref:a,className:n()(o?"".concat(x,"-").concat(o):x,t)},m))}));m.displayName="CardImg";var x=m,v=r(6040),p=["bsPrefix","className","as"],h=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,d=e.as,i=void 0===d?"div":d,f=(0,c.Z)(e,p),m=(0,l.vE)(r,"card-header"),x=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(v.Z.Provider,{value:x,children:(0,u.jsx)(i,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:n()(t,m)}))})}));h.displayName="CardHeader";var Z=h,b=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,i.Z)("h5"),j=(0,i.Z)("h6"),N=(0,d.Z)("card-body"),w=(0,d.Z)("card-title",{Component:g}),y=(0,d.Z)("card-subtitle",{Component:j}),P=(0,d.Z)("card-link",{Component:"a"}),C=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),R=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.bg,d=e.text,i=e.border,f=e.body,m=e.children,x=e.as,v=void 0===x?"div":x,p=(0,c.Z)(e,b),h=(0,l.vE)(r,"card");return(0,u.jsx)(v,(0,s.Z)((0,s.Z)({ref:a},p),{},{className:n()(t,h,o&&"bg-".concat(o),d&&"text-".concat(d),i&&"border-".concat(i)),children:f?(0,u.jsx)(N,{children:m}):m}))}));R.displayName="Card",R.defaultProps={body:!1};var B=Object.assign(R,{Img:x,Title:w,Subtitle:y,Body:N,Link:P,Text:C,Header:Z,Footer:k,ImgOverlay:E})},9743:function(e,a,r){var s=r(1413),c=r(5987),t=r(1694),n=r.n(t),o=r(2791),l=r(162),d=r(184),i=["bsPrefix","className","as"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.as,u=void 0===o?"div":o,f=(0,c.Z)(e,i),m=(0,l.vE)(r,"row"),x=(0,l.pi)(),v=(0,l.zG)(),p="".concat(m,"-cols"),h=[];return x.forEach((function(e){var a,r=f[e];delete f[e],a=null!=r&&"object"===typeof r?r.cols:r;var s=e!==v?"-".concat(e):"";null!=a&&h.push("".concat(p).concat(s,"-").concat(a))})),(0,d.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:n().apply(void 0,[t,m].concat(h))}))}));u.displayName="Row",a.Z=u}}]);
//# sourceMappingURL=5.951733b2.chunk.js.map