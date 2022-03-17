
// Ciclo de vida del SW

self.addEventListener('install', event => {
    // Descargar assets
    // Crear cache
    console.log('SW: Instalando SW');
    const instalacion = new Promise((resolve, reject) => {
        console.log('SW: Instalaciones listas');
        self.skipWaiting(); // forzar prioridad del nuevo SW
        resolve();
    })
    event.waitUntil(instalacion);
});


// Activación de SW
self.addEventListener('activate', event => {
   // Borrar cache antiguo
   console.log("SW: Activado 2");
});


// FETCH: Control de peticiones HTTP
self.addEventListener('fetch', event => {
    // console.log(event);
    // // Aplicar estrategias del cache
    //
    // if( event.request.url.includes('reqres.in')) {
    //     const rep = new Response(`{ok: false, msg: 'jajaja'}`);
    //     event.respondWith(rep);
    // }

});

// SYNC: Recuperar conexión a internet
self.addEventListener('sync', event => {
    console.log('Recuperamos conexión');
    console.log(event);
    console.log(event.tag);
});


// PUSH: Control de push notifications
self.addEventListener('push', event => {
    console.log('Notificación recibida');
});
