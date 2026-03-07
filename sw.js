const CACHE_NAME = 'Moshy_Music';
const ASSETS = [
  '/', 
  '/index.html', 
  '/manifest.json',
  'assets/music/synth/1.mp3',
  'assets/music/synth/backgrounds/1b1.jpeg', 'assets/music/synth/backgrounds/1b2.jpeg', 'assets/music/synth/backgrounds/1b3.jpeg', 'assets/music/synth/backgrounds/1b4.jpeg', 'assets/music/synth/backgrounds/1b5.jpeg',
  'assets/music/synth/cores/1c1.jpeg', 'assets/music/synth/cores/1c2.jpeg', 'assets/music/synth/cores/1c3.jpeg', 'assets/music/synth/cores/1c4.jpeg', 'assets/music/synth/cores/1c5.jpeg',
  'assets/music/synth/sprites/1p1.jpeg', 'assets/music/synth/sprites/1p2.jpeg', 'assets/music/synth/sprites/1p3.jpeg', 'assets/music/synth/sprites/1p4.jpeg', 'assets/music/synth/sprites/1p5.jpeg',
  'assets/music/xray/2.mp3',
  'assets/music/xray/backgrounds/2b1.jpeg', 'assets/music/xray/backgrounds/2b2.jpeg', 'assets/music/xray/backgrounds/2b3.jpeg', 'assets/music/xray/backgrounds/2b4.jpeg', 'assets/music/xray/backgrounds/2b5.jpeg',
  'assets/music/xray/cores/2c1.jpeg', 'assets/music/xray/cores/2c2.jpeg', 'assets/music/xray/cores/2c3.jpeg', 'assets/music/xray/cores/2c4.jpeg', 'assets/music/xray/cores/2c5.jpeg',
  'assets/music/xray/sprites/2p1.jpeg', 'assets/music/xray/sprites/2p2.jpeg', 'assets/music/xray/sprites/2p3.jpeg', 'assets/music/xray/sprites/2p4.jpeg', 'assets/music/xray/sprites/2p5.jpeg',
  'assets/music/volt/3.mp3',
  'assets/music/volt/backgrounds/3b1.jpeg', 'assets/music/volt/backgrounds/3b2.jpeg', 'assets/music/volt/backgrounds/3b3.jpeg', 'assets/music/volt/backgrounds/3b4.jpeg', 'assets/music/volt/backgrounds/3b5.jpeg',
  'assets/music/volt/cores/3c1.jpeg', 'assets/music/volt/cores/3c2.jpeg', 'assets/music/volt/cores/3c3.jpeg', 'assets/music/volt/cores/3c4.jpeg', 'assets/music/volt/cores/3c5.jpeg',
  'assets/music/volt/sprites/3p1.jpeg', 'assets/music/volt/sprites/3p2.jpeg', 'assets/music/volt/sprites/3p3.jpeg', 'assets/music/volt/sprites/3p4.jpeg', 'assets/music/volt/sprites/3p5.jpeg',
  'assets/music/grid/4.mp3',
  'assets/music/grid/backgrounds/4b1.jpeg', 'assets/music/grid/backgrounds/4b2.jpeg', 'assets/music/grid/backgrounds/4b3.jpeg', 'assets/music/grid/backgrounds/4b4.jpeg', 'assets/music/grid/backgrounds/4b5.jpeg',
  'assets/music/grid/cores/4c1.jpeg', 'assets/music/grid/cores/4c2.jpeg', 'assets/music/grid/cores/4c3.jpeg', 'assets/music/grid/cores/4c4.jpeg', 'assets/music/grid/cores/4c5.jpeg',
  'assets/music/grid/sprites/4p1.jpeg', 'assets/music/grid/sprites/4p2.jpeg', 'assets/music/grid/sprites/4p3.jpeg', 'assets/music/grid/sprites/4p4.jpeg', 'assets/music/grid/sprites/4p5.jpeg',
  'assets/music/horror/5.mp3',
  'assets/music/horror/backgrounds/5b1.jpeg', 'assets/music/horror/backgrounds/5b2.jpeg', 'assets/music/horror/backgrounds/5b3.jpeg', 'assets/music/horror/backgrounds/5b4.jpeg', 'assets/music/horror/backgrounds/5b5.jpeg',
  'assets/music/horror/cores/5c1.jpeg', 'assets/music/horror/cores/5c2.jpeg', 'assets/music/horror/cores/5c3.jpeg', 'assets/music/horror/cores/5c4.jpeg', 'assets/music/horror/cores/5c5.jpeg',
  'assets/music/horror/sprites/5p1.jpeg', 'assets/music/horror/sprites/5p2.jpeg', 'assets/music/horror/sprites/5p3.jpeg', 'assets/music/horror/sprites/5p4.jpeg', 'assets/music/horror/sprites/5p5.jpeg',
  'icon.jpeg'
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
