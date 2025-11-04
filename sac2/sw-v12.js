// SAC Calculator v12 - Always online (no cache)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
