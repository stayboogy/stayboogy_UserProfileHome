(window.webpackJsonpBolt4=window.webpackJsonpBolt4||[]).push([[5],{106:function(e,t,n){(function(t){var n="[object Map]",r="[object Set]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^\[object .+?Constructor\]$/,f=/^0o[0-7]+$/i,c=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",l="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",g="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",y="(?:"+l+"|"+g+")"+"?",b="[\\ufe0e\\ufe0f]?"+y+("(?:\\u200d(?:"+[d,v,p].join("|")+")[\\ufe0e\\ufe0f]?"+y+")*"),w="(?:"+[d+l+"?",l,v,p,s].join("|")+")",m=RegExp(g+"(?="+g+")|"+w+b,"g"),h=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O=parseInt,j="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,D=j||S||Function("return this")();function P(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(t,(function(t){return e[t]}))}function E(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function k(e){return function(e){return h.test(e)}(e)?function(e){return e.match(m)||[]}(e):function(e){return e.split("")}(e)}var T,I,C,N=Function.prototype,H=Object.prototype,L=D["__core-js_shared__"],$=(T=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",_=N.toString,M=H.hasOwnProperty,R=H.toString,B=RegExp("^"+_.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=D.Symbol,x=F?F.iterator:void 0,V=H.propertyIsEnumerable,G=Math.floor,U=(I=Object.keys,C=Object,function(e){return I(C(e))}),W=Math.random,J=ue(D,"DataView"),Y=ue(D,"Map"),z=ue(D,"Promise"),q=ue(D,"Set"),K=ue(D,"WeakMap"),Q=ce(J),X=ce(Y),Z=ce(z),ee=ce(q),te=ce(K);function ne(e,t){var n=le(e)||function(e){return function(e){return pe(e)&&ge(e)}(e)&&M.call(e,"callee")&&(!V.call(e,"callee")||"[object Arguments]"==R.call(e))}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,o=!!r;for(var i in e)!t&&!M.call(e,i)||o&&("length"==i||fe(i,r))||n.push(i);return n}function re(e){return!(!ve(e)||function(e){return!!$&&$ in e}(e))&&(de(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?B:a).test(ce(e))}function oe(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||H,t!==r)return U(e);var t,n,r,o=[];for(var i in Object(e))M.call(e,i)&&"constructor"!=i&&o.push(i);return o}function ie(e,t){return e+G(W()*(t-e+1))}function ue(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return re(n)?n:void 0}var ae=function(e){return R.call(e)};function fe(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||c.test(e))&&e>-1&&e%1==0&&e<t}function ce(e){if(null!=e){try{return _.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function se(e,t,a){var c,s,l,g=-1,d=function(e){if(!e)return[];if(ge(e))return function(e){return"string"==typeof e||!le(e)&&pe(e)&&"[object String]"==R.call(e)}(e)?k(e):function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e);if(x&&e[x])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[x]());var t=ae(e);return(t==n?E:t==r?A:ye)(e)}(e),v=d.length,p=v-1;for((a?function(e,t,n){if(!ve(n))return!1;var r=typeof t;return!!("number"==r?ge(n)&&fe(t,n.length):"string"==r&&t in n)&&function(e,t){return e===t||e!=e&&t!=t}(n[t],e)}(e,t,a):void 0===t)?t=1:(c=function(e){var t=function(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==R.call(e)}(e))return NaN;if(ve(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ve(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||f.test(e)?O(e.slice(2),n?2:8):i.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}(t),s=0,l=v,c==c&&(void 0!==l&&(c=c<=l?c:l),void 0!==s&&(c=c>=s?c:s)),t=c);++g<t;){var y=ie(g,p),b=d[y];d[y]=d[g],d[g]=b}return d.length=t,d}(J&&"[object DataView]"!=ae(new J(new ArrayBuffer(1)))||Y&&ae(new Y)!=n||z&&"[object Promise]"!=ae(z.resolve())||q&&ae(new q)!=r||K&&"[object WeakMap]"!=ae(new K))&&(ae=function(e){var t=R.call(e),o="[object Object]"==t?e.constructor:void 0,i=o?ce(o):void 0;if(i)switch(i){case Q:return"[object DataView]";case X:return n;case Z:return"[object Promise]";case ee:return r;case te:return"[object WeakMap]"}return t});var le=Array.isArray;function ge(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!de(e)}function de(e){var t=ve(e)?R.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function ve(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function pe(e){return!!e&&"object"==typeof e}function ye(e){return e?P(e,function(e){return ge(e)?ne(e):oe(e)}(e)):[]}e.exports=function(e){return se(e,4294967295)}}).call(this,n(96))},112:function(e,t,n){"use strict";n.r(t);n(89);var r=n(87),o=n(88),i=n(95),u=n(86),a=n(30);function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===c(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function l(e){f(1,arguments);var t=s(e);return t.setHours(0,0,0,0),t}function g(e,t){f(2,arguments);var n=l(e),r=l(t);return n.getTime()===r.getTime()}function d(e){return f(1,arguments),g(e,Date.now())}function v(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var p={};function y(){return p}function b(e,t){var n,r,o,i,u,a,c,l;f(1,arguments);var g=y(),d=v(null!==(n=null!==(r=null!==(o=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(u=t.locale)||void 0===u||null===(a=u.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==o?o:g.weekStartsOn)&&void 0!==r?r:null===(c=g.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=s(e),b=p.getDay(),w=(b<d?7:0)+b-d;return p.setDate(p.getDate()-w),p.setHours(0,0,0,0),p}function w(e,t,n){f(2,arguments);var r=b(e,n),o=b(t,n);return r.getTime()===o.getTime()}function m(e,t){return f(1,arguments),w(e,Date.now(),t)}var h=n(106),O=n.n(h);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"shufflePlaylist",(function(){return E}));var P=new a.a("GLOBAL-PLAYLIST-HELPER"),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";if("all"!==t){var n=[];if("today"===t)n=e.filter((function(e){return d(new Date(Date.parse(e.createdAt)))})),P.debug("TODAY VIDEOS:",n);else{if("this_week"!==t)return e;n=e.filter((function(e){return m(new Date(Date.parse(e.createdAt)))})),P.debug("THIS WEEK VIDEOS:",n)}if(n.length>0){n=O()(n),P.debug("SHUFFLED VIDEOS:",n);var r=e.filter((function(e){return!n.find((function(t){return t.videoId===e.videoId}))})),o=n.concat(r);return P.debug("MODIFIED PLAYLIST:",o),o}return e}return O()(e)};t.default={configure:function(e,t){for(var n in e.configurePlaylistTime=Date.now(),t.settings)t.settings.hasOwnProperty(n)&&void 0===e.config.settings[n]&&("defaultHD"===n?e.config.settings.defaultHd=t.settings[n]:e.config.settings[n]=t.settings[n]);return t.settings&&P.debug("Create embed settings from playlist settings",t.settings),e.config.playlist=t.settings.shuffleType?E(t.playlist,t.settings.shuffleType):t.playlist,void 0===e.config.settings.advertising&&t.advertising&&(e.config.settings.advertising="true"===t.advertising.on?"on":"off",P.debug("Embed advertising settings from playlist settings:",e.config.settings.advertising)),e.config.playlist},loadPlaylistVideo:function(e,t,n){var a=n.embed,f=a.config.playlist[t].config;if(null===f)return P.error("Cannot load playlist video config (URL null)"),n._showError("Invalid configuration file"),n.iframeReadyCallback.call(null,n),null;P.info("Load playlist video",{url:f});Object(i.a)({url:f,method:"get",timestamp:Date.now()}).then((function(e){var t=e.data,i=e.countryCode;if(a.loadPlaylistTime=Date.now(),t){var f,c="string"==typeof t?JSON.parse(t):t,s=Object(u.g)("boltCC");for(var l in s?i=s:window.Bolt.userCountryCode||"string"==typeof i&&2===i.trim().length||(i="US"),window.Bolt.userCountryCode=i,null!==(f=c.advertising)&&void 0!==f&&f.servers&&(c.advertising.servers=o.a.getSingleAdServerFromServers(c.advertising.servers,c.publisherType)),window.pageOSLoaded.then((function(){var e,t;r.a.sendGDPRInfoToPageOS(null===(e=c.advertising)||void 0===e||null===(t=e.servers[0])||void 0===t?void 0:t.tags,i,a.config.id)})),c.advertising&&window.BoltAdBlockDetector.detected&&(c.advertising.on=!1),a.config.video=c,a.config=S(S({},c),a.config),a.config.appearance=c.settings.appearance,Object(u.a)(a.config.video.settings.appearance),n._applyOverrides(a.config.video),a.config.video.settings.hasOwnProperty("defaultHD")&&(a.config.video.settings.defaultHd=a.config.video.settings.defaultHD,delete a.config.video.settings.defaultHD),P.info("Playlist video config",c),a.config.video.settings)a.config.video.settings.hasOwnProperty(l)&&"title"!==l&&"minAge"!==l&&"poster"!==l&&"loop"!==l&&"appearance"!==l&&void 0===a.config.settings[l]&&(a.config.settings[l]=a.config.video.settings[l]);void 0!==a.config.video.settings.minAge&&a.config.video.settings.minAge>0||n._showPoster(a.config.video.content.poster,a.renderer.container),n.jsonConfig=a.config,a.userSegmentationData=r.a.saveUserSegmentationData(a.id,n.jsonConfig),r.a.setup(n)}}))}}}}]);