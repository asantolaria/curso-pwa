self.addEventListener('install', e => {
   const cacheProm = caches.open('cache-1')
       .then(cache => {
           return cache.addAll([
               '/index.html',
               '/css/style.css',
               '/img/main.jpg',
               'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
               '/js/app.js'
           ]);
       });

   // cacheProm tiene devolver la promesa para que funcione el waitUntil. Por eso hay que poner el return del cache.addAll()
   e.waitUntil(cacheProm);
});


self.addEventListener('fetch', e => {



});
