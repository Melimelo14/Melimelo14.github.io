(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9583)}])},9583:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(317),n(9796),n(8592),n(9432),n(4871),n(7294);var o=n(4304);function i(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Wi,{trackPageViews:!0,gaMeasurementId:"G-S1DD2Z5TF0"}),(0,r.jsx)(t,{...n})]})}},9796:function(){},317:function(){},8592:function(){},9432:function(){},4871:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c=[],f=!1,l=-1;function s(){f&&r&&(f=!1,r.length?c=r.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=a(s);f=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||f||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},1163:function(e,t,n){e.exports=n(6036)},4298:function(e,t,n){e.exports=n(69)},1462:function(e,t,n){"use strict";var r=n(3454);Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=n(655),i=o.__importDefault(n(7294)),u=o.__importDefault(n(4298)),a=n(8816);t.GoogleAnalytics=function({debugMode:e=!1,gaMeasurementId:t,gtagUrl:n="https://www.googletagmanager.com/gtag/js",strategy:o="afterInteractive",defaultConsent:c="granted",trackPageViews:f,nonce:l}){var s;let d=null!==(s=r.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)&&void 0!==s?s:t;return((0,a.usePageViews)({gaMeasurementId:d,ignoreHashChange:"object"==typeof f&&(null==f?void 0:f.ignoreHashChange),disabled:!f}),d)?i.default.createElement(i.default.Fragment,null,i.default.createElement(u.default,{src:`${n}?id=${d}`,strategy:o}),i.default.createElement(u.default,{id:"nextjs-google-analytics",nonce:l},`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${"denied"===c?`gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });`:""}
            gtag('config', '${d}', {
              page_path: window.location.pathname,
              ${e?`debug_mode: ${e},`:""}
            });
          `)):null}},7270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;var r=n(1462);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}})},8816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePageViews=t.usePagesViews=void 0;var r=n(7015);Object.defineProperty(t,"usePagesViews",{enumerable:!0,get:function(){return r.usePagesViews}});var o=n(9412);Object.defineProperty(t,"usePageViews",{enumerable:!0,get:function(){return o.usePageViews}})},9412:function(e,t,n){"use strict";var r=n(3454);Object.defineProperty(t,"__esModule",{value:!0}),t.usePageViews=void 0;let o=n(7294),i=n(1163),u=n(8396);t.usePageViews=function({gaMeasurementId:e,ignoreHashChange:t,disabled:n}={}){(0,o.useEffect)(()=>{if(n)return;let o=t=>{var n;let o=null!==(n=r.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)&&void 0!==n?n:e;(0,u.pageView)({path:t.toString()},o)};return i.Router.events.on("routeChangeComplete",o),t||i.Router.events.on("hashChangeComplete",o),()=>{i.Router.events.off("routeChangeComplete",o),t||i.Router.events.off("hashChangeComplete",o)}},[i.Router.events,e,t])}},7015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePagesViews=void 0;let r=n(9412);t.usePagesViews=function(e){console.warn("Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"),(0,r.usePageViews)(e)}},4304:function(e,t,n){"use strict";t.B=t.Wi=void 0;var r=n(7270);Object.defineProperty(t,"Wi",{enumerable:!0,get:function(){return r.GoogleAnalytics}}),n(8816);var o=n(8396);Object.defineProperty(t,"B",{enumerable:!0,get:function(){return o.event}})},5146:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.consent=void 0,t.consent=function({arg:e,params:t}){window.gtag&&window.gtag("consent",e,t)}},9633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.event=void 0;let r=n(655);t.event=function(e,t={}){var{category:n,label:o,value:i,nonInteraction:u,userId:a}=t,c=r.__rest(t,["category","label","value","nonInteraction","userId"]);if(!window.gtag)return;let f=Object.assign({},c);void 0!==n&&(f.event_category=n),void 0!==o&&(f.event_label=o),void 0!==i&&(f.value=i),void 0!==u&&(f.non_interaction=u),void 0!==a&&(f.user_id=a),window.gtag("event",e,f)}},8396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.consent=t.event=t.pageView=void 0;var r=n(3371);Object.defineProperty(t,"pageView",{enumerable:!0,get:function(){return r.pageView}});var o=n(9633);Object.defineProperty(t,"event",{enumerable:!0,get:function(){return o.event}});var i=n(5146);Object.defineProperty(t,"consent",{enumerable:!0,get:function(){return i.consent}})},3371:function(e,t,n){"use strict";var r=n(3454);Object.defineProperty(t,"__esModule",{value:!0}),t.pageView=void 0,t.pageView=function({title:e,location:t,path:n,sendPageView:o,userId:i}={},u){var a;let c=null!==(a=r.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)&&void 0!==a?a:u;if(!c||!window.gtag)return;let f={};void 0!==e&&(f.page_title=e),void 0!==t&&(f.page_location=t),void 0!==n&&(f.page_path=n),void 0!==o&&(f.send_page_view=o),void 0!==i&&(f.user_id=i),window.gtag("config",c,f)}},655:function(e,t,n){"use strict";n.r(t),n.d(t,{__assign:function(){return i},__asyncDelegator:function(){return m},__asyncGenerator:function(){return w},__asyncValues:function(){return P},__await:function(){return b},__awaiter:function(){return l},__classPrivateFieldGet:function(){return x},__classPrivateFieldIn:function(){return V},__classPrivateFieldSet:function(){return S},__createBinding:function(){return d},__decorate:function(){return a},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return s},__importDefault:function(){return E},__importStar:function(){return T},__makeTemplateObject:function(){return j},__metadata:function(){return f},__param:function(){return c},__read:function(){return y},__rest:function(){return u},__spread:function(){return g},__spreadArray:function(){return h},__spreadArrays:function(){return _},__values:function(){return v}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u}function c(e,t){return function(n,r){t(n,r,e)}}function f(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(u,a)}c((r=r.apply(e,t||[])).next())})}function s(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r}function h(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||a(e,t)})})}function a(e,t){try{var n;(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,f):l(i[0][2],n)}catch(e){l(i[0][3],e)}}function c(e){a("next",e)}function f(e){a("throw",e)}function l(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function m(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,o,(t=e[n](t)).done,t.value)})}}}function j(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return O(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function x(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function S(e,t,n,r,o){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function V(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6036)}),_N_E=e.O()}]);