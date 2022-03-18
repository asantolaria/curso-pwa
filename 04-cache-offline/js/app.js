

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}
//
// if (window.caches) {
//     caches.open('prueba-1'); // abre, si no existe la crea
//     caches.open('prueba-2'); // abre, si no existe la crea
//     // caches.has('prueba-3').then(console.log(existe)); // pregunta si existe
//     // caches.delete('prueba-1').then(console.log); // borrar cache
//     caches.open('cache-v1.1').then(cache => {
//        cache.add('/index.html');
//        cache.addAll([
//            '/index.html',
//            '/css/style.css',
//            '/img/main.jpg',
//        ]).then(() => {
//            // cache.delete('/css/style.css');
//            cache.put('index.html', new Response('Hola Mundo'));
//        });
//
//        // leer archivo y mostrarlo en consola
//        // cache.match('/index.html').then(res => {
//        //     res.text().then(console.log);
//        // });
//
//     });
//
//     caches.keys().then(console.log);
//
// }
