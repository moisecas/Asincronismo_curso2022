//construir promesa 
const promesa = new Promise((resolve, reject) => { //función anonima que nos regresa dos funciones, resolve y reject 
    //acá va lo que requiera nuestro código, resolve, logica de la promesa. Validación de si hay error o no, presentar datos. 
    resolve('Hola'); //resuelve la promesa
})

const cows = 9;
const countCows= new Promise((resolve, reject) => {
    if(cows > 10){
        resolve(`${cows} cows`); //cows on the farm 
    }else{
        reject('there is no cows'); //no cows on the farm
    }

}) //función anonima que nos regresa dos funciones, resolve y reject
countCows.then((result) => {
    console.log(result); //muestra el resultado de la promesa
}).catch((error) => {
    console.log(error); //muestra el error de la promesa
}).finally(() => {
    console.log('finally'); //muestra el finally de la promesa
}) //función que se ejecuta siempre, independientemente de si hay error o no 
