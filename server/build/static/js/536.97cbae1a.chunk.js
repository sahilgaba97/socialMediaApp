"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[536],{2536:function(e,r,a){a.r(r),a.d(r,{default:function(){return b}});var n=a(4165),s=a(5861),t=a(885),i=a(1044),c=a(2791),o=a(9140),d=a(2677),l=a(3360),u=a(8993),f=a(9434),m=a(7689),v=a(184);var x=function(e){var r=(0,f.v9)((function(e){return e.user})).username,a=(0,m.s0)(),n=(0,m.TH)().pathname,s=e.dispatch,t=e.isFriend,i=e.user,c=i.id,x=i.title,Z=i.firstName,p=i.lastName,h=i.picture;return(0,v.jsx)(d.Z,{lg:4,md:6,sm:10,children:(0,v.jsx)(o.Z,{className:"user mb-3",children:(0,v.jsxs)(o.Z.Body,{className:"d-flex justify-content-between",children:[(0,v.jsx)("img",{src:h,height:"100px"}),(0,v.jsxs)("div",{className:"d-flex flex-column justify-content-around",children:[(0,v.jsxs)("div",{className:"mb-3",children:[x," ",Z," ",p]}),t?(0,v.jsx)(l.Z,{onClick:function(){var e={id:c,name:Z};s((0,u.JD)(e))},variant:"danger",children:"Remove Friend"}):(0,v.jsx)(l.Z,{onClick:function(){r||(alert("Please login to continue!!!"),a("/login",{state:n}));var e={id:c,name:Z};s((0,u.An)(e))},variant:"primary",children:"Add Friend"})]})]})})})},Z=a(7022),p=a(9743),h=a(6731);var b=function(e){e.user;var r=(0,c.useState)([]),a=(0,t.Z)(r,2),o=a[0],d=a[1],l=(0,h.lr)(),m=(0,t.Z)(l,1)[0],b=(0,f.v9)((function(e){return e.user})).friendList,N=(0,f.I0)();(0,c.useEffect)((function(){(0,s.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N((0,u.qT)(!0)),e.next=3,i.ZP.get("https://dummyapi.io/data/v1/user?limit=10",{headers:{"app-id":"623f19872934031e5b0d8089"}});case 3:r=e.sent.data.data,N((0,u.qT)(!1)),console.log(r),d(r);case 7:case"end":return e.stop()}}),e)})))()}),[]);var j=m.get("search");return console.log(j),(0,v.jsx)(Z.Z,{fluid:!0,children:(0,v.jsx)(p.Z,{children:o.filter((function(e){var r=e.firstName,a=e.lastName;return!j||(r+a).toLowerCase().includes(j)})).map((function(e){var r=b.includes(null===e||void 0===e?void 0:e.id);return(0,v.jsx)(x,{user:e,isFriend:r,dispatch:N},e.id)}))})})}},9140:function(e,r,a){a.d(r,{Z:function(){return F}});var n=a(1413),s=a(5987),t=a(1694),i=a.n(t),c=a(2791),o=a(162),d=a(6543),l=a(3689),u=a(184),f=["bsPrefix","className","variant","as"],m=c.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,c=e.variant,d=e.as,l=void 0===d?"img":d,m=(0,s.Z)(e,f),v=(0,o.vE)(a,"card-img");return(0,u.jsx)(l,(0,n.Z)({ref:r,className:i()(c?"".concat(v,"-").concat(c):v,t)},m))}));m.displayName="CardImg";var v=m,x=a(6040),Z=["bsPrefix","className","as"],p=c.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,d=e.as,l=void 0===d?"div":d,f=(0,s.Z)(e,Z),m=(0,o.vE)(a,"card-header"),v=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(x.Z.Provider,{value:v,children:(0,u.jsx)(l,(0,n.Z)((0,n.Z)({ref:r},f),{},{className:i()(t,m)}))})}));p.displayName="CardHeader";var h=p,b=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,l.Z)("h5"),j=(0,l.Z)("h6"),g=(0,d.Z)("card-body"),y=(0,d.Z)("card-title",{Component:N}),P=(0,d.Z)("card-subtitle",{Component:j}),w=(0,d.Z)("card-link",{Component:"a"}),C=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),R=c.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,c=e.bg,d=e.text,l=e.border,f=e.body,m=e.children,v=e.as,x=void 0===v?"div":v,Z=(0,s.Z)(e,b),p=(0,o.vE)(a,"card");return(0,u.jsx)(x,(0,n.Z)((0,n.Z)({ref:r},Z),{},{className:i()(t,p,c&&"bg-".concat(c),d&&"text-".concat(d),l&&"border-".concat(l)),children:f?(0,u.jsx)(g,{children:m}):m}))}));R.displayName="Card",R.defaultProps={body:!1};var F=Object.assign(R,{Img:v,Title:y,Subtitle:P,Body:g,Link:w,Text:C,Header:h,Footer:k,ImgOverlay:E})},9743:function(e,r,a){var n=a(1413),s=a(5987),t=a(1694),i=a.n(t),c=a(2791),o=a(162),d=a(184),l=["bsPrefix","className","as"],u=c.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,c=e.as,u=void 0===c?"div":c,f=(0,s.Z)(e,l),m=(0,o.vE)(a,"row"),v=(0,o.pi)(),x=(0,o.zG)(),Z="".concat(m,"-cols"),p=[];return v.forEach((function(e){var r,a=f[e];delete f[e],r=null!=a&&"object"===typeof a?a.cols:a;var n=e!==x?"-".concat(e):"";null!=r&&p.push("".concat(Z).concat(n,"-").concat(r))})),(0,d.jsx)(u,(0,n.Z)((0,n.Z)({ref:r},f),{},{className:i().apply(void 0,[t,m].concat(p))}))}));u.displayName="Row",r.Z=u}}]);
//# sourceMappingURL=536.97cbae1a.chunk.js.map