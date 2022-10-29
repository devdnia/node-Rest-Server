const { response, request } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = async(req, res) => {

    const body = req.body;
    const usuario = new Usuario( body );

    // Grabar en BD
    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
}
const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}
const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
} 