const { Router } = require('express');
const router = new Router();

const getContact = (req, res, next) => {
    try {
        res.render('contact', { text: 'Llena el formulario con tu consulta.' });
    } catch (error) {
        res.sendStatus(500);
    }
}

const postForm = (req, res) => {
    try {
        
        // Para enviar mediante POST se requiere el req.body;
        const { name, surname, email, comment } = req.body;

        console.log(`Nombre: ${name}`);
        console.log(`Apellido: ${surname}`);
        console.log(`Email: ${email}`);
        console.log(`Nombre: ${comment}`);

        res.render('contact');

    } catch (error) {
        res.sendStatus(500);
    }
}

router.get('/', getContact);
router.post('/', postForm);

module.exports = router;