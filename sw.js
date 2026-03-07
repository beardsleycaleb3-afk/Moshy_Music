// sw.js
const CACHE_NAME = 'Moshy_Music';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  // Add your actual files here – adjust paths if needed
  '1.mp3','2.mp3','3.mp3','4.mp3','5.mp3',
  '1c1.jpeg','1c2.jpeg','1c3.jpeg','1c4.jpeg','1c5.jpeg',
  '1b1.jpeg','1b2.jpeg','1b3.jpeg','1b4.jpeg','1b5.jpeg',
  '1p1.jpeg','1p2.jpeg','1p3.jpeg','1p4.jpeg','1p5.jpeg',
  '2c1.jpeg','2c2.jpeg','2c3.jpeg','2c4.jpeg','2c5.jpeg',
  '2b1.jpeg','2b2.jpeg','2b3.jpeg','2b4.jpeg','2b5.jpeg',
  '2p1.jpeg','2p2.jpeg','2p3.jpeg','2p4.jpeg','2p5.jpeg',
  '3c1.jpeg','3c2.jpeg','3c3.jpeg','3c4.jpeg','3c5.jpeg',
  '3b1.jpeg','3b2.jpeg','3b3.jpeg','3b4.jpeg','3b5.jpeg',
  '3p1.jpeg','3p2.jpeg','3p3.jpeg','3p4.jpeg','3p5.jpeg',
  '4c1.jpeg','4c2.jpeg','4c3.jpeg','4c4.jpeg','4c5.jpeg',
  '4b1.jpeg','4b2.jpeg','4b3.jpeg','4b4.jpeg','4b5.jpeg',
  '4p1.jpeg','4p2.jpeg','4p3.jpeg','4p4.jpeg','4p5.jpeg',
  '5c1.jpeg','5c2.jpeg','5c3.jpeg','5c4.jpeg','5c5.jpeg',
  '5b1.jpeg','5b2.jpeg','5b3.jpeg','5b4.jpeg','5b5.jpeg',
  '5p1.jpeg','5p2.jpeg','5p3.jpeg','5p4.jpeg','5p5.jpeg',
  'icon.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
