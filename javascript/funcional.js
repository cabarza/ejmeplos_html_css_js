// console.log(typeof('Hola'));

// console.log(typeof(12123));

// console.log(typeof hola == 'string')

let x = [2];

x.push(3);

console.log(x);

Object.freeze(x);

const y = [...x, 4];

console.log(y);

Object.freeze(y);

const z = y.slice(2);

console.log(y, z);