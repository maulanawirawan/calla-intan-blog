const CACHE_NAME = 'calla-intan-v1';
const urlsToCache = [
    '/',
    '/index.html',
    './images/in1.jpg',
    './images/in2.jpg',
    './images/in3.jpg',
    './images/in4.jpg',
    './images/in5.jpg',
    './images/in6.jpg',
    './images/in7.jpg',
    './images/in8.jpg',
    './images/in9.jpg',
    './images/in10.jpg',
    './images/in11.jpg',
    './images/in12.jpg',
    './images/in14.jpg',
    './videos/in13.mp4'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});