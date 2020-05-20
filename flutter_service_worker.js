'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "540c12d71db9f395ba69715fbb71bf36",
"/": "540c12d71db9f395ba69715fbb71bf36",
"main.dart.js": "b59ec5926a3917b633d0cfd34bdbc6a5",
"assets/LICENSE": "dbaf3fadb830d341d59b1b35d3922225",
"assets/images/ic_patient.png": "10847876bf497fc195a0327d41899735",
"assets/images/ic_active.png": "db1f42508e1da6798d021f887bfae8cc",
"assets/images/ic_mac.png": "9283b9485dff0f14dcf2681a59443b66",
"assets/images/ic_critical.png": "9fdc664ae275a3958bda416c254a7e93",
"assets/images/my_profile_pic.jpeg": "ddaed464a7fa2c8f720b0f11e1886fe5",
"assets/images/ic_deaths.png": "f9f60c52f5bb14bd369bbfba1f4b548e",
"assets/images/ic_sl_map_gray.png": "0c28f792c387cb17693f5d124ee439dd",
"assets/images/ic_virus_100.png": "c5de827f652ae940cee5eb916f90fd88",
"assets/images/ic_android.png": "6d370926540845f2d9602679835e5537",
"assets/images/ic_sri_lanka_flag.png": "432a698625d4754ffc4c6cda04817c09",
"assets/images/ic_recovered.png": "820c29ed19172a9b4bd654be8930e293",
"assets/images/ic_global.png": "6ccbe51940ea1fd11135def36937ce5f",
"assets/images/ic_flutter.png": "d359cd43162f189a167437c65642d481",
"assets/images/ic_sl_map_black.png": "3bbbac250a692123b804fd9c3d35f93d",
"assets/AssetManifest.json": "7577b3e3aa648cf6285d50ba4de991c9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
