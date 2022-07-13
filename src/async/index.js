const fnAsync = async () => {
    return new Promise((resolve, reject) => {
        (true) //operador ternario, cuando es true, se ejecuta la funcion resolve, si no, se ejecuta la funcion reject
            ? setTimeout(() => resolve('Async OK'), 3000) //setTimeout es una funcion que se ejecuta despues de un tiempo, en este caso 3 segundos
            : reject(new Error('Async Failed')); //reject es una funcion que se ejecuta cuando hay un error
    });
}

const anotherfn = async () => { //async cuperpo de la función 
    const something = await fnAsync(); //llamado a la funcion fnAsync, se ejecuta cuando se termina la funcion, promesa 
    //await, asincronismo, trabajar con multiples elementos sin detener el flujo de ejecucion
    console.log(something); //muestra el resultado de la promesa
    console.log("Finished"); //muestra el mensaje cuando se termina el proceso

}
console.log('Before');
anotherfn(); //llamado a la funcion 
console.log('After'); 
