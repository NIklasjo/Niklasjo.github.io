const CACHE_NAME = 'signage-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/sw.js',
  '/backup-slide.jpg',  
  'https://docs.google.com/presentation/d/e/2PACX-1vRi-AkpEvBey5vRYncDsIq-yLJcEd9ziAHt2KA-9jPCuVlHfbmb1o3HF3_--FcuMWudWyUi9qh-OscW/embed?start=true&loop=true&delayms=25000&rm=minimal',
  'https://weatherwidget.io/js/widget.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});
