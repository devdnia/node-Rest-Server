
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
        enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTAS_ROLE'],
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

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
}

// con model( 'Usuario' ) se creará una colección con nombre Usuarios
module.exports = model( 'Usuario', UsuarioSchema );