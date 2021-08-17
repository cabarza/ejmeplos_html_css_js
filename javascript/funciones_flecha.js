const test = (param1, param2) => {
    console.log(`Parametro 1: ${param1} \nParametro 2: ${param2}`);
}

test('ABC', '123');

const test2 = () => {
    console.log(`test 2`);
}
 
// setTimeout(() => {
//     test('A', 'B');
// }, 1000);

// setTimeout(test2, 1000);

// setTimeout(test, 1000, ['A', 'B']);

const callbackTest = (fn, texto) => {
    if(fn instanceof Function) {
        fn(texto);
    } else {
        console.log('No es una función');
    }
}

callbackTest(
    (t) => {
        console.log(t.toUpperCase());
    }, 
    'esta es una prueba de callbacks')

callbackTest('Texto 1', 'Texto 2');




const suma = (numero1, numero2) =>{
    return numero1 + numero2;
}

const multiplicacion = (numero1, numero2) =>{
    return numero1 * numero2;
}

const resta = (numero1, numero2) =>{
    return numero1 - numero2;
}

const division = (numero1, numero2) =>{
    return numero1 / numero2;
}


const funcionX = (n1, n2, operacion) => {
    console.log(operacion(n1, n2));
}


funcionX(10, 2, suma);
funcionX(10, 2, resta);
funcionX(10, 2, multiplicacion);
funcionX(10, 2, division);

funcionX(10, 2, (n1, n2) => {
    return n1 + n2;
});

funcionX(10, 2, (n1, n2) => {
    return n1 - n2;
});

funcionX(10, 2, (n1, n2) => {
    return n1 * n2;
});

funcionX(10, 2, (n1, n2) => {
    return n1 / n2;
});


