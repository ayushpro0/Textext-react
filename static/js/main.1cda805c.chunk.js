(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),o=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.uiMode," bg-").concat(e.uiMode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:Object(l.jsx)("b",{children:e.title})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:Object(l.jsx)("b",{children:"Home"})})}),Object(l.jsx)("li",{className:"nav-item"})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.uiMode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleUIMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function d(e){var t=Object(n.useState)("enter text here..."),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.uiMode?"white":"black"},children:[Object(l.jsx)("h1",{style:{fontFamily:"nunito"},children:e.heading}),Object(l.jsx)("div",{className:"mb-3 mx-2",children:Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){console.log("onchange was clicked"),s(e.target.value)},id:"myBox",rows:"5",style:{backgroundColor:"dark"===e.uiMode?"#30475E":"#e7e7e7",color:"dark"===e.uiMode?"white":"black",border:"none",borderRadius:"20px",padding:"5px 20px"}})}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to UPPERCASE.","success")},children:" Convert to UpperCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to lowercase.","success")},children:" Convert to LowerCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Spaces are removed.","success")},children:" Trim Spaces"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to the Clipboard.","success")},children:" Copy Text"}),Object(l.jsx)("button",{className:"btn btn-secondary mx-1",onClick:function(){s(""),e.showAlert("Text Cleared.","success")},children:" Clear"})]}),Object(l.jsxs)("div",{className:"container my-1",style:{color:"dark"===e.uiMode?"white":"black"},children:[Object(l.jsx)("h2",{style:{fontFamily:"nunito"},children:"your text summary"}),Object(l.jsxs)("div",{className:"container mx-2",style:{backgroundColor:"dark"===e.uiMode?"#30475E":"#e7e7e7",border:"none",borderRadius:"20px",padding:"5px 11px"},children:[Object(l.jsxs)("p",{className:"mx-2",children:[c.split(" ").length-1," words and ",c.length," characters"]}),Object(l.jsxs)("p",{className:"mx-2",children:[.008*c.split(" ").length," minutes to read"]})]}),Object(l.jsx)("h2",{style:{fontFamily:"nunito"},children:" preview"}),Object(l.jsxs)("p",{className:"mx-2",style:{backgroundColor:"dark"===e.uiMode?"#30475E":"#e7e7e7",border:"none",borderRadius:"20px",padding:"5px 20px"},children:[" ",c.length>0?c:"enter something in the textbox above to preview it here"]})]})]})}i.defaultProps={title:"set the title here",aboutText:"set about here"};var b=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),u=r[0],h=r[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"Textext",aboutText:"About",uiMode:a,toggleUIMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#222831",j("Dark mode had been enabled","success")):(c("light"),document.body.style.backgroundColor="white",j("Light mode had been enabled","success"))}}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{heading:"enter your text to analyze",uiMode:a,showAlert:j})}),Object(l.jsx)(b,{alert:u})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.1cda805c.chunk.js.map