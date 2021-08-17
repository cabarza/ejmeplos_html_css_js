const simpsons = [{
    nombre: 'Omero',
    apellido: 'Simpson',
    email: 'omero@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Marge',
    apellido: 'Bouvier',
    email: 'marge@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Bart',
    apellido: 'Simpson',
    email: 'bart@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Lisa',
    apellido: 'Simpson',
    email: 'lisa@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Magie',
    apellido: 'Simpson',
    email: 'marge@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
}
]




const [,,, lisa] = simpsons;
console.log('LISA', lisa);

const lisaMod = {
    ...lisa,
    direccion: {
        ...lisa.direccion,
        numero: 747
    }
}

console.log('LISAMOD', lisaMod);

simpsons.splice(3, 1, lisaMod);

console.log(simpsons);

// console.log('OMERO: ', omero);
// console.log('Marge: ', marge);
// console.log('RESTO: ', resto);


// const barney = {
//     nombre: 'Barney',
//     apellido: 'Gumble',
//     email: null
// }

// const barneyModificado = {
//     ...barney,
//     email: 'barney@email.cl'
// }

// console.log('Barney', barneyModificado);


// const propiedad = 'nombre';
// const valor = 'JAJAJA';

// const barneyModificado2 = {
//     ...barneyModificado,
//     [propiedad]: valor
// }

// console.log('Barney', barneyModificado2);

// const simpsons2 = [barneyModificado2, ...simpsons];

// console.log(simpsons2);

