// SAC Calculator v13c - Always online (no cache)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
