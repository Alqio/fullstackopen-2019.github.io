(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{157:function(e,t,n){var r=n(22).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(14)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},243:function(e,t,n){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}var o=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function a(e){console.warn("[react-ga]",e)}var i="REDACTED (Potential Email Address)";function c(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(a("This arg looks like an email address, redacting."),i):t?r(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(o)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var l=function(e){var t,n,r,o,a,i,c,l="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?l=e.gaAddress:e&&e.debug&&(l="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=l,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)};function u(e){console.info("[react-ga]",e)}var s=[],f={calls:s,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];s.push(t.concat())},resetCalls:function(){s.length=0}},g=n(0),p=n.n(g),y=n(4),b=n.n(y);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k="_blank",A=1,S=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=m(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==d(o)&&"function"!=typeof o?O(r):o,j(O(O(n)),"handleClick",function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,c=r.onClick,l={label:a},u=o!==k,s=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===A);u&&s?(e.preventDefault(),t.trackLink(l,function(){window.location.href=i})):t.trackLink(l,function(){}),c&&c(e)}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,g["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({},v(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===k&&(n.rel="noopener noreferrer"),delete n.eventLabel,p.a.createElement("a",n)}}])&&h(n.prototype,r),o&&h(n,o),t}();function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}j(S,"trackLink",function(){a("ga tracking not enabled")}),j(S,"propTypes",{eventLabel:b.a.string.isRequired,target:b.a.string,to:b.a.string,onClick:b.a.func}),j(S,"defaultProps",{target:null,to:null,onClick:null});var q=!1,P=!0,L=!1,N=!0,D=function(){var e;return L?f.ga.apply(f,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):a("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function I(e){return c(e,P)}function _(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"==typeof D){if("string"!=typeof o)return void a("ga command must be a string");!N&&Array.isArray(e)||D.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){D.apply(void 0,T(["".concat(e,".").concat(o)].concat(n.slice(1))))})}}function J(e,t){e?(t&&(t.debug&&!0===t.debug&&(q=!0),!1===t.titleCase&&(P=!1)),t&&t.gaOptions?D("create",e,t.gaOptions):D("create",e,"auto")):a("gaTrackingID is required in initialize()")}function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(D.apply(void 0,t),q&&(u("called ga('arguments');"),u("with arguments: ".concat(JSON.stringify(t))))),window.ga}function z(e,t){_(t,"send",e),q&&(u("called ga('send', fieldObject);"),u("with fieldObject: ".concat(JSON.stringify(e))),u("with trackers: ".concat(JSON.stringify(t))))}var R={require:function(e,t){if(e){var n=r(e);if(""!==n)if(t){if("object"!==C(t))return void a("Expected `options` arg to be an Object");0===Object.keys(t).length&&a("Empty `options` given to .require()"),F("require",n,t),q&&u("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else F("require",n),q&&u("called ga('require', '".concat(n,"');"));else a("`name` cannot be an empty string in .require()")}else a("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)a("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)a("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(F(o,r,n),q&&(u("called ga('".concat(o,"');")),u('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(F(o,n),q&&(u("called ga('".concat(o,"');")),u("with payload: ".concat(JSON.stringify(n))))):(F(o),q&&u("called ga('".concat(o,"');")))}}};function G(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:I(e.label)},o=!1,i=setTimeout(function(){o=!0,t()},250);r.hitCallback=function(){clearTimeout(i),o||t()},z(r,n)}else a("args.label is required in outboundLink()");else a("hitCallback function is required")}S.origTrackLink=S.trackLink,S.trackLink=G;var K=S;t.a={initialize:function(e,t){if(t&&!0===t.testMode)L=!0;else{if("undefined"==typeof window)return!1;t&&!0===t.standardImplementation||l(t)}return N=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===C(e)?J(e.trackingId,e):a("All configs must be an object")}):J(e,t),!0},ga:F,set:function(e,t){e?"object"===C(e)?(0===Object.keys(e).length&&a("empty `fieldsObject` given to .set()"),_(t,"set",e),q&&(u("called ga('set', fieldsObject);"),u("with fieldsObject: ".concat(JSON.stringify(e))))):a("Expected `fieldsObject` arg to be an Object"):a("`fieldsObject` is required in .set()")},send:z,pageview:function(e,t,n){if(e){var o=r(e);if(""!==o){var i={};if(n&&(i.title=n),_(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){x(e,t,n[t])})}return e}({hitType:"pageview",page:o},i)),q){u("called ga('send', 'pageview', path);");var c="";n&&(c=" and title: ".concat(n)),u("with path: ".concat(o).concat(c))}}else a("path cannot be an empty string in .pageview()")}else a("path is required in .pageview()")},modalview:function(e,t){if(e){var n,o="/"===(n=r(e)).substring(0,1)?n.substring(1):n;if(""!==o){var i="/modal/".concat(o);_(t,"send","pageview",i),q&&(u("called ga('send', 'pageview', path);"),u("with path: ".concat(i)))}else a("modalName cannot be an empty string or a single / in .modalview()")}else a("modalName is required in .modalview(modalName)")},timing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var c={hitType:"timing",timingCategory:I(t),timingVar:I(n),timingValue:r};o&&(c.timingLabel=I(o)),z(c,i)}else a("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,c=e.transport,l=E(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:I(t),eventAction:I(n)};r&&(s.eventLabel=I(r)),void 0!==o&&("number"!=typeof o?a("Expected `args.value` arg to be a Number."):s.eventValue=o),void 0!==i&&("boolean"!=typeof i?a("`args.nonInteraction` must be a boolean."):s.nonInteraction=i),void 0!==c&&("string"!=typeof c?a("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(c)&&a("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=c)),Object.keys(l).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){s[e]=l[e]}),Object.keys(l).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){s[e]=l[e]}),z(s,u)}else a("args.category AND args.action are required in event()")},exception:function(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=I(n)),void 0!==r&&("boolean"!=typeof r?a("`args.fatal` must be a boolean."):o.exFatal=r),z(o,t)},plugin:R,outboundLink:G,OutboundLink:K,testModeAPI:f}},379:function(e,t,n){"use strict";var r=n(17),o=n(21),a=n(30),i=n(72),c=n(73),l=n(33),u=n(548),s=n(74);o(o.S+o.F*!n(75)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,f,g=a(e),p="function"==typeof this?this:Array,y=arguments.length,b=y>1?arguments[1]:void 0,d=void 0!==b,v=0,h=s(g);if(d&&(b=r(b,y>2?arguments[2]:void 0,2)),null==h||p==Array&&c(h))for(n=new p(t=l(g.length));t>v;v++)u(n,v,d?b(g[v],v):g[v]);else for(f=h.call(g),n=new p;!(o=f.next()).done;v++)u(n,v,d?i(f,b,[o.value,v],!0):o.value);return n.length=v,n}})},548:function(e,t,n){"use strict";var r=n(22),o=n(47);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},552:function(e,t,n){var r=n(272)("kebabCase",n(553),n(298));r.placeholder=n(244),e.exports=r},553:function(e,t,n){var r=n(375)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r}}]);
//# sourceMappingURL=16-f76a9afd505a3edfe5ab.js.map