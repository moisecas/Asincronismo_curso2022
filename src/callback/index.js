//callback, función que pasa como argumento de otra función 

//sumar dos elementos 
function sumar(a, b) { //recibe dos valores numericos
    return a + b //returna la suma de los valores 
}

//cb= callback 

//segunda funcion que recibe una funcion 
function calcular(a, b, callback) { //retornar la función de otra función, tercer argumento es una funcion 
    return callback(a, b) //llamar a la función de otra función, recibe como argumento otra función, cb es la función 
}

console.log(calcular(2, 3, sumar)) //llamar a la función de otra función, recibe como argumento otra función, calcular recibe 3 parametros


//ejemplo de callback, setTimeout

setTimeout(function () { //recibe como parametro una función anonima
    //acá va lo que va a hacer después de un tiempo determinado 
    console.log('Hola')
}, 3000)//se ejecuta despues de 3 segundos

function saludo(name){
    console.log(`Hola ${name}`) //comilla francesa `` alt+96 
}
setTimeout(saludo, 5000, 'Juan') //se ejecuta despues de 3 segundos, recibe como parametro una función y un parametro