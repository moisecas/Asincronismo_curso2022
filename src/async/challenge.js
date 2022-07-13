import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) { //construir el cuperpo de la aplicación 
    const response = await fetch(urlApi); //usamos fetch para hacer la peticion a la api 
    const data = await response.json();//retornamos la respuesta en formato json
    return data; //retornamos el objeto
} //ir por los datos y esperar la transformacion de json a objeto 

//función hacer las solicitudes a la api 
const anotherFunction = async (urlApi) => {
    try {
        //variables para hacer las llamadas 
        
        
        //variables para hacer las llamadas 
        const products = await fetchData(`${urlApi}/products`);
        //en el ejercicio, dice que llamamos el primer producto del array que generamos en el paso anterior con su id
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //segun el ejercicio debemos llamar la categoia del producto anterior
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products)
        console.log(product.title)
        console.log(category.name) //llamados
    } catch (error) {
        console.error(error); //si hay error, muestra el error
        
    }

}
anotherFunction(API); //llamado a la función para hacer las solicitudes a la api