const express = require('express');
const router = express.Router();

const getAbout = (req, res, next) => {
    // Request ->  Recibimos parametros por ej.
    // Response -> Enviamos una respuesta.
    try {
        res.render('about', { title: 'About', text: 'Somos una empresa de comida.' });   
    } catch (error) {
        res.sendStatus(500);
    }
}

router.get('/', getAbout);

module.exports = router;