(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=t(6),i=(t(24),t(11)),u=t.n(i),s=t(17),m=t(7),f=t(1),E=(t(26),function(e){var a=Object(n.useRef)(null);return e.darkmode&&(a.current.className="fas fa-moon"),r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/",className:"home"},r.a.createElement("h1",null,"Where in the world?")),r.a.createElement("button",{id:"button-darkmode",onClick:function(){var t=a.current;e.darkmode?(t.className="far fa-moon",e.setDarkmode(!1)):(t.className="fas fa-moon",e.setDarkmode(!0))}},r.a.createElement("i",{id:"icon-darkmode",className:"far fa-moon",ref:a}),r.a.createElement("p",null,"Dark Mode"))))}),d=function(e){var a=e.data;return r.a.createElement("div",{className:"card"},r.a.createElement(o.b,{className:"card-img",style:{backgroundImage:"url("+a.flag+")"},to:"/detail/".concat(a.name.replace(/ /g,"_"))}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title country"},a.name),r.a.createElement("ul",{className:"card-info"},r.a.createElement("li",null,r.a.createElement("h3",null,"Population:"),r.a.createElement("p",{className:"population"},a.population.toLocaleString())),r.a.createElement("li",null,r.a.createElement("h3",null,"Region:"),r.a.createElement("p",{className:"region"},a.region)),r.a.createElement("li",null,r.a.createElement("h3",null,"Capital:"),r.a.createElement("p",{className:"capital"},a.capital)))))},p=function(e){var a=e.items;return r.a.createElement("section",{className:"cardlist"},Object.values(a).map((function(e,a){return r.a.createElement(d,{key:a,data:e})})))},b=function(e){var a=Object(n.useRef)(null),t=Object(n.useRef)(null),l=Object(n.useRef)(null),c=Object(n.useRef)(null);function o(a){void 0!==a.target.value&&a.target.value.length>1?(c.current.textContent=a.target.value.charAt(0).toUpperCase()+a.target.value.slice(1),l.current.className="fas fa-times-circle"):(l.current.className="fas fa-angle-down",c.current.textContent="Filter by Region"),e.onFilterRegionChange(a)}return r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"searchbar"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",placeholder:"Search for a country...",onChange:e.onSearchChange,ref:t})),r.a.createElement("div",{className:"filter-region",onMouseOver:function(){a.current.style.visibility="unset"},onMouseLeave:function(){a.current.style.visibility="hidden"}},r.a.createElement("div",{className:"filter-region-label-container"},r.a.createElement("button",{className:"filter-region-label",type:"button",value:"",onClick:o},r.a.createElement("a",{ref:c},"Filter by Region"),r.a.createElement("i",{ref:l,className:"fas fa-angle-down"}))),r.a.createElement("form",{className:"filter-region-options",ref:a},r.a.createElement("button",{type:"button",value:"africa",onClick:o},"Africa"),r.a.createElement("button",{type:"button",value:"america",onClick:o},"America"),r.a.createElement("button",{type:"button",value:"asia",onClick:o},"Asia"),r.a.createElement("button",{type:"button",value:"europe",onClick:o},"Europe"),r.a.createElement("button",{type:"button",value:"oceania",onClick:o},"Oceania"))))},g=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),u=i[0],s=i[1],f=Object(n.useState)([]),E=Object(m.a)(f,2),d=E[0],g=E[1];return Object(n.useEffect)((function(){g(e.countriesData),s("")}),[e.countriesData]),Object(n.useEffect)((function(){var a=e.countriesData.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())&&e.region.toLowerCase().includes(u)}));g(a)}),[l,e.countriesData,u]),r.a.createElement("main",null,r.a.createElement(b,{onSearchChange:function(e){c(e.target.value)},onFilterRegionChange:function(e){void 0!==e.target.value?s(e.target.value):s("")}}),r.a.createElement(p,{items:d}))};var h=function(){return r.a.createElement("div",{className:"error"},"Nothing found here...")},v=function(e){var a=Object(n.useState)(e.match.params.name.replace(/_/g," ")),t=Object(m.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)({}),u=Object(m.a)(i,2),s=u[0],f=u[1];Object(n.useEffect)((function(){!function(){if(0!==e.countriesData.length){var a=e.countriesData.find((function(e){return e.name===l}));f(a)}}()}),[e.countriesData,l]);var E=function(e,a){for(var t="",n=0;n<e.length;n++){var l=e[n];a&&(l=e[n][a]),t+=l,n<e.length-1&&(t+=", ")}return r.a.createElement("div",null,t)};return r.a.createElement("main",{className:"country-detail-container"},r.a.createElement("button",{type:"button",className:"back"},r.a.createElement(o.b,{to:"/"},r.a.createElement("i",{className:"fas fa-arrow-left"}),r.a.createElement("p",null,"Back"))),s.name===l&&r.a.createElement("section",{className:"country-detail"},r.a.createElement("a",{className:"card-img",style:{backgroundImage:"url("+s.flag+")"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title country"},s.name),r.a.createElement("ul",{className:"card-info"},r.a.createElement("div",{className:"divider"},r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement("h3",null,"Population:"),r.a.createElement("p",{className:"population"},s.population.toLocaleString())),r.a.createElement("li",null,r.a.createElement("h3",null,"Region:"),r.a.createElement("p",{className:"region"},s.region)),r.a.createElement("li",null,r.a.createElement("h3",null,"Sub Region:"),r.a.createElement("p",{className:"subregion"},s.subregion)),r.a.createElement("li",null,r.a.createElement("h3",null,"Capital:"),r.a.createElement("p",{className:"capital"},s.capital))),r.a.createElement("div",{className:"additional"},r.a.createElement("li",null,r.a.createElement("h3",null,"Top Level Domain:"),r.a.createElement("p",{className:"topleveldomain"},s.topLevelDomain)),r.a.createElement("li",{className:"currencies"},r.a.createElement("h3",null,"Currencies:"),E(s.currencies,"name")),r.a.createElement("li",{className:"languages"},r.a.createElement("h3",null,"Languages:"),E(s.languages,"name")))),function(a){for(var t=[],n=function(n){var l=a[n],i=(l=e.countriesData.find((function(e){return e.alpha3Code===l}))).name.replace(/ /g,"_"),u=r.a.createElement(o.b,{to:i,key:n,onClick:function(){c(l.name)}},r.a.createElement("button",{tabIndex:"-1"},l.name));t.push(u)},l=0;l<a.length;l++)n(l);return 0==t.length?null:r.a.createElement("li",{className:"bordercountries"},r.a.createElement("h3",null,"Border Countries:"),r.a.createElement("div",null,t))}(s.borders)))))};var N=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),i=o[0],d=o[1];function p(){return(p=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:e.sent.json().then((function(e){l(e)})).catch((function(e){return console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}(),null!==localStorage.getItem("dark")&&d(!0),document.body.addEventListener("keyup",(function(e){"Tab"===e.key&&document.querySelector("html").classList.remove("no-focus-outline")}))}),[]),Object(n.useEffect)((function(){i?(document.querySelector("html").classList.add("dark"),localStorage.setItem("dark","true")):(document.querySelector("html").classList.remove("dark"),localStorage.removeItem("dark"))})),r.a.createElement("div",{className:"App"},r.a.createElement(E,{darkmode:i,setDarkmode:d}),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/home",render:function(e){return r.a.createElement(g,Object.assign({},e,{countriesData:t}))}}),r.a.createElement(f.b,{exact:!0,path:"/"},r.a.createElement(f.a,{to:"/home"})),r.a.createElement(f.b,{path:"/detail/:name",render:function(e){return r.a.createElement(v,Object.assign({},e,{countriesData:t}))}}),r.a.createElement(f.b,{component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.cb9cb18a.chunk.js.map