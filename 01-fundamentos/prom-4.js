function sumarLento(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout( function(){
            resolve(numero + 1);
            // reject('sumar lento falló');
        }, 800);

    });
}

// similar a la anterior pero con funciones de flechas
let sumarRapido = (numero) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1)
            reject("Error en sumar rápido");
        }, 300);
    } )
}

// devuelve la que responda primero
Promise.race([sumarLento(5), sumarRapido(10)])
    .then(respuesta => {
        console.log(respuesta);
    })
    .catch(console.log)
