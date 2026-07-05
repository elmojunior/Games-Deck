'use strict';

const CACHE_NAME  = 'gamesdeck-v1';
const CACHED_URLS = [
    '/Games-Deck/gamesdeck.html'
];

/* Instala e pré-carrega o HTML no cache */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) { return cache.addAll(CACHED_URLS); })
    );
    self.skipWaiting();
});

/* Remove caches antigos ao ativar */
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (k) { return k !== CACHE_NAME; })
                    .map(function (k) { return caches.delete(k); })
            );
        })
    );
    self.clients.claim();
});

/* Estratégia:
   - Navegação (o próprio HTML): rede primeiro, cache como fallback offline.
   - Fontes e assets estáticos: cache primeiro.
   - APIs externas (Steam, proxies, CDN de vídeo): rede direta, sem cache. */
self.addEventListener('fetch', function (e) {
    var url = e.request.url;

    /* Ignora requisições não-GET e origens externas de API */
    if (e.request.method !== 'GET') return;
    if (url.includes('steampowered.com') ||
        url.includes('steamstatic.com')  ||
        url.includes('cors.sh')          ||
        url.includes('allorigins.win')   ||
        url.includes('codetabs.com')     ||
        url.includes('corsproxy.io'))    return;

    /* Navegação principal: rede primeiro, fallback para cache */
    if (e.request.mode === 'navigate') {
        e.respondWith(
            fetch(e.request)
                .then(function (res) {
                    var copy = res.clone();
                    caches.open(CACHE_NAME).then(function (c) { c.put(e.request, copy); });
                    return res;
                })
                .catch(function () { return caches.match('/Games-Deck/gamesdeck.html'); })
        );
        return;
    }

    /* Fontes e demais assets estáticos: cache primeiro */
    if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
        e.respondWith(
            caches.match(e.request).then(function (cached) {
                if (cached) return cached;
                return fetch(e.request).then(function (res) {
                    var copy = res.clone();
                    caches.open(CACHE_NAME).then(function (c) { c.put(e.request, copy); });
                    return res;
                });
            })
        );
    }
});
