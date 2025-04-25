const CACHE_NAME = 'signage-cache-v1';
const URLS_TO_CACHE = [ '/', '/index.html', '/slides_fallback.html', '/sw.js', 'https://weatherwidget.io/js/widget.min.js' ];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(URLS_TO_CACHE))));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.url.includes('docs.google.com')) e.respondWith(fetch(req).catch(() => caches.match('/slides_fallback.html')));
  else                          e.respondWith(fetch(req).catch(() => caches.match(req)));
});
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE_NAME).map(k => caches.delete(k))))));
