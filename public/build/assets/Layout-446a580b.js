import{g as wa,R as tn,a as E,j as h,F as Aa}from"./app-b9c4f721.js";function pn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function u(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?pn(Object(a),!0).forEach(function(e){C(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):pn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function Oa(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function bn(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function Ca(t,n,a){return n&&bn(t.prototype,n),a&&bn(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function nn(t,n){return Pa(t)||Ea(t,n)||Hn(t,n)||_a()}function ct(t){return Sa(t)||Na(t)||Hn(t)||Ia()}function Sa(t){if(Array.isArray(t))return Yt(t)}function Pa(t){if(Array.isArray(t))return t}function Na(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ea(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(e.push(o.value),!(n&&e.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function Hn(t,n){if(t){if(typeof t=="string")return Yt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Yt(t,n)}}function Yt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function Ia(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gn=function(){},an={},Un={},Wn=null,Vn={mark:gn,measure:gn};try{typeof window<"u"&&(an=window),typeof document<"u"&&(Un=document),typeof MutationObserver<"u"&&(Wn=MutationObserver),typeof performance<"u"&&(Vn=performance)}catch{}var Ta=an.navigator||{},hn=Ta.userAgent,yn=hn===void 0?"":hn,$=an,y=Un,kn=Wn,vt=Vn;$.document;var F=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Gn=~yn.indexOf("MSIE")||~yn.indexOf("Trident/"),pt,bt,gt,ht,yt,L="___FONT_AWESOME___",$t=16,Xn="fa",Bn="svg-inline--fa",B="data-fa-i2svg",Ht="data-fa-pseudo-element",Ma="data-fa-pseudo-element-pending",en="data-prefix",rn="data-icon",xn="fontawesome-i2svg",La="async",za=["HTML","HEAD","STYLE","SCRIPT"],qn=function(){try{return!0}catch{return!1}}(),g="classic",k="sharp",on=[g,k];function ut(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[g]}})}var it=ut((pt={},C(pt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(pt,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pt)),ot=ut((bt={},C(bt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(bt,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bt)),st=ut((gt={},C(gt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(gt,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gt)),Ra=ut((ht={},C(ht,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(ht,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ht)),Fa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Kn="fa-layers-text",ja=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Da=ut((yt={},C(yt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(yt,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),yt)),Zn=[1,2,3,4,5,6,7,8,9,10],Ya=Zn.concat([11,12,13,14,15,16,17,18,19,20]),$a=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(ot[g]).map(ft.add.bind(ft));Object.keys(ot[k]).map(ft.add.bind(ft));var Ha=[].concat(on,ct(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(Zn.map(function(t){return"".concat(t,"x")})).concat(Ya.map(function(t){return"w-".concat(t)})),et=$.FontAwesomeConfig||{};function Ua(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Wa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Va=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Va.forEach(function(t){var n=nn(t,2),a=n[0],e=n[1],r=Wa(Ua(a));r!=null&&(et[e]=r)})}var Qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};et.familyPrefix&&(et.cssPrefix=et.familyPrefix);var tt=u(u({},Qn),et);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(Qn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){tt[t]=a,rt.forEach(function(e){return e(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){tt.cssPrefix=n,rt.forEach(function(a){return a(d)})},get:function(){return tt.cssPrefix}});$.FontAwesomeConfig=d;var rt=[];function Ga(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var D=$t,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xa(t){if(!(!t||!F)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=y.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return y.head.insertBefore(n,e),t}}var Ba="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var t=12,n="";t-- >0;)n+=Ba[Math.random()*62|0];return n}function nt(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function sn(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Jn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qa(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(Jn(t[a]),'" ')},"").trim()}function It(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function fn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function Ka(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Za(t){var n=t.transform,a=t.width,e=a===void 0?$t:a,r=t.height,i=r===void 0?$t:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Gn?f+="translate(".concat(n.x/D-e/2,"em, ").concat(n.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/D,"em), calc(-50% + ").concat(n.y/D,"em)) "):f+="translate(".concat(n.x/D,"em, ").concat(n.y/D,"em) "),f+="scale(".concat(n.size/D*(n.flipX?-1:1),", ").concat(n.size/D*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Qa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ta(){var t=Xn,n=Bn,a=d.cssPrefix,e=d.replacementClass,r=Qa;if(a!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var wn=!1;function zt(){d.autoAddCss&&!wn&&(Xa(ta()),wn=!0)}var Ja={mixout:function(){return{dom:{css:ta,insertCss:zt}}},hooks:function(){return{beforeDOMElementCreation:function(){zt()},beforeI2svg:function(){zt()}}}},z=$||{};z[L]||(z[L]={});z[L].styles||(z[L].styles={});z[L].hooks||(z[L].hooks={});z[L].shims||(z[L].shims=[]);var T=z[L],na=[],te=function t(){y.removeEventListener("DOMContentLoaded",t),Pt=1,na.map(function(n){return n()})},Pt=!1;F&&(Pt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Pt||y.addEventListener("DOMContentLoaded",te));function ne(t){F&&(Pt?setTimeout(t,0):na.push(t))}function mt(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Jn(t):"<".concat(n," ").concat(qa(e),">").concat(i.map(mt).join(""),"</").concat(n,">")}function An(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var ae=function(n,a){return function(e,r,i,o){return n.call(a,e,r,i,o)}},Rt=function(n,a,e,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ae(a,r):a,f,l,c;for(e===void 0?(f=1,c=n[i[0]]):(f=0,c=e);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function ee(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=t.charCodeAt(a++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function Ut(t){var n=ee(t);return n.length===1?n[0].toString(16):null}function re(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function On(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Wt(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=On(n);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,On(n)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Wt("fa",n)}var kt,xt,wt,K=T.styles,ie=T.shims,oe=(kt={},C(kt,g,Object.values(st[g])),C(kt,k,Object.values(st[k])),kt),ln=null,aa={},ea={},ra={},ia={},oa={},se=(xt={},C(xt,g,Object.keys(it[g])),C(xt,k,Object.keys(it[k])),xt);function fe(t){return~Ha.indexOf(t)}function le(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!fe(r)?r:null}var sa=function(){var n=function(i){return Rt(K,function(o,s,f){return o[f]=Rt(s,i,{}),o},{})};aa=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),ea=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),oa=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in K||d.autoFetchSvg,e=Rt(ie,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ra=e.names,ia=e.unicodes,ln=_t(d.styleDefault,{family:d.familyDefault})};Ga(function(t){ln=_t(t.styleDefault,{family:d.familyDefault})});sa();function cn(t,n){return(aa[t]||{})[n]}function ce(t,n){return(ea[t]||{})[n]}function X(t,n){return(oa[t]||{})[n]}function fa(t){return ra[t]||{prefix:null,iconName:null}}function ue(t){var n=ia[t],a=cn("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return ln}var un=function(){return{prefix:null,iconName:null,rest:[]}};function _t(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?g:a,r=it[e][t],i=ot[e][t]||ot[e][r],o=t in T.styles?t:null;return i||o||null}var Cn=(wt={},C(wt,g,Object.keys(st[g])),C(wt,k,Object.keys(st[k])),wt);function Tt(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(n={},C(n,g,"".concat(d.cssPrefix,"-").concat(g)),C(n,k,"".concat(d.cssPrefix,"-").concat(k)),n),o=null,s=g;(t.includes(i[g])||t.some(function(l){return Cn[g].includes(l)}))&&(s=g),(t.includes(i[k])||t.some(function(l){return Cn[k].includes(l)}))&&(s=k);var f=t.reduce(function(l,c){var m=le(d.cssPrefix,c);if(K[c]?(c=oe[s].includes(c)?Ra[s][c]:c,o=c,l.prefix=c):se[s].indexOf(c)>-1?(o=c,l.prefix=_t(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[g]&&c!==i[k]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?fa(l.iconName):{},b=X(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||b||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},un());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===k&&(K.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var me=function(){function t(){Oa(this,t),this.definitions={}}return Ca(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Wt(s,o[s]);var f=st[g][s];f&&Wt(f,o[s]),sa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(a[s][m]=l)}),a[s][f]=l}),a}}]),t}(),Sn=[],Z={},J={},de=Object.keys(J);function ve(t,n){var a=n.mixoutsTo;return Sn=t,Z={},Object.keys(J).forEach(function(e){de.indexOf(e)===-1&&delete J[e]}),Sn.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),St(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}e.provides&&e.provides(J)}),a}function Vt(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function q(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=Z[t]||[];r.forEach(function(i){i.apply(null,a)})}function R(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,n):void 0}function Gt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||H();if(n)return n=X(a,n)||n,An(la.definitions,a,n)||An(T.styles,a,n)}var la=new me,pe=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},be={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(q("beforeI2svg",n),R("pseudoElements2svg",n),R("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ne(function(){he({autoReplaceSvgRoot:a}),q("watch",n)})}},ge={icon:function(n){if(n===null)return null;if(St(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=_t(n[0]);return{prefix:e,iconName:X(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Fa))){var r=Tt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:X(i,n)||n}}}},_={noAuto:pe,config:d,dom:be,parse:ge,library:la,findIconDefinition:Gt,toHtml:mt},he=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?y:a;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&_.dom.i2svg({node:e})};function Mt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return mt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var e=y.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ye(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(fn(o)&&a.found&&!e.found){var s=a.width,f=a.height,l={x:s/f/2,y:.5};r.style=It(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ke(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function mn(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,A=e.found?e:a,P=A.width,x=A.height,N=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(x)})},I=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/x*16*.0625,"em")}:{};b&&(O.attributes[B]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||lt())},children:[f]}),delete O.attributes.title);var S=u(u({},O),{},{prefix:r,iconName:i,main:a,mask:e,maskId:l,transform:o,symbol:s,styles:u(u({},I),m.styles)}),W=e.found&&a.found?R("generateAbstractMask",S)||{children:[],attributes:{}}:R("generateAbstractIcon",S)||{children:[],attributes:{}},V=W.children,Lt=W.attributes;return S.children=V,S.attributes=Lt,s?ke(S):ye(S)}function Pn(t){var n=t.content,a=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[B]="");var c=u({},o.styles);fn(r)&&(c.transform=Za({transform:r,startCentered:!0,width:a,height:e}),c["-webkit-transform"]=c.transform);var m=It(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function xe(t){var n=t.content,a=t.title,e=t.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=It(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Ft=T.styles;function Xt(t){var n=t[0],a=t[1],e=t.slice(4),r=nn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:o}}var we={found:!1,width:512,height:512};function Ae(t,n){!qn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Bt(t,n){var a=n;return n==="fa"&&d.styleDefault!==null&&(n=H()),new Promise(function(e,r){if(R("missingIconAbstract"),a==="fa"){var i=fa(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Ft[n]&&Ft[n][t]){var o=Ft[n][t];return e(Xt(o))}Ae(t,n),e(u(u({},we),{},{icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var Nn=function(){},qt=d.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:Nn,measure:Nn},at='FA "6.5.1"',Oe=function(n){return qt.mark("".concat(at," ").concat(n," begins")),function(){return ca(n)}},ca=function(n){qt.mark("".concat(at," ").concat(n," ends")),qt.measure("".concat(at," ").concat(n),"".concat(at," ").concat(n," begins"),"".concat(at," ").concat(n," ends"))},dn={begin:Oe,end:ca},At=function(){};function En(t){var n=t.getAttribute?t.getAttribute(B):null;return typeof n=="string"}function Ce(t){var n=t.getAttribute?t.getAttribute(en):null,a=t.getAttribute?t.getAttribute(rn):null;return n&&a}function Se(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Pe(){if(d.autoReplaceSvg===!0)return Ot.replace;var t=Ot[d.autoReplaceSvg];return t||Ot.replace}function Ne(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ee(t){return y.createElement(t)}function ua(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?Ne:Ee:a;if(typeof t=="string")return y.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ua(o,{ceFn:e}))}),r}function Ie(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ot={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(ua(r),a)}),a.getAttribute(B)===null&&d.keepOriginalSource){var e=y.createComment(Ie(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~sn(a).indexOf(d.replacementClass))return Ot.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return mt(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function In(t){t()}function ma(t,n){var a=typeof n=="function"?n:At;if(t.length===0)a();else{var e=In;d.mutateApproach===La&&(e=$.requestAnimationFrame||In),e(function(){var r=Pe(),i=dn.begin("mutate");t.map(r),i(),a()})}}var vn=!1;function da(){vn=!0}function Kt(){vn=!1}var Nt=null;function _n(t){if(kn&&d.observeMutations){var n=t.treeCallback,a=n===void 0?At:n,e=t.nodeCallback,r=e===void 0?At:e,i=t.pseudoElementsCallback,o=i===void 0?At:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Nt=new kn(function(l){if(!vn){var c=H();nt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!En(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&En(m.target)&&~$a.indexOf(m.attributeName))if(m.attributeName==="class"&&Ce(m.target)){var v=Tt(sn(m.target)),b=v.prefix,A=v.iconName;m.target.setAttribute(en,b||c),A&&m.target.setAttribute(rn,A)}else Se(m.target)&&r(m.target)})}}),F&&Nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _e(){Nt&&Nt.disconnect()}function Te(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function Me(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Tt(sn(t));return r.prefix||(r.prefix=H()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=ce(r.prefix,t.innerText)||cn(r.prefix,Ut(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Le(t){var n=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return d.autoA11y&&(a?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||lt()):(n["aria-hidden"]="true",n.focusable="false")),n}function ze(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Me(t),e=a.iconName,r=a.prefix,i=a.rest,o=Le(t),s=Vt("parseNodeAttributes",{},t),f=n.styleParser?Te(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Re=T.styles;function va(t){var n=d.autoReplaceSvg==="nest"?Tn(t,{styleParser:!1}):Tn(t);return~n.extra.classes.indexOf(Kn)?R("generateLayersText",t,n):R("generateSvgReplacementMutation",t,n)}var U=new Set;on.map(function(t){U.add("fa-".concat(t))});Object.keys(it[g]).map(U.add.bind(U));Object.keys(it[k]).map(U.add.bind(U));U=ct(U);function Mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var a=y.documentElement.classList,e=function(m){return a.add("".concat(xn,"-").concat(m))},r=function(m){return a.remove("".concat(xn,"-").concat(m))},i=d.autoFetchSvg?U:on.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Re));i.includes("fa")||i.push("fa");var o=[".".concat(Kn,":not([").concat(B,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=dn.begin("onTree"),l=s.reduce(function(c,m){try{var v=va(m);v&&c.push(v)}catch(b){qn||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){ma(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function Fe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;va(t).then(function(a){a&&ma([a],n)})}function je(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Gt(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Gt(r||{})),t(e,u(u({},a),{},{mask:r}))}}var De=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?M:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,l=a.maskId,c=l===void 0?null:l,m=a.title,v=m===void 0?null:m,b=a.titleId,A=b===void 0?null:b,P=a.classes,x=P===void 0?[]:P,N=a.attributes,w=N===void 0?{}:N,O=a.styles,I=O===void 0?{}:O;if(n){var S=n.prefix,W=n.iconName,V=n.icon;return Mt(u({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:a}),d.autoA11y&&(v?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||lt()):(w["aria-hidden"]="true",w.focusable="false")),mn({icons:{main:Xt(V),mask:f?Xt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:W,transform:u(u({},M),r),symbol:o,title:v,maskId:c,titleId:A,extra:{attributes:w,styles:I,classes:x}})})}},Ye={mixout:function(){return{icon:je(De)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Mn,a.nodeCallback=Fe,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?y:e,i=a.callback,o=i===void 0?function(){}:i;return Mn(r,o)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,l=e.symbol,c=e.mask,m=e.maskId,v=e.extra;return new Promise(function(b,A){Promise.all([Bt(r,s),c.iconName?Bt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var x=nn(P,2),N=x[0],w=x[1];b([a,mn({icons:{main:N,mask:w},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=It(s);f.length>0&&(r.style=f);var l;return fn(o)&&(l=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(l||i.icon),{children:e,attributes:r}}}},$e={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Mt({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ct(i)).join(" ")},children:o}]})}}}},He={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,l=f===void 0?{}:f,c=e.styles,m=c===void 0?{}:c;return Mt({type:"counter",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:e}),xe({content:a.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ct(s))}})})}}}},Ue={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?M:r,o=e.title,s=o===void 0?null:o,f=e.classes,l=f===void 0?[]:f,c=e.attributes,m=c===void 0?{}:c,v=e.styles,b=v===void 0?{}:v;return Mt({type:"text",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:e}),Pn({content:a,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ct(l))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Gn){var l=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Pn({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},We=new RegExp('"',"ug"),Ln=[1105920,1112319];function Ve(t){var n=t.replace(We,""),a=re(n,0),e=a>=Ln[0]&&a<=Ln[1],r=n.length===2?n[0]===n[1]:!1;return{value:Ut(r?n[0]:n),isSecondary:e||r}}function zn(t,n){var a="".concat(Ma).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var i=nt(t.children),o=i.filter(function(V){return V.getAttribute(Ht)===n})[0],s=$.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(ja),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?k:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ot[v][f[2].toLowerCase()]:Da[v][l],A=Ve(m),P=A.value,x=A.isSecondary,N=f[0].startsWith("FontAwesome"),w=cn(b,P),O=w;if(N){var I=ue(P);I.iconName&&I.prefix&&(w=I.iconName,b=I.prefix)}if(w&&!x&&(!o||o.getAttribute(en)!==b||o.getAttribute(rn)!==O)){t.setAttribute(a,O),o&&t.removeChild(o);var S=ze(),W=S.extra;W.attributes[Ht]=n,Bt(w,b).then(function(V){var Lt=mn(u(u({},S),{},{icons:{main:V,mask:un()},prefix:b,iconName:O,extra:W,watchable:!0})),j=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Lt.map(function(xa){return mt(xa)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Ge(t){return Promise.all([zn(t,"::before"),zn(t,"::after")])}function Xe(t){return t.parentNode!==document.head&&!~za.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Rn(t){if(F)return new Promise(function(n,a){var e=nt(t.querySelectorAll("*")).filter(Xe).map(Ge),r=dn.begin("searchPseudoElements");da(),Promise.all(e).then(function(){r(),Kt(),n()}).catch(function(){r(),Kt(),a()})})}var Be={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Rn,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?y:e;d.searchPseudoElements&&Rn(r)}}},Fn=!1,qe={mixout:function(){return{dom:{unwatch:function(){da(),Fn=!0}}}},hooks:function(){return{bootstrap:function(){_n(Vt("mutationObserverCallbacks",{}))},noAuto:function(){_e()},watch:function(a){var e=a.observeMutationsRoot;Fn?Kt():_n(Vt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},jn=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Ke={mixout:function(){return{parse:{transform:function(a){return jn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=jn(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),b.path)}]}]}}}},jt={x:0,y:0,width:"100%",height:"100%"};function Dn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ze(t){return t.tag==="g"?t.children:[t]}var Qe={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):un();return i.prefix||(i.prefix=H()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,b=Ka({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},jt),{},{fill:"white"})},P=c.children?{children:c.children.map(Dn)}:{},x={tag:"g",attributes:u({},b.inner),children:[Dn(u({tag:c.tag,attributes:u(u({},c.attributes),b.path)},P))]},N={tag:"g",attributes:u({},b.outer),children:[x]},w="mask-".concat(s||lt()),O="clip-".concat(s||lt()),I={tag:"mask",attributes:u(u({},jt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,N]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Ze(v)},I]};return e.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},jt)}),{children:e,attributes:r}}}},Je={provides:function(n){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},tr={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},nr=[Ja,Ye,$e,He,Ue,Be,qe,Ke,Qe,Je,tr];ve(nr,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;var Zt=_.parse;_.findIconDefinition;_.toHtml;var ar=_.icon;_.layer;_.text;_.counter;var pa={exports:{}},er="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rr=er,ir=rr;function ba(){}function ga(){}ga.resetWarningCache=ba;var or=function(){function t(e,r,i,o,s,f){if(f!==ir){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function n(){return t}var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:ga,resetWarningCache:ba};return a.PropTypes=a,a};pa.exports=or();var sr=pa.exports;const p=wa(sr);function Yn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function Y(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(a),!0).forEach(function(e){Q(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Yn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Et(t)}function Q(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function fr(t,n){if(t==null)return{};var a={},e=Object.keys(t),r,i;for(i=0;i<e.length;i++)r=e[i],!(n.indexOf(r)>=0)&&(a[r]=t[r]);return a}function lr(t,n){if(t==null)return{};var a=fr(t,n),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function Qt(t){return cr(t)||ur(t)||mr(t)||dr()}function cr(t){if(Array.isArray(t))return Jt(t)}function ur(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mr(t,n){if(t){if(typeof t=="string")return Jt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Jt(t,n)}}function Jt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(t){var n,a=t.beat,e=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,A=t.border,P=t.listItem,x=t.flip,N=t.size,w=t.rotation,O=t.pull,I=(n={"fa-beat":a,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":A,"fa-li":P,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},Q(n,"fa-".concat(N),typeof N<"u"&&N!==null),Q(n,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),Q(n,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Q(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(I).map(function(S){return I[S]?S:null}).filter(function(S){return S})}function pr(t){return t=t-0,t===t}function ha(t){return pr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var br=["style"];function gr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function hr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,a){var e=a.indexOf(":"),r=ha(a.slice(0,e)),i=a.slice(e+1).trim();return r.startsWith("webkit")?n[gr(r)]=i:n[r]=i,n},{})}function ya(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(f){return ya(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var c=n.attributes[l];switch(l){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=hr(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[ha(l)]=c}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=lr(a,br);return r.attrs.style=Y(Y({},r.attrs.style),o),t.apply(void 0,[n.tag,Y(Y({},r.attrs),s)].concat(Qt(e)))}var ka=!1;try{ka=!0}catch{}function yr(){if(!ka&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $n(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zt.icon)return Zt.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Dt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Q({},t,n):{}}var dt=tn.forwardRef(function(t,n){var a=t.icon,e=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=$n(a),c=Dt("classes",[].concat(Qt(vr(t)),Qt(i.split(" ")))),m=Dt("transform",typeof t.transform=="string"?Zt.transform(t.transform):t.transform),v=Dt("mask",$n(e)),b=ar(l,Y(Y(Y(Y({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return yr("Could not find icon",l),null;var A=b.abstract,P={ref:n};return Object.keys(t).forEach(function(x){dt.defaultProps.hasOwnProperty(x)||(P[x]=t[x])}),kr(A[0],P)});dt.displayName="FontAwesomeIcon";dt.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};dt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var kr=ya.bind(null,tn.createElement),xr={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},zr={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},wr={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ar={prefix:"fas",iconName:"map-location-dot",icon:[576,512,["map-marked-alt"],"f5a0","M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},Or=Ar,Rr={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Cr={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Sr=Cr,Pr={prefix:"fas",iconName:"gun",icon:[576,512,[],"e19b","M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96V208c0 17.7 14.3 32 32 32H42c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352H321.4c23.7 0 44.8-14.9 52.7-37.2L400.9 240H432c8.5 0 16.6-3.4 22.6-9.4L477.3 208H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H528V56zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};const Nr=({handleIsOpen:t})=>h("div",{className:"nav__name",onClick:t,style:{cursor:"pointer"},children:h("img",{src:"/img/logo/image.png",alt:"logo"})}),Ct=({url:t,name:n,icon:a,active:e=!1,navIsOpen:r=!1})=>h("li",{className:"navbar-list_item",children:E("a",{href:t,className:e?"active":"",children:[h(dt,{icon:a,className:"navbar-list_item_icon"}),r&&h("span",{children:n})]})}),Er=({isAuth:t=!1,isOpen:n})=>E("div",{className:"navbar-list_footer",children:[h(Ct,{url:t?"/logout":"/auth/redirect",name:t?"Logout":"Login",icon:t?xr:wr,navIsOpen:n}),h("div",{className:"navbar-list_footer-copyright",children:n?E(Aa,{children:[E("span",{children:["© 2023 - ",new Date().getFullYear()]}),h("span",{children:"Khimaira"})]}):E("span",{children:["© ",new Date().getFullYear()]})})]}),Ir=({page:t,isAuth:n})=>{const[a,e]=tn.useState(!1);return E("div",{className:`navbar-container ${a?"open":""}`,children:[h(Nr,{handleIsOpen:()=>e(!a)}),E("div",{className:"navbar-list_container",children:[E("ul",{className:"navbar-list",children:[h(Ct,{url:"/home",name:"Home",icon:Sr,active:t==="home",navIsOpen:a}),h(Ct,{url:"/test/maps",name:"Maps",icon:Or,active:t==="maps",navIsOpen:a}),h(Ct,{url:"/test/ammo",name:"Ammo",icon:Pr,active:t==="ammo",navIsOpen:a})]}),h(Er,{isAuth:n,isOpen:a})]})]})},_r=()=>h("div",{className:"absolute w-full h-full flex justify-center items-center bg-gray-500 dark:bg-gray-800 bg-opacity-50 z-50",children:E("div",{role:"status",children:[E("svg",{"aria-hidden":"true",class:"w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),h("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),h("span",{class:"sr-only",children:"Loading..."})]})}),Tr=({title:t,user:n})=>E("header",{className:"layout-header_container",children:[h("div",{className:"layout-header_content-title",children:h("h2",{children:t})}),n&&E("div",{className:"layout-header_content-user",children:[h("span",{children:n==null?void 0:n.name}),h("img",{src:n==null?void 0:n.avatar,alt:n==null?void 0:n.name})]})]}),Mr=({children:t,page:n,title:a,user:e=null,isLoad:r=!1})=>E("div",{className:"layout-container",children:[r&&h(_r,{}),h(Ir,{page:n,isAuth:e!==null}),E("div",{className:"layout-content_container",children:[h(Tr,{title:a,user:e}),h("div",{className:"layout-content",children:t})]})]}),Fr=Mr;export{dt as F,Fr as L,Rr as a,zr as f};
