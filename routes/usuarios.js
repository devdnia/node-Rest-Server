
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido } = require('../helpers/db-validators');

const { usuariosGet, 
        usuariosPut, 
        usuariosDelete, 
        usuariosPatch, 
        usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

// Segundo argmento es el middleware de validación
router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de más de 6 letras').isLength({ min: 6}),
        check('correo', 'No es un correo válido').isEmail(),
         // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom( esRoleValido ),
        validarCampos
],usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );

module.exports = router;