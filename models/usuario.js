
/*
    Estructura de objeto de usuario.
    {
        nombre: string,
        correo: string,
        img: string,
        rol: string,
        estado: boolean,
        google: boolean,

    }
*/ 

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type    : String,
        required: [true, 'El nombre es obligatorio'],
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROL', 'USER_ROLE'],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    }

});

// con model( 'Usuairo' ) se creará una colección con nombre Usuarios
module.exports = model( 'Usuario', UsuarioSchema );