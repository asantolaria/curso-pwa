self.addEventListener('fetch', event => {
    // event.respondWith(
    //     fetch(event.request)
    //         .then(resp => {
    //             if(resp.ok) {
    //                 return resp;
    //             } else {
    //                 return fetch('img/main.jpg');
    //             }
    //         })
    // );

    // el siguiente código es equivalente al comentado.
    const resp = fetch(event.request)
        .then( resp => resp.ok ? resp : fetch('img/main.jpg'));
    event.respondWith(resp);
})
