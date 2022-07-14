function*gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); //usamos la función gen() para crear un objeto iterable
console.log(g.next().value);  //imprime 1 
console.log(g.next())//{ value: 2, done: false } 
//podemos controlar el estado de la iteración 

function* iterate(array){ //creamos una función que recibe un array
    for(let value of array){ //iteramos el array
        yield value; //yield nos devuelve el valor del array
    }
}
const it = iterate([1,2,3,4,5]); //creamos un objeto iterable
console.log(it.next()); //{ value: 1, done: false }
console.log(it.next().value); //2
console.log(it.next().value); //3 y así sucesivamente hasta que no haya más valores
//Si muestro un siguiente valor que no existe, dará undefined y terminará la iteración 
