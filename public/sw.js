if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-68d819e8"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"aAhABY7iLnpobMh1_YZ2n"},{url:"/_next/static/aAhABY7iLnpobMh1_YZ2n/_buildManifest.js",revision:"c18dd58ab6173d61478d68e8cc4b17ac"},{url:"/_next/static/aAhABY7iLnpobMh1_YZ2n/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/05d954cf.b8cd8a50f4cb81d1e1d6.js",revision:"a5d344cfe4e47531999e23e92df58c3f"},{url:"/_next/static/chunks/88d74d94f18a20169adea6ac162dc322f8845b26.f082e2eb19f626ab998f.js",revision:"cb375edc8654733d0abbfe25734094fb"},{url:"/_next/static/chunks/ad59c4397eb1858646aeea23b8388cb02dcc5fed.48e81d5f6bf0f1b5c429.js",revision:"87014ef28a6258fcbcc43a14f8ca0c39"},{url:"/_next/static/chunks/commons.4b4051bd9b58d946cb2f.js",revision:"91f19150a6b8b4e9c4cfb8b7220b60c4"},{url:"/_next/static/chunks/framework.4df82c4704a0136f6a4b.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-e623a72529b2afa4822c.js",revision:"d8dca3b027e47810102c6330357d1c3a"},{url:"/_next/static/chunks/pages/_app-438c8b49eb941712739e.js",revision:"1197f02c69c6b0095cf2ecde427d2a55"},{url:"/_next/static/chunks/pages/_error-5db79a1b9c0a6f29ad4e.js",revision:"5d53cfb2c5586bb7c7ab1a4025793a04"},{url:"/_next/static/chunks/pages/index-2682800c32aded3c9888.js",revision:"38d8049261fb3a17458f95bff44642fb"},{url:"/_next/static/chunks/pages/rsvp-1f19664513f98640c12c.js",revision:"5e506bfe6c968cc5a56edbe75ffc0baf"},{url:"/_next/static/chunks/pages/venue-6c6d86275253fa8a446c.js",revision:"e401bd7af8e1825e233987ae6ed33954"},{url:"/_next/static/chunks/polyfills-4beebf4ac9054f0bf4e6.js",revision:"c8b961cfccce0518d96d73f45e46210d"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/7ee183e359fc1e30ce17.css",revision:"4848bad392b798a59973a3b224748aa3"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/font/AvenirLTStd-Book.ttf",revision:"b4a44a4476d27d61409e665f3b09f853"},{url:"/font/AvenirLTStd-Medium.ttf",revision:"6bfe8f73cbee7e06662d5ef1d4ffb826"},{url:"/font/SavoyeLetPlain.ttf",revision:"9b4180a5cf3ecb0ffa0f530fb2919345"},{url:"/icon/pin.svg",revision:"2b7c48a767e22546941d70afc9f27ff0"},{url:"/icon/plane.svg",revision:"f87f24588e8022696d875aca2b9323f3"},{url:"/img/img-curve.svg",revision:"a07578c5eedba4db585850bc2e9774a8"},{url:"/img/map.jpg",revision:"efa8c6d03b9ae074aae1a609f027d56b"},{url:"/img/neilmarisa.png",revision:"5f1968dcf25b5f14916bacccfc6770c4"},{url:"/img/paris.jpg",revision:"35d8fcd14d155ff1578ad37409221b0c"},{url:"/img/venue-map.jpg",revision:"30257657c57422bff868ecb357fe6390"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
