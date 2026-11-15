const SHELL_CACHE = 'antirecetario-shell-v1';
const IMAGE_CACHE = 'antirecetario-images-v1';

// Recursos esenciales para carga inmediata en 0 ms
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.svg',
  './apple-touch-icon.png',
  './css/main.css',
  './css/components.css',
  './js/app.js',
  './js/components/assembler.js',
  './js/components/library.js',
  './js/components/planner.js',
  './js/services/storage.js',
  './js/services/matcher.js',
  './js/services/gemini.js',
  './js/data/seed.js',
  './js/data/plates-catalog.json',
  './img/icons/icon-192.png',
  './img/icons/icon-512.png'
];

// 1. Instalación: Pre-cachear App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activación: Limpiar cachés antiguas y tomar control inmediato
self.addEventListener('activate', (event) => {
  const currentCaches = [SHELL_CACHE, IMAGE_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Interceptación de peticiones (Fetch)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // A. Peticiones de API (/api/...): Network Only (no cachear peticiones dinámicas de IA o CRUD)
  if (url.pathname.startsWith('/api/')) {
    return; // Dejar pasar a la red directamente
  }

  // B. Fotos del catálogo (img/platos/): Cache First con almacenamiento en tiempo de ejecución
  if (url.pathname.includes('/img/platos/') || url.pathname.includes('/img/icons/')) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;

        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch (_) {
          return cached || new Response('', { status: 408, statusText: 'Offline Image' });
        }
      })
    );
    return;
  }

  // C. App Shell (HTML, CSS, JS, Fuentes): Stale-While-Revalidate
  // Devuelve la copia local en 0 ms y actualiza en segundo plano si hay red
  event.respondWith(
    caches.open(SHELL_CACHE).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || (await fetchPromise);
    })
  );
});
