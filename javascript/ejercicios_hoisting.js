

let nombre = 'Juan';

hola(nombre);

function hola(nombre) {
    console.log('Hola ' + nombre);
    nombre = 'John';
}

console.log(nombre);

let arreglo = [1,2,3,4,5];
console.log(arreglo);

arreglo.push(6);
console.log(arreglo);

arreglo.splice(0, 3);
console.log(arreglo);

arreglo = [6, 5, 4, 3, 2, 1];
console.log(arreglo);

function alCuadrado(array) {
    for(let i = 0; i < array.length; i++){
        array[i] = array[i]**2;
    }
}

alCuadrado(arreglo);
console.log(arreglo);
