self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Simple passthrough for PWA installation requirements
  event.respondWith(fetch(event.request));
});
