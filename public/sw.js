if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-68d819e8"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"X_YzboPCo0Xi5CFt2DK25"},{url:"/_next/static/X_YzboPCo0Xi5CFt2DK25/_buildManifest.js",revision:"0d976c4af0ee775e353f167bdc7e7321"},{url:"/_next/static/X_YzboPCo0Xi5CFt2DK25/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/05d954cf.b8cd8a50f4cb81d1e1d6.js",revision:"a5d344cfe4e47531999e23e92df58c3f"},{url:"/_next/static/chunks/1edb9bcc1568fc18393c3236a1da987faece5006.c52598cc89880192c5c3.js",revision:"ef24fbed00b7e0c0a8b5c032d4ea31e6"},{url:"/_next/static/chunks/26b9a91f3bc5eebdbd32dcc8ce5d88b75a019761.bdece79bf44578d73d86.js",revision:"3dd8fbae0628812da9fe1e9e7028f8b4"},{url:"/_next/static/chunks/commons.4b4051bd9b58d946cb2f.js",revision:"91f19150a6b8b4e9c4cfb8b7220b60c4"},{url:"/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-e623a72529b2afa4822c.js",revision:"d8dca3b027e47810102c6330357d1c3a"},{url:"/_next/static/chunks/pages/_app-ec12397b40b29915ab8a.js",revision:"98be89e6b26df3a9a93c70c63af96dce"},{url:"/_next/static/chunks/pages/_error-5db79a1b9c0a6f29ad4e.js",revision:"5d53cfb2c5586bb7c7ab1a4025793a04"},{url:"/_next/static/chunks/pages/index-2d146a64699878b3a357.js",revision:"183fe9775ccc8ff11b78d0003b6f0d39"},{url:"/_next/static/chunks/pages/our-story-7bd9188e998061173484.js",revision:"d0a199f9b4d0d7994d2c060d59648ff1"},{url:"/_next/static/chunks/pages/rsvp-124d419e3e24728db733.js",revision:"49f73e12b0856d8b3f4e22cef8821891"},{url:"/_next/static/chunks/pages/venue-5fad1490c490a1fd9949.js",revision:"cea7ab92cea7c2229d6d5e94746d8c34"},{url:"/_next/static/chunks/polyfills-83732ebf2ed7f8a1b2c7.js",revision:"1e875a6bcb0993effb274df712fd9a46"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/b1a76b82b4ff1a77d9e4.css",revision:"6843ebd291ca60f0f8ac1355d7845060"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/font/AvenirLTStd-Book.ttf",revision:"b4a44a4476d27d61409e665f3b09f853"},{url:"/font/AvenirLTStd-Medium.ttf",revision:"6bfe8f73cbee7e06662d5ef1d4ffb826"},{url:"/font/SavoyeLetPlain.ttf",revision:"9b4180a5cf3ecb0ffa0f530fb2919345"},{url:"/icon/pin.svg",revision:"2b7c48a767e22546941d70afc9f27ff0"},{url:"/icon/plane.svg",revision:"28e4a14318f3cacfca3ff92e8f052300"},{url:"/img/arc-de-triomph.jpg",revision:"55d65b1a33427a96bd6b019787331adf"},{url:"/img/in-love.jpg",revision:"af22b4d4a5b4e9dcf523af7f026e6317"},{url:"/img/map.jpg",revision:"efa8c6d03b9ae074aae1a609f027d56b"},{url:"/img/moz-quad.jpg",revision:"2b9b9f2b85d18d9ec75aa85b955399d4"},{url:"/img/moz-salsa.jpg",revision:"0fa3cbd82c170d25bda2036deb3dc8d4"},{url:"/img/neilmarisa.png",revision:"5f1968dcf25b5f14916bacccfc6770c4"},{url:"/img/paris-min.jpg",revision:"4f21afda63910de635b2b5cb32f7ebee"},{url:"/img/paris.jpg",revision:"35d8fcd14d155ff1578ad37409221b0c"},{url:"/img/party.jpg",revision:"352322641bbe92fa68c30441f47cebaf"},{url:"/img/romantic.jpg",revision:"fa8330295e553a6430fad0b67f9555bb"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
