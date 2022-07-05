//work api

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //reference to xmlhttprequest module

//llamado a la api, usando callbacks
const API = 'https://api.escuelajs.co/api/v1'; //url de la api, se encuentra en la documentación de la api	

function fethData(urlApi,callback){//url y callback (retorna elementos, data o error)
    let xhttp = new XMLHttpRequest(); //crea una nueva instancia de XMLHttpRequest, controlar todo el flujo del llamado

    //abrir la conexion
    xhttp.open('GET', urlApi, true); //tipo de petición(GET) - urlApi lo que vamos a usar - valor booleano true para habilitar
    //escuchar el cambio de estado
    xhttp.onreadystatechange = function (event) { //cuando el estado cambie, se ejecuta la función, validar tipo de estado
        if (xhttp.readyState === 4) { //=== mismo valor mismo tipo de dato / si el estado es 4, es decir, terminó de cargar y así con el resto de estados
            if (xhttp.status === 200) {//200 es el estado de exito
                callback(null, JSON.parse(xhttp.responseText)); //null es el error, responseText es el texto de la respuesta, parsearlo a json, transformación de texto a json
            }else {
                const error = new Error("error" + urlApi); //crea un nuevo error, con el estado de error
                return callback(error, null); //retorna el error y null, porque no estoy regresando nada
            } 
        } 
    } //cuando el estado cambie, se ejecuta la función
    xhttp.send; //enviar la petición, ejecute todo el flujo de la conexion  
} 


//llamado de la función, consultas a la api por fetch, 3 peticiones con 3 datos diferentes
fethData(`${API}/products`, function (error1, data1) { //url de la api, callback
    if (error1) {return console.error(error1)}; //si hay error, muestra el error, validar si hay error y si no, muestra el data

    fethData(`${API}/products/${data1[0].id}`, function (error2, data2) { //url de la api, callback, función anidada para validar si hay error
        if (error2) {return console.error(error2)}; //si hay error, muestra el error
        fethData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) {return console.error(error3)}; //si hay error, muestra el error
            console.log(data1[0]); //muestra el data1 id 0 del array de data1 (producto)
            console.log(data2.title); //muestra el data2 (title) del producto
            console.log(data3.name); //muestra el data3 name de la categoria del producto
        }) //url de la api, callback, función anidada para validar si hay error
    }) //llamado a la función para obtener el producto 1 por su posición en el array
}) //llamado a la función, con la url de la api y el callback`)