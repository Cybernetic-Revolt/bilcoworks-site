/* Billy & Julia's Calendar — service worker
 * Strategy:
 *   - App shell (HTML/CSS/icons/CDN libs): cache-first, so the app opens instantly and works offline.
 *   - API (/api/events): network-first with cache fallback, so data is always fresh online
 *     but the last-known events still render when offline.
 * Bump CACHE_VERSION to force clients onto a new shell.
 */
const CACHE_VERSION = 'v6';
const SHELL_CACHE = 'cal-shell-' + CACHE_VERSION;
const DATA_CACHE = 'cal-data-' + CACHE_VERSION;

const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.css',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS).catch((e) => console.warn('SW precache partial:', e)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== SHELL_CACHE && k !== DATA_CACHE).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // never cache writes

  const url = new URL(req.url);

  // Page navigations (the HTML document): network-first so updates land immediately,
  // fall back to the cached shell when offline.
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // API: network-first, fall back to cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(DATA_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Shell/assets: cache-first, fall back to network (and cache it)
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res && res.status === 200 && (url.origin === self.location.origin || url.host.includes('jsdelivr'))) {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
