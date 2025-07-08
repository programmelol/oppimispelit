self.addEventListener('install', event => {
    console.log('Service Worker asennettu.');
    event.waitUntil(
        caches.open('kemia-cache').then(cache => {
            return cache.addAll([
                'kemia.html',
                'manifest.json',
                'icon-192.png',
                'icon-512.png'
                // Lisää tähän CSS/JS-tiedostot jos erillisiä
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
