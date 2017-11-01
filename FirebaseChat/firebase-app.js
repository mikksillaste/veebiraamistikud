/*! @license Firebase v4.5.0
Build: rev-f49c8b5
Terms: https://firebase.google.com/terms/ */

var firebase=function(){var e=void 0===e?self:e;return function(t){function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var r=e.webpackJsonpFirebase;e.webpackJsonpFirebase=function(e,o,c){for(var s,a,u,f=0,l=[];f<e.length;f++)a=e[f],i[a]&&l.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(r&&r(e,o,c);l.length;)l.shift()();if(c)for(f=0;f<c.length;f++)u=n(n.s=c[f]);return u};var o={},i={4:0};return n.e=function(e){function t(){s.onerror=s.onload=null,clearTimeout(a);var t=i[e];0!==t&&(t&&t[1](Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var r=i[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var o=new Promise(function(t,n){r=i[e]=[t,n]});r[2]=o;var c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,n.nc&&s.setAttribute("nonce",n.nc),s.src=n.p+""+e+".js";var a=setTimeout(t,12e4);return s.onerror=s.onload=t,c.appendChild(s),o},n.m=t,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e},n(n.s=9)}({24:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r="FirebaseError",o=Error.captureStackTrace,i=function(){function e(e,t){if(this.code=e,this.message=t,o)o(this,c.prototype.create);else{var n=Error.apply(this,arguments);this.name=r,Object.defineProperty(this,"stack",{get:function(){return n.stack}})}}return e}();i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.name=r;var c=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n,this.pattern=/\{\$([^}]+)}/g}return e.prototype.create=function(e,t){void 0===t&&(t={});var n,r=this.errors[e],o=this.service+"/"+e;n=void 0===r?"Error":r.replace(this.pattern,function(e,n){var r=t[n];return void 0!==r?""+r:"<"+n+"?>"}),n=this.serviceName+": "+n+" ("+o+").";var c=new i(o,n);for(var s in t)t.hasOwnProperty(s)&&"_"!==s.slice(-1)&&(c[s]=t[s]);return c},e}()},3:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return c});var r=n(32),o=r.a.Promise||n(57),i=function(){function e(){var e=this;this.resolve=null,this.reject=null,this.promise=new o(function(t,n){e.resolve=t,e.reject=n})}return e.prototype.wrapCallback=function(e){function t(t,r){t?n.reject(t):n.resolve(r),"function"==typeof e&&(c(n.promise),1===e.length?e(t):e(t,r))}var n=this;return t},e}(),c=function(e){e.catch(function(){})}},31:function(e,t,n){"use strict";function r(e,t){var n=new a(e,t);return n.subscribe.bind(n)}function o(e,t){if("object"!==(void 0===e?"undefined":s(e))||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}function i(){}t.a=r;var c=n(3),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=c.b.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}return e.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},e.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},e.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},e.prototype.subscribe=function(e,t,n){var r,c=this;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");r=o(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=i),void 0===r.error&&(r.error=i),void 0===r.complete&&(r.complete=i);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{c.finalError?r.error(c.finalError):r.complete()}catch(e){}}),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},e}()},32:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var r;if(void 0!==e)r=e;else if("undefined"!=typeof self)r=self;else try{r=Function("return this")()}catch(e){throw Error("polyfill failed because global object is unavailable in this environment")}var o=r}).call(t,n(33))},33:function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof e&&(r=e)}t.exports=r},34:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function c(){v&&h&&(v=!1,h.length?d=h.concat(d):m=-1,d.length&&s())}function s(){if(!v){var e=o(c);v=!0;for(var t=d.length;t;){for(h=d,d=[];++m<t;)h&&h[m].run();m=-1,t=d.length}h=null,v=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function u(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var h,d=[],v=!1,m=-1;p.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new a(e,t)),1!==d.length||v||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw Error("process.chdir is not supported")},p.umask=function(){return 0}},35:function(e,t,n){"use strict";function r(e){return o(void 0,e)}function o(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=o(e[r],t[r]));return e}function i(e,t,n){e[t]=n}t.a=r,t.b=o,t.c=i},56:function(e,t){Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=t[o];if(e.call(r,i,o,t))return o;o++}return-1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],o=0;o<n;){var i=t[o];if(e.call(r,i,o,t))return i;o++}}})},57:function(e,t,n){(function(t){!function(n){function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this.t=0,this.r=!1,this.u=void 0,this.f=[],l(e,this)}function c(e,t){for(;3===e.t;)e=e.u;if(0===e.t)return void e.f.push(t);e.r=!0,i.h(function(){var n=1===e.t?t.onFulfilled:t.onRejected;if(null===n)return void(1===e.t?s:a)(t.promise,e.u);var r;try{r=n(e.u)}catch(e){return void a(t.promise,e)}s(t.promise,r)})}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e.t=3,e.u=t,void u(e);if("function"==typeof n)return void l(o(n,t),e)}e.t=1,e.u=t,u(e)}catch(t){a(e,t)}}function a(e,t){e.t=2,e.u=t,u(e)}function u(e){2===e.t&&0===e.f.length&&i.h(function(){e.r||i.v(e.u)});for(var t=0,n=e.f.length;t<n;t++)c(e,e.f[t]);e.f=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}var p=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return c(this,new f(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var s=c.then;if("function"==typeof s)return void s.call(c,function(e){r(i,e)},n)}t[i]=c,0==--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i.h="function"==typeof t&&function(e){t(e)}||function(e){p(e,0)},i.v=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i.y=function(e){i.h=e},i._=function(e){i.v=e},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(58).setImmediate)},58:function(t,n,r){function o(e,t){this.g=e,this.T=t}var i=Function.prototype.apply;n.setTimeout=function(){return new o(i.call(setTimeout,e,arguments),clearTimeout)},n.setInterval=function(){return new o(i.call(setInterval,e,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this.T.call(e,this.g)},n.enroll=function(e,t){clearTimeout(e.w),e.O=t},n.unenroll=function(e){clearTimeout(e.w),e.O=-1},n.j=n.active=function(e){clearTimeout(e.w);var t=e.O;t>=0&&(e.w=setTimeout(function(){e.A&&e.A()},t))},r(59),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},59:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[a]=r,s(a),a++}function o(e){delete u[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function c(e){if(f)setTimeout(c,0,e);else{var t=u[e];if(t){f=!0;try{i(t)}finally{o(e),f=!1}}}}if(!e.setImmediate){var s,a=1,u={},f=!1,l=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){c(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){c(e.data)},s=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;s=function(t){var n=l.createElement("script");n.onreadystatechange=function(){c(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(c,0,e)}}(),p.setImmediate=r,p.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(33),n(34))},9:function(e,t,n){"use strict";function r(){function e(e){v(y[e],"delete"),delete y[e]}function t(e){return e=e||f,u(y,e)||o("no-app",{name:e}),y[e]}function n(e,t){void 0===t?t=f:"string"==typeof t&&""!==t||o("bad-app-name",{name:t+""}),u(y,t)&&o("duplicate-app",{name:t});var n=new p(e,t,g);return y[t]=n,v(n,"create"),n}function l(){return Object.keys(y).map(function(e){return y[e]})}function h(e,n,r,i,c){b[e]&&o("duplicate-service",{name:e}),b[e]=n,i&&(_[e]=i,l().forEach(function(e){i("create",e)}));var s=function(n){return void 0===n&&(n=t()),"function"!=typeof n[e]&&o("invalid-app-argument",{name:e}),n[e]()};return void 0!==r&&Object(a.b)(s,r),g[e]=s,p.prototype[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this.k.bind(this,e).apply(this,c?t:[])},s}function d(e){Object(a.b)(g,e)}function v(e,t){Object.keys(b).forEach(function(n){var r=m(e,n);null!==r&&_[r]&&_[r](t,e)})}function m(e,t){if("serverAuth"===t)return null;var n=t;return e.options,n}var y={},b={},_={},g={__esModule:!0,initializeApp:n,app:t,apps:null,Promise:s.b,SDK_VERSION:"4.5.0",INTERNAL:{registerService:h,createFirebaseNamespace:r,extendNamespace:d,createSubscribe:i.a,ErrorFactory:c.a,removeApp:e,factories:b,useAsService:m,Promise:s.b,deepExtend:a.b}};return Object(a.c)(g,"default",g),Object.defineProperty(g,"apps",{get:l}),Object(a.c)(t,"App",p),g}function o(e,t){throw d.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var i=(n(56),n(31)),c=n(24),s=n(3),a=n(35),u=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f="[DEFAULT]",l=[],p=function(){function e(e,t,n){this.I=n,this.F=!1,this.N={},this.x=t,this.P=Object(a.a)(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return s.b.resolve(null)},addAuthTokenListener:function(e){l.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){l=l.filter(function(t){return t!==e})}}}return Object.defineProperty(e.prototype,"name",{get:function(){return this.L(),this.x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.L(),this.P},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new s.b(function(t){e.L(),t()}).then(function(){e.I.INTERNAL.removeApp(e.x);var t=[];return Object.keys(e.N).forEach(function(n){Object.keys(e.N[n]).forEach(function(r){t.push(e.N[n][r])})}),s.b.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.F=!0,e.N={}})},e.prototype.k=function(e,t){if(void 0===t&&(t=f),this.L(),this.N[e]||(this.N[e]={}),!this.N[e][t]){var n=t!==f?t:void 0,r=this.I.INTERNAL.factories[e](this,this.extendApp.bind(this),n);this.N[e][t]=r}return this.N[e][t]},e.prototype.extendApp=function(e){var t=this;Object(a.b)(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(l.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),l=[])},e.prototype.L=function(){this.F&&o("app-deleted",{name:this.x})},e}();p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc");var h={"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."},d=new c.a("app","Firebase",h),v=r();t.default=v}})}().default;
//# sourceMappingURL=firebase-app.js.map