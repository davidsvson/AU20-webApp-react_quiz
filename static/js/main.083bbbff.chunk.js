(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(15),i=n.n(s),a=(n(21),n(10)),j=(n(22),n(2)),u=n(1);var o=function(e){var t=e.answeredCorrectly,n=[{question:"N\xe4r \xe4r det julafton?",answers:["24 maj","24 dec","3 nov"],correct:1},{question:"Vad heter David i mellannamn?",answers:["sven","julia","anders"],correct:2},{question:"Vad har vit f\xf6r hex tal?",answers:["#000000","#ffffff","#15f36a"],correct:1},{question:"vad sitter bredvid t p\xe5 tangentbordet?",answers:["y","b","n"],correct:0},{question:"vad \xe4r b\xe4st?",answers:["teams","discord","slack"],correct:1}],r=Object(c.useState)(null),s=Object(a.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(!1),b=Object(a.a)(l,2),d=b[0],h=b[1],O=Object(j.g)(),x="1";"currentquestion"in O&&O.currentquestion>0&&O.currentquestion<n.length&&(x=O.currentquestion);var f=n[x-1],m=Object(j.f)(),p=f.answers.map((function(e,t){return Object(u.jsx)("p",{className:"option"+(d&&t===f.correct?" correct":""),children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"question",disabled:d,onClick:function(){return o(t)}}),e]})},e)}));return Object(u.jsxs)("section",{className:"game",children:[Object(u.jsxs)("h2",{children:["Question ",x," of ",n.length," "]}),Object(u.jsx)("h3",{children:f.question}),p,Object(u.jsx)("button",{disabled:d,onClick:function(){h(!0),i===f.correct&&t(),setTimeout((function(){Number(x)===n.length?m.push("/result"):(m.push("/game/"+(Number(x)+1)),o(null),h(!1))}),100)},children:"Answer"})]})},l=n(7),b=function(){return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"V\xe4lkommen till denna Quiz!"}),Object(u.jsx)("p",{children:"Vill du s\xe4tta ig\xe5ng?"}),Object(u.jsx)(l.b,{to:"/game/1",children:Object(u.jsx)("button",{children:"Ja!"})})]})},d=function(e){var t=e.score,n=e.restartQuiz;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Reultat"}),Object(u.jsxs)("p",{children:["Du fick ",t," r\xe4tta svar!"]}),Object(u.jsx)(l.b,{to:"/game/1",children:Object(u.jsx)("button",{onClick:n,children:" B\xf6rja om "})})]})};var h=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{children:"Quiz"})}),Object(u.jsxs)("main",{children:[Object(u.jsx)(l.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",children:Object(u.jsx)(b,{})}),Object(u.jsx)(j.a,{exact:!0,path:"/game",children:Object(u.jsx)(o,{answeredCorrectly:function(){return r(n+1)}})}),Object(u.jsx)(j.a,{path:"/game/:currentquestion",children:Object(u.jsx)(o,{answeredCorrectly:function(){return r(n+1)}})}),Object(u.jsx)(j.a,{path:"/result",children:Object(u.jsx)(d,{score:n,restartQuiz:function(){r(0)}})})]})}),"Score: ",n]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[32,1,2]]]);
//# sourceMappingURL=main.083bbbff.chunk.js.map