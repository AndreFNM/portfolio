(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{789:(t,e)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case c:case h:case s:case o:case a:case p:return t;default:switch(t=t&&t.$$typeof){case u:case d:case y:case m:case l:return t;default:return e}}case n:return e}}}function S(t){return w(t)===h}e.AsyncMode=c,e.ConcurrentMode=h,e.ContextConsumer=u,e.ContextProvider=l,e.Element=i,e.ForwardRef=d,e.Fragment=s,e.Lazy=y,e.Memo=m,e.Portal=n,e.Profiler=o,e.StrictMode=a,e.Suspense=p,e.isAsyncMode=function(t){return S(t)||w(t)===c},e.isConcurrentMode=S,e.isContextConsumer=function(t){return w(t)===u},e.isContextProvider=function(t){return w(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return w(t)===d},e.isFragment=function(t){return w(t)===s},e.isLazy=function(t){return w(t)===y},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===n},e.isProfiler=function(t){return w(t)===o},e.isStrictMode=function(t){return w(t)===a},e.isSuspense=function(t){return w(t)===p},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===h||t===o||t===a||t===p||t===f||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===l||t.$$typeof===u||t.$$typeof===d||t.$$typeof===v||t.$$typeof===b||t.$$typeof===x||t.$$typeof===g)},e.typeOf=w},1026:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=r(4232);function n(t,e){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let t=r.current;t&&(r.current=null,t());let e=n.current;e&&(n.current=null,e())}else t&&(r.current=s(t,i)),e&&(n.current=s(e,i))},[t,e])}function s(t,e){if("function"!=typeof t)return t.current=e,()=>{t.current=null};{let r=t(e);return"function"==typeof r?r:()=>t(null)}}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2439:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return x}});let i=r(4252),n=r(8365),s=r(7876),a=n._(r(4232)),o=i._(r(8477)),l=i._(r(9836)),u=r(4915),c=r(6904),h=r(72);r(546);let d=r(8265),p=i._(r(3829)),f=r(1026),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(t,e,r,i,n,s,a){let o=null==t?void 0:t.src;t&&t["data-loaded-src"]!==o&&(t["data-loaded-src"]=o,("decode"in t?t.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("empty"!==e&&n(!0),null==r?void 0:r.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let i=!1,n=!1;r.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,e.preventDefault()},stopPropagation:()=>{n=!0,e.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(t)}}))}function g(t){return a.use?{fetchPriority:t}:{fetchpriority:t}}let v=(0,a.forwardRef)((t,e)=>{let{src:r,srcSet:i,sizes:n,height:o,width:l,decoding:u,className:c,style:h,fetchPriority:d,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:x,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:P,sizesInput:T,onLoad:A,onError:E,...C}=t,M=(0,a.useCallback)(t=>{t&&(E&&(t.src=t.src),t.complete&&y(t,p,x,w,S,v,T))},[r,p,x,w,S,E,v,T]),k=(0,f.useMergedRef)(e,M);return(0,s.jsx)("img",{...C,...g(d),loading:m,width:l,height:o,decoding:u,"data-nimg":b?"fill":"1",className:c,style:h,sizes:n,srcSet:i,src:r,ref:k,onLoad:t=>{y(t.currentTarget,p,x,w,S,v,T)},onError:t=>{P(!0),"empty"!==p&&S(!0),E&&E(t)}})});function b(t){let{isAppRouter:e,imgAttributes:r}=t,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return e&&o.default.preload?(o.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,a.forwardRef)((t,e)=>{let r=(0,a.useContext)(d.RouterContext),i=(0,a.useContext)(h.ImageConfigContext),n=(0,a.useMemo)(()=>{var t;let e=m||i||c.imageConfigDefault,r=[...e.deviceSizes,...e.imageSizes].sort((t,e)=>t-e),n=e.deviceSizes.sort((t,e)=>t-e),s=null==(t=e.qualities)?void 0:t.sort((t,e)=>t-e);return{...e,allSizes:r,deviceSizes:n,qualities:s}},[i]),{onLoad:o,onLoadingComplete:l}=t,f=(0,a.useRef)(o);(0,a.useEffect)(()=>{f.current=o},[o]);let y=(0,a.useRef)(l);(0,a.useEffect)(()=>{y.current=l},[l]);let[g,x]=(0,a.useState)(!1),[w,S]=(0,a.useState)(!1),{props:P,meta:T}=(0,u.getImgProps)(t,{defaultLoader:p.default,imgConf:n,blurComplete:g,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...P,unoptimized:T.unoptimized,placeholder:T.placeholder,fill:T.fill,onLoadRef:f,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:S,sizesInput:t.sizes,ref:e}),T.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},3520:(t,e,r)=>{"use strict";var i=r(7225),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(t){return i.isMemo(t)?a:o[t.$$typeof]||n}o[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[i.Memo]=a;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;t.exports=function t(e,r,i){if("string"!=typeof r){if(f){var n=p(r);n&&n!==f&&t(e,n,i)}var a=c(r);h&&(a=a.concat(h(r)));for(var o=l(e),m=l(r),y=0;y<a.length;++y){var g=a[y];if(!s[g]&&!(i&&i[g])&&!(m&&m[g])&&!(o&&o[g])){var v=d(r,g);try{u(e,g,v)}catch(t){}}}}return e}},3620:(t,e,r)=>{"use strict";r.d(e,{k5:()=>c});var i=r(4232),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=i.createContext&&i.createContext(n),a=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){var i,n,s;i=t,n=e,s=r[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(n))in i?Object.defineProperty(i,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function c(t){return e=>i.createElement(h,o({attr:u({},t.attr)},e),function t(e){return e&&e.map((e,r)=>i.createElement(e.tag,u({key:r},e.attr),t(e.child)))}(t.child))}function h(t){var e=e=>{var r,{attr:n,size:s,title:l}=t,c=function(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;r[i]=t[i]}return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}(t,a),h=s||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,c,{className:r,style:u(u({color:t.color||e.color},e.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),t.children)};return void 0!==s?i.createElement(s.Consumer,null,t=>e(t)):e(n)}},3657:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),!function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{default:function(){return l},getImageProps:function(){return o}});let i=r(4252),n=r(4915),s=r(2439),a=i._(r(3829));function o(t){let{props:e}=(0,n.getImgProps)(t,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}}let l=s.Image},3829:(t,e)=>{"use strict";function r(t){var e;let{config:r,src:i,width:n,quality:s}=t,a=s||(null==(e=r.qualities)?void 0:e.reduce((t,e)=>Math.abs(e-75)<Math.abs(t-75)?e:t))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+a+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},3916:(t,e,r)=>{"use strict";let i;function n(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}function s(t){let e=[{},{}];return t?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function a(t,e,r,i){if("function"==typeof e){let[n,a]=s(i);e=e(void 0!==r?r:t.custom,n,a)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){let[n,a]=s(i);e=e(void 0!==r?r:t.custom,n,a)}return e}function o(t,e,r){let i=t.getProps();return a(i,e,void 0!==r?r:i.custom,t)}function l(t,e){return t?.[e]??t?.default??t}r.d(e,{P:()=>sA});let u=t=>t,c={},h=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],d={value:null,addProjectionMetrics:null};function p(t,e){let r=!1,i=!0,n={delta:0,timestamp:0,isProcessing:!1},s=()=>r=!0,a=h.reduce((t,r)=>(t[r]=function(t,e){let r=new Set,i=new Set,n=!1,s=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1},l=0;function u(e){a.has(e)&&(c.schedule(e),t()),l++,e(o)}let c={schedule:(t,e=!1,s=!1)=>{let o=s&&n?r:i;return e&&a.add(t),o.has(t)||o.add(t),t},cancel:t=>{i.delete(t),a.delete(t)},process:t=>{if(o=t,n){s=!0;return}n=!0,[r,i]=[i,r],r.forEach(u),e&&d.value&&d.value.frameloop[e].push(l),l=0,r.clear(),n=!1,s&&(s=!1,c.process(t))}};return c}(s,e?r:void 0),t),{}),{setup:o,read:l,resolveKeyframes:u,preUpdate:p,update:f,preRender:m,render:y,postRender:g}=a,v=()=>{let s=c.useManualTiming?n.timestamp:performance.now();r=!1,c.useManualTiming||(n.delta=i?1e3/60:Math.max(Math.min(s-n.timestamp,40),1)),n.timestamp=s,n.isProcessing=!0,o.process(n),l.process(n),u.process(n),p.process(n),f.process(n),m.process(n),y.process(n),g.process(n),n.isProcessing=!1,r&&e&&(i=!1,t(v))},b=()=>{r=!0,i=!0,n.isProcessing||t(v)};return{schedule:h.reduce((t,e)=>{let i=a[e];return t[e]=(t,e=!1,n=!1)=>(r||b(),i.schedule(t,e,n)),t},{}),cancel:t=>{for(let e=0;e<h.length;e++)a[h[e]].cancel(t)},state:n,steps:a}}let{schedule:f,cancel:m,state:y,steps:g}=p("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:u,!0),v=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],b=new Set(v),x=new Set(["width","height","top","left","right","bottom",...v]);function w(t,e){-1===t.indexOf(e)&&t.push(e)}function S(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}class P{constructor(){this.subscriptions=[]}add(t){return w(this.subscriptions,t),()=>S(this.subscriptions,t)}notify(t,e,r){let i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](t,e,r);else for(let n=0;n<i;n++){let i=this.subscriptions[n];i&&i(t,e,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function T(){i=void 0}let A={now:()=>(void 0===i&&A.set(y.isProcessing||c.useManualTiming?y.timestamp:performance.now()),i),set:t=>{i=t,queueMicrotask(T)}},E=t=>!isNaN(parseFloat(t)),C={current:void 0};class M{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{let r=A.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let t of this.dependents)t.dirty();e&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=A.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=E(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new P);let r=this.events[t].add(e);return"change"===t?()=>{r(),f.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,r){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return C.current&&C.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var t;let e=A.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;let r=Math.min(this.updatedAt-this.prevUpdatedAt,30);return t=parseFloat(this.current)-parseFloat(this.prevFrameValue),r?1e3/r*t:0}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function k(t,e){return new M(t,e)}let V=t=>Array.isArray(t),j=t=>!!(t&&t.getVelocity);function D(t,e){let r=t.getValue("willChange");if(j(r)&&r.add)return r.add(e);if(!r&&c.WillChange){let r=new c.WillChange("auto");t.addValue("willChange",r),r.add(e)}}let R=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),O="data-"+R("framerAppearId"),F=(t,e)=>r=>e(t(r)),L=(...t)=>t.reduce(F),$=(t,e,r)=>r>e?e:r<t?t:r,B=t=>1e3*t,I=t=>t/1e3,_={layout:0,mainThread:0,waapi:0},N=()=>{},z=()=>{},U=t=>e=>"string"==typeof e&&e.startsWith(t),Y=U("--"),W=U("var(--"),X=t=>!!W(t)&&H.test(t.split("/*")[0].trim()),H=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,G={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},q={...G,transform:t=>$(0,1,t)},K={...G,default:1},Z=t=>Math.round(1e5*t)/1e5,J=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,Q=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,tt=(t,e)=>r=>!!("string"==typeof r&&Q.test(r)&&r.startsWith(t)||e&&null!=r&&Object.prototype.hasOwnProperty.call(r,e)),te=(t,e,r)=>i=>{if("string"!=typeof i)return i;let[n,s,a,o]=i.match(J);return{[t]:parseFloat(n),[e]:parseFloat(s),[r]:parseFloat(a),alpha:void 0!==o?parseFloat(o):1}},tr=t=>$(0,255,t),ti={...G,transform:t=>Math.round(tr(t))},tn={test:tt("rgb","red"),parse:te("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:i=1})=>"rgba("+ti.transform(t)+", "+ti.transform(e)+", "+ti.transform(r)+", "+Z(q.transform(i))+")"},ts={test:tt("#"),parse:function(t){let e="",r="",i="",n="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),i=t.substring(5,7),n=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),i=t.substring(3,4),n=t.substring(4,5),e+=e,r+=r,i+=i,n+=n),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(i,16),alpha:n?parseInt(n,16)/255:1}},transform:tn.transform},ta=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),to=ta("deg"),tl=ta("%"),tu=ta("px"),tc=ta("vh"),th=ta("vw"),td={...tl,parse:t=>tl.parse(t)/100,transform:t=>tl.transform(100*t)},tp={test:tt("hsl","hue"),parse:te("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:i=1})=>"hsla("+Math.round(t)+", "+tl.transform(Z(e))+", "+tl.transform(Z(r))+", "+Z(q.transform(i))+")"},tf={test:t=>tn.test(t)||ts.test(t)||tp.test(t),parse:t=>tn.test(t)?tn.parse(t):tp.test(t)?tp.parse(t):ts.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?tn.transform(t):tp.transform(t)},tm=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ty="number",tg="color",tv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function tb(t){let e=t.toString(),r=[],i={color:[],number:[],var:[]},n=[],s=0,a=e.replace(tv,t=>(tf.test(t)?(i.color.push(s),n.push(tg),r.push(tf.parse(t))):t.startsWith("var(")?(i.var.push(s),n.push("var"),r.push(t)):(i.number.push(s),n.push(ty),r.push(parseFloat(t))),++s,"${}")).split("${}");return{values:r,split:a,indexes:i,types:n}}function tx(t){return tb(t).values}function tw(t){let{split:e,types:r}=tb(t),i=e.length;return t=>{let n="";for(let s=0;s<i;s++)if(n+=e[s],void 0!==t[s]){let e=r[s];e===ty?n+=Z(t[s]):e===tg?n+=tf.transform(t[s]):n+=t[s]}return n}}let tS=t=>"number"==typeof t?0:t,tP={test:function(t){return isNaN(t)&&"string"==typeof t&&(t.match(J)?.length||0)+(t.match(tm)?.length||0)>0},parse:tx,createTransformer:tw,getAnimatableNone:function(t){let e=tx(t);return tw(t)(e.map(tS))}};function tT(t,e,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(e-t)*6*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function tA(t,e){return r=>r>0?e:t}let tE=(t,e,r)=>t+(e-t)*r,tC=(t,e,r)=>{let i=t*t,n=r*(e*e-i)+i;return n<0?0:Math.sqrt(n)},tM=[ts,tn,tp],tk=t=>tM.find(e=>e.test(t));function tV(t){let e=tk(t);if(N(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`),!e)return!1;let r=e.parse(t);return e===tp&&(r=function({hue:t,saturation:e,lightness:r,alpha:i}){t/=360,r/=100;let n=0,s=0,a=0;if(e/=100){let i=r<.5?r*(1+e):r+e-r*e,o=2*r-i;n=tT(o,i,t+1/3),s=tT(o,i,t),a=tT(o,i,t-1/3)}else n=s=a=r;return{red:Math.round(255*n),green:Math.round(255*s),blue:Math.round(255*a),alpha:i}}(r)),r}let tj=(t,e)=>{let r=tV(t),i=tV(e);if(!r||!i)return tA(t,e);let n={...r};return t=>(n.red=tC(r.red,i.red,t),n.green=tC(r.green,i.green,t),n.blue=tC(r.blue,i.blue,t),n.alpha=tE(r.alpha,i.alpha,t),tn.transform(n))},tD=new Set(["none","hidden"]);function tR(t,e){return r=>tE(t,e,r)}function tO(t){return"number"==typeof t?tR:"string"==typeof t?X(t)?tA:tf.test(t)?tj:t$:Array.isArray(t)?tF:"object"==typeof t?tf.test(t)?tj:tL:tA}function tF(t,e){let r=[...t],i=r.length,n=t.map((t,r)=>tO(t)(t,e[r]));return t=>{for(let e=0;e<i;e++)r[e]=n[e](t);return r}}function tL(t,e){let r={...t,...e},i={};for(let n in r)void 0!==t[n]&&void 0!==e[n]&&(i[n]=tO(t[n])(t[n],e[n]));return t=>{for(let e in i)r[e]=i[e](t);return r}}let t$=(t,e)=>{let r=tP.createTransformer(e),i=tb(t),n=tb(e);return i.indexes.var.length===n.indexes.var.length&&i.indexes.color.length===n.indexes.color.length&&i.indexes.number.length>=n.indexes.number.length?tD.has(t)&&!n.values.length||tD.has(e)&&!i.values.length?function(t,e){return tD.has(t)?r=>r<=0?t:e:r=>r>=1?e:t}(t,e):L(tF(function(t,e){let r=[],i={color:0,var:0,number:0};for(let n=0;n<e.values.length;n++){let s=e.types[n],a=t.indexes[s][i[s]],o=t.values[a]??0;r[n]=o,i[s]++}return r}(i,n),n.values),r):(N(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),tA(t,e))};function tB(t,e,r){return"number"==typeof t&&"number"==typeof e&&"number"==typeof r?tE(t,e,r):tO(t)(t,e)}let tI=t=>{let e=({timestamp:e})=>t(e);return{start:(t=!0)=>f.update(e,t),stop:()=>m(e),now:()=>y.isProcessing?y.timestamp:A.now()}},t_=(t,e,r=10)=>{let i="",n=Math.max(Math.round(e/r),2);for(let e=0;e<n;e++)i+=t(e/(n-1))+", ";return`linear(${i.substring(0,i.length-2)})`};function tN(t){let e=0,r=t.next(e);for(;!r.done&&e<2e4;)e+=50,r=t.next(e);return e>=2e4?1/0:e}function tz(t,e,r){var i,n;let s=Math.max(e-5,0);return i=r-t(s),(n=e-s)?1e3/n*i:0}let tU={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function tY(t,e){return t*Math.sqrt(1-e*e)}let tW=["duration","bounce"],tX=["stiffness","damping","mass"];function tH(t,e){return e.some(e=>void 0!==t[e])}function tG(t=tU.visualDuration,e=tU.bounce){let r,i="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t,{restSpeed:n,restDelta:s}=i,a=i.keyframes[0],o=i.keyframes[i.keyframes.length-1],l={done:!1,value:a},{stiffness:u,damping:c,mass:h,duration:d,velocity:p,isResolvedFromDuration:f}=function(t){let e={velocity:tU.velocity,stiffness:tU.stiffness,damping:tU.damping,mass:tU.mass,isResolvedFromDuration:!1,...t};if(!tH(t,tX)&&tH(t,tW))if(t.visualDuration){let r=2*Math.PI/(1.2*t.visualDuration),i=r*r,n=2*$(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:tU.mass,stiffness:i,damping:n}}else{let r=function({duration:t=tU.duration,bounce:e=tU.bounce,velocity:r=tU.velocity,mass:i=tU.mass}){let n,s;N(t<=B(tU.maxDuration),"Spring duration must be 10 seconds or less");let a=1-e;a=$(tU.minDamping,tU.maxDamping,a),t=$(tU.minDuration,tU.maxDuration,I(t)),a<1?(n=e=>{let i=e*a,n=i*t;return .001-(i-r)/tY(e,a)*Math.exp(-n)},s=e=>{let i=e*a*t,s=Math.pow(a,2)*Math.pow(e,2)*t,o=Math.exp(-i),l=tY(Math.pow(e,2),a);return(i*r+r-s)*o*(-n(e)+.001>0?-1:1)/l}):(n=e=>-.001+Math.exp(-e*t)*((e-r)*t+1),s=e=>t*t*(r-e)*Math.exp(-e*t));let o=function(t,e,r){let i=r;for(let r=1;r<12;r++)i-=t(i)/e(i);return i}(n,s,5/t);if(t=B(t),isNaN(o))return{stiffness:tU.stiffness,damping:tU.damping,duration:t};{let e=Math.pow(o,2)*i;return{stiffness:e,damping:2*a*Math.sqrt(i*e),duration:t}}}(t);(e={...e,...r,mass:tU.mass}).isResolvedFromDuration=!0}return e}({...i,velocity:-I(i.velocity||0)}),m=p||0,y=c/(2*Math.sqrt(u*h)),g=o-a,v=I(Math.sqrt(u/h)),b=5>Math.abs(g);if(n||(n=b?tU.restSpeed.granular:tU.restSpeed.default),s||(s=b?tU.restDelta.granular:tU.restDelta.default),y<1){let t=tY(v,y);r=e=>o-Math.exp(-y*v*e)*((m+y*v*g)/t*Math.sin(t*e)+g*Math.cos(t*e))}else if(1===y)r=t=>o-Math.exp(-v*t)*(g+(m+v*g)*t);else{let t=v*Math.sqrt(y*y-1);r=e=>{let r=Math.exp(-y*v*e),i=Math.min(t*e,300);return o-r*((m+y*v*g)*Math.sinh(i)+t*g*Math.cosh(i))/t}}let x={calculatedDuration:f&&d||null,next:t=>{let e=r(t);if(f)l.done=t>=d;else{let i=0===t?m:0;y<1&&(i=0===t?B(m):tz(r,t,e));let a=Math.abs(o-e)<=s;l.done=Math.abs(i)<=n&&a}return l.value=l.done?o:e,l},toString:()=>{let t=Math.min(tN(x),2e4),e=t_(e=>x.next(t*e).value,t,30);return t+"ms "+e},toTransition:()=>{}};return x}function tq({keyframes:t,velocity:e=0,power:r=.8,timeConstant:i=325,bounceDamping:n=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:c}){let h,d,p=t[0],f={done:!1,value:p},m=t=>void 0!==o&&t<o||void 0!==l&&t>l,y=t=>void 0===o?l:void 0===l||Math.abs(o-t)<Math.abs(l-t)?o:l,g=r*e,v=p+g,b=void 0===a?v:a(v);b!==v&&(g=b-p);let x=t=>-g*Math.exp(-t/i),w=t=>b+x(t),S=t=>{let e=x(t),r=w(t);f.done=Math.abs(e)<=u,f.value=f.done?b:r},P=t=>{m(f.value)&&(h=t,d=tG({keyframes:[f.value,y(f.value)],velocity:tz(w,t,f.value),damping:n,stiffness:s,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:t=>{let e=!1;return(d||void 0!==h||(e=!0,S(t),P(t)),void 0!==h&&t>=h)?d.next(t-h):(e||S(t),f)}}}tG.applyToOptions=t=>{let e=function(t,e=100,r){let i=r({...t,keyframes:[0,e]}),n=Math.min(tN(i),2e4);return{type:"keyframes",ease:t=>i.next(n*t).value/e,duration:I(n)}}(t,100,tG);return t.ease=e.ease,t.duration=B(e.duration),t.type="keyframes",t};let tK=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t;function tZ(t,e,r,i){if(t===e&&r===i)return u;let n=e=>(function(t,e,r,i,n){let s,a,o=0;do(s=tK(a=e+(r-e)/2,i,n)-t)>0?r=a:e=a;while(Math.abs(s)>1e-7&&++o<12);return a})(e,0,1,t,r);return t=>0===t||1===t?t:tK(n(t),e,i)}let tJ=tZ(.42,0,1,1),tQ=tZ(0,0,.58,1),t0=tZ(.42,0,.58,1),t1=t=>Array.isArray(t)&&"number"!=typeof t[0],t3=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,t5=t=>e=>1-t(1-e),t2=tZ(.33,1.53,.69,.99),t4=t5(t2),t9=t3(t4),t6=t=>(t*=2)<1?.5*t4(t):.5*(2-Math.pow(2,-10*(t-1))),t7=t=>1-Math.sin(Math.acos(t)),t8=t5(t7),et=t3(t7),ee=t=>Array.isArray(t)&&"number"==typeof t[0],er={linear:u,easeIn:tJ,easeInOut:t0,easeOut:tQ,circIn:t7,circInOut:et,circOut:t8,backIn:t4,backInOut:t9,backOut:t2,anticipate:t6},ei=t=>"string"==typeof t,en=t=>{if(ee(t)){z(4===t.length,"Cubic bezier arrays must contain four numerical values.");let[e,r,i,n]=t;return tZ(e,r,i,n)}return ei(t)?(z(void 0!==er[t],`Invalid easing type '${t}'`),er[t]):t},es=(t,e,r)=>{let i=e-t;return 0===i?1:(r-t)/i};function ea({duration:t=300,keyframes:e,times:r,ease:i="easeInOut"}){var n;let s=t1(i)?i.map(en):en(i),a={done:!1,value:e[0]},o=function(t,e,{clamp:r=!0,ease:i,mixer:n}={}){let s=t.length;if(z(s===e.length,"Both input and output ranges must be the same length"),1===s)return()=>e[0];if(2===s&&e[0]===e[1])return()=>e[1];let a=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());let o=function(t,e,r){let i=[],n=r||c.mix||tB,s=t.length-1;for(let r=0;r<s;r++){let s=n(t[r],t[r+1]);e&&(s=L(Array.isArray(e)?e[r]||u:e,s)),i.push(s)}return i}(e,i,n),l=o.length,h=r=>{if(a&&r<t[0])return e[0];let i=0;if(l>1)for(;i<t.length-2&&!(r<t[i+1]);i++);let n=es(t[i],t[i+1],r);return o[i](n)};return r?e=>h($(t[0],t[s-1],e)):h}((n=r&&r.length===e.length?r:function(t){let e=[0];return!function(t,e){let r=t[t.length-1];for(let i=1;i<=e;i++){let n=es(0,e,i);t.push(tE(r,1,n))}}(e,t.length-1),e}(e),n.map(e=>e*t)),e,{ease:Array.isArray(s)?s:e.map(()=>s||t0).splice(0,e.length-1)});return{calculatedDuration:t,next:e=>(a.value=o(e),a.done=e>=t,a)}}let eo=t=>null!==t;function el(t,{repeat:e,repeatType:r="loop"},i,n=1){let s=t.filter(eo),a=n<0||e&&"loop"!==r&&e%2==1?0:s.length-1;return a&&void 0!==i?i:s[a]}let eu={decay:tq,inertia:tq,tween:ea,keyframes:ea,spring:tG};function ec(t){"string"==typeof t.type&&(t.type=eu[t.type])}class eh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}let ed=t=>t/100;class ep extends eh{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:t}=this.options;t&&t.updatedAt!==A.now()&&this.tick(A.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},_.mainThread++,this.options=t,this.initAnimation(),this.play(),!1===t.autoplay&&this.pause()}initAnimation(){let{options:t}=this;ec(t);let{type:e=ea,repeat:r=0,repeatDelay:i=0,repeatType:n,velocity:s=0}=t,{keyframes:a}=t,o=e||ea;o!==ea&&"number"!=typeof a[0]&&(this.mixKeyframes=L(ed,tB(a[0],a[1])),a=[0,100]);let l=o({...t,keyframes:a});"mirror"===n&&(this.mirroredGenerator=o({...t,keyframes:[...a].reverse(),velocity:-s})),null===l.calculatedDuration&&(l.calculatedDuration=tN(l));let{calculatedDuration:u}=l;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=l}updateTime(t){let e=Math.round(t-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){let{generator:r,totalDuration:i,mixKeyframes:n,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:o}=this;if(null===this.startTime)return r.next(0);let{delay:l=0,keyframes:u,repeat:c,repeatType:h,repeatDelay:d,type:p,onUpdate:f,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);let y=this.currentTime-l*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?y<0:y>i;this.currentTime=Math.max(y,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=i);let v=this.currentTime,b=r;if(c){let t=Math.min(this.currentTime,i)/a,e=Math.floor(t),r=t%1;!r&&t>=1&&(r=1),1===r&&e--,(e=Math.min(e,c+1))%2&&("reverse"===h?(r=1-r,d&&(r-=d/a)):"mirror"===h&&(b=s)),v=$(0,1,r)*a}let x=g?{done:!1,value:u[0]}:b.next(v);n&&(x.value=n(x.value));let{done:w}=x;g||null===o||(w=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);let S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&p!==tq&&(x.value=el(u,this.options,m,this.speed)),f&&f(x.value),S&&this.finish(),x}then(t,e){return this.finished.then(t,e)}get duration(){return I(this.calculatedDuration)}get time(){return I(this.currentTime)}set time(t){t=B(t),this.currentTime=t,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(A.now());let e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=I(this.currentTime))}play(){if(this.isStopped)return;let{driver:t=tI,startTime:e}=this.options;this.driver||(this.driver=t(t=>this.tick(t))),this.options.onPlay?.();let r=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=r):null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime||(this.startTime=e??r),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(A.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,_.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}let ef=t=>180*t/Math.PI,em=t=>eg(ef(Math.atan2(t[1],t[0]))),ey={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:em,rotateZ:em,skewX:t=>ef(Math.atan(t[1])),skewY:t=>ef(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},eg=t=>((t%=360)<0&&(t+=360),t),ev=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),eb=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ex={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ev,scaleY:eb,scale:t=>(ev(t)+eb(t))/2,rotateX:t=>eg(ef(Math.atan2(t[6],t[5]))),rotateY:t=>eg(ef(Math.atan2(-t[2],t[0]))),rotateZ:em,rotate:em,skewX:t=>ef(Math.atan(t[4])),skewY:t=>ef(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function ew(t){return+!!t.includes("scale")}function eS(t,e){let r,i;if(!t||"none"===t)return ew(e);let n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);if(n)r=ex,i=n;else{let e=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ey,i=e}if(!i)return ew(e);let s=r[e],a=i[1].split(",").map(eT);return"function"==typeof s?s(a):a[s]}let eP=(t,e)=>{let{transform:r="none"}=getComputedStyle(t);return eS(r,e)};function eT(t){return parseFloat(t.trim())}let eA=t=>t===G||t===tu,eE=new Set(["x","y","z"]),eC=v.filter(t=>!eE.has(t)),eM={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>eS(e,"x"),y:(t,{transform:e})=>eS(e,"y")};eM.translateX=eM.x,eM.translateY=eM.y;let ek=new Set,eV=!1,ej=!1,eD=!1;function eR(){if(ej){let t=Array.from(ek).filter(t=>t.needsMeasurement),e=new Set(t.map(t=>t.element)),r=new Map;e.forEach(t=>{let e=function(t){let e=[];return eC.forEach(r=>{let i=t.getValue(r);void 0!==i&&(e.push([r,i.get()]),i.set(+!!r.startsWith("scale")))}),e}(t);e.length&&(r.set(t,e),t.render())}),t.forEach(t=>t.measureInitialState()),e.forEach(t=>{t.render();let e=r.get(t);e&&e.forEach(([e,r])=>{t.getValue(e)?.set(r)})}),t.forEach(t=>t.measureEndState()),t.forEach(t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)})}ej=!1,eV=!1,ek.forEach(t=>t.complete(eD)),ek.clear()}function eO(){ek.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ej=!0)})}class eF{constructor(t,e,r,i,n,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=r,this.motionValue=i,this.element=n,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(ek.add(this),eV||(eV=!0,f.read(eO),f.resolveKeyframes(eR))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:t,name:e,element:r,motionValue:i}=this;if(null===t[0]){let n=i?.get(),s=t[t.length-1];if(void 0!==n)t[0]=n;else if(r&&e){let i=r.readValue(e,s);null!=i&&(t[0]=i)}void 0===t[0]&&(t[0]=s),i&&void 0===n&&i.set(t[0])}for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ek.delete(this)}cancel(){"scheduled"===this.state&&(ek.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}let eL=t=>t.startsWith("--");function e$(t){let e;return()=>(void 0===e&&(e=t()),e)}let eB=e$(()=>void 0!==window.ScrollTimeline),eI={},e_=function(t,e){let r=e$(t);return()=>eI[e]??r()}(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing"),eN=([t,e,r,i])=>`cubic-bezier(${t}, ${e}, ${r}, ${i})`,ez={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:eN([0,.65,.55,1]),circOut:eN([.55,0,1,.45]),backIn:eN([.31,.01,.66,-.59]),backOut:eN([.33,1.53,.69,.99])};function eU(t){return"function"==typeof t&&"applyToOptions"in t}class eY extends eh{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;let{element:e,name:r,keyframes:i,pseudoElement:n,allowFlatten:s=!1,finalKeyframe:a,onComplete:o}=t;this.isPseudoElement=!!n,this.allowFlatten=s,this.options=t,z("string"!=typeof t.type,'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?');let l=function({type:t,...e}){return eU(t)&&e_()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}(t);this.animation=function(t,e,r,{delay:i=0,duration:n=300,repeat:s=0,repeatType:a="loop",ease:o="easeOut",times:l}={},u){let c={[e]:r};l&&(c.offset=l);let h=function t(e,r){if(e)return"function"==typeof e?e_()?t_(e,r):"ease-out":ee(e)?eN(e):Array.isArray(e)?e.map(e=>t(e,r)||ez.easeOut):ez[e]}(o,n);Array.isArray(h)&&(c.easing=h),d.value&&_.waapi++;let p={delay:i,duration:n,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:"reverse"===a?"alternate":"normal"};u&&(p.pseudoElement=u);let f=t.animate(c,p);return d.value&&f.finished.finally(()=>{_.waapi--}),f}(e,r,i,l,n),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!n){let t=el(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(t):function(t,e,r){eL(e)?t.style.setProperty(e,r):t.style[e]=r}(e,r,t),this.animation.cancel()}o?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(t){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:t}=this;"idle"!==t&&"finished"!==t&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){return I(Number(this.animation.effect?.getComputedTiming?.().duration||0))}get time(){return I(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=B(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:e}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&eB())?(this.animation.timeline=t,u):e(this)}}let eW={anticipate:t6,backInOut:t9,circInOut:et};class eX extends eY{constructor(t){!function(t){"string"==typeof t.ease&&t.ease in eW&&(t.ease=eW[t.ease])}(t),ec(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){let{motionValue:e,onUpdate:r,onComplete:i,element:n,...s}=this.options;if(!e)return;if(void 0!==t)return void e.set(t);let a=new ep({...s,autoplay:!1}),o=B(this.finishedTime??this.time);e.setWithVelocity(a.sample(o-10).value,a.sample(o).value,10),a.stop()}}let eH=(t,e)=>"zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&(tP.test(t)||"0"===t)&&!t.startsWith("url("));function eG(t){return"object"==typeof t&&null!==t}function eq(t){return eG(t)&&"offsetHeight"in t}let eK=new Set(["opacity","clipPath","filter","transform"]),eZ=e$(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class eJ extends eh{constructor({autoplay:t=!0,delay:e=0,type:r="keyframes",repeat:i=0,repeatDelay:n=0,repeatType:s="loop",keyframes:a,name:o,motionValue:l,element:u,...c}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=A.now();let h={autoplay:t,delay:e,type:r,repeat:i,repeatDelay:n,repeatType:s,name:o,motionValue:l,element:u,...c},d=u?.KeyframeResolver||eF;this.keyframeResolver=new d(a,(t,e,r)=>this.onKeyframesResolved(t,e,h,!r),o,l,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,r,i){this.keyframeResolver=void 0;let{name:n,type:s,velocity:a,delay:o,isHandoff:l,onUpdate:h}=r;this.resolvedAt=A.now(),!function(t,e,r,i){let n=t[0];if(null===n)return!1;if("display"===e||"visibility"===e)return!0;let s=t[t.length-1],a=eH(n,e),o=eH(s,e);return N(a===o,`You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`),!!a&&!!o&&(function(t){let e=t[0];if(1===t.length)return!0;for(let r=0;r<t.length;r++)if(t[r]!==e)return!0}(t)||("spring"===r||eU(r))&&i)}(t,n,s,a)&&((c.instantAnimations||!o)&&h?.(el(t,r,e)),t[0]=t[t.length-1],r.duration=0,r.repeat=0);let d={startTime:i?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:e,...r,keyframes:t},p=!l&&function(t){let{motionValue:e,name:r,repeatDelay:i,repeatType:n,damping:s,type:a}=t;if(!eq(e?.owner?.current))return!1;let{onUpdate:o,transformTemplate:l}=e.owner.getProps();return eZ()&&r&&eK.has(r)&&("transform"!==r||!l)&&!o&&!i&&"mirror"!==n&&0!==s&&"inertia"!==a}(d)?new eX({...d,element:d.motionValue.owner.current}):new ep(d);p.finished.then(()=>this.notifyFinished()).catch(u),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),eD=!0,eO(),eR(),eD=!1),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}let eQ=t=>null!==t,e0={type:"spring",stiffness:500,damping:25,restSpeed:10},e1=t=>({type:"spring",stiffness:550,damping:0===t?2*Math.sqrt(550):30,restSpeed:10}),e3={type:"keyframes",duration:.8},e5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},e2=(t,{keyframes:e})=>e.length>2?e3:b.has(t)?t.startsWith("scale")?e1(e[1]):e0:e5,e4=(t,e,r,i={},n,s)=>a=>{let o=l(i,t)||{},u=o.delay||i.delay||0,{elapsed:h=0}=i;h-=B(u);let d={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-h,onUpdate:t=>{e.set(t),o.onUpdate&&o.onUpdate(t)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:s?void 0:n};!function({when:t,delay:e,delayChildren:r,staggerChildren:i,staggerDirection:n,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(o)&&Object.assign(d,e2(t,d)),d.duration&&(d.duration=B(d.duration)),d.repeatDelay&&(d.repeatDelay=B(d.repeatDelay)),void 0!==d.from&&(d.keyframes[0]=d.from);let p=!1;if(!1!==d.type&&(0!==d.duration||d.repeatDelay)||(d.duration=0,0===d.delay&&(p=!0)),(c.instantAnimations||c.skipAnimations)&&(p=!0,d.duration=0,d.delay=0),d.allowFlatten=!o.type&&!o.ease,p&&!s&&void 0!==e.get()){let t=function(t,{repeat:e,repeatType:r="loop"},i){let n=t.filter(eQ),s=e&&"loop"!==r&&e%2==1?0:n.length-1;return n[s]}(d.keyframes,o);if(void 0!==t)return void f.update(()=>{d.onUpdate(t),d.onComplete()})}return o.isSync?new ep(d):new eJ(d)};function e9(t,e,{delay:r=0,transitionOverride:i,type:n}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:a,...u}=e;i&&(s=i);let c=[],h=n&&t.animationState&&t.animationState.getState()[n];for(let e in u){let i=t.getValue(e,t.latestValues[e]??null),n=u[e];if(void 0===n||h&&function({protectedKeys:t,needsAnimating:e},r){let i=t.hasOwnProperty(r)&&!0!==e[r];return e[r]=!1,i}(h,e))continue;let a={delay:r,...l(s||{},e)},o=i.get();if(void 0!==o&&!i.isAnimating&&!Array.isArray(n)&&n===o&&!a.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let r=t.props[O];if(r){let t=window.MotionHandoffAnimation(r,e,f);null!==t&&(a.startTime=t,d=!0)}}D(t,e),i.start(e4(e,i,n,t.shouldReduceMotion&&x.has(e)?{type:!1}:a,t,d));let p=i.animation;p&&c.push(p)}return a&&Promise.all(c).then(()=>{f.update(()=>{a&&function(t,e){let{transitionEnd:r={},transition:i={},...n}=o(t,e)||{};for(let e in n={...n,...r}){var s;let r=V(s=n[e])?s[s.length-1]||0:s;t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,k(r))}}(t,a)})}),c}function e6(t,e,r={}){let i=o(t,e,"exit"===r.type?t.presenceContext?.custom:void 0),{transition:n=t.getDefaultTransition()||{}}=i||{};r.transitionOverride&&(n=r.transitionOverride);let s=i?()=>Promise.all(e9(t,i,r)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(i=0)=>{let{delayChildren:s=0,staggerChildren:a,staggerDirection:o}=n;return function(t,e,r=0,i=0,n=1,s){let a=[],o=(t.variantChildren.size-1)*i,l=1===n?(t=0)=>t*i:(t=0)=>o-t*i;return Array.from(t.variantChildren).sort(e7).forEach((t,i)=>{t.notify("AnimationStart",e),a.push(e6(t,e,{...s,delay:r+l(i)}).then(()=>t.notify("AnimationComplete",e)))}),Promise.all(a)}(t,e,s+i,a,o,r)}:()=>Promise.resolve(),{when:l}=n;if(!l)return Promise.all([s(),a(r.delay)]);{let[t,e]="beforeChildren"===l?[s,a]:[a,s];return t().then(()=>e())}}function e7(t,e){return t.sortNodePosition(e)}function e8(t,e){if(!Array.isArray(e))return!1;let r=e.length;if(r!==t.length)return!1;for(let i=0;i<r;i++)if(e[i]!==t[i])return!1;return!0}function rt(t){return"string"==typeof t||Array.isArray(t)}let re=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rr=["initial",...re],ri=rr.length,rn=[...re].reverse(),rs=re.length;function ra(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ro(){return{animate:ra(!0),whileInView:ra(),whileHover:ra(),whileTap:ra(),whileDrag:ra(),whileFocus:ra(),exit:ra()}}class rl{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ru extends rl{constructor(t){super(t),t.animationState||(t.animationState=function(t){let e=e=>Promise.all(e.map(({animation:e,options:r})=>(function(t,e,r={}){let i;if(t.notify("AnimationStart",e),Array.isArray(e))i=Promise.all(e.map(e=>e6(t,e,r)));else if("string"==typeof e)i=e6(t,e,r);else{let n="function"==typeof e?o(t,e,r.custom):e;i=Promise.all(e9(t,n,r))}return i.then(()=>{t.notify("AnimationComplete",e)})})(t,e,r))),r=ro(),i=!0,s=e=>(r,i)=>{let n=o(t,i,"exit"===e?t.presenceContext?.custom:void 0);if(n){let{transition:t,transitionEnd:e,...i}=n;r={...r,...i,...e}}return r};function a(a){let{props:l}=t,u=function t(e){if(!e)return;if(!e.isControllingVariants){let r=e.parent&&t(e.parent)||{};return void 0!==e.props.initial&&(r.initial=e.props.initial),r}let r={};for(let t=0;t<ri;t++){let i=rr[t],n=e.props[i];(rt(n)||!1===n)&&(r[i]=n)}return r}(t.parent)||{},c=[],h=new Set,d={},p=1/0;for(let e=0;e<rs;e++){var f,m;let o=rn[e],y=r[o],g=void 0!==l[o]?l[o]:u[o],v=rt(g),b=o===a?y.isActive:null;!1===b&&(p=e);let x=g===u[o]&&g!==l[o]&&v;if(x&&i&&t.manuallyAnimateOnMount&&(x=!1),y.protectedKeys={...d},!y.isActive&&null===b||!g&&!y.prevProp||n(g)||"boolean"==typeof g)continue;let w=(f=y.prevProp,"string"==typeof(m=g)?m!==f:!!Array.isArray(m)&&!e8(m,f)),S=w||o===a&&y.isActive&&!x&&v||e>p&&v,P=!1,T=Array.isArray(g)?g:[g],A=T.reduce(s(o),{});!1===b&&(A={});let{prevResolvedValues:E={}}=y,C={...E,...A},M=e=>{S=!0,h.has(e)&&(P=!0,h.delete(e)),y.needsAnimating[e]=!0;let r=t.getValue(e);r&&(r.liveStyle=!1)};for(let t in C){let e=A[t],r=E[t];if(d.hasOwnProperty(t))continue;let i=!1;(V(e)&&V(r)?e8(e,r):e===r)?void 0!==e&&h.has(t)?M(t):y.protectedKeys[t]=!0:null!=e?M(t):h.add(t)}y.prevProp=g,y.prevResolvedValues=A,y.isActive&&(d={...d,...A}),i&&t.blockInitialAnimation&&(S=!1);let k=!(x&&w)||P;S&&k&&c.push(...T.map(t=>({animation:t,options:{type:o}})))}if(h.size){let e={};if("boolean"!=typeof l.initial){let r=o(t,Array.isArray(l.initial)?l.initial[0]:l.initial);r&&r.transition&&(e.transition=r.transition)}h.forEach(r=>{let i=t.getBaseTarget(r),n=t.getValue(r);n&&(n.liveStyle=!0),e[r]=i??null}),c.push({animation:e})}let y=!!c.length;return i&&(!1===l.initial||l.initial===l.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(c):Promise.resolve()}return{animateChanges:a,setActive:function(e,i){if(r[e].isActive===i)return Promise.resolve();t.variantChildren?.forEach(t=>t.animationState?.setActive(e,i)),r[e].isActive=i;let n=a(e);for(let t in r)r[t].protectedKeys={};return n},setAnimateFunction:function(r){e=r(t)},getState:()=>r,reset:()=>{r=ro(),i=!0}}}(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();n(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let rc=0;class rh extends rl{constructor(){super(...arguments),this.id=rc++}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;let i=this.node.animationState.setActive("exit",!t);e&&!t&&i.then(()=>{e(this.id)})}mount(){let{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}let rd={x:!1,y:!1};function rp(t,e,r,i={passive:!0}){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r)}let rf=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function rm(t){return{point:{x:t.pageX,y:t.pageY}}}let ry=t=>e=>rf(e)&&t(e,rm(e));function rg(t,e,r,i){return rp(t,e,ry(r),i)}function rv({top:t,left:e,right:r,bottom:i}){return{x:{min:e,max:r},y:{min:t,max:i}}}function rb(t){return t.max-t.min}function rx(t,e,r,i=.5){t.origin=i,t.originPoint=tE(e.min,e.max,t.origin),t.scale=rb(r)/rb(e),t.translate=tE(r.min,r.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function rw(t,e,r,i){rx(t.x,e.x,r.x,i?i.originX:void 0),rx(t.y,e.y,r.y,i?i.originY:void 0)}function rS(t,e,r){t.min=r.min+e.min,t.max=t.min+rb(e)}function rP(t,e,r){t.min=e.min-r.min,t.max=t.min+rb(e)}function rT(t,e,r){rP(t.x,e.x,r.x),rP(t.y,e.y,r.y)}let rA=()=>({translate:0,scale:1,origin:0,originPoint:0}),rE=()=>({x:rA(),y:rA()}),rC=()=>({min:0,max:0}),rM=()=>({x:rC(),y:rC()});function rk(t){return[t("x"),t("y")]}function rV(t){return void 0===t||1===t}function rj({scale:t,scaleX:e,scaleY:r}){return!rV(t)||!rV(e)||!rV(r)}function rD(t){return rj(t)||rR(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function rR(t){var e,r;return(e=t.x)&&"0%"!==e||(r=t.y)&&"0%"!==r}function rO(t,e,r,i,n){return void 0!==n&&(t=i+n*(t-i)),i+r*(t-i)+e}function rF(t,e=0,r=1,i,n){t.min=rO(t.min,e,r,i,n),t.max=rO(t.max,e,r,i,n)}function rL(t,{x:e,y:r}){rF(t.x,e.translate,e.scale,e.originPoint),rF(t.y,r.translate,r.scale,r.originPoint)}function r$(t,e){t.min=t.min+e,t.max=t.max+e}function rB(t,e,r,i,n=.5){let s=tE(t.min,t.max,n);rF(t,e,r,s,i)}function rI(t,e){rB(t.x,e.x,e.scaleX,e.scale,e.originX),rB(t.y,e.y,e.scaleY,e.scale,e.originY)}function r_(t,e){return rv(function(t,e){if(!e)return t;let r=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:i.y,right:i.x}}(t.getBoundingClientRect(),e))}let rN=({current:t})=>t?t.ownerDocument.defaultView:null;function rz(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}let rU=(t,e)=>Math.abs(t-e);class rY{constructor(t,e,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:n=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let t=rH(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,r=function(t,e){return Math.sqrt(rU(t.x,e.x)**2+rU(t.y,e.y)**2)}(t.offset,{x:0,y:0})>=3;if(!e&&!r)return;let{point:i}=t,{timestamp:n}=y;this.history.push({...i,timestamp:n});let{onStart:s,onMove:a}=this.handlers;e||(s&&s(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=rW(e,this.transformPagePoint),f.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();let{onEnd:r,onSessionEnd:i,resumeAnimation:n}=this.handlers;if(this.dragSnapToOrigin&&n&&n(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let s=rH("pointercancel"===t.type?this.lastMoveEventInfo:rW(e,this.transformPagePoint),this.history);this.startEvent&&r&&r(t,s),i&&i(t,s)},!rf(t))return;this.dragSnapToOrigin=n,this.handlers=e,this.transformPagePoint=r,this.contextWindow=i||window;let s=rW(rm(t),this.transformPagePoint),{point:a}=s,{timestamp:o}=y;this.history=[{...a,timestamp:o}];let{onSessionStart:l}=e;l&&l(t,rH(s,this.history)),this.removeListeners=L(rg(this.contextWindow,"pointermove",this.handlePointerMove),rg(this.contextWindow,"pointerup",this.handlePointerUp),rg(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),m(this.updatePoint)}}function rW(t,e){return e?{point:e(t.point)}:t}function rX(t,e){return{x:t.x-e.x,y:t.y-e.y}}function rH({point:t},e){return{point:t,delta:rX(t,rG(e)),offset:rX(t,e[0]),velocity:function(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,i=null,n=rG(t);for(;r>=0&&(i=t[r],!(n.timestamp-i.timestamp>B(.1)));)r--;if(!i)return{x:0,y:0};let s=I(n.timestamp-i.timestamp);if(0===s)return{x:0,y:0};let a={x:(n.x-i.x)/s,y:(n.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}(e,.1)}}function rG(t){return t[t.length-1]}function rq(t,e,r){return{min:void 0!==e?t.min+e:void 0,max:void 0!==r?t.max+r-(t.max-t.min):void 0}}function rK(t,e){let r=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,i]=[i,r]),{min:r,max:i}}function rZ(t,e,r){return{min:rJ(t,e),max:rJ(t,r)}}function rJ(t,e){return"number"==typeof t?t:t[e]||0}let rQ=new WeakMap;class r0{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rM(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){let{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;let{dragSnapToOrigin:i}=this.getProps();this.panSession=new rY(t,{onSessionStart:t=>{let{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(rm(t).point)},onStart:(t,e)=>{let{drag:r,dragPropagation:i,onDragStart:n}=this.getProps();if(r&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(t){if("x"===t||"y"===t)if(rd[t])return null;else return rd[t]=!0,()=>{rd[t]=!1};return rd.x||rd.y?null:(rd.x=rd.y=!0,()=>{rd.x=rd.y=!1})}(r),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rk(t=>{let e=this.getAxisMotionValue(t).get()||0;if(tl.test(e)){let{projection:r}=this.visualElement;if(r&&r.layout){let i=r.layout.layoutBox[t];i&&(e=rb(i)*(parseFloat(e)/100))}}this.originPoint[t]=e}),n&&f.postRender(()=>n(t,e)),D(this.visualElement,"transform");let{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(t,e)=>{let{dragPropagation:r,dragDirectionLock:i,onDirectionLock:n,onDrag:s}=this.getProps();if(!r&&!this.openDragLock)return;let{offset:a}=e;if(i&&null===this.currentDirection){this.currentDirection=function(t,e=10){let r=null;return Math.abs(t.y)>e?r="y":Math.abs(t.x)>e&&(r="x"),r}(a),null!==this.currentDirection&&n&&n(this.currentDirection);return}this.updateAxis("x",e.point,a),this.updateAxis("y",e.point,a),this.visualElement.render(),s&&s(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>rk(t=>"paused"===this.getAnimationState(t)&&this.getAxisMotionValue(t).animation?.play())},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:rN(this.visualElement)})}stop(t,e){let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:i}=e;this.startAnimation(i);let{onDragEnd:n}=this.getProps();n&&f.postRender(()=>n(t,e))}cancel(){this.isDragging=!1;let{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,r){let{drag:i}=this.getProps();if(!r||!r1(t,i,this.currentDirection))return;let n=this.getAxisMotionValue(t),s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=function(t,{min:e,max:r},i){return void 0!==e&&t<e?t=i?tE(e,t,i.min):Math.max(t,e):void 0!==r&&t>r&&(t=i?tE(r,t,i.max):Math.min(t,r)),t}(s,this.constraints[t],this.elastic[t])),n.set(s)}resolveConstraints(){let{dragConstraints:t,dragElastic:e}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;t&&rz(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=function(t,{top:e,left:r,bottom:i,right:n}){return{x:rq(t.x,r,n),y:rq(t.y,e,i)}}(r.layoutBox,t):this.constraints=!1,this.elastic=function(t=.35){return!1===t?t=0:!0===t&&(t=.35),{x:rZ(t,"left","right"),y:rZ(t,"top","bottom")}}(e),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&rk(t=>{!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){let r={};return void 0!==e.min&&(r.min=e.min-t.min),void 0!==e.max&&(r.max=e.max-t.min),r}(r.layoutBox[t],this.constraints[t]))})}resolveRefConstraints(){var t;let{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!rz(e))return!1;let i=e.current;z(null!==i,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:n}=this.visualElement;if(!n||!n.layout)return!1;let s=function(t,e,r){let i=r_(t,r),{scroll:n}=e;return n&&(r$(i.x,n.offset.x),r$(i.y,n.offset.y)),i}(i,n.root,this.visualElement.getTransformPagePoint()),a=(t=n.layout.layoutBox,{x:rK(t.x,s.x),y:rK(t.y,s.y)});if(r){let t=r(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(a));this.hasMutatedConstraints=!!t,t&&(a=rv(t))}return a}startAnimation(t){let{drag:e,dragMomentum:r,dragElastic:i,dragTransition:n,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),o=this.constraints||{};return Promise.all(rk(a=>{if(!r1(a,e,this.currentDirection))return;let l=o&&o[a]||{};s&&(l={min:0,max:0});let u={type:"inertia",velocity:r?t[a]:0,bounceStiffness:i?200:1e6,bounceDamping:i?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...n,...l};return this.startAxisValueAnimation(a,u)})).then(a)}startAxisValueAnimation(t,e){let r=this.getAxisMotionValue(t);return D(this.visualElement,t),r.start(e4(t,r,0,e,this.visualElement,!1))}stopAnimation(){rk(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rk(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){let e=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps();return r[e]||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){rk(e=>{let{drag:r}=this.getProps();if(!r1(e,r,this.currentDirection))return;let{projection:i}=this.visualElement,n=this.getAxisMotionValue(e);if(i&&i.layout){let{min:r,max:s}=i.layout.layoutBox[e];n.set(t[e]-tE(r,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:e}=this.getProps(),{projection:r}=this.visualElement;if(!rz(e)||!r||!this.constraints)return;this.stopAnimation();let i={x:0,y:0};rk(t=>{let e=this.getAxisMotionValue(t);if(e&&!1!==this.constraints){let r=e.get();i[t]=function(t,e){let r=.5,i=rb(t),n=rb(e);return n>i?r=es(e.min,e.max-i,t.min):i>n&&(r=es(t.min,t.max-n,e.min)),$(0,1,r)}({min:r,max:r},this.constraints[t])}});let{transformTemplate:n}=this.visualElement.getProps();this.visualElement.current.style.transform=n?n({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),rk(e=>{if(!r1(e,t,null))return;let r=this.getAxisMotionValue(e),{min:n,max:s}=this.constraints[e];r.set(tE(n,s,i[e]))})}addListeners(){if(!this.visualElement.current)return;rQ.set(this.visualElement,this);let t=rg(this.visualElement.current,"pointerdown",t=>{let{drag:e,dragListener:r=!0}=this.getProps();e&&r&&this.start(t)}),e=()=>{let{dragConstraints:t}=this.getProps();rz(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener("measure",e);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),f.read(e);let n=rp(window,"resize",()=>this.scalePositionWithinConstraints()),s=r.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(rk(e=>{let r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))}),this.visualElement.render())});return()=>{n(),t(),i(),s&&s()}}getProps(){let t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:n=!1,dragElastic:s=.35,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:r,dragPropagation:i,dragConstraints:n,dragElastic:s,dragMomentum:a}}}function r1(t,e,r){return(!0===e||e===t)&&(null===r||r===t)}class r3 extends rl{constructor(t){super(t),this.removeGroupControls=u,this.removeListeners=u,this.controls=new r0(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||u}unmount(){this.removeGroupControls(),this.removeListeners()}}let r5=t=>(e,r)=>{t&&f.postRender(()=>t(e,r))};class r2 extends rl{constructor(){super(...arguments),this.removePointerDownListener=u}onPointerDown(t){this.session=new rY(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rN(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:e,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:r5(t),onStart:r5(e),onMove:r,onEnd:(t,e)=>{delete this.session,i&&f.postRender(()=>i(t,e))}}}mount(){this.removePointerDownListener=rg(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}var r4,r9,r6=r(7876);let{schedule:r7}=p(queueMicrotask,!1);var r8=r(4232);let it=(0,r8.createContext)(null),ie=(0,r8.createContext)({}),ir=(0,r8.createContext)({}),ii={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function is(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}let ia={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t)if(!tu.test(t))return t;else t=parseFloat(t);let r=is(t,e.target.x),i=is(t,e.target.y);return`${r}% ${i}%`}},io={};class il extends r8.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:r,layoutId:i}=this.props,{projection:n}=t;for(let t in ic)io[t]=ic[t],Y(t)&&(io[t].isCSSVariable=!0);n&&(e.group&&e.group.add(n),r&&r.register&&i&&r.register(n),n.root.didUpdate(),n.addEventListener("animationComplete",()=>{this.safeToRemove()}),n.setOptions({...n.options,onExitComplete:()=>this.safeToRemove()})),ii.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:r,drag:i,isPresent:n}=this.props,{projection:s}=r;return s&&(s.isPresent=n,i||t.layoutDependency!==e||void 0===e||t.isPresent!==n?s.willUpdate():this.safeToRemove(),t.isPresent!==n&&(n?s.promote():s.relegate()||f.postRender(()=>{let t=s.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),r7.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function iu(t){let[e,r]=function(t=!0){let e=(0,r8.useContext)(it);if(null===e)return[!0,null];let{isPresent:r,onExitComplete:i,register:n}=e,s=(0,r8.useId)();(0,r8.useEffect)(()=>{if(t)return n(s)},[t]);let a=(0,r8.useCallback)(()=>t&&i&&i(s),[s,i,t]);return!r&&i?[!1,a]:[!0]}(),i=(0,r8.useContext)(ie);return(0,r6.jsx)(il,{...t,layoutGroup:i,switchLayoutGroup:(0,r8.useContext)(ir),isPresent:e,safeToRemove:r})}let ic={borderRadius:{...ia,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ia,borderTopRightRadius:ia,borderBottomLeftRadius:ia,borderBottomRightRadius:ia,boxShadow:{correct:(t,{treeScale:e,projectionDelta:r})=>{let i=tP.parse(t);if(i.length>5)return t;let n=tP.createTransformer(t),s=+("number"!=typeof i[0]),a=r.x.scale*e.x,o=r.y.scale*e.y;i[0+s]/=a,i[1+s]/=o;let l=tE(a,o,.5);return"number"==typeof i[2+s]&&(i[2+s]/=l),"number"==typeof i[3+s]&&(i[3+s]/=l),n(i)}}};function ih(t){return eG(t)&&"ownerSVGElement"in t}let id=(t,e)=>t.depth-e.depth;class ip{constructor(){this.children=[],this.isDirty=!1}add(t){w(this.children,t),this.isDirty=!0}remove(t){S(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(id),this.isDirty=!1,this.children.forEach(t)}}function im(t){return j(t)?t.get():t}let iy=["TopLeft","TopRight","BottomLeft","BottomRight"],ig=iy.length,iv=t=>"string"==typeof t?parseFloat(t):t,ib=t=>"number"==typeof t||tu.test(t);function ix(t,e){return void 0!==t[e]?t[e]:t.borderRadius}let iw=iP(0,.5,t8),iS=iP(.5,.95,u);function iP(t,e,r){return i=>i<t?0:i>e?1:r(es(t,e,i))}function iT(t,e){t.min=e.min,t.max=e.max}function iA(t,e){iT(t.x,e.x),iT(t.y,e.y)}function iE(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function iC(t,e,r,i,n){return t-=e,t=i+1/r*(t-i),void 0!==n&&(t=i+1/n*(t-i)),t}function iM(t,e,[r,i,n],s,a){!function(t,e=0,r=1,i=.5,n,s=t,a=t){if(tl.test(e)&&(e=parseFloat(e),e=tE(a.min,a.max,e/100)-a.min),"number"!=typeof e)return;let o=tE(s.min,s.max,i);t===s&&(o-=e),t.min=iC(t.min,e,r,o,n),t.max=iC(t.max,e,r,o,n)}(t,e[r],e[i],e[n],e.scale,s,a)}let ik=["x","scaleX","originX"],iV=["y","scaleY","originY"];function ij(t,e,r,i){iM(t.x,e,ik,r?r.x:void 0,i?i.x:void 0),iM(t.y,e,iV,r?r.y:void 0,i?i.y:void 0)}function iD(t){return 0===t.translate&&1===t.scale}function iR(t){return iD(t.x)&&iD(t.y)}function iO(t,e){return t.min===e.min&&t.max===e.max}function iF(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function iL(t,e){return iF(t.x,e.x)&&iF(t.y,e.y)}function i$(t){return rb(t.x)/rb(t.y)}function iB(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class iI{constructor(){this.members=[]}add(t){w(this.members,t),t.scheduleRender()}remove(t){if(S(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){let e,r=this.members.findIndex(e=>t===e);if(0===r)return!1;for(let t=r;t>=0;t--){let r=this.members[t];if(!1!==r.isPresent){e=r;break}}return!!e&&(this.promote(e),!0)}promote(t,e){let r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,e&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);let{crossfade:i}=t.options;!1===i&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{let{options:e,resumingFrom:r}=t;e.onExitComplete&&e.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let i_={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},iN=["","X","Y","Z"],iz={visibility:"hidden"},iU=0;function iY(t,e,r,i){let{latestValues:n}=e;n[t]&&(r[t]=n[t],e.setStaticValue(t,0),i&&(i[t]=0))}function iW({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:i,resetTransform:n}){return class{constructor(t={},r=e?.()){this.id=iU++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,d.value&&(i_.nodes=i_.calculatedTargetDeltas=i_.calculatedProjections=0),this.nodes.forEach(iG),this.nodes.forEach(i1),this.nodes.forEach(i3),this.nodes.forEach(iq),d.addProjectionMetrics&&d.addProjectionMetrics(i_)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new ip)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new P),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){let r=this.eventHandlers.get(t);r&&r.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e){if(this.instance)return;this.isSVG=ih(e)&&!(ih(e)&&"svg"===e.tagName),this.instance=e;let{layoutId:r,layout:i,visualElement:n}=this.options;if(n&&!n.current&&n.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(i||r)&&(this.isLayoutDirty=!0),t){let r,i=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(t,e){let r=A.now(),i=({timestamp:n})=>{let s=n-r;s>=250&&(m(i),t(s-e))};return f.setup(i,!0),()=>m(i)}(i,250),ii.hasAnimatedSinceResize&&(ii.hasAnimatedSinceResize=!1,this.nodes.forEach(i0))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&n&&(r||i)&&this.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e,hasRelativeLayoutChanged:r,layout:i})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let s=this.options.transition||n.getDefaultTransition()||i7,{onLayoutAnimationStart:a,onLayoutAnimationComplete:o}=n.getProps(),u=!this.targetLayout||!iL(this.targetLayout,i),c=!e&&r;if(this.options.layoutRoot||this.resumeFrom||c||e&&(u||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let e={...l(s,"layout"),onPlay:a,onComplete:o};(n.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,c)}else e||i0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),m(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(i5),this.animationId++)}getTransformTemplate(){let{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function t(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:r}=e.options;if(!r)return;let i=r.props[O];if(window.MotionHasOptimisedAnimation(i,"transform")){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",f,!(t||r))}let{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&t(n)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let t=0;t<this.path.length;t++){let e=this.path[t];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}let{layoutId:e,layout:r}=this.options;if(void 0===e&&!r)return;let i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(iZ);return}this.isUpdating||this.nodes.forEach(iJ),this.isUpdating=!1,this.nodes.forEach(iQ),this.nodes.forEach(iX),this.nodes.forEach(iH),this.clearAllSnapshots();let t=A.now();y.delta=$(0,1e3/60,t-y.timestamp),y.timestamp=t,y.isProcessing=!0,g.update.process(y),g.preRender.process(y),g.render.process(y),y.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,r7.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iK),this.sharedNodes.forEach(i2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,f.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){f.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||rb(this.snapshot.measuredBox.x)||rb(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let t=0;t<this.path.length;t++)this.path[t].updateScroll();let t=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rM(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&this.instance){let e=i(this.instance);this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!n)return;let t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!iR(this.projectionDelta),r=this.getTransformTemplate(),i=r?r(this.latestValues,""):void 0,s=i!==this.prevTransformTemplateValue;t&&this.instance&&(e||rD(this.latestValues)||s)&&(n(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){var e;let r=this.measurePageBox(),i=this.removeElementScroll(r);return t&&(i=this.removeTransform(i)),ne((e=i).x),ne(e.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:i,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:t}=this.options;if(!t)return rM();let e=t.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ni))){let{scroll:t}=this.root;t&&(r$(e.x,t.offset.x),r$(e.y,t.offset.y))}return e}removeElementScroll(t){let e=rM();if(iA(e,t),this.scroll?.wasRoot)return e;for(let r=0;r<this.path.length;r++){let i=this.path[r],{scroll:n,options:s}=i;i!==this.root&&n&&s.layoutScroll&&(n.wasRoot&&iA(e,t),r$(e.x,n.offset.x),r$(e.y,n.offset.y))}return e}applyTransform(t,e=!1){let r=rM();iA(r,t);for(let t=0;t<this.path.length;t++){let i=this.path[t];!e&&i.options.layoutScroll&&i.scroll&&i!==i.root&&rI(r,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),rD(i.latestValues)&&rI(r,i.latestValues)}return rD(this.latestValues)&&rI(r,this.latestValues),r}removeTransform(t){let e=rM();iA(e,t);for(let t=0;t<this.path.length;t++){let r=this.path[t];if(!r.instance||!rD(r.latestValues))continue;rj(r.latestValues)&&r.updateSnapshot();let i=rM();iA(i,r.measurePageBox()),ij(e,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,i)}return rD(this.latestValues)&&ij(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==y.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){let e=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=e.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=e.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=e.isSharedProjectionDirty);let r=!!this.resumingFrom||this!==e;if(!(t||r&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:i,layoutId:n}=this.options;if(this.layout&&(i||n)){if(this.resolvedRelativeTargetAt=y.timestamp,!this.targetDelta&&!this.relativeTarget){let t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rM(),this.relativeTargetOrigin=rM(),rT(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),iA(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if(this.target||(this.target=rM(),this.targetWithTransforms=rM()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var s,a,o;this.forceRelativeParentToResolveTarget(),s=this.target,a=this.relativeTarget,o=this.relativeParent.target,rS(s.x,a.x,o.x),rS(s.y,a.y,o.y)}else this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):iA(this.target,this.layout.layoutBox),rL(this.target,this.targetDelta)):iA(this.target,this.layout.layoutBox);if(this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let t=this.getClosestProjectingParent();t&&!!t.resumingFrom==!!this.resumingFrom&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rM(),this.relativeTargetOrigin=rM(),rT(this.relativeTargetOrigin,this.target,t.target),iA(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}d.value&&i_.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||rj(this.parent.latestValues)||rR(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){let t=this.getLead(),e=!!this.resumingFrom||this!==t,r=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(r=!1),e&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===y.timestamp&&(r=!1),r)return;let{layout:i,layoutId:n}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||n))return;iA(this.layoutCorrected,this.layout.layoutBox);let s=this.treeScale.x,a=this.treeScale.y;!function(t,e,r,i=!1){let n,s,a=r.length;if(a){e.x=e.y=1;for(let o=0;o<a;o++){s=(n=r[o]).projectionDelta;let{visualElement:a}=n.options;(!a||!a.props.style||"contents"!==a.props.style.display)&&(i&&n.options.layoutScroll&&n.scroll&&n!==n.root&&rI(t,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,rL(t,s)),i&&rD(n.latestValues)&&rI(t,n.latestValues))}e.x<1.0000000000001&&e.x>.999999999999&&(e.x=1),e.y<1.0000000000001&&e.y>.999999999999&&(e.y=1)}}(this.layoutCorrected,this.treeScale,this.path,e),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=rM());let{target:o}=t;if(!o){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(iE(this.prevProjectionDelta.x,this.projectionDelta.x),iE(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),rw(this.projectionDelta,this.layoutCorrected,o,this.latestValues),this.treeScale.x===s&&this.treeScale.y===a&&iB(this.projectionDelta.x,this.prevProjectionDelta.x)&&iB(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",o)),d.value&&i_.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.visualElement?.scheduleRender(),t){let t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=rE(),this.projectionDelta=rE(),this.projectionDeltaWithTransform=rE()}setAnimationOrigin(t,e=!1){let r,i=this.snapshot,n=i?i.latestValues:{},s={...this.latestValues},a=rE();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;let o=rM(),l=(i?i.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,h=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(i6));this.animationProgress=0,this.mixTargetDelta=e=>{let i=e/1e3;if(i4(a.x,t.x,i),i4(a.y,t.y,i),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,d,p,f,m,y;rT(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,m=o,y=i,i9(p.x,f.x,m.x,y),i9(p.y,f.y,m.y,y),r&&(u=this.relativeTarget,d=r,iO(u.x,d.x)&&iO(u.y,d.y))&&(this.isProjectionDirty=!1),r||(r=rM()),iA(r,this.relativeTarget)}l&&(this.animationValues=s,function(t,e,r,i,n,s){n?(t.opacity=tE(0,r.opacity??1,iw(i)),t.opacityExit=tE(e.opacity??1,0,iS(i))):s&&(t.opacity=tE(e.opacity??1,r.opacity??1,i));for(let n=0;n<ig;n++){let s=`border${iy[n]}Radius`,a=ix(e,s),o=ix(r,s);(void 0!==a||void 0!==o)&&(a||(a=0),o||(o=0),0===a||0===o||ib(a)===ib(o)?(t[s]=Math.max(tE(iv(a),iv(o),i),0),(tl.test(o)||tl.test(a))&&(t[s]+="%")):t[s]=o)}(e.rotate||r.rotate)&&(t.rotate=tE(e.rotate||0,r.rotate||0,i))}(s,n,this.latestValues,i,h,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(m(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=f.update(()=>{ii.hasAnimatedSinceResize=!0,_.layout++,this.motionValue||(this.motionValue=k(0)),this.currentAnimation=function(t,e,r){let i=j(t)?t:k(t);return i.start(e4("",i,e,r)),i.animation}(this.motionValue,[0,1e3],{...t,isSync:!0,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onStop:()=>{_.layout--},onComplete:()=>{_.layout--,t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let t=this.getLead(),{targetWithTransforms:e,target:r,layout:i,latestValues:n}=t;if(e&&r&&i){if(this!==t&&this.layout&&i&&nr(this.options.animationType,this.layout.layoutBox,i.layoutBox)){r=this.target||rM();let e=rb(this.layout.layoutBox.x);r.x.min=t.target.x.min,r.x.max=r.x.min+e;let i=rb(this.layout.layoutBox.y);r.y.min=t.target.y.min,r.y.max=r.y.min+i}iA(e,r),rI(e,n),rw(this.projectionDeltaWithTransform,this.layoutCorrected,e,n)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new iI),this.sharedNodes.get(t).add(e);let r=e.options.initialPromotionConfig;e.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(e):void 0})}isLead(){let t=this.getStack();return!t||t.lead===this}getLead(){let{layoutId:t}=this.options;return t&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:t}=this.options;return t?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:r}={}){let i=this.getStack();i&&i.promote(this,r),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){let t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){let{visualElement:t}=this.options;if(!t)return;let e=!1,{latestValues:r}=t;if((r.z||r.rotate||r.rotateX||r.rotateY||r.rotateZ||r.skewX||r.skewY)&&(e=!0),!e)return;let i={};r.z&&iY("z",t,i,this.animationValues);for(let e=0;e<iN.length;e++)iY(`rotate${iN[e]}`,t,i,this.animationValues),iY(`skew${iN[e]}`,t,i,this.animationValues);for(let e in t.render(),i)t.setStaticValue(e,i[e]),this.animationValues&&(this.animationValues[e]=i[e]);t.scheduleRender()}getProjectionStyles(t){if(!this.instance||this.isSVG)return;if(!this.isVisible)return iz;let e={visibility:""},r=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,e.opacity="",e.pointerEvents=im(t?.pointerEvents)||"",e.transform=r?r(this.latestValues,""):"none",e;let i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){let e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=im(t?.pointerEvents)||""),this.hasProjected&&!rD(this.latestValues)&&(e.transform=r?r({},""):"none",this.hasProjected=!1),e}let n=i.animationValues||i.latestValues;this.applyTransformsToTarget(),e.transform=function(t,e,r){let i="",n=t.x.translate/e.x,s=t.y.translate/e.y,a=r?.z||0;if((n||s||a)&&(i=`translate3d(${n}px, ${s}px, ${a}px) `),(1!==e.x||1!==e.y)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),r){let{transformPerspective:t,rotate:e,rotateX:n,rotateY:s,skewX:a,skewY:o}=r;t&&(i=`perspective(${t}px) ${i}`),e&&(i+=`rotate(${e}deg) `),n&&(i+=`rotateX(${n}deg) `),s&&(i+=`rotateY(${s}deg) `),a&&(i+=`skewX(${a}deg) `),o&&(i+=`skewY(${o}deg) `)}let o=t.x.scale*e.x,l=t.y.scale*e.y;return(1!==o||1!==l)&&(i+=`scale(${o}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,n),r&&(e.transform=r(n,e.transform));let{x:s,y:a}=this.projectionDelta;for(let t in e.transformOrigin=`${100*s.origin}% ${100*a.origin}% 0`,i.animationValues?e.opacity=i===this?n.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:n.opacityExit:e.opacity=i===this?void 0!==n.opacity?n.opacity:"":void 0!==n.opacityExit?n.opacityExit:0,io){if(void 0===n[t])continue;let{correct:r,applyTo:s,isCSSVariable:a}=io[t],o="none"===e.transform?n[t]:r(n[t],i);if(s){let t=s.length;for(let r=0;r<t;r++)e[s[r]]=o}else a?this.options.visualElement.renderState.vars[t]=o:e[t]=o}return this.options.layoutId&&(e.pointerEvents=i===this?im(t?.pointerEvents)||"":"none"),e}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>t.currentAnimation?.stop()),this.root.nodes.forEach(iZ),this.root.sharedNodes.clear()}}}function iX(t){t.updateLayout()}function iH(t){let e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){let{layoutBox:r,measuredBox:i}=t.layout,{animationType:n}=t.options,s=e.source!==t.layout.source;"size"===n?rk(t=>{let i=s?e.measuredBox[t]:e.layoutBox[t],n=rb(i);i.min=r[t].min,i.max=i.min+n}):nr(n,e.layoutBox,r)&&rk(i=>{let n=s?e.measuredBox[i]:e.layoutBox[i],a=rb(r[i]);n.max=n.min+a,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[i].max=t.relativeTarget[i].min+a)});let a=rE();rw(a,r,e.layoutBox);let o=rE();s?rw(o,t.applyTransform(i,!0),e.measuredBox):rw(o,r,e.layoutBox);let l=!iR(a),u=!1;if(!t.resumeFrom){let i=t.getClosestProjectingParent();if(i&&!i.resumeFrom){let{snapshot:n,layout:s}=i;if(n&&s){let a=rM();rT(a,e.layoutBox,n.layoutBox);let o=rM();rT(o,r,s.layoutBox),iL(a,o)||(u=!0),i.options.layoutRoot&&(t.relativeTarget=o,t.relativeTargetOrigin=a,t.relativeParent=i)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(t.isLead()){let{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function iG(t){d.value&&i_.nodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function iq(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function iK(t){t.clearSnapshot()}function iZ(t){t.clearMeasurements()}function iJ(t){t.isLayoutDirty=!1}function iQ(t){let{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function i0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function i1(t){t.resolveTargetDelta()}function i3(t){t.calcProjection()}function i5(t){t.resetSkewAndRotation()}function i2(t){t.removeLeadSnapshot()}function i4(t,e,r){t.translate=tE(e.translate,0,r),t.scale=tE(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function i9(t,e,r,i){t.min=tE(e.min,r.min,i),t.max=tE(e.max,r.max,i)}function i6(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}let i7={duration:.45,ease:[.4,0,.1,1]},i8=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),nt=i8("applewebkit/")&&!i8("chrome/")?Math.round:u;function ne(t){t.min=nt(t.min),t.max=nt(t.max)}function nr(t,e,r){return"position"===t||"preserve-aspect"===t&&!(.2>=Math.abs(i$(e)-i$(r)))}function ni(t){return t!==t.root&&t.scroll?.wasRoot}let nn=iW({attachResizeListener:(t,e)=>rp(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ns={current:void 0},na=iW({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ns.current){let t=new nn({});t.mount(window),t.setOptions({layoutScroll:!0}),ns.current=t}return ns.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>"fixed"===window.getComputedStyle(t).position});function no(t,e){let r=function(t,e,r){if(t instanceof EventTarget)return[t];if("string"==typeof t){let e=document,r=(void 0)??e.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}(t),i=new AbortController;return[r,{passive:!0,...e,signal:i.signal},()=>i.abort()]}function nl(t){return!("touch"===t.pointerType||rd.x||rd.y)}function nu(t,e,r){let{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover","Start"===r);let n=i["onHover"+r];n&&f.postRender(()=>n(e,rm(e)))}class nc extends rl{mount(){let{current:t}=this.node;t&&(this.unmount=function(t,e,r={}){let[i,n,s]=no(t,r),a=t=>{if(!nl(t))return;let{target:r}=t,i=e(r,t);if("function"!=typeof i||!r)return;let s=t=>{nl(t)&&(i(t),r.removeEventListener("pointerleave",s))};r.addEventListener("pointerleave",s,n)};return i.forEach(t=>{t.addEventListener("pointerenter",a,n)}),s}(t,(t,e)=>(nu(this.node,e,"Start"),t=>nu(this.node,t,"End"))))}unmount(){}}class nh extends rl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=L(rp(this.node.current,"focus",()=>this.onFocus()),rp(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}let nd=(t,e)=>!!e&&(t===e||nd(t,e.parentElement)),np=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),nf=new WeakSet;function nm(t){return e=>{"Enter"===e.key&&t(e)}}function ny(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}let ng=(t,e)=>{let r=t.currentTarget;if(!r)return;let i=nm(()=>{if(nf.has(r))return;ny(r,"down");let t=nm(()=>{ny(r,"up")});r.addEventListener("keyup",t,e),r.addEventListener("blur",()=>ny(r,"cancel"),e)});r.addEventListener("keydown",i,e),r.addEventListener("blur",()=>r.removeEventListener("keydown",i),e)};function nv(t){return rf(t)&&!(rd.x||rd.y)}function nb(t,e,r){let{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap","Start"===r);let n=i["onTap"+("End"===r?"":r)];n&&f.postRender(()=>n(e,rm(e)))}class nx extends rl{mount(){let{current:t}=this.node;t&&(this.unmount=function(t,e,r={}){let[i,n,s]=no(t,r),a=t=>{let i=t.currentTarget;if(!nv(t))return;nf.add(i);let s=e(i,t),a=(t,e)=>{window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",l),nf.has(i)&&nf.delete(i),nv(t)&&"function"==typeof s&&s(t,{success:e})},o=t=>{a(t,i===window||i===document||r.useGlobalTarget||nd(i,t.target))},l=t=>{a(t,!1)};window.addEventListener("pointerup",o,n),window.addEventListener("pointercancel",l,n)};return i.forEach(t=>{((r.useGlobalTarget?window:t).addEventListener("pointerdown",a,n),eq(t))&&(t.addEventListener("focus",t=>ng(t,n)),np.has(t.tagName)||-1!==t.tabIndex||t.hasAttribute("tabindex")||(t.tabIndex=0))}),s}(t,(t,e)=>(nb(this.node,e,"Start"),(t,{success:e})=>nb(this.node,t,e?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}let nw=new WeakMap,nS=new WeakMap,nP=t=>{let e=nw.get(t.target);e&&e(t)},nT=t=>{t.forEach(nP)},nA={some:0,all:1};class nE extends rl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:t={}}=this.node.getProps(),{root:e,margin:r,amount:i="some",once:n}=t,s={root:e?e.current:void 0,rootMargin:r,threshold:"number"==typeof i?i:nA[i]};return function(t,e,r){let i=function({root:t,...e}){let r=t||document;nS.has(r)||nS.set(r,{});let i=nS.get(r),n=JSON.stringify(e);return i[n]||(i[n]=new IntersectionObserver(nT,{root:t,...e})),i[n]}(e);return nw.set(t,r),i.observe(t),()=>{nw.delete(t),i.unobserve(t)}}(this.node.current,s,t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,n&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:r,onViewportLeave:i}=this.node.getProps(),s=e?r:i;s&&s(t)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return r=>t[r]!==e[r]}(t,e))&&this.startObserver()}unmount(){}}let nC=(0,r8.createContext)({strict:!1}),nM=(0,r8.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),nk=(0,r8.createContext)({});function nV(t){return n(t.animate)||rr.some(e=>rt(t[e]))}function nj(t){return!!(nV(t)||t.variants)}function nD(t){return Array.isArray(t)?t.join(" "):t}let nR="undefined"!=typeof window,nO={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},nF={};for(let t in nO)nF[t]={isEnabled:e=>nO[t].some(t=>!!e[t])};let nL=Symbol.for("motionComponentSymbol"),n$=nR?r8.useLayoutEffect:r8.useEffect;function nB(t,{layout:e,layoutId:r}){return b.has(t)||t.startsWith("origin")||(e||void 0!==r)&&(!!io[t]||"opacity"===t)}let nI=(t,e)=>e&&"number"==typeof t?e.transform(t):t,n_={...G,transform:Math.round},nN={borderWidth:tu,borderTopWidth:tu,borderRightWidth:tu,borderBottomWidth:tu,borderLeftWidth:tu,borderRadius:tu,radius:tu,borderTopLeftRadius:tu,borderTopRightRadius:tu,borderBottomRightRadius:tu,borderBottomLeftRadius:tu,width:tu,maxWidth:tu,height:tu,maxHeight:tu,top:tu,right:tu,bottom:tu,left:tu,padding:tu,paddingTop:tu,paddingRight:tu,paddingBottom:tu,paddingLeft:tu,margin:tu,marginTop:tu,marginRight:tu,marginBottom:tu,marginLeft:tu,backgroundPositionX:tu,backgroundPositionY:tu,rotate:to,rotateX:to,rotateY:to,rotateZ:to,scale:K,scaleX:K,scaleY:K,scaleZ:K,skew:to,skewX:to,skewY:to,distance:tu,translateX:tu,translateY:tu,translateZ:tu,x:tu,y:tu,z:tu,perspective:tu,transformPerspective:tu,opacity:q,originX:td,originY:td,originZ:tu,zIndex:n_,fillOpacity:q,strokeOpacity:q,numOctaves:n_},nz={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nU=v.length;function nY(t,e,r){let{style:i,vars:n,transformOrigin:s}=t,a=!1,o=!1;for(let t in e){let r=e[t];if(b.has(t)){a=!0;continue}if(Y(t)){n[t]=r;continue}{let e=nI(r,nN[t]);t.startsWith("origin")?(o=!0,s[t]=e):i[t]=e}}if(!e.transform&&(a||r?i.transform=function(t,e,r){let i="",n=!0;for(let s=0;s<nU;s++){let a=v[s],o=t[a];if(void 0===o)continue;let l=!0;if(!(l="number"==typeof o?o===+!!a.startsWith("scale"):0===parseFloat(o))||r){let t=nI(o,nN[a]);if(!l){n=!1;let e=nz[a]||a;i+=`${e}(${t}) `}r&&(e[a]=t)}}return i=i.trim(),r?i=r(e,n?"":i):n&&(i="none"),i}(e,t.transform,r):i.transform&&(i.transform="none")),o){let{originX:t="50%",originY:e="50%",originZ:r=0}=s;i.transformOrigin=`${t} ${e} ${r}`}}let nW=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nX(t,e,r){for(let i in e)j(e[i])||nB(i,r)||(t[i]=e[i])}let nH={offset:"stroke-dashoffset",array:"stroke-dasharray"},nG={offset:"strokeDashoffset",array:"strokeDasharray"};function nq(t,{attrX:e,attrY:r,attrScale:i,pathLength:n,pathSpacing:s=1,pathOffset:a=0,...o},l,u,c){if(nY(t,o,u),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:h,style:d}=t;h.transform&&(d.transform=h.transform,delete h.transform),(d.transform||h.transformOrigin)&&(d.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),d.transform&&(d.transformBox=c?.transformBox??"fill-box",delete h.transformBox),void 0!==e&&(h.x=e),void 0!==r&&(h.y=r),void 0!==i&&(h.scale=i),void 0!==n&&function(t,e,r=1,i=0,n=!0){t.pathLength=1;let s=n?nH:nG;t[s.offset]=tu.transform(-i);let a=tu.transform(e),o=tu.transform(r);t[s.array]=`${a} ${o}`}(h,n,s,a,!1)}let nK=()=>({...nW(),attrs:{}}),nZ=t=>"string"==typeof t&&"svg"===t.toLowerCase(),nJ=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function nQ(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||nJ.has(t)}let n0=t=>!nQ(t);try{!function(t){t&&(n0=e=>e.startsWith("on")?!nQ(e):t(e))}(require("@emotion/is-prop-valid").default)}catch{}let n1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function n3(t){if("string"!=typeof t||t.includes("-"));else if(n1.indexOf(t)>-1||/[A-Z]/u.test(t))return!0;return!1}let n5=t=>(e,r)=>{let i=(0,r8.useContext)(nk),s=(0,r8.useContext)(it),o=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e},r,i,s){return{latestValues:function(t,e,r,i){let s={},o=i(t,{});for(let t in o)s[t]=im(o[t]);let{initial:l,animate:u}=t,c=nV(t),h=nj(t);e&&h&&!c&&!1!==t.inherit&&(void 0===l&&(l=e.initial),void 0===u&&(u=e.animate));let d=!!r&&!1===r.initial,p=(d=d||!1===l)?u:l;if(p&&"boolean"!=typeof p&&!n(p)){let e=Array.isArray(p)?p:[p];for(let r=0;r<e.length;r++){let i=a(t,e[r]);if(i){let{transitionEnd:t,transition:e,...r}=i;for(let t in r){let e=r[t];if(Array.isArray(e)){let t=d?e.length-1:0;e=e[t]}null!==e&&(s[t]=e)}for(let e in t)s[e]=t[e]}}}return s}(r,i,s,t),renderState:e()}})(t,e,i,s);return r?o():function(t){let e=(0,r8.useRef)(null);return null===e.current&&(e.current=t()),e.current}(o)};function n2(t,e,r){let{style:i}=t,n={};for(let s in i)(j(i[s])||e.style&&j(e.style[s])||nB(s,t)||r?.getValue(s)?.liveStyle!==void 0)&&(n[s]=i[s]);return n}let n4={useVisualState:n5({scrapeMotionValuesFromProps:n2,createRenderState:nW})};function n9(t,e,r){let i=n2(t,e,r);for(let r in t)(j(t[r])||j(e[r]))&&(i[-1!==v.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=t[r]);return i}let n6={useVisualState:n5({scrapeMotionValuesFromProps:n9,createRenderState:nK})},n7=t=>e=>e.test(t),n8=[G,tu,tl,to,th,tc,{test:t=>"auto"===t,parse:t=>t}],st=t=>n8.find(n7(t)),se=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),sr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,si=t=>/^0[^.\s]+$/u.test(t),sn=new Set(["brightness","contrast","saturate","opacity"]);function ss(t){let[e,r]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;let[i]=r.match(J)||[];if(!i)return t;let n=r.replace(i,""),s=+!!sn.has(e);return i!==r&&(s*=100),e+"("+s+n+")"}let sa=/\b([a-z-]*)\(.*?\)/gu,so={...tP,getAnimatableNone:t=>{let e=t.match(sa);return e?e.map(ss).join(" "):t}},sl={...nN,color:tf,backgroundColor:tf,outlineColor:tf,fill:tf,stroke:tf,borderColor:tf,borderTopColor:tf,borderRightColor:tf,borderBottomColor:tf,borderLeftColor:tf,filter:so,WebkitFilter:so},su=t=>sl[t];function sc(t,e){let r=su(t);return r!==so&&(r=tP),r.getAnimatableNone?r.getAnimatableNone(e):void 0}let sh=new Set(["auto","none","0"]);class sd extends eF{constructor(t,e,r,i,n){super(t,e,r,i,n,!0)}readKeyframes(){let{unresolvedKeyframes:t,element:e,name:r}=this;if(!e||!e.current)return;super.readKeyframes();for(let r=0;r<t.length;r++){let i=t[r];if("string"==typeof i&&X(i=i.trim())){let n=function t(e,r,i=1){z(i<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[n,s]=function(t){let e=sr.exec(t);if(!e)return[,];let[,r,i,n]=e;return[`--${r??i}`,n]}(e);if(!n)return;let a=window.getComputedStyle(r).getPropertyValue(n);if(a){let t=a.trim();return se(t)?parseFloat(t):t}return X(s)?t(s,r,i+1):s}(i,e.current);void 0!==n&&(t[r]=n),r===t.length-1&&(this.finalKeyframe=i)}}if(this.resolveNoneKeyframes(),!x.has(r)||2!==t.length)return;let[i,n]=t,s=st(i),a=st(n);if(s!==a)if(eA(s)&&eA(a))for(let e=0;e<t.length;e++){let r=t[e];"string"==typeof r&&(t[e]=parseFloat(r))}else eM[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:t,name:e}=this,r=[];for(let e=0;e<t.length;e++){var i;(null===t[e]||("number"==typeof(i=t[e])?0===i:null===i||"none"===i||"0"===i||si(i)))&&r.push(e)}r.length&&function(t,e,r){let i,n=0;for(;n<t.length&&!i;){let e=t[n];"string"==typeof e&&!sh.has(e)&&tb(e).values.length&&(i=t[n]),n++}if(i&&r)for(let n of e)t[n]=sc(r,i)}(t,r,e)}measureInitialState(){let{element:t,unresolvedKeyframes:e,name:r}=this;if(!t||!t.current)return;"height"===r&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=eM[r](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;let i=e[e.length-1];void 0!==i&&t.getValue(r,i).jump(i,!1)}measureEndState(){let{element:t,name:e,unresolvedKeyframes:r}=this;if(!t||!t.current)return;let i=t.getValue(e);i&&i.jump(this.measuredOrigin,!1);let n=r.length-1,s=r[n];r[n]=eM[e](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),this.removedTransforms?.length&&this.removedTransforms.forEach(([e,r])=>{t.getValue(e).set(r)}),this.resolveNoneKeyframes()}}let sp=[...n8,tf,tP],sf=t=>sp.find(n7(t)),sm={current:null},sy={current:!1},sg=new WeakMap,sv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sb{scrapeMotionValuesFromProps(t,e,r){return{}}constructor({parent:t,props:e,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:n,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=eF,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let t=A.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,f.render(this.render,!1,!0))};let{latestValues:o,renderState:l}=s;this.latestValues=o,this.baseTarget={...o},this.initialValues=e.initial?{...o}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!n,this.isControllingVariants=nV(e),this.isVariantNode=nj(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);let{willChange:u,...c}=this.scrapeMotionValuesFromProps(e,{},this);for(let t in c){let e=c[t];void 0!==o[t]&&j(e)&&e.set(o[t],!1)}}mount(t){this.current=t,sg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),sy.current||function(){if(sy.current=!0,nR)if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>sm.current=t.matches;t.addListener(e),e()}else sm.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||sm.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let t in this.projection&&this.projection.unmount(),m(this.notifyUpdate),m(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[t].clear();for(let t in this.features){let e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){let r;this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();let i=b.has(t);i&&this.onBindTransform&&this.onBindTransform();let n=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&f.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=e.on("renderRequest",this.scheduleRender);window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{n(),s(),r&&r(),e.owner&&e.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in nF){let e=nF[t];if(!e)continue;let{isEnabled:r,Feature:i}=e;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){let e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rM()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<sv.length;e++){let r=sv[e];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let i=t["on"+r];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=function(t,e,r){for(let i in e){let n=e[i],s=r[i];if(j(n))t.addValue(i,n);else if(j(s))t.addValue(i,k(n,{owner:t}));else if(s!==n)if(t.hasValue(i)){let e=t.getValue(i);!0===e.liveStyle?e.jump(n):e.hasAnimated||e.set(n)}else{let e=t.getStaticValue(i);t.addValue(i,k(void 0!==e?e:n,{owner:t}))}}for(let i in r)void 0===e[i]&&t.removeValue(i);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){let e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){let r=this.values.get(t);e!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);let e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return void 0===r&&void 0!==e&&(r=k(null===e?void 0:e,{owner:this}),this.addValue(t,r)),r}readValue(t,e){let r=void 0===this.latestValues[t]&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];return null!=r&&("string"==typeof r&&(se(r)||si(r))?r=parseFloat(r):!sf(r)&&tP.test(e)&&(r=sc(t,e)),this.setBaseTarget(t,j(r)?r.get():r)),j(r)?r.get():r}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){let e,{initial:r}=this.props;if("string"==typeof r||"object"==typeof r){let i=a(this.props,r,this.presenceContext?.custom);i&&(e=i[t])}if(r&&void 0!==e)return e;let i=this.getBaseTargetFromProps(this.props,t);return void 0===i||j(i)?void 0!==this.initialValues[t]&&void 0===e?void 0:this.baseTarget[t]:i}on(t,e){return this.events[t]||(this.events[t]=new P),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class sx extends sb{constructor(){super(...arguments),this.KeyframeResolver=sd}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:r}){delete e[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;j(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function sw(t,{style:e,vars:r},i,n){for(let s in Object.assign(t.style,e,n&&n.getProjectionStyles(i)),r)t.style.setProperty(s,r[s])}class sS extends sx{constructor(){super(...arguments),this.type="html",this.renderInstance=sw}readValueFromInstance(t,e){if(b.has(e))return this.projection?.isProjecting?ew(e):eP(t,e);{let r=window.getComputedStyle(t),i=(Y(e)?r.getPropertyValue(e):r[e])||0;return"string"==typeof i?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:e}){return r_(t,e)}build(t,e,r){nY(t,e,r.transformTemplate)}scrapeMotionValuesFromProps(t,e,r){return n2(t,e,r)}}let sP=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);class sT extends sx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rM}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(b.has(e)){let t=su(e);return t&&t.default||0}return e=sP.has(e)?e:R(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,r){return n9(t,e,r)}build(t,e,r){nq(t,e,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,e,r,i){for(let r in sw(t,e,void 0,i),e.attrs)t.setAttribute(sP.has(r)?r:R(r),e.attrs[r])}mount(t){this.isSVGTag=nZ(t.tagName),super.mount(t)}}let sA=function(t){if("undefined"==typeof Proxy)return t;let e=new Map;return new Proxy((...e)=>t(...e),{get:(r,i)=>"create"===i?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}((r4={animation:{Feature:ru},exit:{Feature:rh},inView:{Feature:nE},tap:{Feature:nx},focus:{Feature:nh},hover:{Feature:nc},pan:{Feature:r2},drag:{Feature:r3,ProjectionNode:na,MeasureLayout:iu},layout:{ProjectionNode:na,MeasureLayout:iu}},r9=(t,e)=>n3(t)?new sT(e):new sS(e,{allowProjection:t!==r8.Fragment}),function(t,{forwardMotionProps:e}={forwardMotionProps:!1}){return function({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:i,Component:n}){function s(t,s){var a,o,l;let u,c={...(0,r8.useContext)(nM),...t,layoutId:function({layoutId:t}){let e=(0,r8.useContext)(ie).id;return e&&void 0!==t?e+"-"+t:t}(t)},{isStatic:h}=c,d=function(t){let{initial:e,animate:r}=function(t,e){if(nV(t)){let{initial:e,animate:r}=t;return{initial:!1===e||rt(e)?e:void 0,animate:rt(r)?r:void 0}}return!1!==t.inherit?e:{}}(t,(0,r8.useContext)(nk));return(0,r8.useMemo)(()=>({initial:e,animate:r}),[nD(e),nD(r)])}(t),p=i(t,h);if(!h&&nR){o=0,l=0,(0,r8.useContext)(nC).strict;let t=function(t){let{drag:e,layout:r}=nF;if(!e&&!r)return{};let i={...e,...r};return{MeasureLayout:e?.isEnabled(t)||r?.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(c);u=t.MeasureLayout,d.visualElement=function(t,e,r,i,n){let{visualElement:s}=(0,r8.useContext)(nk),a=(0,r8.useContext)(nC),o=(0,r8.useContext)(it),l=(0,r8.useContext)(nM).reducedMotion,u=(0,r8.useRef)(null);i=i||a.renderer,!u.current&&i&&(u.current=i(t,{visualState:e,parent:s,props:r,presenceContext:o,blockInitialAnimation:!!o&&!1===o.initial,reducedMotionConfig:l}));let c=u.current,h=(0,r8.useContext)(ir);c&&!c.projection&&n&&("html"===c.type||"svg"===c.type)&&function(t,e,r,i){let{layoutId:n,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u,layoutCrossfade:c}=e;t.projection=new r(t.latestValues,e["data-framer-portal-id"]?void 0:function t(e){if(e)return!1!==e.options.allowProjection?e.projection:t(e.parent)}(t.parent)),t.projection.setOptions({layoutId:n,layout:s,alwaysMeasureLayout:!!a||o&&rz(o),visualElement:t,animationType:"string"==typeof s?s:"both",initialPromotionConfig:i,crossfade:c,layoutScroll:l,layoutRoot:u})}(u.current,r,n,h);let d=(0,r8.useRef)(!1);(0,r8.useInsertionEffect)(()=>{c&&d.current&&c.update(r,o)});let p=r[O],f=(0,r8.useRef)(!!p&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return n$(()=>{c&&(d.current=!0,window.MotionIsMounted=!0,c.updateFeatures(),r7.render(c.render),f.current&&c.animationState&&c.animationState.animateChanges())}),(0,r8.useEffect)(()=>{c&&(!f.current&&c.animationState&&c.animationState.animateChanges(),f.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(p)}),f.current=!1))}),c}(n,p,c,e,t.ProjectionNode)}return(0,r6.jsxs)(nk.Provider,{value:d,children:[u&&d.visualElement?(0,r6.jsx)(u,{visualElement:d.visualElement,...c}):null,r(n,t,(a=d.visualElement,(0,r8.useCallback)(t=>{t&&p.onMount&&p.onMount(t),a&&(t?a.mount(t):a.unmount()),s&&("function"==typeof s?s(t):rz(s)&&(s.current=t))},[a])),p,h,d.visualElement)]})}t&&function(t){for(let e in t)nF[e]={...nF[e],...t[e]}}(t),s.displayName=`motion.${"string"==typeof n?n:`create(${n.displayName??n.name??""})`}`;let a=(0,r8.forwardRef)(s);return a[nL]=n,a}({...n3(t)?n6:n4,preloadedFeatures:r4,useRender:function(t=!1){return(e,r,i,{latestValues:n},s)=>{let a=(n3(e)?function(t,e,r,i){let n=(0,r8.useMemo)(()=>{let r=nK();return nq(r,e,nZ(i),t.transformTemplate,t.style),{...r.attrs,style:{...r.style}}},[e]);if(t.style){let e={};nX(e,t.style,t),n.style={...e,...n.style}}return n}:function(t,e){let r={},i=function(t,e){let r=t.style||{},i={};return nX(i,r,t),Object.assign(i,function({transformTemplate:t},e){return(0,r8.useMemo)(()=>{let r=nW();return nY(r,e,t),Object.assign({},r.vars,r.style)},[e])}(t,e)),i}(t,e);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r})(r,n,s,e),o=function(t,e,r){let i={};for(let n in t)("values"!==n||"object"!=typeof t.values)&&(n0(n)||!0===r&&nQ(n)||!e&&!nQ(n)||t.draggable&&n.startsWith("onDrag"))&&(i[n]=t[n]);return i}(r,"string"==typeof e,t),l=e!==r8.Fragment?{...o,...a,ref:i}:{},{children:u}=r,c=(0,r8.useMemo)(()=>j(u)?u.get():u,[u]);return(0,r8.createElement)(e,{...l,children:c})}}(e),createVisualElement:r9,Component:t})}))},4160:(t,e,r)=>{"use strict";t.exports=r(9268)},4587:(t,e,r)=>{t.exports=r(3657)},4748:(t,e,r)=>{"use strict";r.d(e,{zW:()=>en,q7:()=>ep,GP:()=>eT});var i,n=r(7876),s=r(4232),a=r.t(s,2),o=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e));var e,r=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(r);try{i.insertRule(t,i.cssRules.length)}catch(t){}}else r.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),this.tags=[],this.ctr=0},t}(),l=Math.abs,u=String.fromCharCode,c=Object.assign;function h(t,e,r){return t.replace(e,r)}function d(t,e){return t.indexOf(e)}function p(t,e){return 0|t.charCodeAt(e)}function f(t,e,r){return t.slice(e,r)}function m(t){return t.length}function y(t,e){return e.push(t),t}var g=1,v=1,b=0,x=0,w=0,S="";function P(t,e,r,i,n,s,a){return{value:t,root:e,parent:r,type:i,props:n,children:s,line:g,column:v,length:a,return:""}}function T(t,e){return c(P("",null,null,"",null,null,0),t,{length:-t.length},e)}function A(){return w=x<b?p(S,x++):0,v++,10===w&&(v=1,g++),w}function E(){return p(S,x)}function C(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M(t){return g=v=1,b=m(S=t),x=0,[]}function k(t){var e,r;return(e=x-1,r=function t(e){for(;A();)switch(w){case e:return x;case 34:case 39:34!==e&&39!==e&&t(w);break;case 40:41===e&&t(e);break;case 92:A()}return x}(91===t?t+2:40===t?t+1:t),f(S,e,r)).trim()}var V="-ms-",j="-moz-",D="-webkit-",R="comm",O="rule",F="decl",L="@keyframes";function $(t,e){for(var r="",i=t.length,n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function B(t,e,r,i){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case F:return t.return=t.return||t.value;case R:return"";case L:return t.return=t.value+"{"+$(t.children,i)+"}";case O:t.value=t.props.join(",")}return m(r=$(t.children,i))?t.return=t.value+"{"+r+"}":""}function I(t,e,r,i,n,s,a,o,u,c,d){for(var p=n-1,m=0===n?s:[""],y=m.length,g=0,v=0,b=0;g<i;++g)for(var x=0,w=f(t,p+1,p=l(v=a[g])),S=t;x<y;++x)(S=(v>0?m[x]+" "+w:h(w,/&\f/g,m[x])).trim())&&(u[b++]=S);return P(t,e,r,0===n?O:o,u,c,d)}function _(t,e,r,i){return P(t,e,r,F,f(t,0,i),f(t,i+1,-1),i)}var N=function(t,e,r){for(var i=0,n=0;i=n,n=E(),38===i&&12===n&&(e[r]=1),!C(n);)A();return f(S,t,x)},z=function(t,e){var r=-1,i=44;do switch(C(i)){case 0:38===i&&12===E()&&(e[r]=1),t[r]+=N(x-1,e,r);break;case 2:t[r]+=k(i);break;case 4:if(44===i){t[++r]=58===E()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=u(i)}while(i=A());return t},U=function(t,e){var r;return r=z(M(t),e),S="",r},Y=new WeakMap,W=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||Y.get(r))&&!i){Y.set(t,!0);for(var n=[],s=U(e,n),a=r.props,o=0,l=0;o<s.length;o++)for(var u=0;u<a.length;u++,l++)t.props[l]=n[o]?s[o].replace(/&\f/g,a[u]):a[u]+" "+s[o]}}},X=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},H=[function(t,e,r,i){if(t.length>-1&&!t.return)switch(t.type){case F:t.return=function t(e,r){switch(45^p(e,0)?(((r<<2^p(e,0))<<2^p(e,1))<<2^p(e,2))<<2^p(e,3):0){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+j+e+V+e+e;case 6828:case 4268:return D+e+V+e+e;case 6165:return D+e+V+"flex-"+e+e;case 5187:return D+e+h(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return D+e+V+"flex-item-"+h(e,/flex-|-self/,"")+e;case 4675:return D+e+V+"flex-line-pack"+h(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+V+h(e,"shrink","negative")+e;case 5292:return D+e+V+h(e,"basis","preferred-size")+e;case 6060:return D+"box-"+h(e,"-grow","")+D+e+V+h(e,"grow","positive")+e;case 4554:return D+h(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-r>6)switch(p(e,r+1)){case 109:if(45!==p(e,r+4))break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+j+(108==p(e,r+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?t(h(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==p(e,r+1))break;case 6444:switch(p(e,m(e)-3-(~d(e,"!important")&&10))){case 107:return h(e,":",":"+D)+e;case 101:return h(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(45===p(e,14)?"inline-":"")+"box$3$1"+D+"$2$3$1"+V+"$2box$3")+e}break;case 5936:switch(p(e,r+11)){case 114:return D+e+V+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+V+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+V+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+V+e+e}return e}(t.value,t.length);break;case L:return $([T(t,{value:h(t.value,"@","@"+D)})],i);case O:if(t.length){var n,s;return n=t.props,s=function(e){var r;switch(r=e,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return $([T(t,{props:[h(e,/:(read-\w+)/,":"+j+"$1")]})],i);case"::placeholder":return $([T(t,{props:[h(e,/:(plac\w+)/,":"+D+"input-$1")]}),T(t,{props:[h(e,/:(plac\w+)/,":"+j+"$1")]}),T(t,{props:[h(e,/:(plac\w+)/,V+"input-$1")]})],i)}return""},n.map(s).join("")}}}];function G(t,e,r){var i="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var q=function(t,e,r){var i=t.key+"-"+e.name;!1===r&&void 0===t.registered[i]&&(t.registered[i]=e.styles)},K=function(t,e,r){q(t,e,r);var i=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var n=e;do t.insert(e===n?"."+i:"",n,t.sheet,!0),n=n.next;while(void 0!==n)}},Z={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},J=/[A-Z]|^ms/g,Q=/_EMO_([^_]+?)_([^]*?)_EMO_/g,tt=function(t){return 45===t.charCodeAt(1)},te=function(t){return null!=t&&"boolean"!=typeof t},tr=function(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}(function(t){return tt(t)?t:t.replace(J,"-$&").toLowerCase()}),ti=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(Q,function(t,e,r){return i={name:e,styles:r,next:i},e})}return 1===Z[t]||tt(t)||"number"!=typeof e||0===e?e:e+"px"};function tn(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return i={name:r.name,styles:r.styles,next:i},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)i={name:n.name,styles:n.styles,next:i},n=n.next;return r.styles+";"}return function(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=tn(t,e,r[n])+";";else for(var s in r){var a=r[s];if("object"!=typeof a)null!=e&&void 0!==e[a]?i+=s+"{"+e[a]+"}":te(a)&&(i+=tr(s)+":"+ti(s,a)+";");else if(Array.isArray(a)&&"string"==typeof a[0]&&(null==e||void 0===e[a[0]]))for(var o=0;o<a.length;o++)te(a[o])&&(i+=tr(s)+":"+ti(s,a[o])+";");else{var l=tn(t,e,a);switch(s){case"animation":case"animationName":i+=tr(s)+":"+l+";";break;default:i+=s+"{"+l+"}"}}}return i}(t,e,r);case"function":if(void 0!==t){var s=i,a=r(t);return i=s,tn(t,e,a)}}if(null==e)return r;var o=e[r];return void 0!==o?o:r}var ts=/label:\s*([^\s;{]+)\s*(;|$)/g;function ta(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n,s=!0,a="";i=void 0;var o=t[0];null==o||void 0===o.raw?(s=!1,a+=tn(r,e,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=tn(r,e,t[l]),s&&(a+=o[l]);ts.lastIndex=0;for(var u="";null!==(n=ts.exec(a));)u+="-"+n[1];return{name:function(t){for(var e,r=0,i=0,n=t.length;n>=4;++i,n-=4)e=(65535&(e=255&t.charCodeAt(i)|(255&t.charCodeAt(++i))<<8|(255&t.charCodeAt(++i))<<16|(255&t.charCodeAt(++i))<<24))*0x5bd1e995+((e>>>16)*59797<<16),e^=e>>>24,r=(65535&e)*0x5bd1e995+((e>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&t.charCodeAt(i+2))<<16;case 2:r^=(255&t.charCodeAt(i+1))<<8;case 1:r^=255&t.charCodeAt(i),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+u,styles:a,next:i}}var to=!!a.useInsertionEffect&&a.useInsertionEffect,tl=to||function(t){return t()};to||s.useLayoutEffect;var tu=s.createContext("undefined"!=typeof HTMLElement?function(t){var e,r,i,n,s,a=t.key;if("css"===a){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var c=t.stylisPlugins||H,b={},T=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)b[e[r]]=!0;T.push(t)});var V=(r=(e=[W,X].concat(c,[B,(i=function(t){s.insert(t)},function(t){!t.root&&(t=t.return)&&i(t)})])).length,function(t,i,n,s){for(var a="",o=0;o<r;o++)a+=e[o](t,i,n,s)||"";return a}),j=function(t){var e,r;return $((r=function t(e,r,i,n,s,a,o,l,c){for(var b,T=0,M=0,V=o,j=0,D=0,O=0,F=1,L=1,$=1,B=0,N="",z=s,U=a,Y=n,W=N;L;)switch(O=B,B=A()){case 40:if(108!=O&&58==p(W,V-1)){-1!=d(W+=h(k(B),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:W+=k(B);break;case 9:case 10:case 13:case 32:W+=function(t){for(;w=E();)if(w<33)A();else break;return C(t)>2||C(w)>3?"":" "}(O);break;case 92:W+=function(t,e){for(var r;--e&&A()&&!(w<48)&&!(w>102)&&(!(w>57)||!(w<65))&&(!(w>70)||!(w<97)););return r=x+(e<6&&32==E()&&32==A()),f(S,t,r)}(x-1,7);continue;case 47:switch(E()){case 42:case 47:y((b=function(t,e){for(;A();)if(t+w===57)break;else if(t+w===84&&47===E())break;return"/*"+f(S,e,x-1)+"*"+u(47===t?t:A())}(A(),x),P(b,r,i,R,u(w),f(b,2,-2),0)),c);break;default:W+="/"}break;case 123*F:l[T++]=m(W)*$;case 125*F:case 59:case 0:switch(B){case 0:case 125:L=0;case 59+M:-1==$&&(W=h(W,/\f/g,"")),D>0&&m(W)-V&&y(D>32?_(W+";",n,i,V-1):_(h(W," ","")+";",n,i,V-2),c);break;case 59:W+=";";default:if(y(Y=I(W,r,i,T,M,s,l,N,z=[],U=[],V),a),123===B)if(0===M)t(W,r,Y,Y,z,a,V,l,U);else switch(99===j&&110===p(W,3)?100:j){case 100:case 108:case 109:case 115:t(e,Y,Y,n&&y(I(e,Y,Y,0,0,s,l,N,s,z=[],V),U),s,U,V,l,n?z:U);break;default:t(W,Y,Y,Y,[""],U,0,l,U)}}T=M=D=0,F=$=1,N=W="",V=o;break;case 58:V=1+m(W),D=O;default:if(F<1){if(123==B)--F;else if(125==B&&0==F++&&125==(w=x>0?p(S,--x):0,v--,10===w&&(v=1,g--),w))continue}switch(W+=u(B),B*F){case 38:$=M>0?1:(W+="\f",-1);break;case 44:l[T++]=(m(W)-1)*$,$=1;break;case 64:45===E()&&(W+=k(A())),j=E(),M=V=m(N=W+=function(t){for(;!C(E());)A();return f(S,t,x)}(x)),B++;break;case 45:45===O&&2==m(W)&&(F=0)}}return a}("",null,null,null,[""],e=M(e=t),0,[0],e),S="",r),V)},D={key:a,sheet:new o({key:a,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:b,registered:{},insert:function(t,e,r,i){s=r,j(t?t+"{"+e.styles+"}":e.styles),i&&(D.inserted[e.name]=!0)}};return D.sheet.hydrate(T),D}({key:"css"}):null);tu.Provider;var tc=function(t){return(0,s.forwardRef)(function(e,r){return t(e,(0,s.useContext)(tu),r)})},th=s.createContext({}),td={}.hasOwnProperty,tp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",tf=function(t,e){var r={};for(var i in e)td.call(e,i)&&(r[i]=e[i]);return r[tp]=t,r},tm=function(t){var e=t.cache,r=t.serialized,i=t.isStringTag;return q(e,r,i),tl(function(){return K(e,r,i)}),null},ty=tc(function(t,e,r){var i=t.css;"string"==typeof i&&void 0!==e.registered[i]&&(i=e.registered[i]);var n=t[tp],a=[i],o="";"string"==typeof t.className?o=G(e.registered,a,t.className):null!=t.className&&(o=t.className+" ");var l=ta(a,void 0,s.useContext(th));o+=e.key+"-"+l.name;var u={};for(var c in t)td.call(t,c)&&"css"!==c&&c!==tp&&(u[c]=t[c]);return u.className=o,r&&(u.ref=r),s.createElement(s.Fragment,null,s.createElement(tm,{cache:e,serialized:l,isStringTag:"string"==typeof n}),s.createElement(n,u))});r(3520);var tg=n.Fragment,tv=function(t,e,r){return td.call(e,"css")?n.jsx(ty,tf(t,e),r):n.jsx(t,e,r)},tb=function(t,e){var r=arguments;if(null==e||!td.call(e,"css"))return s.createElement.apply(void 0,r);var i=r.length,n=Array(i);n[0]=ty,n[1]=tf(t,e);for(var a=2;a<i;a++)n[a]=r[a];return s.createElement.apply(null,n)};function tx(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return ta(e)}function tw(){var t=tx.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}!function(t){var e;e||(e=t.JSX||(t.JSX={}))}(tb||(tb={}));var tS=function t(e){for(var r=e.length,i=0,n="";i<r;i++){var s=e[i];if(null!=s){var a=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))a=t(s);else for(var o in a="",s)s[o]&&o&&(a&&(a+=" "),a+=o);break;default:a=s}a&&(n&&(n+=" "),n+=a)}}return n},tP=function(t){var e=t.cache,r=t.serializedArr;return tl(function(){for(var t=0;t<r.length;t++)K(e,r[t],!1)}),null},tT=tc(function(t,e){var r=!1,i=[],n=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var s=ta(r,e.registered);return i.push(s),q(e,s,!1),e.key+"-"+s.name},a={css:n,cx:function(){for(var t,r,i,s,a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=e.registered,s=G(t,i=[],r=tS(o)),i.length<2?r:s+n(i)},theme:s.useContext(th)},o=t.children(a);return r=!0,s.createElement(s.Fragment,null,s.createElement(tP,{cache:e,serializedArr:i}),o)}),tA=Object.defineProperty,tE=(t,e,r)=>e in t?tA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tC=(t,e,r)=>tE(t,"symbol"!=typeof e?e+"":e,r),tM=new Map,tk=new WeakMap,tV=0,tj=void 0;function tD(t,e,r={},i=tj){if(void 0===window.IntersectionObserver&&void 0!==i){let n=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:s,elements:a}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?!(r=t.root)?"0":(tk.has(r)||(tV+=1,tk.set(r,tV.toString())),tk.get(r)):t[e]}`}).toString(),r=tM.get(e);if(!r){let i,n=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{var r;let s=e.isIntersecting&&i.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=s),null==(r=n.get(e.target))||r.forEach(t=>{t(s,e)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:n},tM.set(e,r)}return r}(r),o=a.get(t)||[];return a.has(t)||a.set(t,o),o.push(e),s.observe(t),function(){o.splice(o.indexOf(e),1),0===o.length&&(a.delete(t),s.unobserve(t)),0===a.size&&(s.disconnect(),tM.delete(n))}}var tR=class extends s.Component{constructor(t){super(t),tC(this,"node",null),tC(this,"_unobserveCb",null),tC(this,"handleNode",t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),tC(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"==typeof this.props.children&&this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:i,delay:n,fallbackInView:s}=this.props;this._unobserveCb=tD(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:i,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}let{as:e,triggerOnce:r,threshold:i,root:n,rootMargin:a,onChange:o,skip:l,trackVisibility:u,delay:c,initialInView:h,fallbackInView:d,...p}=this.props;return s.createElement(e||"div",{ref:this.handleNode,...p},t)}};function tO({threshold:t,delay:e,trackVisibility:r,rootMargin:i,root:n,triggerOnce:a,skip:o,initialInView:l,fallbackInView:u,onChange:c}={}){var h;let[d,p]=s.useState(null),f=s.useRef(c),[m,y]=s.useState({inView:!!l,entry:void 0});f.current=c,s.useEffect(()=>{let s;if(!o&&d)return s=tD(d,(t,e)=>{y({inView:t,entry:e}),f.current&&f.current(t,e),e.isIntersecting&&a&&s&&(s(),s=void 0)},{root:n,rootMargin:i,threshold:t,trackVisibility:r,delay:e},u),()=>{s&&s()}},[Array.isArray(t)?t.toString():t,d,n,i,a,o,r,u,e]);let g=null==(h=m.entry)?void 0:h.target,v=s.useRef(void 0);d||!g||a||o||v.current===g||(v.current=g,y({inView:!!l,entry:void 0}));let b=[p,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var tF=r(4160);tw`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,tw`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,tw`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,tw`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,tw`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,tw`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let tL=tw`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,t$=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tB=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tI=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t_=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tN=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tz=tw`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tU=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tY=tw`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tW=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tX=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tH=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tG=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function tq(t){var e;return e=()=>null,r=>r?t():e()}function tK(t){return tq(()=>({opacity:0}))(t)}let tZ=t=>{let{cascade:e=!1,damping:r=.5,delay:i=0,duration:n=1e3,fraction:a=0,keyframes:o=tN,triggerOnce:l=!1,className:u,style:c,childClassName:h,childStyle:d,children:p,onVisibilityChange:f}=t,m=(0,s.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:i=tN,iterationCount:n=1}){return tx`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:o,duration:n}),[n,o]);return void 0==p?null:!function(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t}(p)?(0,tF.isFragment)(p)?tv(t0,{...t,animationStyles:m}):tv(tg,{children:s.Children.map(p,(o,p)=>{if(!(0,s.isValidElement)(o))return null;let y=i+(e?p*n*r:0);switch(o.type){case"ol":case"ul":return tv(tT,{children:({cx:e})=>tv(o.type,{...o.props,className:e(u,o.props.className),style:Object.assign({},c,o.props.style),children:tv(tZ,{...t,children:o.props.children})})});case"li":return tv(tR,{threshold:a,triggerOnce:l,onChange:f,children:({inView:t,ref:e})=>tv(tT,{children:({cx:r})=>tv(o.type,{...o.props,ref:e,className:r(h,o.props.className),css:tq(()=>m)(t),style:Object.assign({},d,o.props.style,tK(!t),{animationDelay:y+"ms"})})})});default:return tv(tR,{threshold:a,triggerOnce:l,onChange:f,children:({inView:t,ref:e})=>tv("div",{ref:e,className:u,css:tq(()=>m)(t),style:Object.assign({},c,tK(!t),{animationDelay:y+"ms"}),children:tv(tT,{children:({cx:t})=>tv(o.type,{...o.props,className:t(h,o.props.className),style:Object.assign({},d,o.props.style)})})})})}})}):tv(tQ,{...t,animationStyles:m,children:String(p)})},tJ={display:"inline-block",whiteSpace:"pre"},tQ=t=>{var e,r;let{animationStyles:i,cascade:n=!1,damping:s=.5,delay:a=0,duration:o=1e3,fraction:l=0,triggerOnce:u=!1,className:c,style:h,children:d,onVisibilityChange:p}=t,{ref:f,inView:m}=tO({triggerOnce:u,threshold:l,onChange:p});return(e=()=>tv("div",{ref:f,className:c,style:Object.assign({},h,tJ),children:d.split("").map((t,e)=>tv("span",{css:tq(()=>i)(m),style:{animationDelay:a+e*o*s+"ms"},children:t},e))}),r=()=>tv(t0,{...t,children:d}),t=>t?e():r())(n)},t0=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:i=!1,className:n,style:s,children:a,onVisibilityChange:o}=t,{ref:l,inView:u}=tO({triggerOnce:i,threshold:r,onChange:o});return tv("div",{ref:l,className:n,css:tq(()=>e)(u),style:Object.assign({},s,tK(!u)),children:a})},t1=(tw`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tw`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`),t3=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,t5=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,t2=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,t4=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,t9=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,t6=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,t7=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,t8=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,et=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ee=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,er=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ei=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,en=t=>{let{big:e=!1,direction:r,reverse:i=!1,...n}=t;return tv(tZ,{keyframes:(0,s.useMemo)(()=>(function(t,e,r){switch(r){case"bottom-left":return e?t3:t$;case"bottom-right":return e?t5:tB;case"down":return t?e?t4:t_:e?t2:tI;case"left":return t?e?t6:tz:e?t9:tN;case"right":return t?e?t8:tY:e?t7:tU;case"top-left":return e?et:tW;case"top-right":return e?ee:tX;case"up":return t?e?ei:tG:e?er:tH;default:return e?t1:tL}})(e,i,r),[e,r,i]),...n})};tw`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,tw`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;let es=tw`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ea=tw`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eo=tw`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,el=tw`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eu=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,ec=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,eh=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,ed=tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,ep=t=>{let{direction:e,reverse:r=!1,...i}=t;return tv(tZ,{keyframes:(0,s.useMemo)(()=>(function(t,e){switch(e){case"down":return t?eu:es;case"right":return t?eh:eo;case"up":return t?ed:el;default:return t?ec:ea}})(r,e),[e,r]),...i})},ef=tw`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,em=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ey=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eg=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev=tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eb=tw`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,ex=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ew=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,eS=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,eP=tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eT=t=>{let{direction:e,reverse:r=!1,...i}=t;return tv(tZ,{keyframes:(0,s.useMemo)(()=>(function(t,e){switch(e){case"down":return t?ex:em;case"left":return t?ew:ey;case"right":return t?eS:eg;case"up":return t?eP:ev;default:return t?eb:ef}})(r,e),[e,r]),...i})}},4915:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return l}}),r(546);let i=r(5284),n=r(6904),s=["-moz-initial","fill","none","scale-down",void 0];function a(t){return void 0!==t.default}function o(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function l(t,e){var r,l;let u,c,h,{src:d,sizes:p,unoptimized:f=!1,priority:m=!1,loading:y,className:g,quality:v,width:b,height:x,fill:w=!1,style:S,overrideSrc:P,onLoad:T,onLoadingComplete:A,placeholder:E="empty",blurDataURL:C,fetchPriority:M,decoding:k="async",layout:V,objectFit:j,objectPosition:D,lazyBoundary:R,lazyRoot:O,...F}=t,{imgConf:L,showAltText:$,blurComplete:B,defaultLoader:I}=e,_=L||n.imageConfigDefault;if("allSizes"in _)u=_;else{let t=[..._.deviceSizes,..._.imageSizes].sort((t,e)=>t-e),e=_.deviceSizes.sort((t,e)=>t-e),i=null==(r=_.qualities)?void 0:r.sort((t,e)=>t-e);u={..._,allSizes:t,deviceSizes:e,qualities:i}}if(void 0===I)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let N=F.loader||I;delete F.loader,delete F.srcSet;let z="__next_img_default"in N;if(z){if("custom"===u.loader)throw Object.defineProperty(Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let t=N;N=e=>{let{config:r,...i}=e;return t(i)}}if(V){"fill"===V&&(w=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[V];t&&(S={...S,...t});let e={responsive:"100vw",fill:"100vw"}[V];e&&!p&&(p=e)}let U="",Y=o(b),W=o(x);if((l=d)&&"object"==typeof l&&(a(l)||void 0!==l.src)){let t=a(d)?d.default:d;if(!t.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(c=t.blurWidth,h=t.blurHeight,C=C||t.blurDataURL,U=t.src,!w)if(Y||W){if(Y&&!W){let e=Y/t.width;W=Math.round(t.height*e)}else if(!Y&&W){let e=W/t.height;Y=Math.round(t.width*e)}}else Y=t.width,W=t.height}let X=!m&&("lazy"===y||void 0===y);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,X=!1),u.unoptimized&&(f=!0),z&&!u.dangerouslyAllowSVG&&d.split("?",1)[0].endsWith(".svg")&&(f=!0);let H=o(v),G=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:D}:{},$?{}:{color:"transparent"},S),q=B||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:Y,heightInt:W,blurWidth:c,blurHeight:h,blurDataURL:C||"",objectFit:G.objectFit})+'")':'url("'+E+'")',K=s.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,Z=q?{backgroundSize:K,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(t){let{config:e,src:r,unoptimized:i,width:n,quality:s,sizes:a,loader:o}=t;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(t,e,r){let{deviceSizes:i,allSizes:n}=t;if(r){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let i;i=t.exec(r);)e.push(parseInt(i[2]));if(e.length){let t=.01*Math.min(...e);return{widths:n.filter(e=>e>=i[0]*t),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof e?{widths:i,kind:"w"}:{widths:[...new Set([e,2*e].map(t=>n.find(e=>e>=t)||n[n.length-1]))],kind:"x"}}(e,n,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((t,i)=>o({config:e,src:r,quality:s,width:t})+" "+("w"===u?t:i+1)+u).join(", "),src:o({config:e,src:r,quality:s,width:l[c]})}}({config:u,src:d,unoptimized:f,width:Y,quality:H,sizes:p,loader:N});return{props:{...F,loading:X?"lazy":y,fetchPriority:M,width:Y,height:W,decoding:k,className:g,style:{...G,...Z},sizes:J.sizes,srcSet:J.srcSet,src:P||J.src},meta:{unoptimized:f,priority:m,placeholder:E,fill:w}}}},5284:(t,e)=>{"use strict";function r(t){let{widthInt:e,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:a}=t,o=i?40*i:e,l=n?40*n:r,u=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7225:(t,e,r)=>{"use strict";t.exports=r(789)},9268:(t,e)=>{"use strict";var r,i=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen");Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case s:case o:case a:case d:case p:return t;default:switch(t=t&&t.$$typeof){case c:case u:case h:case m:case f:case l:return t;default:return e}}case n:return e}}}(t)===s}}}]);