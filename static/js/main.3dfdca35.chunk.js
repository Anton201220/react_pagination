(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),l=a(1),r=(a(10),a(2)),s=a.n(r);function o(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var j=a(0),d=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/a),l=o(1,i),r=1===t,d=t===i;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:r}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":r,onClick:function(){r||n(t-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:e===t}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){e!==t&&n(e)}(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:d}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":d,onClick:function(){d||n(t+1)},children:"\xbb"})})]})},u=o(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=u.length,c=Object(l.useState)(1),a=Object(i.a)(c,2),t=a[0],n=a[1],r=Object(l.useState)(5),s=Object(i.a)(r,2),o=s[0],h=s[1],b=t*o,p=b-o+1,m=b>e?e:b,g=u.slice(p-1,m);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(p," - ").concat(m," of ").concat(e,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:o,onChange:function(e){return function(e){h(+e.target.value),n(1)}(e)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:e,perPage:o,currentPage:t,onPageChange:function(e){n(e)}}),Object(j.jsx)("ul",{children:g.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3dfdca35.chunk.js.map