/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a653f0baf372ed4de6f8bef2d975f804"
  },
  {
    "url": "api/api.html",
    "revision": "976f4ec28d95b00a097ab3e5bd203682"
  },
  {
    "url": "api/z-alert.html",
    "revision": "2abb3b8a769ac1c252167cf577a4e529"
  },
  {
    "url": "api/z-button.html",
    "revision": "6749d97bcd7faf481d33ab9351f2d374"
  },
  {
    "url": "api/z-canvas.html",
    "revision": "f8d80f908696d2c67e0a83322efbc564"
  },
  {
    "url": "api/z-list.html",
    "revision": "12191363a9a543d79fa9990cbd1c65ec"
  },
  {
    "url": "api/z-panel.html",
    "revision": "fc3031e7873e2d387ef1511405de3f1a"
  },
  {
    "url": "api/z-scale.html",
    "revision": "3f657abe3212b2f6588a4c4496de563e"
  },
  {
    "url": "api/z-view-manager.html",
    "revision": "d8e71d5731760e49dd9fb28f69935219"
  },
  {
    "url": "assets/css/21.styles.d3aa1ca6.css",
    "revision": "5ddd0e67a897e8d84da2f21a19db2f30"
  },
  {
    "url": "assets/img/search-home.69e7f921.svg",
    "revision": "69e7f9212e5b42fab4cd32a8d5fc8e36"
  },
  {
    "url": "assets/img/search.9fedb41b.svg",
    "revision": "9fedb41b29d795141fc5f79cf8885727"
  },
  {
    "url": "assets/js/0.e2a65814.js",
    "revision": "f76713d7e5eef5fdfe4768d0cce82be3"
  },
  {
    "url": "assets/js/1.aee983e0.js",
    "revision": "d31a4b3c82afac80e4e93c2501466313"
  },
  {
    "url": "assets/js/10.cefdee5b.js",
    "revision": "0154d45d9a0f9f99411e53afa289fcfa"
  },
  {
    "url": "assets/js/11.2b1e2a85.js",
    "revision": "aa7a5687b7867da7b32e09ddaf70d229"
  },
  {
    "url": "assets/js/12.c1794bcb.js",
    "revision": "347e0bbeee2aadca2e13c0909d4a1005"
  },
  {
    "url": "assets/js/13.6de2e45b.js",
    "revision": "236e91718c6f41d27805528d048e38a5"
  },
  {
    "url": "assets/js/14.19172c15.js",
    "revision": "6c061fd3fc92db669bd281d8e6d19e44"
  },
  {
    "url": "assets/js/15.2f575603.js",
    "revision": "0c467669c59f6d17cc84ed56c3c5931c"
  },
  {
    "url": "assets/js/16.34a04a14.js",
    "revision": "350eab5fbdf542d26f49501794184236"
  },
  {
    "url": "assets/js/17.20e44c4e.js",
    "revision": "5dc9fdcebc616a455105916336808b42"
  },
  {
    "url": "assets/js/18.b64382c5.js",
    "revision": "e4ca40e29cfc5f3ce5d6d716a5ec4e63"
  },
  {
    "url": "assets/js/19.1f42bbb8.js",
    "revision": "c44470106b1e3c15d2f7470bb6e3be1f"
  },
  {
    "url": "assets/js/2.657b9600.js",
    "revision": "2c356413a3d83bc9ecdd576af8b42e8c"
  },
  {
    "url": "assets/js/20.e2311872.js",
    "revision": "948f8864ffe0d4786adcedd85b1199a8"
  },
  {
    "url": "assets/js/3.3f532cdd.js",
    "revision": "c57d651e72d3991bf2395c016a09cc1a"
  },
  {
    "url": "assets/js/4.1198a3c1.js",
    "revision": "a2adccf26e00085620aad17e8c3e47f3"
  },
  {
    "url": "assets/js/5.743b5b4a.js",
    "revision": "e4b9385bea4f61110183ae3acc2fe4cd"
  },
  {
    "url": "assets/js/6.64123e0c.js",
    "revision": "8affd42c331af374a4c2a5e0767ce7b5"
  },
  {
    "url": "assets/js/7.48185630.js",
    "revision": "8c70ddd69a31bcadd3f7e680e0a4eadd"
  },
  {
    "url": "assets/js/8.782e7e24.js",
    "revision": "2037ec6756fd4874b94d58f343515d8c"
  },
  {
    "url": "assets/js/9.75fd20cb.js",
    "revision": "366f440ffb1ddbb7c9a6e0aa30a84669"
  },
  {
    "url": "assets/js/app.e50ac677.js",
    "revision": "30c81865aa8936006e0db312423b809c"
  },
  {
    "url": "contribute/index.html",
    "revision": "6e70e0548fa528317e75b1297597c38a"
  },
  {
    "url": "examples/counter.html",
    "revision": "dc543d859eb6c2f8ebcc769e92fe76d2"
  },
  {
    "url": "examples/cuba-libre-recipe.html",
    "revision": "bfd5ad2334b0e04634db3b2a8e476148"
  },
  {
    "url": "examples/examples.html",
    "revision": "b4f0d6c4416e2e50b8e19a0c88991ec2"
  },
  {
    "url": "examples/fruit-basquet.html",
    "revision": "845e4e6ff8676491a78e4b3a8976bf85"
  },
  {
    "url": "examples/themes-and-colors-selector.html",
    "revision": "22214ae4452f1c172dcb079f34751734"
  },
  {
    "url": "examples/vuejs-ecosystem.html",
    "revision": "8e2daaea6279a48fda3261b9112ab2cf"
  },
  {
    "url": "examples/zircle-with-vue-router.html",
    "revision": "15d4a4e456f7c0974be5d4d63aa89ace"
  },
  {
    "url": "examples/zircle-without-router.html",
    "revision": "e4afa2ab7378044824b620e1d6573a37"
  },
  {
    "url": "examples/zooming-slider.html",
    "revision": "2135f0e82c83d916aac2c2878b2de77a"
  },
  {
    "url": "guide/guide.html",
    "revision": "bf09c60d7062f87b44851394a98c60ef"
  },
  {
    "url": "guide/introduction.html",
    "revision": "bcc56cdb5feffa7218c2cbe3cfbcf234"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "896c6ee1cae7f6356809eacee572ff56"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5c1e1e92584300345c89abe5da329d66"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "855450f54230465b9c55583df5d4aae9"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "87b0da08ff6ffbfd56680dd0521667b1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "0cdae9b04469f6bd8765de7045a5c2fd"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b32800b824809df6d4a6b960ab83cbc1"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "0c5832dcc16609bd8cf8e6796c4e3e68"
  },
  {
    "url": "index.html",
    "revision": "17bfb71a38cf543533ff18a311ba6aac"
  },
  {
    "url": "logo.png",
    "revision": "7e951fd07e9b8b2f58fb2276006e8d5b"
  },
  {
    "url": "zircle.gif",
    "revision": "7af715afa9e9c02a598eb20c3ee54a12"
  },
  {
    "url": "zircleUI.png",
    "revision": "0e18fb6828fe78a3636c3ffc3198bb49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
