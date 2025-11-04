// SAC Calculator v13b - Always online (no cache)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
