(this["webpackJsonpdropdown-react"]=this["webpackJsonpdropdown-react"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(4),r=n.n(a),s=n(3),o=n(0);Promise.resolve().then(n.t.bind(null,10,7));var l=function(e){var t=e.activeList,n=e.dropdownList;return Object(o.jsx)("ul",{"data-id":"dropdown",className:"dropdown",children:n.map((function(e,n){var i=e.title,c=e.active;return Object(o.jsx)("li",{className:"true"===c?"active":null,children:Object(o.jsx)("a",{href:"/#",onClick:function(){return t(n)},children:i})},n)}))})};Promise.resolve().then(n.t.bind(null,10,7));var d=function(e){var t=e.openDropDown,n=e.isOpen,i=e.dropdownList,c=e.activeList;return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{"data-id":"wrapper",className:"dropdown-wrapper  ".concat(n?null:"open"),children:[Object(o.jsxs)("button",{"data-id":"toggle",className:"btn",onClick:t,children:[Object(o.jsx)("span",{children:"Account Settings"}),Object(o.jsx)("i",{className:"material-icons",children:"public"})]}),Object(o.jsx)(l,{dropdownList:i,activeList:c})]})})};n(10);var u=function(){var e=Object(i.useState)("false"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([{title:"Profile Information",active:"false"},{title:"Change Password",active:"false"},{title:"Become PRO",active:"false"},{title:"Help",active:"false"},{title:"Log Out",active:"false"}]),r=Object(s.a)(a,2),l=r[0],u=r[1];return Object(o.jsx)(d,{dropdownList:l,activeList:function(e){var t=l.map((function(t,n){return t.active=e===n?"true":"false",t}));u(t)},openDropDown:function(){c(!n)},isOpen:n})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.63d4fa47.chunk.js.map