const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1000');
    }, 2000);
});

console.log('Antes de la llamada');
promesa
    .then(result => console.log('RESULT', result))
    .catch(error => console.log('ERROR', error));


console.log('Después de la llamada');



let i = 0;
do {
    const promise = new Promise((resolve, reject) => {
        let randomNumber = Math.random() * 1000;
        randomNumber > 500 ? resolve(randomNumber) : reject(randomNumber);
    });

    promise
        .then(resp => console.log('RESPUESTA', resp))
        .catch(error => console.error('ERROR', error));
    i++;
    if(i > 10) {
        break;
    }

} while(true)