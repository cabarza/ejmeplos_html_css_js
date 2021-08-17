// Definición de variables var, let y const
// Alcance de las variables
var variable1;

function recorrer() {
    for(let variable1=0; variable1 < 10; variable1++) {
        console.log(`Valor ${variable1}`);
    }

    console.log(`Valor Final ${variable1}`);
}
variable1 = 1;
// recorrer();

console.log(`Valor Variable ${variable1}`);


// Tipos de variables: Texto, numeros, arreglos, fecha
let texto = `Este es un texto ${variable1}`;
let texto2 = 'Este es otro texto ' + variable1;
console.log(texto);
console.log(texto2);

let numero = 12312;

let arreglo = [texto, texto2, 'Otro Texto', numero, 12213, { id: 1, nombre: 'XYZ'}];

let matriz = [[2, 1, 4, 5], [1, 2]];

console.log(arreglo);

console.log(matriz);

let fecha = new Date();

console.log(fecha.toISOString());

const booleano = true;

console.log(booleano);

let texto3 = '123.50';

const suma = +texto3 + (12345);

console.log(suma);

for(let i=0; i<matriz[0].length; i++) {
    for(let j = 0; j< matriz[1].length; j++) {
        console.log(`MATRIZ[${i}, ${j}]=[${matriz[0][i]}, ${matriz[1][j]}]`);
    }
}

// funciones
function nombreFuncion(param1, param2, paramX) {
    console.log(param1, param2, paramX);
}

function recorrerMatriz(m) {
    for(let i = 0; i < m.length; i++) {
        for(let j = 0; j < m[i].length; j++){
            console.log('Matriz['+ i + ', ' + j + '] = ' + m[i][j]);
        }
    }
}

function pow(a, b, arreglo) {
    arreglo.push(a**b);
    if(b < 9) {
        pow(a, b+1, arreglo);
    }
}

function conRetorno(a) {
    const resultado = [];
    for(let i=0; i<10; i++) {
        resultado.push(a**i);
    }
    return resultado;
}


recorrerMatriz(matriz);

const res = conRetorno(3);
console.log('Resultado', res);

let arreglo2 = [];
pow(3, 0, arreglo2);
console.log('Resultado 2', arreglo2);



// funciones flecha
const funcion1 = (param1) => {
    console.log(param1);
}

funcion1('Esta es un afunción flecha');

// document.onclick(() => {
//     alert('CLICK FUNCIÓN');
// })


// Funciones de arreglos
arreglo = [1, 101, 102, 2, 103, 34324, 21];

console.log(arreglo.filter(obj => obj > 100 && obj < 110));

console.log(arreglo.find(a => a === 21));

console.log(arreglo.findIndex(a => a === 21));

console.log(arreglo.reduce((a, b) =>  a+b));

console.log(arreglo.map(a => a**2));

arreglo.forEach(elemento => {
    console.log(elemento);
});

console.log(arreglo.sort((a, b) => a - b ));

console.log(arreglo.sort((a, b) => b - a ));


// Objetos JS
const objeto = {
    nombre: 'Ninja',
    edad: 1200
}

objeto.cinturon = 'Negro';

console.log(objeto.nombre, objeto.cinturon);


class Animal {
    constructor(color, tipo, cantidadPatas) {
        this.color = color;
        this.tipo = tipo;
        this.cantidadPatas = cantidadPatas;
    }

    emitirSonido() {
        console.log(this.tipo, this.color, this.cantidadPatas, '???????');
    }
}

class Perro extends Animal {
    constructor(nombre, color) {
        super(color, 'Perro', 4);
        this.nombre = nombre;
    }

    emitirSonido() {
        console.log(this.nombre, this.tipo, this.color, this.cantidadPatas,'GUAU!!!!');
    }
}

const perro = new Animal('negro', 'Perro', 4);
perro.emitirSonido();

const perro2 = new Perro('Bobby', 'blanco');
perro2.emitirSonido();



function fibonacci(n) {
    const arreglo = [1];
    if(n > 1){
        arreglo.push(1);
        for(let i = 2; i<=n; i++) {
            arreglo.push(arreglo[i-1] + arreglo[i-2]);
        }
    }
    return arreglo;
}

console.log(fibonacci(10));

// Funciones JS para web