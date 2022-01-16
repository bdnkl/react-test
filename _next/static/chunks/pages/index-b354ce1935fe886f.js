(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1280:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(7294);var a=function(e="light"){const[t,n]=(0,r.useState)(e);return{theme:t,setTheme:function(e){n("dark"===e?"dark":"light")}}};const s=(0,r.createContext)(void 0);function o({children:e,startingTheme:t}){const{theme:n,setTheme:o}=a(t);return r.createElement(s.Provider,{value:{theme:n,setTheme:function(e){o(e)}}},e)}const c=(0,r.createContext)(void 0);function l({children:e,initialLoggedInUser:t}){const[n,a]=(0,r.useState)(t);return r.createElement(c.Provider,{value:{loggedInUser:n,setLoggedInUser:function(e){a(e)}}},e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){return function(t){const{loggedInUser:n,setLoggedInUser:a}=function(){const e=r.useContext(c);if(void 0===e)throw new Error("useAuthContext should be used within an AuthProvider.");return e}();return r.createElement(e,i({},t,{loggedInUser:n,setLoggedInUser:a}))}};var m=u((function({loggedInUser:e,setLoggedInUser:t}){const{theme:n}=(0,r.useContext)(s);return r.createElement("div",{className:"padT4 padB4"},r.createElement("div",{className:"container mobile-container"},r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("div",null,r.createElement("img",{alt:"SVCC Home Page",src:"/images/SVCCLogo.png"})),r.createElement("div",{className:"light"},r.createElement("h4",{className:"header-title"},"Silicon Valley Code Camp")),r.createElement("div",{className:"light"===n?"":"text-info"},e&&e.length>0?r.createElement("div",null,r.createElement("span",null,"Logged in as ",e," "),r.createElement("button",{className:"btn btn-secondary",onClick:()=>{t("")}},"Logout")):r.createElement("button",{className:"btn btn-secondary",onClick:e=>{e.preventDefault();const n=window.prompt("Enter Login name:","");t(n)}},"login")))))}));var d=function(e,t){const[n,a]=(0,r.useState)(e),[s,o]=(0,r.useState)(t),[c,l]=(0,r.useState)("");return{showSessions:n,setShowSessions:a,eventYear:s,setEventYear:o,searchQuery:c,setSearchQuery:l,EVENT_YEARS:["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"]}};const E=(0,r.createContext)(void 0);function f({children:e,startingShowSessions:t=!1,startingEventYear:n="2019"}){const{showSessions:a,setShowSessions:s,eventYear:o,setEventYear:c,searchQuery:l,setSearchQuery:i,EVENT_YEARS:u}=d(t,n);return r.createElement(E.Provider,{value:{showSessions:a,setShowSessions:s,eventYear:o,setEventYear:c,searchQuery:l,setSearchQuery:i,EVENT_YEARS:u}},e)}function h(){const e=r.useContext(E);if(void 0===e)throw new Error("useSpeakerContext should be used within an SpeakerFilterProvider.");return e}var p=function(){const{theme:e,setTheme:t}=function(){const e=r.useContext(s);if(void 0===e)throw new Error("useThemeContext should be used within an ThemeProvider.");return e}(),{showSessions:n,setShowSessions:a,eventYear:o,setEventYear:c,setSearchQuery:l,EVENT_YEARS:i}=h();return r.createElement("section",{className:"toolbar dark-theme-header"},r.createElement("div",{className:"container"},r.createElement("div",{className:"justify-content-between"},r.createElement("ul",{className:"toolrow d-flex flex-column flex-lg-row"},r.createElement("li",{className:"d-flex flex-column flex-md-row"},r.createElement("b",null,"Show Sessions\xa0\xa0"),r.createElement("label",{className:"fav"},r.createElement("input",{type:"checkbox",checked:n,onChange:e=>{a(e.target.checked)}}),r.createElement("span",{className:"switch"}))),r.createElement("li",{className:"d-flex flex-column flex-md-row ml-sm-5 ml-0"},r.createElement("strong",null,"Theme"),r.createElement("label",{className:"dropdown"},r.createElement("select",{className:"form-control theme",value:e,onChange:e=>{t(e.target.value)}},r.createElement("option",{value:"light"},"Light"),r.createElement("option",{value:"dark"},"Dark")))),r.createElement("li",null,r.createElement("div",{className:"input-group"},r.createElement("input",{type:"text",className:"form-control",placeholder:"Search...",onChange:e=>{l(e.target.value)}}),r.createElement("div",{className:"input-group-append"},r.createElement("button",{className:"btn btn-secondary",type:"button"},r.createElement("i",{className:"fa fa-search"}))))),r.createElement("li",{className:"d-flex flex-column flex-md-row"},r.createElement("strong",null,"Year"),r.createElement("label",{className:"dropmenu"},r.createElement("select",{className:"form-control",value:o,onChange:({currentTarget:e})=>{c(e.value)}},i.map((function(e){return r.createElement("option",{value:e,key:e},e)})))))))))};const v=(0,r.createContext)(void 0);function g({children:e,speaker:t,updateRecord:n,insertRecord:a,deleteRecord:s}){return r.createElement(v.Provider,{value:{speaker:t,updateRecord:n,insertRecord:a,deleteRecord:s}},e)}function w(){const e=r.useContext(v);if(void 0===e)throw new Error("useSpeakerContext should be used within an SpeakerProvider.");return e}var N=function(){const{speaker:e,deleteRecord:t}=w();return r.createElement("span",{className:"session",style:{width:"100%"}},r.createElement("a",{href:"#",className:"remSes"},r.createElement("i",{onClick:n=>{n.preventDefault(),window.confirm("Are you sure you want to delete this speaker?")&&t(e)}},"-")),r.createElement("span",{className:"padL2"},"Delete Speaker"))};class S extends r.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.log(`ErrorBoundary:getDerivedStateFromError ${e}`),{hasError:!0}}componentDidCatch(e,t){}render(){return this.state.hasError?this.props.errorUI?this.props.errorUI:r.createElement("div",null,"Something went wrong"):this.props.children}}var k=S;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x({title:e,room:t}){return r.createElement("span",{className:"session w-100"},e," ",r.createElement("strong",null,"Room: ",t.name))}function b(){const{eventYear:e}=h(),{speaker:t}=w(),n=t.sessions;return r.createElement("div",{className:"sessionBox card h-250"},n.filter((t=>t.eventYear===e)).map((e=>r.createElement("div",{className:"session w-100",key:e.id},r.createElement(x,e)))))}function C({src:e,...t}){const[n,a]=(0,r.useState)(!1),[s,o]=(0,r.useState)(e);return r.createElement("img",y({src:s},t,{onError:function(){n||(o("/images/speaker-99999.jpg"),a(!0))},alt:"picture of speaker"}))}function R(){const{speaker:{id:e,first:t,last:n}}=w();return r.createElement("div",{className:"speaker-img d-flex flex-row justify-content-center align-items-center h-300"},r.createElement(C,{className:"contain-fit",src:`/images/speaker-${e}.jpg`,width:"300",alt:`${t} ${n}`}))}function Y(){const{speaker:e,updateRecord:t}=w(),[n,a]=(0,r.useState)(!1);function s(){a(!1),console.log(`In SpeakerFavorite:doneCallback    ${(new Date).getMilliseconds()}`)}return r.createElement("div",{className:"action padB1"},r.createElement("span",{onClick:()=>{a(!0),t({...e,favorite:!e.favorite},s)}},r.createElement("i",{className:!0===e.favorite?"fa fa-star orange":"fa fa-star-o orange"})," ","Favorite"," ",n?r.createElement("span",{className:"fas fa-circle-notch fa-spin"}):null))}function T(){const{speaker:{first:e,last:t,bio:n,company:a,twitterHandle:s}}=w();return r.createElement("div",{className:"speaker-info"},r.createElement("div",{className:"d-flex justify-content-between mb-3"},r.createElement("h3",{className:"text-truncate w-200"},e," ",t)),r.createElement(Y,null),r.createElement("div",null,r.createElement("p",{className:"card-description"},n.substring(0,70)),r.createElement("div",{className:"social d-flex flex-row mt-4"},r.createElement("div",{className:"company"},r.createElement("h5",null,"Company"),r.createElement("h6",null,a)),r.createElement("div",{className:"twitter"},r.createElement("h5",null,"Twitter"),r.createElement("h6",null,s)))))}const $=(0,r.memo)((function({speaker:e,updateRecord:t,insertRecord:n,deleteRecord:a,showErrorCard:s}){const{showSessions:o}=h();return console.log(`speaker: ${e.id} ${e.first} ${e.last}`),s?r.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"},r.createElement("div",{className:"card card-height p-4 mt-4"},r.createElement("img",{src:"/images/speaker-99999.jpg",alt:`${e.first} ${e.last}`}),r.createElement("div",null,r.createElement("b",null,"Error Showing Speaker")))):r.createElement(g,{speaker:e,updateRecord:t,insertRecord:n,deleteRecord:a},r.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"},r.createElement("div",{className:"card card-height p-4 mt-4"},r.createElement(R,null),r.createElement(T,null)),!0===o?r.createElement(b,null):null,r.createElement(N,null)))}),_);function _(e,t){return e.speaker.favorite===t.speaker.favorite}var I=function(e){return r.createElement(k,{errorUI:r.createElement($,y({},e,{showErrorCard:!0}))},r.createElement($,e))},L=n(6457),U=n(9669),P=n.n(U);const j="loading",D="success",F="failure",O="api/speakers";var A=function(){const[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(j),[s,o]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){try{const e=await P().get(O);a(D),t(e.data)}catch(e){a(F),o(e)}}()}),[]),{data:e,requestStatus:n,error:s,updateRecord:function(n,r){const a=[...e],o=e.map((function(e){return e.id===n.id?n:e}));!async function(){try{t(o),await P().put(`${O}/${n.id}`,n),r&&r()}catch(s){console.log("error thrown inside delayFunction",s),r&&r(),t(a)}}()},insertRecord:function(n,r){const a=[...e],o=[n,...e];!async function(){try{t(o),await P().post(`${O}/99999`,n),r&&r()}catch(s){console.log("error thrown inside delayFunction",s),r&&r(),t(a)}}()},deleteRecord:function(n,r){const a=[...e],o=e.filter((function(e){return e.id!=n.id}));!async function(){try{t(o),await P().delete(`${O}/${n.id}`,n),r&&r()}catch(s){console.log("error thrown inside delayFunction",s),r&&r(),t(a)}}()}}};const Q={id:"0",first:"Jane",last:"Doe",company:"GitHub",bio:"None",twitterHandle:"janestwitter",favorite:!0,sessions:Array()};var V=u((function({eventYear:e,insertRecord:t,loggedInUser:n}){return n&&0!==n.length?r.createElement("a",{href:"#",className:"addSes"},r.createElement("i",{onClick:n=>{n.preventDefault();const r=window.prompt("Enter first and last name:","").split(" ");t({...Q,id:"99999",first:r[0],last:r[1],bio:"Bio not entered yet",sessions:[{id:"88888",title:`New Session For ${r[0]}`,room:{name:"Main Ball Room"},eventYear:e}]})}},"+")):null}));var B=function(){const{data:e,requestStatus:t,error:n,updateRecord:a,insertRecord:s,deleteRecord:o}=A(),{searchQuery:c,eventYear:l}=h();return t===F?r.createElement("div",{className:"text-danger"},"ERROR: ",r.createElement("b",null,"loading Speaker Data Failed ",n)):r.createElement("div",{className:"container speakers-list"},r.createElement(L.Z,{type:"media",rows:15,className:"speakerslist-placeholder",ready:t===D},r.createElement(V,{eventYear:l,insertRecord:s}),r.createElement("div",{className:"row"},e.filter((function(e){return e.first.toLowerCase().includes(c)||e.last.toLowerCase().includes(c)})).filter((function(e){return e.sessions.find((e=>e.eventYear===l))})).map((function(e){return r.createElement(I,{key:e.id,speaker:e,updateRecord:a,insertRecord:s,deleteRecord:o})})))))};var H=function(){return r.createElement(f,{startingShowSessions:!1},r.createElement(p,null),r.createElement(B,null))};function q({children:e}){const{theme:t}=(0,r.useContext)(s);return r.createElement("div",{className:"light"===t?"container-fluid light":"container-fluid dark"},e)}var M=function({startingTheme:e,children:t}){return r.createElement(o,{startingTheme:e},r.createElement(q,null,t))};var X=function(){return r.createElement(l,{initialLoggedInUser:"Ronald"},r.createElement(M,{startingTheme:"light"},r.createElement("div",null,r.createElement(m,null),r.createElement(H,null))))};var G=()=>r.createElement(X,null)},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1280)}])}},function(e){e.O(0,[49,888,774,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);