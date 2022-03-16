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
           resolve(numero + 1);
        }, 300);
    } )
}

function retornaTrue() {
    return true;
}

let cosas = [sumarLento(5), sumarRapido(10), true, 'hola mundo', retornaTrue()];
// obtener los resultados a la vez
// Promise.all([sumarLento(5), sumarRapido(10)])
Promise.all(cosas)
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log)
// sumarLento(10).then(console.log);
// sumarRapido(5).then(console.log);
