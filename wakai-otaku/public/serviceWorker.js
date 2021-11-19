const CACHE_NAME = "wakai-cache-1";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// Install SW
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(err => console.error(err))
    )
})

// Listen for request
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(resp => fetch(event.request))
            .catch(() => caches.match('offline.html'))
    )
})

// Active the SW
self.addEventListener('activate', event => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                Promise.all(
                    cacheNames.map(cacheName => {
                        if (!cacheWhiteList.includes(cacheName)) {
                            return caches.delete(cacheName)
                        }
                    })
                )
            })
    )
})