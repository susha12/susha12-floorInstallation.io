window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&h[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return!1===r?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+y.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):c(i=(e+" "+g.join(r+" ")+r).split(" "),t,n)}var s,u,f={},p=t.documentElement,d=t.createElement("modernizr"),h=d.style,m=" -webkit- -moz- -o- -ms- ".split(" "),v="Webkit Moz O ms",y=v.split(" "),g=v.toLowerCase().split(" "),b={},E=[],j=E.slice,C={}.hasOwnProperty;for(var S in u=o(C,"undefined")||o(C.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),b.opacity=function(){return function(e,t){r(m.join(e+";")+(t||""))}("opacity:.55"),/^0.55$/.test(h.opacity)},b.csstransforms=function(){return!!l("transform")},b)u(b,S)&&(s=S.toLowerCase(),f[s]=b[S](),E.push((f[s]?"":"no-")+s));return f.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,p.className+=" "+(t?"":"no-")+e,f[e]=t}return f},r(""),d=null,function(e,t){function n(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=d[e[f]];return t||(t={},p++,e[f]=p,d[p]=t),t}function o(e,n,o){return n||(n=t),c?n.createElement(e):(o||(o=r(n)),(i=o.cache[e]?o.cache[e].cloneNode():u.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren&&!s.test(e)?o.frag.appendChild(i):i);var i}function i(e){e||(e=t);var i=r(e);return h.shivCSS&&!a&&!i.hasCSS&&(i.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return h.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(h,t.frag)}(e,i),e}var a,c,l=e.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",p=0,d={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){a=!0,c=!0}}();var h={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==l.shivCSS,supportsUnknownElements:c,shivMethods:!1!==l.shivMethods,type:"default",shivDocument:i,createElement:o,createDocumentFragment:function(e,o){if(e||(e=t),c)return e.createDocumentFragment();for(var i=(o=o||r(e)).frag.cloneNode(),a=0,l=n(),s=l.length;a<s;a++)i.createElement(l[a]);return i}};e.html5=h,i(t)}(this,t),f._version="2.6.2",f._prefixes=m,f._domPrefixes=g,f._cssomPrefixes=y,f.testProp=function(e){return a([e])},f.testAllProps=l,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+E.join(" "),f}(0,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();g=1,e?e.t?h((function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)}),0):(e(),c()):g=0}function l(e,n,r,o,i,l,s){function u(t){if(!d&&a(f.readyState)&&(b.r=d=1,!g&&c(),f.onload=f.onreadystatechange=null,t))for(var r in"img"!=e&&h((function(){j.removeChild(f)}),50),F[n])F[n].hasOwnProperty(r)&&F[n][r].onload()}s=s||p.errorTimeout;var f=t.createElement(e),d=0,v=0,b={t:r,s:n,e:i,a:l,x:s};1===F[n]&&(v=1,F[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},y.splice(o,0,b),"img"!=e&&(v||2===F[n]?(j.insertBefore(f,E?null:m),h(u,s)):F[n].push(f))}function s(e,t,n,r,i){return g=0,t=t||"j",o(e)?l("c"==t?S:C,e,t,this.i++,n,r,i):(y.splice(this.i++,0,e),1==y.length&&c()),this}function u(){var e=p;return e.loader={load:s,i:0},e}var f,p,d=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,b="MozAppearance"in d.style,E=b&&!!t.createRange().compareNode,j=E?d:m.parentNode,C=(d=e.opera&&"[object Opera]"==v.call(e.opera),d=!!t.attachEvent&&!d,b?"object":d?"script":"img"),S=d?"script":C,w=Array.isArray||function(e){return"[object Array]"==v.call(e)},x=[],F={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(p=function(e){function t(e,t,n,o,i){var a=function(e){e=e.split("!");var t,n,r,o=x.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)r=e[n].split("="),(t=N[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=x[n](i);return i}(e),c=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(t&&(t=r(t)?t:t[e]||t[o]||t[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,t,n,o,i):(F[a.url]?a.noexec=!0:F[a.url]=1,n.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":undefined,a.noexec,a.attrs,a.timeout),(r(t)||r(c))&&n.load((function(){u(),t&&t(a.origUrl,i,o),c&&c(a.origUrl,i,o),F[a.url]=2}))))}function n(e,n){function a(e,i){if(e){if(o(e))i||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),t(e,f,n,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!i&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[l])),t(e[l],f,n,l,s))}else!i&&d()}var c,l,s=!!e.test,u=e.load||e.both,f=e.callback||i,p=f,d=e.complete||i;a(s?e.yep:e.nope,!!u),u&&a(u)}var a,c,l=this.yepnope.loader;if(o(e))t(e,0,l,0);else if(w(e))for(a=0;a<e.length;a++)o(c=e[a])?t(c,0,l,0):w(c)?p(c):Object(c)===c&&n(c,l);else Object(e)===e&&n(e,l)}).addPrefix=function(e,t){N[e]=t},p.addFilter=function(e){x.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,d=t.createElement("script");o=o||p.errorTimeout;for(f in d.src=e,r)d.setAttribute(f,r[f]);n=s?c:n||i,d.onreadystatechange=d.onload=function(){!u&&a(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},h((function(){u||(u=1,n(1))}),o),l?d.onload():m.parentNode.insertBefore(d,m)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s;o=t.createElement("link"),n=l?c:n||i;for(s in o.href=e,o.rel="stylesheet",o.type="text/css",r)o.setAttribute(s,r[s]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};