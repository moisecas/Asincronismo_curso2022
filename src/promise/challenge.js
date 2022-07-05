//citar api 
import fetch from 'node-fetch'; //logica necesaria para hacer peticiones
const API = "https://api.escuelajs.co/api/v1"; //url de la api, se encuentra en la documentación de la api

//FUNCIÓN QUE RECIBE COMO ARGUMENTO API 
function fetchData(urlApi) {
    return fetch(urlApi)
};
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .catch(error => console.error(error)); //si hay error, muestra el error


//SE AGREGO AL PACKAGE JSON "type": "module"
    
