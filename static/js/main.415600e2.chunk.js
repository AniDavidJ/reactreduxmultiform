(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){},158:function(e,a,t){e.exports=t(309)},163:function(e,a,t){},282:function(e,a,t){},283:function(e,a,t){},286:function(e,a,t){},305:function(e,a,t){},309:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(52),s=t.n(r),c=(t(163),t(58)),m=t(10),i=t(125),o=t.n(i),d=t(120),u=t(121),f=function(e){return n.a.createElement("div",null,n.a.createElement("label",null,e.label),n.a.createElement("input",Object.assign({},e.input,{type:e.type,step:e.step,disabled:e.disabled,style:{width:"80%",height:"25px"}})),e.meta.touched&&n.a.createElement("p",{className:"text-danger",style:{margin:0,padding:0,color:"red"}},e.meta.error))},b=function(e){var a={};return e.userName||(a.userName="User name required"),e.userEmail||(a.userEmail="User email required"),e.userMobileNumber||(a.userMobileNumber="Mobile number required"),e.userAddress1||(a.userAddress1="Address required"),e.userAddress2||(a.userAddress2="Address required"),e.userAddress3||(a.userAddress3="Address required"),e.officeLandLineNumber||(a.officeLandLineNumber="LandLine number required"),e.officeBuildingName||(a.officeBuildingName="Building name required"),e.officeAreaName||(a.officeAreaName="City/Area required"),e.officeAddress1||(a.officeAddress1="Office Address required"),e.officeAddress2||(a.officeAddress2="Office Address required"),e.officePOBoxNumber||(a.officePOBoxNumber="PO Box Number required"),a},E=function(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)},N=function(e){return e.replace(/[^\d]/g,"").slice(0,10)},g=function(e){return e.toUpperCase().replace(/[^0-9]/g,"").slice(0,16)},v=Object(u.a)({destroyOnUnmount:!1,forceUnregisterOnUnmount:!1,form:"user",touchOnChange:!0,validate:b})(function(e){var a=e.isLoading,t=e.handleSubmit,l=e.previousPage;return n.a.createElement("form",{onSubmit:t,noValidate:!0},n.a.createElement("div",{className:"personal-container"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"cardbody"},n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"officeLandLineNumber",className:"label-field"},"Landline Number")),n.a.createElement(d.a,{name:"officeLandLineNumber",type:"text",component:f,normalize:g})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"officeBuildingName",className:"label-field"},"Building Name")),n.a.createElement(d.a,{name:"officeBuildingName",type:"text",component:f,normalize:E})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"officeAreaName",className:"label-field"},"City/Area")),n.a.createElement(d.a,{name:"officeAreaName",type:"text",component:f,normalize:E})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"officeAddress1",className:"label-field"},"Address Line 1")),n.a.createElement(d.a,{name:"officeAddress1",type:"textarea",component:f})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"officeAddress2",className:"label-field"},"Address Line 2")),n.a.createElement(d.a,{name:"officeAddress2",type:"textarea",component:f})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"officePOBoxNumber",className:"label-field"},"PO Box Number")),n.a.createElement(d.a,{name:"officePOBoxNumber",type:"textarea",component:f}))),n.a.createElement("div",{style:{paddingBottom:15}},n.a.createElement("button",{className:"button-back",onClick:l,disabled:a,style:{marginLeft:"20px",float:"left"}},"\xa0 Back"),n.a.createElement("button",{className:"next-button",type:"submit",style:{marginRight:"20px",float:"right"}},a&&n.a.createElement("span",null,"Loading..")," \xa0",!a&&n.a.createElement("span",null,"Next"))))))}),p=Object(m.b)(null)(v),A=(t(111),Object(u.a)({destroyOnUnmount:!1,forceUnregisterOnUnmount:!1,form:"user",validate:b})(function(e){var a=e.handleSubmit;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:a,noValidate:!0},n.a.createElement("div",{className:"personal-container"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"cardbody"},n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"userName",className:"label-field"},"Name")),n.a.createElement(d.a,{name:"userName",type:"text",component:f,normalize:E})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"userEmail",className:"label-field"},"Email")),n.a.createElement(d.a,{name:"userEmail",type:"email",component:f,normalize:E})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"userMobileNumber",className:"label-field"},"Mobile Number")),n.a.createElement(d.a,{name:"userMobileNumber",type:"text",component:f,normalize:N})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"userAddress1",className:"label-field"},"Address Line 1")),n.a.createElement(d.a,{name:"userAddress1",type:"textarea",component:f})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"userAddress2",className:"label-field"},"Address Line 2")),n.a.createElement(d.a,{name:"userAddress2",type:"textarea",component:f})),n.a.createElement("div",{className:"sameRow"},n.a.createElement("div",{className:"label"},n.a.createElement("label",{htmlFor:"userAddress3",className:"label-field"},"Address Line 3")),n.a.createElement(d.a,{name:"userAddress3",type:"textarea",component:f})))),n.a.createElement("div",{style:{paddingBottom:30}},n.a.createElement("button",{className:"next-button",type:"submit",style:{marginRight:"10px"}},"Next \xa0")))))})),h=Object(m.b)(null)(A),O=(t(282),function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header-container"},n.a.createElement("h2",null,e.title)),n.a.createElement("div",{className:"sub-header-background"},n.a.createElement("div",{className:"sub-header"},n.a.createElement("div",{className:"header-subtitle"},e.subtitle),n.a.createElement("div",{className:"banner"},e.banner))))}),w=t(123),L=(t(283),function(e){var a=e.input.value;console.log(a);return n.a.createElement("div",null,n.a.createElement("input",{type:"file",onChange:function(a){var t=e.input.onChange;t(a.target.files[0])}}))}),C=t(127),B=t.n(C),S=Object(u.a)({destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,form:"user",touchOnChange:!0})(function(e){var a=e.userName,t=e.userEmail,l=e.userMobileNumber,r=e.userAddress1,s=e.userAddress2,c=e.userAddress3,m=e.officeLandLineNumber,i=e.officeBuildingName,o=e.officeAreaName,u=e.officeAddress1,f=e.officeAddress2,b=e.officePOBoxNumber,E=e.isLoading,N=e.handleSubmit,g=e.previousPage,v=e.pristine,p=e.submitting,A=n.a.useRef();return n.a.createElement("form",{onSubmit:N,noValidate:!0},n.a.createElement("div",{className:"confirmation-container"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"two-row"},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Name "),n.a.createElement("label",null," ",a," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Email "),n.a.createElement("label",null," ",t," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Moblie Number "),n.a.createElement("label",null," ",l," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Address Line 1 "),n.a.createElement("label",null," ",r," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Address Line 2 "),n.a.createElement("label",null," ",s," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Address Line 3 "),n.a.createElement("label",null," ",c," "))),n.a.createElement("div",{className:"two-row"},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Building Name "),n.a.createElement("label",null," ",i," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," City/Area "),n.a.createElement("label",null," ",o," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Landline Number "),n.a.createElement("label",null," ",m," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Adress Line 1 "),n.a.createElement("label",null," ",u," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," Adress Line 2 "),n.a.createElement("label",null," ",f," ")),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"field-row"}," PO Box Number "),n.a.createElement("label",null," ",b," "))),n.a.createElement("div",{className:"two-row right-container"},n.a.createElement("div",{className:"camera-outline confirmation-container"},n.a.createElement("div",{className:"person"},n.a.createElement("img",{className:"img-person",src:"data:image/png;base64,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",alt:""}),n.a.createElement(d.a,{type:"file",name:"profile",component:L})),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("img",{className:"img",src:"https://w7.pngwing.com/pngs/140/861/png-transparent-digital-cameras-graphy-camera-icon-rectangle-camera-icon-logo-thumbnail.png",alt:""})),n.a.createElement("div",null,n.a.createElement("img",{className:"img",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-sLGJZlZ_L8Picxdev8MREgycPU16H_cDg&usqp=CAU",alt:""})))),n.a.createElement("div",{className:"signature-outline confirmation-container"},"Signature",n.a.createElement(B.a,{ref:A,penColor:"blue",canvasProps:{width:300,height:70,className:"sigCanvas"}}),n.a.createElement("button",{onClick:function(e){e.preventDefault();var a=A.current.toDataURL();console.log(a)},style:{width:20,height:20,color:"red"}},"Save"),n.a.createElement("button",{onClick:function(e){e.preventDefault(),A.current.clear()},style:{width:20,height:20,color:"red"}},"clear")))),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"button-back",onClick:g,disabled:E,style:{marginLeft:"20px",float:"left"}},"\xa0 Back"),n.a.createElement("button",{key:"submit",className:"button",type:"submit",style:{marginRight:"20px",float:"right"},disabled:v||p},E&&n.a.createElement("span",null,"Loading..")," \xa0",!E&&n.a.createElement("span",null,"Submit")))))}),y=Object(w.a)("user"),x=Object(m.b)(function(e){var a=y(e,"userName","userEmail","userMobileNumber","userAddress1","userAddress2","userAddress3","officeLandLineNumber","officeBuildingName","officeAreaName","officeAddress1","officeAddress2","officePOBoxNumber");return{userName:a.userName,userEmail:a.userEmail,userMobileNumber:a.userMobileNumber,userAddress1:a.userAddress1,userAddress2:a.userAddress2,userAddress3:a.userAddress3,officeLandLineNumber:a.officeLandLineNumber,officeBuildingName:a.officeBuildingName,officeAreaName:a.officeAreaName,officeAddress1:a.officeAddress1,officeAddress2:a.officeAddress2,officePOBoxNumber:a.officePOBoxNumber}})(S),k=(t(286),function(e){var a=Object(l.useState)(0),t=Object(c.a)(a,2),r=t[0],s=t[1],m=e.onSubmit,i=e.isLoading,d=function(){s(r+1)},u=function(){s(r-1)};return n.a.createElement("div",{className:"form-background"},0===r&&n.a.createElement(O,{title:"Personal Info Page",subtitle:"Personal Info",banner:"USER"}),1===r&&n.a.createElement(O,{title:"Office info Page",subtitle:"Office info",banner:"ARC"}),2===r&&n.a.createElement(O,{title:"Confirmation Page",subtitle:"Confirmation Page",banner:"ARC"}),n.a.createElement("div",{className:"stepper-container"},n.a.createElement(o.a,{steps:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}],activeStep:r,activeColor:"rgb(225, 53, 69",connectorStateColors:!0,completeColor:"rgb(210, 53, 69",fontWeight:"10",nonLinear:!0,titleFontSize:11,size:25,circleFontSize:11,completeBarColor:"red",lineMarginOffset:50,onClick:function(){return console.log("stepper clicked")}}),0===r&&n.a.createElement(h,{onSubmit:d}),1===r&&n.a.createElement(p,{isLoading:i,previousPage:u,onSubmit:d}),2===r&&n.a.createElement(x,{isLoading:i,previousPage:u,onSubmit:m})))}),F="ADD_USER",U=t(29),P=t(128),j=t.n(P),I=Object(m.b)(null)(function(e){var a=Object(l.useState)(!1),t=Object(c.a)(a,2),r=t[0],s=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,Object.assign({onSubmit:function(a){console.log("Submitted values",a);var t=new FormData;"string"!==typeof a.picture&&null!==a.picture&&t.append("picture",a.profile,"pic"),j.a.post("http://localhost:3000/posts/",{values:a,headers:{"content-type":"multipart/form-data"},body:t}).then(function(e){alert("Successfully submitted")}).catch(function(e){return alert(e)}),e.dispatch({payload:a,type:F}),e.dispatch(Object(U.a)("user")),e.history.push("/success"),s(!1)},isLoading:r},e)))}),q=t(57),D=t(22),R=(t(305),function(){return n.a.createElement("div",{className:"success-mainbackground"},n.a.createElement("div",{className:"success-header"},n.a.createElement("h2",null,"Registration Success")),n.a.createElement("div",{className:"sub-header-background"},n.a.createElement("div",{className:"container-success"},n.a.createElement("div",null,n.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqN5Y5lO78m4Ul9fyA6jq7IuHPvl6aw1WrBA&usqp=CAU",alt:""})),n.a.createElement("div",null,n.a.createElement("h1",null,"Success")),n.a.createElement("div",null,n.a.createElement("h4",null,"Your Application has been submitted")),n.a.createElement(q.b,{to:""},n.a.createElement("button",{className:"ok-button"},"OK")))))}),K=function(){return n.a.createElement("div",null,n.a.createElement(q.a,{basename:"https://anidavidj.github.io/reactreduxmultiform"},n.a.createElement(D.c,null,n.a.createElement(D.a,{path:"/",exact:!0,component:I}),n.a.createElement(D.a,{path:"/success",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(6),G=t(80),T=t(130),M=t.n(T),Y=t(131),V=t(122),Q=t(132),Z=t(133),X={data:[]};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case F:return Object(Z.a)({},e,{data:[a.payload].concat(Object(Q.a)(e.data))});default:return e}},W=Object(z.c)({form:V.a,user:J}),H={blacklist:["form"],key:"reactreduxform",storage:M.a},_=Object(G.a)(H,W),$=Object(z.a)(Y.a),ee=Object(z.d)(_,$);Object(G.b)(ee);s.a.render(n.a.createElement(function(){return n.a.createElement(m.a,{store:ee},n.a.createElement(K,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,1,2]]]);
//# sourceMappingURL=main.415600e2.chunk.js.map