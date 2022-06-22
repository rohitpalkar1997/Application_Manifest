self.addEventListener('install', function(event) {
   console.log('[Service Worker] Installing the service worker ...' , event);
   event.waitUntil(                            // This is used to start the caching event right after the sw installation event is trigerred
       caches.open('static')                   // This is the function that is used to start caching i.e caches.open('name as you wish')
       .then(function(cache){                  // This caching event returns a promise which is handled using the then
           console.log('[Service Worker] Pre caching the App shell');
           cache.add('src/js/app.js');
       })
   )
});

self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating the service worker...', event);
    return self.clientInformation.claim();         //this line ensures that service worker works correctly, though it will also work with this line, but to be on safer side add this line. 
});

self.addEventListener('fetch', function(event){
    //console.log('[Service Worker] Fetching something something...', event);
    event.respondWith(fetch(event.request));
});