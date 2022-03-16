// peticiones como antiguamente (anterior a Javascript 5)
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function(state) {
    console.log(request);
    if(request.readyState === 4) {
        var resp = request.response;
        var respObj = JSON.parse(resp);
        console.log(respObj);
    }
}
