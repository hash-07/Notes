(this.webpackJsonpthapa_app=this.webpackJsonpthapa_app||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/hk.313f2004.png"},33:function(e,t,n){e.exports=n(46)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(10),o=n.n(l),r=(n(38),n(30)),u=n(9),i=(n(39),n(24)),m=n.n(i);function s(){return c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:m.a,alt:"logo",width:"70",height:"50"}),c.a.createElement("h1",null," Hash loves Akki "))}var f=n(21),p=n(15),E=n(61),b=n(26),h=n.n(b);n(40);function d(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],o=n[1],r=Object(a.useState)({title:"",content:""}),i=Object(u.a)(r,2),m=i[0],s=i[1],b=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,a))})),console.log(m)};return c.a.createElement("div",{className:"main_note"},l?c.a.createElement("input",{type:"text",name:"title",value:m.title,onChange:b,placeholder:"Title",autoComplete:"off"}):null,c.a.createElement("textarea",{rows:"",column:"",name:"content",value:m.content,onChange:b,placeholder:"Write a note...",onClick:function(){o(!0)}}),l?c.a.createElement(E.a,{onClick:function(){e.passNote(m),s({title:"",content:""})}},c.a.createElement(h.a,{className:"plus_sign"})):null)}var v=n(28),g=n.n(v),j=n(29),O=n.n(j),k=n(27),N=n.n(k);function C(e){var t=e.deleteItem,n=e.id,l=e.title,o=e.content,r=Object(a.useState)({title:l,content:o}),i=Object(u.a)(r,2),m=i[0],s=i[1],f=Object(a.useState)(!1),E=Object(u.a)(f,2),b=E[0],h=E[1],d=function(e){var t=e.target,n=Object(p.a)({},m);n[t.name]=t.value,s(n)};return c.a.createElement("div",{className:"note"},b?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",name:"title",value:m.title,onChange:d,placeholder:"Title",autoComplete:"off"}),c.a.createElement("textarea",{rows:"",column:"",name:"content",value:m.content,onChange:d,placeholder:"Write a note..."}),c.a.createElement("button",{className:"btn",onClick:function(){h(!1)}},c.a.createElement(N.a,{className:"checkIcon",style:{color:"green"}}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,m.title),c.a.createElement("br",null),c.a.createElement("p",null," ",m.content," "),c.a.createElement("button",{className:"btn",onClick:function(){t(n)}},c.a.createElement(g.a,{className:"deleteIcon"})),c.a.createElement("button",{className:"btn",onClick:function(){h(!0)}},c.a.createElement(O.a,{className:"editIcon",style:{color:"skyblue"}}))))}var y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=function(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(d,{passNote:function(e){l((function(t){return[].concat(Object(r.a)(t),[e])})),console.log(e)}}),n.map((function(e,t){return c.a.createElement(C,{key:t,id:t,title:e.title,content:e.content,deleteItem:o})})))};o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8c79adf7.chunk.js.map