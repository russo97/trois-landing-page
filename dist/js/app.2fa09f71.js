(function(e){function t(t){for(var a,n,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},i=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://cdn.jsdelivr.net/gh/russo97/trois-landing-page@master/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"018a":function(e,t,r){e.exports=r.p+"img/header-wave-mobile.9783ae0f.svg"},"01f7":function(e,t,r){},"0206":function(e,t,r){var a={"./facebook-media-icon.svg":"ebc6","./instagram-media-icon.svg":"acb5"};function s(e){var t=i(e);return r(t)}function i(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id="0206"},"034b":function(e,t,r){e.exports=r.p+"img/wave.87e65a81.svg"},"06d6":function(e,t,r){},"0bab":function(e,t,r){e.exports=r.p+"img/service-alongamento-de-unhas.eff76079.jpg"},"1c54":function(e,t,r){"use strict";r("06d6")},2188:function(e,t,r){e.exports=r.p+"img/service-corte-de-cabelo.0bac9445.jpg"},"387e":function(e,t,r){},"43e5":function(e,t,r){},"53bd":function(e,t,r){e.exports=r.p+"img/arrow-colored.d9cee317.svg"},"53d7":function(e,t,r){"use strict";r("01f7")},5452:function(e,t,r){"use strict";r("af35")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"position-fixed top-0 start-0 overflow-hidden",class:e.dynamicClass,attrs:{id:"overlay"},on:{click:function(t){return e.setSelectedService(null)}}}),r("Header"),r("MainForm"),r("OurServices"),r("AddressList"),r("ServiceModal"),r("Footer")],1)},i=[],n=r("5530"),o=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{staticClass:"header__wrapper d-flex flex-column position-relative"},[e._m(0),e._m(1),e._m(2),e._m(3),r("a",{staticClass:"header__arrow d-block position-absolute",attrs:{href:"javascript:;",role:"button"},on:{click:function(t){return t.preventDefault(),e.mainFormFocus.apply(null,arguments)}}},[e._m(4)]),e._m(5)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"header__logo d-block",attrs:{href:"#"}},[a("figure",{staticClass:"m-0"},[a("img",{attrs:{src:r("e347"),alt:"Trois Beauté"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"header__herotext text-center"},[e._v(" Vem aí, o Trois Beauté, o "),r("strong",[e._v("maior e melhor")]),e._v(" salão da cidade, agora na Zona Norte! ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{staticClass:"header__subtitle text-center"},[e._v(" Cadastre-se e entre para nossa "),r("strong",[e._v("Lista VIP")]),e._v(" para receber benefícios exclusivos. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__models d-flex justify-content-center"},[a("picture",{staticClass:"d-flex align-items-end justify-content-center m-0"},[a("source",{attrs:{srcset:r("d6c9"),media:"(min-width: 540px)"}}),a("img",{attrs:{src:r("61dd"),alt:"Modelos"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",[a("img",{attrs:{src:r("76bd"),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header__wave position-absolute bottom-0 start-50 justify-content-center"},[a("figure",{staticClass:"m-0 h-100 d-flex align-items-end justify-content-center"},[a("img",{staticClass:"h-100",attrs:{src:r("018a"),alt:"wave"}})])])}],u=(r("7db0"),r("d3b7"),r("1157")),d=r.n(u),m={name:"Header",methods:{mainFormFocus:function(){var e=d()("#formLeadGenerator");e.length&&d()("html, body").animate({scrollTop:e.offset().top-.25*d()(window).height()},1200,"swing",(function(){e.find('input[id="nome"]').focus()}))}}},f=m,p=(r("5452"),r("2877")),v=Object(p["a"])(f,c,l,!1,null,null,null),g=v.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"mainform"},[r("div",{staticClass:"mainform__wrapper"},[r("div",{staticClass:"mainform__form w-100 mx-auto"},[r("form",{ref:"form",attrs:{id:"formLeadGenerator"},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("h3",{staticClass:"mainform__title text-center"},[e._v(" Faça seu cadastro ")]),r("div",{staticClass:"form-floating mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{required:"",id:"nome",type:"text",placeholder:"Insira seu nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),r("label",{attrs:{for:"nome"}},[e._v(" Nome ")])]),r("div",{staticClass:"form-floating mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{required:"",id:"email",type:"email",placeholder:"name@example.com"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("label",{attrs:{for:"email"}},[e._v(" E-mail ")])]),r("div",{staticClass:"form-floating mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"},{name:"mask",rawName:"v-mask",value:"(##) ##### ####",expression:"'(##) ##### ####'"}],staticClass:"form-control",attrs:{required:"",type:"tel",id:"phone",inputmode:"numeric",placeholder:"00 0000 0000"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}}),r("label",{attrs:{for:"phone"}},[e._v(" Celular ")])]),r("div",{staticClass:"d-flex justify-content-center"},[r("button",{staticClass:"d-flex align-items-center justify-content-center",attrs:{type:"submit",id:"queroMinhaVaga"}},[e._v(" "+e._s(e.buttonText)+" ")])])])])])])},b=[],_=(r("b0c0"),r("e9c4"),r("ac1f"),r("1276"),r("b6d0"));a["default"].use(_["a"]);var x={name:"MainForm",data:function(){return{success:!1,isLoading:!1,user:{name:"",email:"",phone:""}}},computed:{buttonText:function(){return this.success?"ENVIADO":"QUERO ME TORNAR VIP"}},methods:{submitForm:function(){this.isLoading=!0;var e=this.user,t=e.name,r=e.email,a=e.phone,s={name:t,email:r,telefone:a,page_url:location.href,token_rdstation:"a64adbfcc800c08ac5a649ece7d19fbe",identificador:"ZONA_NORTE_INAUGURACAO",traffic_source:this.lerCookie("__trf.src")};this.sendData(s)},sendData:function(e){var t=this;fetch("https://www.rdstation.com.br/api/1.3/conversions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(){t.success=!0})).finally((function(){t.isLoading=!1,t.clearInputs()})).catch((function(e){console.error("we got an error:",e.message)}))},lerCookie:function(e){var t="; "+document.cookie,r=t.split("; "+e+"=");if(2===r.length)return r.pop().split(";").shift()},clearInputs:function(){this.$refs.form.reset()}}},C=x,w=(r("5d27"),Object(p["a"])(C,h,b,!1,null,null,null)),S=w.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"ourservices",attrs:{id:"slider-container"}},[r("div",{staticClass:"ourservices__wrapper"},[e._m(0),r("a",{staticClass:"ourservices__arrow d-block position-absolute",attrs:{href:"javascript:void(0);",role:"button"},on:{click:function(t){return t.preventDefault(),e.sliderFocus.apply(null,arguments)}}},[e._m(1)]),r("h2",{staticClass:"ourservices__title text-center"},[e._v(" Nossos Serviços ")]),r("div",{staticClass:"ourservices__slidelist"},[r("Swiper",{attrs:{freeModeSticky:!0,freeModeEnabled:!0,loop:!1,"space-between":15,simulateTouch:!0,slidesPerView:"auto",navigation:!0}},e._l(e.ourServices,(function(e,t){return r("SwiperSlide",{key:e.serviceName},[r("SingleService",{attrs:{index:t,service:e}})],1)})),1)],1)])])},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ourservices__wave position-absolute top-0 start-50"},[a("figure",{staticClass:"m-0 h-100 d-flex align-items-end justify-content-center"},[a("img",{attrs:{src:r("034b"),alt:"wave"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"m-0"},[a("img",{attrs:{src:r("53bd"),alt:"arrow down"}})])}],O=r("d7cf"),k=r("8343"),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"service",on:{click:e.handleSelectService}},[r("div",{staticClass:"service__wrapper position-relative"},[r("figure",{staticClass:"m-0 w-100"},[r("img",{attrs:{src:e.filePath,alt:e.service.serviceName}})]),r("div",{staticClass:"service__cover d-flex align-items-center justify-content-center position-absolute start-0 top-0"},[r("h4",{staticClass:"service__name px-2 text-center"},[e._v(" "+e._s(e.service.serviceName)+" ")])])])])},N=[];r("5319"),r("a9e3");function D(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}var A={name:"SingleService",props:{service:{type:Object,required:!0,validator:function(e){return e.serviceName}},index:{type:Number,required:!0}},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["setSelectedService"])),{},{handleSelectService:function(){this.setSelectedService(this.index)}}),computed:{filePath:function(){var e=D(this.service.serviceName.toLowerCase()).replace(/\s+/g,"-");return r("ec31")("./service-".concat(e,".jpg"))}}},T=A,P=(r("fc8f"),Object(p["a"])(T,E,N,!1,null,null,null)),M=P.exports;r("5f67");O["SwiperCore"].use([k["a"]]);var F={name:"OurServices",components:{Swiper:O["Swiper"],SwiperSlide:O["SwiperSlide"],SingleService:M},data:function(){return{settings:{dots:!1,arrows:!1,draggable:!0,slidesToScroll:1,swipeToSlide:!0,variableWidth:!0}}},computed:Object(n["a"])({},Object(o["c"])(["ourServices"])),methods:{sliderFocus:function(){var e=d()("#slider-container");e.length&&d()("html, body").animate({scrollTop:e.offset().top-20},1200,"swing")}}},$=F,L=(r("f223"),Object(p["a"])($,j,y,!1,null,null,null)),I=L.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"addresslist"},[r("div",{staticClass:"addresslist__wrapper row g-0 mx-auto"},[e._l(e.addressList,(function(t){return r("div",{key:t.cep,staticClass:"col-12 col-md-5 px-5 addresslist__singleaddress"},[r("h4",{staticClass:"localidade text-center"},[e._v(" "+e._s(t.localidade)+" ")]),r("p",{staticClass:"m-0 full-address text-center"},[e._v(" "+e._s(e._f("formatAddress")(t))+" "),t.inaugurada?e._e():r("strong",[e._v(" - Em breve")])])])})),r("div",{staticClass:"col-12 col-md-2 d-flex justify-content-center align-items-center"},e._l(e.socialnetwork,(function(t){return r("div",{key:t.type,staticClass:"social mx-2"},[r("a",{attrs:{href:t.url,target:t.target,title:"Acompanhe-nos no "+t.type}},[r("figure",{staticClass:"m-0"},[r("img",{attrs:{src:e.socialNetworkMedia(t.type),alt:"Acompanhe-nos no "+t.type}})])])])})),0)],2)])},q=[],U=(r("99af"),{name:"AddressList",computed:Object(n["a"])({},Object(o["c"])(["addressList","socialnetwork"])),methods:{socialNetworkMedia:function(e){return r("0206")("./".concat(e.toLowerCase(),"-media-icon.svg"))}},filters:{formatAddress:function(e){var t=e.logradouro,r=e.numero,a=e.bairro,s=e.cidade,i=e.estado,n=e.cep;return"".concat(t,", ").concat(r," - ").concat(a,", ").concat(s," - ").concat(i,", ").concat(n)}}}),z=U,V=(r("1c54"),Object(p["a"])(z,R,q,!1,null,null,null)),B=V.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"servicemodal position-fixed top-50 start-50",class:e.modalClass},["number"===typeof e.selectedService?a("div",{staticClass:"servicemodal__wrapper row g-0"},[a("figure",{staticClass:"servicemodal__image col-5 m-0 d-flex align-items-center"},[a("img",{staticClass:"w-100",attrs:{src:e.filePath,alt:e.currentService.serviceName}})]),a("div",{staticClass:"servicemodal__description col-7 ps-3 d-md-flex flex-md-column"},[a("strong",{staticClass:"servicemodal__name d-block"},[e._v(" "+e._s(e.currentService.serviceName)+" ")]),a("p",{staticClass:"servicemodal__description d-block m-0"},[e._v(" "+e._s(e.currentService.serviceDescription)+" ")]),a("a",{staticClass:"servicemodal__getinfo text-decoration-none d-inline-block text-md-center mt-3 mt-md-auto mx-md-auto mb-md-4",attrs:{href:e.getMoreInformation,role:"button",target:"_blank"}},[e._v(" MAIS INFORMAÇÕES ")])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"row g-0"},[e._m(0),e.hasShareAPI?a("div",{staticClass:"col-5 share d-flex justify-content-end"},[a("figure",{staticClass:"m-0 d-flex align-items-center flex-column",on:{click:e.sharePage}},[a("img",{attrs:{src:r("7f46"),alt:"Compartilhe"}}),a("figcaption",[e._v(" Compartilhe ")])])]):e._e()])])]):e._e()])},G=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-7"},[r("span",{staticClass:"d-block label-contato"},[e._v(" Entre em contato ")]),r("span",{staticClass:"d-block phone-number"},[e._v(" 81 3019-3040 ")]),r("span",{staticClass:"d-block phone-number"},[e._v(" 81 99431-0804 ")])])}],H=r("1da1");r("96cf"),r("3ca3"),r("ddb0"),r("9861"),r("841c");function J(e){if(e)return null===e||void 0===e?void 0:e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}var Y={name:"ServiceModal",methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["setSelectedService"])),{},{sharePage:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasShareAPI){t.next=2;break}return t.abrupt("return");case 2:return r=e.currentService,a=r.serviceName,s=r.serviceDescription,t.next=5,navigator.share({text:s,title:"".concat(a," na Trois Beauté"),url:"".concat(location.origin).concat(location.pathname,"?sI=").concat(e.selectedService)});case 5:case"end":return t.stop()}}),t)})))()},sliderFocus:function(e){var t=d()("#slider-container");t.length&&d()("html, body").animate({scrollTop:t.offset().top-20},800,"swing",(function(){return e()}))}}),computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["ourServices","selectedService"])),{},{hasShareAPI:function(){return window.navigator.share},modalClass:function(){return{showing:"number"===typeof this.selectedService}},currentService:function(){return this.ourServices[this.selectedService]},filePath:function(){if("number"===typeof this.selectedService){var e=J(this.currentService.serviceName.toLowerCase()).replace(/\s+/g,"-");return r("ec31")("./service-".concat(e,".jpg"))}},getMoreInformation:function(){return"https://api.whatsapp.com/send?phone=5581994310804&text=Ol%C3%A1%2C%20desejo%20informa%C3%A7%C3%B5es%20sobre%20".concat(encodeURI(this.currentService.serviceName))}}),mounted:function(){var e=this,t=new URLSearchParams(location.search).get("sI");!t||+t<0||+t>this.ourServices.length-1||this.sliderFocus((function(){return e.setSelectedService(+t)}))}},Q=Y,W=(r("5fbc"),Object(p["a"])(Q,Z,G,!1,null,null,null)),K=W.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer__wrapper d-flex align-items-center flex-column flex-md-row justify-content-md-between mx-auto"},[r("strong",{staticClass:"company-rights text-center"},[e._v(" Trois Beauté © "+e._s(e.currentYear)+" - Todos os direitos reservados ")]),e._m(0)])])},ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"developer"},[a("a",{attrs:{href:"https://www.boldcomunicacao.com.br/",title:"Bold Comunicação",target:"_blank"}},[a("figure",{staticClass:"m-0 mt-3 mt-md-0 w-100"},[a("img",{staticClass:"w-100",attrs:{src:r("5cac"),alt:"Bold Comunicação"}})])])])}],te={name:"Footer",computed:{currentYear:function(){return(new Date).getFullYear()}}},re=te,ae=(r("53d7"),Object(p["a"])(re,X,ee,!1,null,null,null)),se=ae.exports,ie={name:"App",components:{Footer:se,Header:g,MainForm:S,OurServices:I,AddressList:B,ServiceModal:K},computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["selectedService"])),{},{dynamicClass:function(){return{visible:"number"===typeof this.selectedService}}}),methods:Object(n["a"])({},Object(o["b"])(["setSelectedService"]))},ne=ie,oe=(r("5c0b"),Object(p["a"])(ne,s,i,!1,null,null,null)),ce=oe.exports,le={selectedService:null,socialnetwork:[{type:"Instagram",target:"_blank",url:"https://www.instagram.com/troisbeaute/"},{type:"Facebook",target:"_blank",url:"https://www.facebook.com/troisbeauterecife/"}],addressList:[{inaugurada:!0,numero:"3350",bairro:"Boa Viagem",localidade:"ZONA SUL",logradouro:"Av. Conselheiro Aguiar",cidade:"Recife",estado:"PE",cep:"51020-021"},{inaugurada:!1,numero:"675",bairro:"Parnamirim",localidade:"ZONA NORTE",logradouro:"Av. Dezessete de Agosto",cidade:"Recife",estado:"PE",cep:"52060-590"}],ourServices:[{serviceName:"Alongamento",serviceDescription:"Conquiste o cabelo dos sonhos com a técnica de alongamento natural de fios."},{serviceName:"Alongamento de unhas",serviceDescription:"Unhas em gel ou fibra de vidro: experimente as técnicas que alongam e deixam as unhas impecáveis por mais tempo."},{serviceName:"Coloração",serviceDescription:"Experimente mudar o visual e deixar que a cor dos seus cabelos mostre sua personalidade."},{serviceName:"Depilação",serviceDescription:"Conquiste uma pele lisinha e macia com as sessões de depilação à cera."},{serviceName:"Design de sobrancelha",serviceDescription:"O design de sobrancelhas é o segredo para um olhar marcante e um rosto harmonioso."},{serviceName:"Drenagem Linfática",serviceDescription:"Experimente a massagem que cuida do seu corpo e reduz medidas."},{serviceName:"Mechas",serviceDescription:"Faça suas mechas criativas e personalizadas com os maiores experts do mercado de beleza."},{serviceName:"Transição capilar",serviceDescription:"Quando você escolhe mudar, aprende a encontrar sua melhor versão. A Transição Capilar é um momento de descoberta."},{serviceName:"Tratamento capilar",serviceDescription:"O cronograma de tratamentos é o segredo para um cabelo sempre bonito e saudável."},{serviceName:"Corte de cabelo",serviceDescription:"Demonstre sua personalidade e valorize seu cabelo através do corte perfeito."},{serviceName:"Make Express",serviceDescription:"A Make Express realça sua beleza em poucos minutos e te deixa linda para aquele evento."},{serviceName:"Unhas",serviceDescription:"Se você também ama os pequenos detalhes, não pode deixar de fazer as unhas semanalmente."}]};function ue(e,t){var r=e.commit;r("SET_SELECTED_SERVICE",t)}var de={setSelectedService:ue};function me(e,t){e.selectedService=t}var fe={SET_SELECTED_SERVICE:me};a["default"].use(o["a"]);var pe=new o["a"].Store({state:le,actions:de,mutations:fe});a["default"].config.productionTip=!1,new a["default"]({store:pe,render:function(e){return e(ce)}}).$mount(".bricks--container")},"571c":function(e,t,r){e.exports=r.p+"img/service-coloracao.2605e809.jpg"},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5cac":function(e,t,r){e.exports=r.p+"img/bold__logo.179cc5c3.png"},"5d27":function(e,t,r){"use strict";r("43e5")},"5fbc":function(e,t,r){"use strict";r("387e")},"61dd":function(e,t,r){e.exports=r.p+"img/modelos-mobile.ef9d7c11.jpg"},"76bd":function(e,t,r){e.exports=r.p+"img/arrow-down.8f4d9107.svg"},"7f46":function(e,t,r){e.exports=r.p+"img/compartilhe.7ef3769b.svg"},"8fc7":function(e,t,r){e.exports=r.p+"img/service-mechas.024bca7a.jpg"},9003:function(e,t,r){e.exports=r.p+"img/service-alongamento.8ba9d48c.jpg"},"9a5a":function(e,t,r){},"9c0c":function(e,t,r){},"9c31":function(e,t,r){e.exports=r.p+"img/service-design-de-sobrancelha.0d786f80.jpg"},ab35:function(e,t,r){e.exports=r.p+"img/service-drenagem-linfatica.515e578f.jpg"},acb5:function(e,t,r){e.exports=r.p+"img/instagram-media-icon.157157f8.svg"},af35:function(e,t,r){},c08e:function(e,t,r){e.exports=r.p+"img/service-make-express.63949452.jpg"},d11e:function(e,t,r){e.exports=r.p+"img/service-unhas.ce40ca3f.jpg"},d6c9:function(e,t,r){e.exports=r.p+"img/modelos-desktop.b4202004.jpg"},d6fc:function(e,t,r){e.exports=r.p+"img/service-tratamento-capilar.df043528.jpg"},e347:function(e,t,r){e.exports=r.p+"img/logo.5be96f39.svg"},e9d0:function(e,t,r){e.exports=r.p+"img/service-depilacao.c012d985.jpg"},ebc6:function(e,t,r){e.exports=r.p+"img/facebook-media-icon.316ee142.svg"},ec31:function(e,t,r){var a={"./service-alongamento-de-unhas.jpg":"0bab","./service-alongamento.jpg":"9003","./service-coloracao.jpg":"571c","./service-corte-de-cabelo.jpg":"2188","./service-depilacao.jpg":"e9d0","./service-design-de-sobrancelha.jpg":"9c31","./service-drenagem-linfatica.jpg":"ab35","./service-make-express.jpg":"c08e","./service-mechas.jpg":"8fc7","./service-transicao-capilar.jpg":"ff6c","./service-tratamento-capilar.jpg":"d6fc","./service-unhas.jpg":"d11e"};function s(e){var t=i(e);return r(t)}function i(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id="ec31"},f223:function(e,t,r){"use strict";r("fd64")},fc8f:function(e,t,r){"use strict";r("9a5a")},fd64:function(e,t,r){},ff6c:function(e,t,r){e.exports=r.p+"img/service-transicao-capilar.292b3188.jpg"}});
//# sourceMappingURL=app.2fa09f71.js.map