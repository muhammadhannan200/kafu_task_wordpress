(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5432],{4498:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Block:()=>d,default:()=>f});var n=o(9307),r=o(5736),l=o(4184),s=o.n(l),c=o(711),a=o(2864),i=o(3611),u=o(721);o(1314);const d=t=>{const{className:e,align:o}=t,l=(0,i.F)(t),{parentClassName:u}=(0,a.useInnerBlockLayoutContext)(),{product:d}=(0,a.useProductDataContext)();if(!(d.id&&d.on_sale||t.isDescendentOfSingleProductTemplate))return null;const f="string"==typeof o?`wc-block-components-product-sale-badge--align-${o}`:"";return(0,n.createElement)("div",{className:s()("wc-block-components-product-sale-badge",e,f,{[`${u}__product-onsale`]:u},l.className),style:l.style},(0,n.createElement)(c.Label,{label:(0,r.__)("Sale","woocommerce"),screenReaderLabel:(0,r.__)("Product on sale","woocommerce")}))},f=(0,u.withProductDataContext)(d)},3611:(t,e,o)=>{"use strict";o.d(e,{F:()=>i});var n=o(4184),r=o.n(n),l=o(7884),s=o(2646),c=o(1473),a=o(2661);const i=t=>{const e=(t=>{const e=(0,l.Kn)(t)?t:{style:{}};let o=e.style;return(0,s.H)(o)&&(o=JSON.parse(o)||{}),(0,l.Kn)(o)||(o={}),{...e,style:o}})(t),o=(0,a.vc)(e),n=(0,a.l8)(e),i=(0,a.su)(e),u=(0,c.f)(e);return{className:r()(u.className,o.className,n.className,i.className),style:{...u.style,...o.style,...n.style,...i.style}}}},1473:(t,e,o)=>{"use strict";o.d(e,{f:()=>l});var n=o(7884),r=o(2646);const l=t=>{const e=(0,n.Kn)(t.style.typography)?t.style.typography:{},o=(0,r.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:o,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,o)=>{"use strict";o.d(e,{l8:()=>d,su:()=>f,vc:()=>u});var n=o(4184),r=o.n(n),l=o(9784),s=o(2289),c=o(7884);function a(t={}){const e={};return(0,s.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,l.o)(e)}-${t}`:""}function u(t){var e,o,n,l,s,u,d;const{backgroundColor:f,textColor:p,gradient:v,style:g}=t,y=i("background-color",f),b=i("color",p),m=function(t){if(t)return`has-${t}-gradient-background`}(v),h=m||(null==g||null===(e=g.color)||void 0===e?void 0:e.gradient);return{className:r()(b,m,{[y]:!h&&!!y,"has-text-color":p||(null==g||null===(o=g.color)||void 0===o?void 0:o.text),"has-background":f||(null==g||null===(n=g.color)||void 0===n?void 0:n.background)||v||(null==g||null===(l=g.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,c.Kn)(null==g||null===(s=g.elements)||void 0===s?void 0:s.link)?null==g||null===(u=g.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==g?void 0:g.color)||{}})}}function d(t){var e;const o=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:o,style:n}=t,l=o?i("border-color",o):"";return r()({"has-border-color":!!o||!(null==n||null===(e=n.border)||void 0===e||!e.color),[l]:!!l})}(t),style:a({border:o})}}function f(t){var e;return{className:void 0,style:a({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,o)=>{"use strict";o.d(e,{F:()=>n});const n=t=>null===t},7884:(t,e,o)=>{"use strict";o.d(e,{$n:()=>l,Kn:()=>r});var n=o(8519);const r=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function l(t,e){return r(t)&&e in t}},2646:(t,e,o)=>{"use strict";o.d(e,{H:()=>n});const n=t=>"string"==typeof t},1290:(t,e,o)=>{"use strict";o.d(e,{$:()=>l});var n=o(7582),r=o(307);function l(t,e){return void 0===e&&(e={}),(0,r.B)(t,(0,n.pi)({delimiter:"."},e))}},1314:()=>{},9562:(t,e,o)=>{"use strict";function n(t){return t.toLowerCase()}o.d(e,{U:()=>n})},307:(t,e,o)=>{"use strict";o.d(e,{B:()=>s});var n=o(9562),r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function s(t,e){void 0===e&&(e={});for(var o=e.splitRegexp,s=void 0===o?r:o,a=e.stripRegexp,i=void 0===a?l:a,u=e.transform,d=void 0===u?n.U:u,f=e.delimiter,p=void 0===f?" ":f,v=c(c(t,s,"$1\0$2"),i,"\0"),g=0,y=v.length;"\0"===v.charAt(g);)g++;for(;"\0"===v.charAt(y-1);)y--;return v.slice(g,y).split("\0").map(d).join(p)}function c(t,e,o){return e instanceof RegExp?t.replace(e,o):e.reduce((function(t,e){return t.replace(e,o)}),t)}},9784:(t,e,o)=>{"use strict";o.d(e,{o:()=>l});var n=o(7582),r=o(1290);function l(t,e){return void 0===e&&(e={}),(0,r.$)(t,(0,n.pi)({delimiter:"-"},e))}},7582:(t,e,o)=>{"use strict";o.d(e,{pi:()=>n});var n=function(){return n=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);