/*
    Rutas de Eventos
    host + /api/events
*/

const Router = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../middlewares/isDate');

const router = Router();

// Toas las peticiones tienen que pasar por JWT
router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos);

// Crear un evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom( isDate ),
        check('end', 'Fecha de finalización es obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

// Actualizar evento
router.put('/:id',  actualizarEvento);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
