const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:[true, 'El nombre es requerido'],
        maxlength: [50, 'El nombre no debe superar los 50 caracteres']
    },
    clave: {
        type:String,
        required: [true, 'Debe ingresar la clave'],
        minlength: [6, 'La clave debe ser de al menos 6 caracteres'],
        maxlength: [20, 'clave no debe superar los 20 caracteres']
    },
    email: {
        type: String,
        validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'El email es inválido']
    },
    edad: {
        type: Number,
        required: [true, 'Debe ingresar la edad'],
        min:[18, 'Debe tener al menos 18 años'],
        max: [65, 'No puede superar los 65 años']
    },
    activo: Boolean
}, { timestamps: true});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;