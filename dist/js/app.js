(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://cdn.jsdelivr.net/gh/russo97/trois-landing-page@master/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"018a":function(e,t,r){e.exports=r.p+"img/header-wave-mobile.svg"},"43e5":function(e,t,r){},5452:function(e,t,r){"use strict";r("af35")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("MainForm")],1)},s=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__wrapper d-flex flex-column position-relative"},[n("a",{staticClass:"header__logo d-block",attrs:{href:"#"}},[n("figure",{staticClass:"m-0"},[n("img",{attrs:{src:r("e347"),alt:"Trois Beauté"}})])]),n("h1",{staticClass:"header__herotext text-center"},[e._v(" Cadastre-se e "),n("br",{staticClass:"d-md-none"}),e._v("entre para nossa "),n("strong",[e._v("Lista VIP")])]),n("div",{staticClass:"header__models d-flex justify-content-center"},[n("picture",{staticClass:"d-flex align-items-end justify-content-center m-0"},[n("source",{attrs:{srcset:r("d6c9"),media:"(min-width: 540px)"}}),n("img",{attrs:{src:r("61dd"),alt:"Modelos"}})])]),n("a",{staticClass:"header__arrow d-block position-absolute",attrs:{href:"#",role:"button"}},[n("figure",[n("img",{attrs:{src:r("76bd"),alt:""}})])]),n("div",{staticClass:"header__wave position-absolute bottom-0 start-50 justify-content-center"},[n("figure",{staticClass:"m-0 h-100 d-flex align-items-end justify-content-center"},[n("img",{staticClass:"h-100",attrs:{src:r("018a"),alt:"wave"}})])])])])}],l={name:"Header",data:function(){return{baseURL:""}},created:function(){this.baseURL="https://github.com/russo97/trois-landing-page/blob/master/dist"}},c=l,u=(r("5452"),r("2877")),d=Object(u["a"])(c,o,i,!1,null,null,null),m=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"mainform"},[r("div",{staticClass:"mainform__wrapper"},[r("div",{staticClass:"mainform__form w-100 mx-auto"},[r("form",[r("h3",{staticClass:"mainform__title text-center"},[e._v(" Faça seu cadastro gratuito ")]),r("div",{staticClass:"form-floating mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"nome",placeholder:"Insira seu nome",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),r("label",{attrs:{for:"nome"}},[e._v(" Nome ")])]),r("div",{staticClass:"form-floating mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"name@example.com",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("label",{attrs:{for:"email"}},[e._v(" E-mail ")])]),r("div",{staticClass:"form-floating mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"tel",inputmode:"numeric",id:"phone",placeholder:"00 0000 0000",required:""},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}}),r("label",{attrs:{for:"phone"}},[e._v(" Celular ")])]),e._m(0)])])])])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center"},[r("button",{staticClass:"d-flex align-items-center justify-content-center",attrs:{type:"submit",id:"queroMinhaVaga"}},[e._v(" Quero garantir a minha vaga ")])])}],v={name:"MainForm",data:function(){return{user:{name:"",email:"",phone:""}}}},g=v,h=(r("5d27"),Object(u["a"])(g,p,f,!1,null,null,null)),b=h.exports,_={name:"App",components:{Header:m,MainForm:b}},x=_,y=(r("5c0b"),Object(u["a"])(x,a,s,!1,null,null,null)),C=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount(".bricks--container")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5d27":function(e,t,r){"use strict";r("43e5")},"61dd":function(e,t,r){e.exports=r.p+"img/modelos-mobile.jpg"},"76bd":function(e,t,r){e.exports=r.p+"img/arrow-down.svg"},"9c0c":function(e,t,r){},af35:function(e,t,r){},d6c9:function(e,t,r){e.exports=r.p+"img/modelos-desktop.jpg"},e347:function(e,t,r){e.exports=r.p+"img/logo.svg"}});
//# sourceMappingURL=app.js.map