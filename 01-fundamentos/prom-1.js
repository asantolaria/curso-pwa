function sumarUno( numero, callback ) {

    setTimeout(function() {
        // return numero +1;
        callback(numero+1);
    }, 800);

}


sumarUno(5, function(nuevoValor) {
    console.log(nuevoValor);
});

