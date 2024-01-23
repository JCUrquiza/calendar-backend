const { response } = require('express');

const getEventos = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'getEventos',
    });
    
}

const crearEvento = (req, res = response) => {

    // Verificar que tanga el evento
    console.log(req.body);
    
    return res.status(200).json({
        ok: true,
        msg: 'crearEventos',
    });

}

const actualizarEvento = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'actualizarEvento',
    });

}

const eliminarEvento = (req, res = response) => {

    return res.status(200).json({
        ok: true,
        msg: 'eliminarEvento',
    });
    
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
