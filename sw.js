const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

var PRECACHE_URLS = [
  'index.html',
  './', //alias for index.html
  'css/style.css',
  'js/main.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-196maskable.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',
  'favicon.ico',
  'sw.js'
  ];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install',function(event) {
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    })
    );
});

self.addEventListener('activate',event => {
  console.log('Service worker activating...');
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
    );
});
