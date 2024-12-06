'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5aba93adceef355a7f73bad5379e5e0a",
"assets/AssetManifest.bin.json": "1b8b9afcd089d296a337936f41838a4c",
"assets/AssetManifest.json": "c2f3272bee8bb9e8b6851607d32bd1d1",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/icons/chat.svg": "6147989a378d194412a8ab46b074b828",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/login.svg": "29789505ffbeb46eb1b684cd50dab810",
"assets/assets/icons/money.svg": "b35cba39beef07015e775ec0dfe31d97",
"assets/assets/icons/signup.svg": "5f366fc66557521e8664354e8dd00b98",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/images/1.jpg": "8a13a84710d45b37cac01634a5b8e804",
"assets/assets/images/2.avif": "6d0b2b4fc42b2853e72a19cd122efb17",
"assets/assets/images/2.jpg": "e17c80bd712fc5427973cc3bfe898cde",
"assets/assets/images/3.jpg": "b2c7ae9083de927523b2309ec433829e",
"assets/assets/images/4.jpg": "1ef5ccba1eafb33e7cc603b558395049",
"assets/assets/images/btc.png": "4a6ea106b5d8c01916056032e0e87cbd",
"assets/assets/images/diversifie.jpg": "366978cebd180b441ad02aebc5020ae6",
"assets/assets/images/fcp2.png": "ae30ca72381160cc0b12899c52dcadf4",
"assets/assets/images/fcp_tawfir_halal_v2%2520(3).png": "ae30ca72381160cc0b12899c52dcadf4",
"assets/assets/images/fonds.jpg": "50a75f4a9fa4243b9e6b29f97f46804a",
"assets/assets/images/login.jpg": "a3368bf8277350687900dfa1b8480ec0",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/login_bottom1.png": "31049cad43ebe1dc48d1e8d4e86041bd",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/main_top1.png": "eec36d8f1fba50e3de4ac6a18f927779",
"assets/assets/images/malaw.png": "46bf77961ad3c6aca240aabfe5955c56",
"assets/assets/images/monetaris.png": "72116fae3131a4cb02f692c6a5299fe5",
"assets/assets/images/money.png": "02713d44b581b77f7d2a846e970a89f8",
"assets/assets/images/ok.png": "12aa352eeba61f16e2968f4a8bfbba3c",
"assets/assets/images/opportunities.jpg": "bccf9378beec5c207b1c5cfa0c0e3fe9",
"assets/assets/images/Pi7_Tool_fcp2.png": "acda510be1e0bd44bc33258aa25383a1",
"assets/assets/images/sala.png": "220f6bdfd80f5a05fdeeb85df1f061eb",
"assets/assets/images/sala2.png": "09ecac9aa6cdb4b8ecd856a5e44db31b",
"assets/assets/images/sala3.png": "d9a95cab5635389c4877da1939a373a5",
"assets/assets/images/security.jpg": "e76a0756f4d0c108b0973bff65517d5d",
"assets/assets/images/signup.png": "48e0a241f9453d03af875cf18fbe2d8f",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/tawfir.jpg": "51b79764e04ea4282d2d1a2bfa78e19d",
"assets/assets/images/tawfir.png": "ae30ca72381160cc0b12899c52dcadf4",
"assets/FontManifest.json": "ec9222da582f5fd3f625230c970b4090",
"assets/fonts/MaterialIcons-Regular.otf": "1fd5aa3a6bebc050d2bc0d7f596ee394",
"assets/NOTICES": "540edbeb6b62f3a68af013388bb54500",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "56a076d20aff4679e8fbc2f2b5ea6f85",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "cab38c0f8543a16503968b2b45636dc8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "610d26c3ea8fe131a06cf81493e10a85",
"icons/Icon-192.png": "34c8f33e3f7f1f9b563252f02bb75d5f",
"icons/Icon-512.png": "3078e7a8e8b90c0d136e2bfbf4591ac4",
"icons/Icon-maskable-192.png": "34c8f33e3f7f1f9b563252f02bb75d5f",
"icons/Icon-maskable-512.png": "3078e7a8e8b90c0d136e2bfbf4591ac4",
"index.html": "6e7ee1262c706b0e967ce7fe93fb2aa8",
"/": "6e7ee1262c706b0e967ce7fe93fb2aa8",
"main.dart.js": "de0bae6f2dc3c6ec92ae3d69e8c8a432",
"manifest.json": "46d10d2dcfd28693cf9443c23219c7fc",
"version.json": "5f7d7a574391127a0c10cbfbc5f7fd1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
