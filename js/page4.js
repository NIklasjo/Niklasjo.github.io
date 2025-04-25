
const CACHE_NAME = 'signage-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/sw.js',
  'https://docs.google.com/presentation/d/e/2PACX-1vRi-AkpEvBey5vRYncDsIq-yLJcEd9ziAHt2KA-9jPCuVlHfbmb1o3HF3_--FcuMWudWyUi9qh-OscW/embed?start=true&loop=true&delayms=25000&rm=minimal',
  'https://weatherwidget.io/js/widget.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)));
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});
