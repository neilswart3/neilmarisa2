if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-68d819e8"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"lzYuZHfkoYQjKljUc5wbo"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.d545ed218c2dbb981c27.js",revision:"b418237f770df0471b5e5f02095690e8"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.a0ba1f85e847bdaaee37.js",revision:"7b654d5a335e03616b06cc0db4a39a78"},{url:"/_next/static/chunks/framework.8124b1ac1537ea0fac2e.js",revision:"34da50bf2f234c3162f92c7406756c59"},{url:"/_next/static/chunks/main-d4fd723193554ee38692.js",revision:"d991a71a526f2a0e2cefd96c804a3467"},{url:"/_next/static/chunks/pages/_app-11915036a8d06b367231.js",revision:"8f243eb79769b906159a398174213eff"},{url:"/_next/static/chunks/pages/_error-f4f567df00ce0843964e.js",revision:"1ce7635ad73519a6bb086b2767b96914"},{url:"/_next/static/chunks/pages/index-73a8af098d8934ec4aec.js",revision:"2788dbc009bc2feb9e575fcf5519762c"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/lzYuZHfkoYQjKljUc5wbo/_buildManifest.js",revision:"4718ea4fc2b473ab751d3ec4fad5e6bc"},{url:"/_next/static/lzYuZHfkoYQjKljUc5wbo/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/font/AvenirLTStd-Book.ttf",revision:"b4a44a4476d27d61409e665f3b09f853"},{url:"/font/AvenirLTStd-Medium.ttf",revision:"6bfe8f73cbee7e06662d5ef1d4ffb826"},{url:"/font/SavoyeLetPlain.ttf",revision:"9b4180a5cf3ecb0ffa0f530fb2919345"},{url:"/icon/pin.svg",revision:"2b7c48a767e22546941d70afc9f27ff0"},{url:"/icon/plane.svg",revision:"1d3ad848a87b6761592b7a61b29576b2"},{url:"/img/img-curve.svg",revision:"79bff57c926fb9c68bdfade35101141e"},{url:"/img/map.jpg",revision:"efa8c6d03b9ae074aae1a609f027d56b"},{url:"/img/neilmarisa.png",revision:"5f1968dcf25b5f14916bacccfc6770c4"},{url:"/img/paris.jpg",revision:"35d8fcd14d155ff1578ad37409221b0c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
