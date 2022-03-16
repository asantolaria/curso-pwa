function sumarUno( numero ) {
    var promesa = new Promise(function(resolve, reject){
        console.log(numero);
        if( numero >= 7) {
            reject('El número es muy alto');
        }
        setTimeout(function() {
            resolve(numero+1);
        }, 800);
    });
    return promesa;
}

// sumarUno(5).then( nuevoNumero => {
//     console.log(nuevoNumero);
//     return sumarUno(nuevoNumero);
// }).then(nuevoNumero => {
//     console.log(nuevoNumero);
//     return sumarUno(nuevoNumero);
// }).then(nuevoNumero => {
//    console.log(nuevoNumero);
// });

sumarUno(5)
    .then( sumarUno ) // la función se va a volver a llamar con el valor que retorna la anterior ejecución
    .then( sumarUno)
    .then( sumarUno)
    .then(nuevoNumero => {
    console.log(nuevoNumero);
    }).catch( error => {
        console.log("ERROR:");
        console.log(error);
});
