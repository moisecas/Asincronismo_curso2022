//callback, función que pasa como argumento de otra función 

//sumar dos elementos 
function sumar(a, b) {
    return a + b
}

function calcular(a, b, callback) { //retornar la función de otra función
    return callback(a, b) //llamar a la función de otra función, recibe como argumento otra función
}

console.log(calcular(2, 3, sumar)) //llamar a la función de otra función, recibe como argumento otra función, calcular recibe 3 parametros

//ejemplo de callback, setTimeout
setTimeout(function () { //recibe como parametro una función anonima
    //acá va lo que va a hacer después de un tiempo determinado 
    console.log('Hola')
}, 3000)//se ejecuta despues de 3 segundos

function saludo(name){
    console.log(`Hola ${name}`)
}
setTimeout(saludo, 3000, 'Juan') //se ejecuta despues de 3 segundos, recibe como parametro una función y un parametro