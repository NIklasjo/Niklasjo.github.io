/* Service Worker för att cacha offline-innehåll */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-cache-v1').then(function(cache) {
      return cache.addAll([
        'index.html',
        'slides_fallback.html'
      ]);
    })
  );
});

// Hantera requests
self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    // Navigation: försök nätverk, annars fallback
    event.respondWith(
      fetch(event.request).catch(function(error) {
        return caches.match('slides_fallback.html');
      })
    );
  } else {
    // Övriga resurser: försök cache först, annars nätverk
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
