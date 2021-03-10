const { Router } = require('express');
const router = new Router();

const getContact = (req, res, next) => {
    try {
        
        res.render('contact', {
            title: 'Contacto',
            titleH1: 'Envia una consulta para contactarnos.'
        });

    } catch (error) {
        res.sendStatus(500);
    }
}

const postContact = (req, res, next) => {
    try {
        
        // Post se envia a traves de el body
        // const { name, surname, email, comments } = req.body;
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const comments = req.body.comments;

        const comment = { name, surname, email, comments };

        console.log(comment);

        if(comment.name != ''){
            res.render('contact', {
                title: 'Contacto',
                titleH1: 'Envia una consulta para contactarnos.',
                messageType: 'success',
                message: 'Gracias por enviar su consulta.' 
            });
        } else {
            res.render('error');
        }

    } catch (error) {
        res.sendStatu(500);
    }
}

const getContactByQueryString = (req, res) => {
    try {
        
        // Get se envia a traves de url mediante el uso de query string
        const { name, surname, email, comments } = req.query;

        const comment = { name, surname, email, comments };

        console.log(comment);

        res.render('contact', {
            title: 'Contacto',
            titleH1: 'Envia una consulta para contactarnos.',
            messageType: 'success',
            message: `Gracias por enviar su consulta señor ${comment.name} ${comment.surname}, \n lo contactaremos al email ${comment.email}`
        });

    } catch (error) {
        res.sendStatus(500);
    }
}

const getContactByParams = (req, res, next) => {
    try {
        
        // Get se envia a traves de url mediante el uso de params
        // const id = req.params.id;
        const { id: id_person } = req.params;

        const array = [
            { id: 1, name: 'Matias' },
            { id: 43, name: 'Pepito' }
        ];

        const person = array.find( p => p.id == id_person ); // find devuelve {} y filter devuelve un []

        if(person) {
            res.render('contact', {
                title: 'Contacto',
                titleH1: 'Envia una consulta para contactarnos.',
                messageType: 'success',
                message: `Se encontro el id ${person.id} cuyo nombre ${person.name}`
            });
        } else {
            res.render('contact', {
                title: 'Contacto',
                titleH1: 'Envia una consulta para contactarnos.',
                messageType: 'danger',
                message: `No se encontro el id ${id_person}`
            });
        }

    } catch (error) {
        res.sendStatus(500);
    }
}

router.get('/', getContact);
router.get('/:id', getContactByParams);
router.get('/comment', getContactByQueryString);
router.post('/', postContact);

module.exports = router;