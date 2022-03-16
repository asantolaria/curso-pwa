fetch('https://reqres.in/api/users/1000')
    .then(resp => {
        if(resp.ok) {
            return resp.json();
        } else {
            // no va a ir por el catch()
            // console.log("No existe el usuario");
            throw new Error('No existe el usuario 1000');
        }
    })
    .then(console.log)
    .catch(error => {
        console.log("Error en la petición");
        console.log(error);
    })
