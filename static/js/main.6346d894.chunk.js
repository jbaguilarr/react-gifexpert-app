(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],j=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){j(t.target.value)}})})})},o=n(10),d=n(6),l=n.n(d),b=n(8),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=Rja70t30tA9cK1aWlrCcNm0NRqjrpEh2"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data;n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),Object(u.jsx)("div",{className:"card-grid",children:Object(u.jsx)("ol",{children:c.map((function(t){return Object(u.jsx)(f,Object(o.a)({},t),t.id)}))})})]})},h=function(){var t=Object(r.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};n(17);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6346d894.chunk.js.map