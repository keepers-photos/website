self.addEventListener('install', (event) => {
  // console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  // console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // Do nothing, let the browser handle the request normally
});
