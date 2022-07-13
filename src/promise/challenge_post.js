import fetch  from "node-fetch"; //logica necesaria para hacer peticiones
const API = "https://api.escuelajs.co/api/v1"; //url de la api, se encuentra en la documentación de la api

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST', //para hacer una peticion post
        mode: 'cors', //para que se pueda hacer peticiones desde cualquier lugar, permisos de acceso 
        credentials: 'same-origin', //si no hay autenticacion, no se puede hacer peticiones
        headers: {
            'Content-Type': 'application/json' //tipo de dato que se envia, en este caso json, puede variar dependiendo del servicio
            
        }
        , body: JSON.stringify(data) //se envia el objeto en formato json, recibo como objeto y paso como texto


    })
    return response; //retorno de la peticion
        
}

const data=
{"title":"212","price":212,"description":"A description","categoryId":1,
"images":["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data) //llamado a la peticion para crear un producto nuevo en la api 
    .then(response => response.json()) //para no usar return, se usa then
    .then(data => {
        console.log(data); //muestra el objeto que se creo en la api
    })