'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3e11a201891c5801c87a19b66c06bbe0",
"assets/AssetManifest.bin.json": "d1a5bcb74460bb653053139bde9919e4",
"assets/AssetManifest.json": "7f2d94e316d762aaf9b0a948b440a0d7",
"assets/assets/images/ams/0.webp": "705ad60185000117bc933b41b21859b5",
"assets/assets/images/ams/1.webp": "c61bacd0a5da7a17f8f8f4dadb182f97",
"assets/assets/images/ams/2.webp": "b6b45dabbfb9eaf14bd3e79afcf76a1f",
"assets/assets/images/ams/3.webp": "da28b0b3630659032c3c6efe064d8893",
"assets/assets/images/ams/4.webp": "505cdfb108ed5a03613c6ac6d3a9df6c",
"assets/assets/images/ams/icon.webp": "97bffbf5b513b3adee4c4de5508b4c0d",
"assets/assets/images/comic_reader/0.png": "384771080cbaa2b954607419732f6403",
"assets/assets/images/comic_reader/1.png": "7ae4ac7755ead91594e73d545ed6fc1e",
"assets/assets/images/comic_reader/2.png": "d496a8e0b26b7dfac262767cbe9ec1dc",
"assets/assets/images/comic_reader/icon.png": "9ee46435f3c71dee92f452bf44db54a1",
"assets/assets/images/ditonton/0.jpg": "598bd13497698f01bb8e27e0d91c8704",
"assets/assets/images/ditonton/1.jpg": "ad96de6abee6f60541df252e08c11e5b",
"assets/assets/images/ditonton/2.jpg": "d31f46aa5af527ff0887a4eabbbc9153",
"assets/assets/images/ditonton/3.jpg": "4eac7fe4edbf8efb25f7f77709715c38",
"assets/assets/images/ditonton/4.jpg": "711a7f8f838ef1bdebb3f21748814658",
"assets/assets/images/ditonton/5.jpg": "fba743e7cabde3a1f9ed36f5265422f5",
"assets/assets/images/ditonton/icon.png": "05df221fb59b579e4cd9046f917d7c68",
"assets/assets/images/Flutter%2520Icon%25201024.jpg": "eaf4ed4f23456bf5be32b0f29feb4f60",
"assets/assets/images/game_database/0.png": "bdfda55bd166bbe63a48123f33ca0097",
"assets/assets/images/game_database/1.png": "df834c8a0ed488c2037132dfc7836998",
"assets/assets/images/game_database/2.png": "fc4a2fbf6e4514c54d4bc2255d321d36",
"assets/assets/images/game_database/3.png": "6339d93ea3c198e3c7254a60e5d5a0d5",
"assets/assets/images/game_database/4.png": "2a17125447c5af94c1b165b391694699",
"assets/assets/images/game_database/5.png": "4d6825fb742590d92a3462fe184cad9e",
"assets/assets/images/game_database/6.png": "9fe76a096ef5d8f3f43fb7333326e2f9",
"assets/assets/images/game_database/icon.png": "80cff17c0573409d4afd3aa197d0e5d5",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "e7415b2c7bc11903f33c61446828bed2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "792ee302d63353c1af448245dd255015",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"css/dot-elastic.css": "374fb94788daa62ec3de8a71c0db862d",
"favicon.png": "e792cc6326df07e0806f40a725628100",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0b2ebe4e2b16ce51fef45729a308b861",
"icons/Icon-192.png": "c03c5b5d95340a39fb8e65cacf74a981",
"icons/Icon-512.png": "d0b09ee34515504a6640faa264d9cebd",
"icons/Icon-maskable-192.png": "0b7076dd29d713653ec6127dce13be97",
"icons/Icon-maskable-512.png": "80a4184cd07c41492053df04494ef16c",
"index.html": "fcc34efddc94caa40c51b2bab4d941ad",
"/": "fcc34efddc94caa40c51b2bab4d941ad",
"main.dart.js": "399cef0871d91556498afdbc62a564fd",
"manifest.json": "86caf255917b2188922f8eb58c69c883",
"version.json": "1eaec0b61850c63752850ab8b3af2322"};
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
