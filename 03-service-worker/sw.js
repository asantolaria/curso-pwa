
// Ciclo de vida del SW

self.addEventListener('install', event => {
    // Descargar assets
    // Crear cache
    console.log('SW: Instalando SW');

    // actualizar automáticamente el SW
    // self.skipWaiting();
});


// Activación de SW
self.addEventListener('activate', event => {
   // Borrar cache antiguo
   console.log("SW: Activado 2");
});
