import fetch from 'node-fetch'; //logica necesaria para hacer peticiones
const API = "https://api.escuelajs.co/api/v1"; //url de la api, se encuentra en la documentación de la api 

function fetchData(urlApi) {
    return fetch(urlApi)
};


fetchData(`${API}/products`)
    .then(response => response.json()) //para no usar return, se usa then
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) //llamado a la segunda peticion para obtener el primer producto de la lista
    })
    .then(response => response.json()) //retorno de la segunda peticion para obtener el producto
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`) //llamado a la tercera peticion para obtener la categoria del producto
    })
    .then(response => response.json()) //retorno de la tercera peticion para obtener la categoria, en json para poder usar el objeto o leerla como json
    .then(category => {
        console.log(category.name);
    }) //se ejecuta cuando se obtiene la categoria
    .catch(error => console.error(error)) //si hay error, muestra el error
    .finally(() => console.log('Finally, 1A')); //se ejecuta al finalizar todo el proceso