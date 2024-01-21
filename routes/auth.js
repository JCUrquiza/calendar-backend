/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth');

const router = Router();

router.post('/new', crearUsuario);

router.post('/', loginUsuario);

router.get('/renew', revalidarUsuario);


module.exports = router;
