const usuario = {
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
}

// const nombre = usuario.nombre;

const { nombre: nombreUsuario, apellido } = usuario;

console.log(nombreUsuario);
console.log(apellido);

const { direccion } = usuario;
console.log(direccion);