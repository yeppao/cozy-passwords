!function(e){function t(t){for(var o,i,l=t[0],c=t[1],u=t[2],d=0,f=[];d<l.length;d++)i=l[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([0,1]),n()}({"/KVF":function(e,t,n){var o={"./en":"7dT6","./en.json":"7dT6"};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="/KVF"},"/kYV":function(e,t,n){},0:function(e,t,n){n("201c"),e.exports=n("LiWt")},"2E0U":function(e,t,n){"use strict";var o=function(e){return e.find("io.cozy.passwords.categories")};n.d(t,"a",function(){return"io.cozy.passwords.categories"}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return"io.cozy.passwords.values"})},"7dT6":function(e){e.exports={SIDEBAR:{ADD_CATEGORY:"Add category"},SIDEBAR_MODAL:{ADD_CATEGORY_LABEL:"Add a new category",CATEGORY_LABEL:"Category"},CATEGORY_MODAL:{ADD_PASSWORD_LABEL:"Add a new password",WEBSITE_LABEL:"Website",PASSWORD_LABEL:"Password",DESCRIPTION_LABEL:"Description"},HOMEPAGE:{TITLE:"Passwords manager",PASSWORD:{TITLE:"All your passwords, accessible everywhere",DESCRIPTION:"You will be able to manage all your differents passwords in this cloud application"},SECURE:{TITLE:"A secured way to store them",DESCRIPTION:"Protected behind Cozy security, your passwords are safe in here."}},MODAL:{ADD:"Add"}}},AeLu:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("uNOt"),i=n("+FsC"),l=n("SH7X"),c=n("2E0U"),u=n("IP2g"),s=n("zGKU"),d=n("XOpu"),f=n("o0o1"),p=n.n(f),b=n("wIs1"),y=n("y2Vs");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var _=function(e){return r.a.createElement("div",m({},e.innerProps,{className:"select-option"}),r.a.createElement("div",{className:"select-icon"},r.a.createElement(u.a,{className:"cozy-blue",icon:e.data.value})),r.a.createElement("div",{className:"select-label"},e.data.label))},h=[{value:"globe",label:"Internet"},{value:"address-card",label:"Contact"},{value:"envelope",label:"Mail"},{value:"dollar-sign",label:"Bank"},{value:"desktop",label:"Desktop"},{value:"mobile-alt",label:"Mobile"},{value:"folder",label:"Administrative"}];function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,o,r,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(o,r)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(x(x(n=function(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?x(e):t}(this,g(t).call(this,e)))),"handleChange",function(e){n.setState({categoryToAdd:e.target.value})}),P(x(x(n)),"handleSubmit",function(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function i(e){v(a,o,r,i,l,"next",e)}function l(e){v(a,o,r,i,l,"throw",e)}i(void 0)})}}(p.a.mark(function e(){var t,o,r,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=n.state,o=t.categoryToAdd,r=t.categoryIcon,a=n.props.createDocument,n.setState(function(){return{categoryToAdd:"",categoryIcon:"",isWorking:!0}}),a(c.a,{name:o,icon:r}).then(function(e){var t=e.data;n.setState(function(){return{isWorking:!1}}),n.props.toggleModal(),n.goToCategory(t.id)});case 4:case"end":return e.stop()}},e,this)}))),n.state={categoryToAdd:"",categoryIcon:"",isWorking:!1,openCategoryModal:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o["Component"]),function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({openCategoryModal:e.openCategoryModal})}},{key:"goToCategory",value:function(e){this.props.history.push("/category/".concat(e))}},{key:"render",value:function(){var e=this,t=this.state,n=t.openCategoryModal,o=t.categoryToAdd,a=t.isWorking,l=this.props.t;return n&&r.a.createElement(i.g,{into:"body",closable:!0,dismissAction:function(){return e.props.toggleModal()}},r.a.createElement(i.h,{className:"password-modal-content"},r.a.createElement("h2",null,l("SIDEBAR_MODAL.ADD_CATEGORY_LABEL")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(i.e,{htmlFor:"category-add-input"},l("SIDEBAR_MODAL.CATEGORY_LABEL")),r.a.createElement(i.d,{value:o,onChange:this.handleChange,id:"category-add-input"}),r.a.createElement(y.b,{components:{Option:_},closeMenuOnSelect:!0,options:h,onChange:function(t){return e.setState({categoryIcon:t.value})}}),r.a.createElement(i.a,{onClick:this.submit,type:"submit",busy:a,label:l("MODAL.ADD"),size:"large",extension:"full"}))))}}]),t}(),A=Object(b.a)(Object(d.c)()(Object(l.withMutations)()(S)));function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?D(e):t}(this,j(t).call(this,e))).toggleCategoryModal=n.toggleCategoryModal.bind(D(D(n))),n.state={categoryToAdd:"",openCategoryModal:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,o["Component"]),function(e,t,n){t&&k(e.prototype,t),n&&k(e,n)}(t,[{key:"toggleCategoryModal",value:function(){this.setState({openCategoryModal:!this.state.openCategoryModal})}},{key:"render",value:function(){var e=this,t=this.state.openCategoryModal,n=this.props.t;return r.a.createElement(i.l,null,r.a.createElement(A,{openCategoryModal:this.state.openCategoryModal,toggleModal:this.toggleCategoryModal}),r.a.createElement(i.i,null,r.a.createElement("div",{className:"c-nav-action"},r.a.createElement(i.j,null,r.a.createElement("div",{className:"c-nav-link",onClick:function(){return e.setState({openCategoryModal:!t})}},r.a.createElement(u.a,{className:"c-nav-icon",icon:"plus"}),r.a.createElement(i.k,null,n("SIDEBAR.ADD_CATEGORY"))))),r.a.createElement(l.Query,{query:c.c},function(e){var t=e.data;return"loaded"!==e.fetchStatus?r.a.createElement(s.a,{size:"xxlarge",middle:!0}):t.map(function(e){return r.a.createElement(i.j,{key:e.id},r.a.createElement(a.a,{to:"/category/".concat(e.id),className:"c-nav-link",activeClassName:"is-active"},r.a.createElement(u.a,{className:"c-nav-icon",icon:e.icon}),r.a.createElement(i.k,null,e.name)))})})))}}]),t}();t.a=Object(d.c)()(M)},LiWt:function(e,t,n){"use strict";n.r(t);n("/kYV");var o,r=n("q1tI"),a=n.n(r),i=n("SH7X"),l=n.n(i),c=n("i8i4"),u=n("XOpu"),s=n("2E0U"),d=function(e,t){return/^\{\{\.[a-zA-Z]*\}\}$/.test(e)?t:e};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("[role=application]").dataset,t=d(e.cozyIconPath,n("ZAKO")),r=d(e.cozyAppNamePrefix||n("pZg0").name_prefix,""),f=d(e.cozyAppName,n("pZg0").name);o=d(e.cozyLocale,"en");var p=window.location?window.location.protocol:"https:",b=new l.a({uri:"".concat(p,"//").concat(e.cozyDomain),token:e.cozyToken,schema:{passwords:{doctype:s.b},categories:{doctype:s.a}}});cozy.bar.init({appName:f,appNamePrefix:r,iconPath:t,lang:o,replaceTitleOnMobile:!0}),function(e){var t=n("xYwX").default;Object(c.render)(a.a.createElement(u.b,{lang:o,dictRequire:function(e){return n("/KVF")("./".concat(e))}},a.a.createElement(i.CozyProvider,{client:e},a.a.createElement(t,null))),document.querySelector("[role=application]"))}(b)})},Uedh:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("XOpu"),i=n("tcSi"),l=n("IP2g");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,d(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){var e=this.props.t;return r.a.createElement(i.a,null,r.a.createElement(i.f,null,e("HOMEPAGE.TITLE")),r.a.createElement(i.d,null,r.a.createElement(i.c,null,r.a.createElement(l.a,{icon:"key",color:"#a75bcb",className:"home-icon"}),r.a.createElement(i.e,null,e("HOMEPAGE.PASSWORD.TITLE")),r.a.createElement(i.b,null,e("HOMEPAGE.PASSWORD.DESCRIPTION"))),r.a.createElement(i.c,null,r.a.createElement(l.a,{icon:"lock",color:"#2d8af2",className:"home-icon"}),r.a.createElement(i.e,null,e("HOMEPAGE.SECURE.TITLE")),r.a.createElement(i.b,null,e("HOMEPAGE.SECURE.DESCRIPTION")))))}}]),t}();t.a=Object(a.c)()(p)},ZAKO:function(e,t){e.exports="/img/icon.987172dfb4476e75424507f2fb3cb962.svg"},nLkc:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("q1tI"),r=n.n(o),a=n("+FsC"),i=n("uNOt"),l=n("SH7X"),c=n("2E0U");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,f(t).call(this,e))).state={passwordId:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["Component"]),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(){return{passwordId:e.props.match.params.id}})}},{key:"render",value:function(){var e=this;return r.a.createElement(l.Query,{query:function(t){return t.find(c.b).where({_id:e.props.match.params.id})}},function(e){var t=e.data;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(i.a,{to:"/category/".concat(e.categoryId),className:"unstyled-link"},r.a.createElement(a.a,{theme:"secondary",label:"Back"})),r.a.createElement(a.f,null,e.website),r.a.createElement(a.m,null,e.description),r.a.createElement(a.n,null,e.value))}))})}}]),t}()},nY3O:function(e,t,n){var o={"./_lib/build_formatting_tokens_reg_exp/index":"kOWh","./ar/build_distance_in_words_locale/index":"XxX6","./ar/build_format_locale/index":"alis","./ar/index":"EDRf","./bg/build_distance_in_words_locale/index":"7K3h","./bg/build_format_locale/index":"RrdL","./bg/index":"isx8","./ca/build_distance_in_words_locale/index":"wqqj","./ca/build_format_locale/index":"qcV0","./ca/index":"Vwa+","./cs/build_distance_in_words_locale/index":"ZKDM","./cs/build_format_locale/index":"ipyF","./cs/index":"dvhP","./da/build_distance_in_words_locale/index":"2Mgc","./da/build_format_locale/index":"Gned","./da/index":"7ur/","./de/build_distance_in_words_locale/index":"5IWf","./de/build_format_locale/index":"THCn","./de/index":"bgw5","./el/build_distance_in_words_locale/index":"o/GB","./el/build_format_locale/index":"8T9h","./el/index":"dH0v","./en/build_distance_in_words_locale/index":"LZbM","./en/build_format_locale/index":"6DAA","./en/index":"Us+F","./eo/build_distance_in_words_locale/index":"qrnn","./eo/build_format_locale/index":"Bl15","./eo/index":"UB7v","./es/build_distance_in_words_locale/index":"GEfZ","./es/build_format_locale/index":"O+zC","./es/index":"/S0t","./fi/build_distance_in_words_locale/index":"VHtQ","./fi/build_format_locale/index":"Oydx","./fi/index":"ndVD","./fil/build_distance_in_words_locale/index":"uq4p","./fil/build_format_locale/index":"d7hw","./fil/index":"pNfm","./fr/build_distance_in_words_locale/index":"IzMR","./fr/build_format_locale/index":"I3Zg","./fr/index":"LKA2","./hr/build_distance_in_words_locale/index":"DPvn","./hr/build_format_locale/index":"puw3","./hr/index":"L9Jq","./hu/build_distance_in_words_locale/index":"w2RQ","./hu/build_format_locale/index":"/0iD","./hu/index":"Nm+E","./id/build_distance_in_words_locale/index":"JbvB","./id/build_format_locale/index":"0wlw","./id/index":"A6C3","./is/build_distance_in_words_locale/index":"qzMC","./is/build_format_locale/index":"S3yD","./is/index":"N4bE","./it/build_distance_in_words_locale/index":"MDEp","./it/build_format_locale/index":"aUJd","./it/index":"hmb4","./ja/build_distance_in_words_locale/index":"nNvt","./ja/build_format_locale/index":"buui","./ja/index":"uAXs","./ko/build_distance_in_words_locale/index":"oEw+","./ko/build_format_locale/index":"9SQf","./ko/index":"iW8+","./mk/build_distance_in_words_locale/index":"nmwZ","./mk/build_format_locale/index":"htxJ","./mk/index":"GzBU","./nb/build_distance_in_words_locale/index":"SL1f","./nb/build_format_locale/index":"CJ5F","./nb/index":"73vv","./nl/build_distance_in_words_locale/index":"Uyu0","./nl/build_format_locale/index":"doCD","./nl/index":"hCQt","./pl/build_distance_in_words_locale/index":"FUBD","./pl/build_format_locale/index":"nOYf","./pl/index":"B6yL","./pt/build_distance_in_words_locale/index":"aTPA","./pt/build_format_locale/index":"TTT0","./pt/index":"gdks","./ro/build_distance_in_words_locale/index":"gI+A","./ro/build_format_locale/index":"njjO","./ro/index":"r2yp","./ru/build_distance_in_words_locale/index":"KmPx","./ru/build_format_locale/index":"UUBw","./ru/index":"nz/o","./sk/build_distance_in_words_locale/index":"q2Bs","./sk/build_format_locale/index":"9sxn","./sk/index":"Wqan","./sl/build_distance_in_words_locale/index":"mlv2","./sl/build_format_locale/index":"vHkZ","./sl/index":"KYSo","./sv/build_distance_in_words_locale/index":"UNBN","./sv/build_format_locale/index":"zTNB","./sv/index":"hxgj","./th/build_distance_in_words_locale/index":"XAGa","./th/build_format_locale/index":"We2s","./th/index":"Pk+z","./tr/build_distance_in_words_locale/index":"aFZF","./tr/build_format_locale/index":"jh7A","./tr/index":"3ZWG","./zh_cn/build_distance_in_words_locale/index":"KdB7","./zh_cn/build_format_locale/index":"l4EP","./zh_cn/index":"8tMq","./zh_tw/build_distance_in_words_locale/index":"vyyr","./zh_tw/build_format_locale/index":"uYH7","./zh_tw/index":"QPlQ"};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="nY3O"},pZg0:function(e,t){e.exports={name:"Passwords",slug:"cozy-passwords",icon:"icon.svg",categories:[],version:"0.1.0",licence:"AGPL-3.0",editor:"",source:"https://github.com/yeppao/cozy-passwords.git@build",developer:{name:"yeppao",url:"https://github.com/yeppao"},routes:{"/":{folder:"/",index:"index.html",public:!1}},permissions:{apps:{description:"Required by the cozy-bar to display the icons of the apps",type:"io.cozy.apps",verbs:["GET"]},todos:{description:"Mocks test",type:"io.mocks.todos",verbs:["GET","POST","PUT","DELETE"]},categories:{description:"Categories",type:"io.cozy.passwords.categories",verbs:["GET","POST","PUT","DELETE"]},passwords:{description:"Passwords",type:"io.cozy.passwords.values",verbs:["GET","POST","PUT","DELETE"]}}}},qEav:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("SH7X"),i=n("2E0U"),l=n("+FsC"),c=n("uNOt"),u=n("IP2g"),s=n("o0o1"),d=n.n(s),f=n("XOpu");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,o,r,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(o,r)}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){v(e,t,n[t])})}return e}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(w(w(n=function(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?w(e):t}(this,_(t).call(this,e)))),"handlePasswordChange",function(e){var t=y({},n.state.password);t.value=e.target.value,n.setState({password:t})}),v(w(w(n)),"handleWebsiteChange",function(e){var t=y({},n.state.password);t.website=e.target.value,n.setState({password:t})}),v(w(w(n)),"handlePasswordDescriptionChange",function(e){var t=y({},n.state.password);t.description=e.target.value,n.setState({password:t})}),v(w(w(n)),"handleSubmit",function(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var a=e.apply(t,n);function i(e){b(a,o,r,i,l,"next",e)}function l(e){b(a,o,r,i,l,"throw",e)}i(void 0)})}}(d.a.mark(function e(){var t,o,r,a,l,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,o=t.password,r=t.categoryId,a=n.props,l=a.createDocument,c=a.togglePasswordModal,o.category=r,n.setState(function(){return{password:{website:"",description:"",value:"",categoryId:null},isWorking:!0}}),e.next=6,l(i.b,o);case 6:n.setState(function(){return{isWorking:!1}}),c();case 8:case"end":return e.stop()}},e,this)}))),n.state={categoryId:null,passwordDescription:"",passwordToAdd:"",passwordWebsite:"",isWorking:!1,openPasswordModal:!0,password:{website:"",description:"",value:"",categoryId:null}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState({openPasswordModal:e.openPasswordModal,categoryId:e.categoryId});var n=this.props.client;e.passwordId&&n.query(n.get(i.b,e.passwordId)).then(function(e){var n=e.data;n.value="",t.setState({password:n})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.openPasswordModal,o=t.password,a=t.isWorking,i=this.props.t;return n&&r.a.createElement(l.g,{into:"body",closable:!0,dismissAction:function(){return e.props.togglePasswordModal()}},r.a.createElement(l.h,null,r.a.createElement("div",null,r.a.createElement("h2",null,i("CATEGORY_MODAL.ADD_PASSWORD_LABEL")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(l.e,{htmlFor:"website-input"},i("CATEGORY_MODAL.WEBSITE_LABEL")),r.a.createElement(l.d,{value:o.website,onChange:this.handleWebsiteChange,id:"website-input",fullwidth:!0}),r.a.createElement(l.e,{htmlFor:"password-input"},i("CATEGORY_MODAL.PASSWORD_LABEL")),r.a.createElement(l.d,{type:"password",value:o.value,onChange:this.handlePasswordChange,id:"password-input",fullwidth:!0}),r.a.createElement(l.e,{htmlFor:"description-input"},i("CATEGORY_MODAL.DESCRIPTION_LABEL")),r.a.createElement(l.d,{value:o.description,onChange:this.handlePasswordDescriptionChange,id:"description-input"}),r.a.createElement(l.a,{onClick:this.submit,type:"submit",busy:a,label:i("MODAL.ADD"),size:"large",extension:"full"})))))}}]),t}(),g=Object(a.withClient)(Object(a.withMutations)()(Object(f.c)()(E)));function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return C});var C=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?A(e):t}(this,P(t).call(this,e))).togglePasswordModal=n.togglePasswordModal.bind(A(A(n))),n.state={categoryId:null,passwords:[],isWorking:!1,openPasswordModal:!1,passwordId:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o["Component"]),function(e,t,n){t&&x(e.prototype,t),n&&x(e,n)}(t,[{key:"togglePasswordModal",value:function(){this.setState({openPasswordModal:!this.state.openPasswordModal})}},{key:"componentDidMount",value:function(){this.setState({categoryId:this.props.match.params.id})}},{key:"componentWillReceiveProps",value:function(e){this.setState({categoryId:e.match.params.id})}},{key:"editPassword",value:function(e){this.setState({passwordId:e,openPasswordModal:!0})}},{key:"render",value:function(){var e=this,t=this.state,n=t.openPasswordModal,o=t.passwordId,s=t.categoryId;return r.a.createElement("div",null,r.a.createElement(g,{openPasswordModal:n,categoryId:s,passwordId:o,togglePasswordModal:this.togglePasswordModal}),r.a.createElement(l.a,{label:"Add a password",icon:r.a.createElement(u.a,{icon:"plus"}),onClick:function(){return e.setState({openPasswordModal:!n})}}),r.a.createElement(a.Query,{query:function(t){return t.find(i.b).where({category:e.props.match.params.id})}},function(t){var n=t.data;return r.a.createElement("div",null,n.map(function(t){return r.a.createElement("div",{className:"password",key:t.id},r.a.createElement("div",null,r.a.createElement(c.a,{key:t.id,to:"/password/".concat(t.id),className:"unstyled-link"},r.a.createElement("div",null,t.website),r.a.createElement(l.b,null,t.description))),r.a.createElement("div",null,r.a.createElement(c.a,{key:t.id,to:"/password/".concat(t.id),className:"unstyled-link"},"●●●●●●")),r.a.createElement("div",null,r.a.createElement(u.a,{icon:"edit",onClick:function(){return e.editPassword(t.id)}})))}))}))}}]),t}()},xYwX:function(e,t,n){"use strict";n.r(t),function(e){var o=n("q1tI"),r=n.n(o),a=n("0cfB"),i=n("IN8/"),l=n("jKe7"),c=n("2INN"),u=n("mf+E"),s=n("e2oC"),d=n("7O5W"),f=n("wHSu"),p=n("AeLu"),b=n("Uedh"),y=n("qEav"),m=n("nLkc");d.b.add(f.g,f.a,f.e,f.c,f.b,f.j,f.f,f.k,f.h,f.i,f.d);t.default=Object(a.hot)(e)(function(){return r.a.createElement(i.a,null,r.a.createElement(s.b,null,r.a.createElement(p.a,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{className:"app-content"},r.a.createElement(l.a,null,r.a.createElement(c.a,{path:"/home",component:b.a}),r.a.createElement(c.a,{path:"/category/:id",component:y.a}),r.a.createElement(c.a,{path:"/password/:id",component:m.a}),r.a.createElement(u.a,{from:"/",to:"/home"}),r.a.createElement(u.a,{from:"*",to:"/home"}))))))})}.call(this,n("3UD+")(e))}});