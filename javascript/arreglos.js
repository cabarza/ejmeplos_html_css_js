let arreglo = [1,2,5,0,10,20,23,6];

arreglo = arreglo.concat([3,6,2,7]);

console.log(arreglo);

console.log(arreglo.slice(1, 5), arreglo);

arreglo.splice(3, 1, -10)
console.log(arreglo);

arreglo.sort((a, b) => b - a);

console.log(arreglo);

console.log(arreglo.map(n => n + 5), arreglo);

console.log(arreglo.filter(n => n >= 10));

console.log(arreglo.findIndex(n => n < 10));

console.log(arreglo.find(n => n < 10));

console.log(arreglo.reduce((total, n)=> total += n));