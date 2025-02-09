'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b69c8875b72358dbca294ecbf803fe8c",
"assets/AssetManifest.bin.json": "f22abb2a75e178d2c7b6e45b130570d9",
"assets/AssetManifest.json": "6a93a79326078aa8598cfec04ccba6bd",
"assets/assets/ca/certificate.pem": "118ecd744d864b32ffdb48b2e29f1d7f",
"assets/assets/ca/_certificate.pem": "dccffc02a69e6dc186f6779e6bf0916e",
"assets/assets/docs/about.txt": "af38ce5c7d8c1a5eefaed15d5c59576c",
"assets/assets/images/account.png": "44bff0a6dc551c68aed5e12cebcd3f4e",
"assets/assets/images/arcade.png": "e5df827ed590a5b55fc14893b57051a7",
"assets/assets/images/exit-menu.png": "06d4cf9027dba7b59c8a98760b6cb3ba",
"assets/assets/images/game-score.png": "c8fc98b54ecd4a6ef842ba4330c7beb9",
"assets/assets/images/history.png": "2ecb0c3c8c4c1783403b081300f4b105",
"assets/assets/images/homepage-dark.png": "d104afe2a0a32ede3adbf34776add693",
"assets/assets/images/homepage-white.png": "b55ce9d9b80df414e7cf6366a86db206",
"assets/assets/images/leaderboard.png": "c0107fe4abc4d3776277a0e35836e35e",
"assets/assets/images/login.png": "0a4b0e199649ffb217a1f740e8bd042f",
"assets/assets/images/match-android.png": "37bef166677324fea2202fda7250eca7",
"assets/assets/images/match-result.png": "41c2531c64051abbc0ad503998e8514b",
"assets/assets/images/match-wondows.png": "705b259935d4f277bc74efee29047f76",
"assets/assets/images/wrong-credentials.png": "687e391c9c23f582cd5f73285cc86886",
"assets/assets/logo/guesstheplace.old.jpg": "c4777412e69137d0dc3da3f8a59575ec",
"assets/assets/logo/guesstheplace.png": "d11dcb5126bb5a127ae222d3ec21ba77",
"assets/assets/logo/guesstheplace.psd": "db029877048b363e3fc572051ef11fc8",
"assets/FontManifest.json": "f4d9a15d8eb40588b572ab1710fb9012",
"assets/fonts/MaterialIcons-Regular.otf": "97f662b5b68b369c4b3d8c8baa10e900",
"assets/NOTICES": "9a1db15ddb3d1b17ffdccb7d3d4ecbd9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/moon_icons/lib/fonts/MoonIcons.ttf": "20bb914fd6b31e7a69fb66eb0ea6ba20",
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
"favicon.png": "8392c19b708872b12daa4746d6d928ed",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e5f9f161a31f06979a8a130ecf6c5532",
"icons/Icon-192.png": "cec4e9373dce40e67fb2b2c24a5b0892",
"icons/Icon-512.png": "c78ae14f36dfc63cfbb2837c877acf88",
"icons/Icon-maskable-192.png": "cec4e9373dce40e67fb2b2c24a5b0892",
"icons/Icon-maskable-512.png": "c78ae14f36dfc63cfbb2837c877acf88",
"icons/_Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/_Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/_Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/_Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7031c2456f26e3ee44dacd213c892a70",
"/": "7031c2456f26e3ee44dacd213c892a70",
"main.dart.js": "f97156e346c980baf742a77ae03d74c4",
"manifest.json": "ac253c8dc0f6d48285470314083134df",
"version.json": "0e5ffa570eb0f3a5e4106638ee29cd4d",
"_favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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
