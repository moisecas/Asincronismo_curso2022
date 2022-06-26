//work api

const xmlhttprequest = require('xmlhttprequest'); //reference to xmlhttprequest module

//llamado a la api, usando callbacks
const API = 'https://api.escuelajs.co/api/v1'; //url de la api, se encuentra en la documentación de la api	

function fethData(urlApi,callback){//url y callback (retorna elementos, data o error)
    const xhttp = new XMLHttpRequest(); //crea una nueva instancia de XMLHttpRequest, controlar todo el flujo del llamado

    //abrir la conexion
    xhttp.open('GET', urlApi, true); //tipo de petición(GET) - urlApi lo que vamos a usar - valor booleano true para habilitar
    //escuchar el cambio de estado
    xhttp.onreadystatechange = function () { //cuando el estado cambie, se ejecuta la función, validar tipo de estado
        if (xhttp.readyState === 4) { //=== mismo valor mismo tipo de dato / si el estado es 4, es decir, terminó de cargar y así con el resto de estados
            if (xhttp.status === 200) {//200 es el estado de exito
                callback(null, JSON.parse(xhttp.responseText)); //null es el error, responseText es el texto de la respuesta, parsearlo a json, transformación de texto a json
            } 
        } else {
            const error = new Error("error" + urlApi); //crea un nuevo error, con el estado de error
            return callback(error, null); //retorna el error y null, porque no estoy regresando nada
        }
    } //cuando el estado cambie, se ejecuta la función
    xhttp.send(); //enviar la petición, ejecute todo el flujo de la conexion  
} 