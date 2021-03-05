const {Router} = require('express');
const router = new Router();

const getAbout = (req, res, next) => {
    try {
        res.json({ message: 'Estas en la pagina de About.' });    
    } catch (error) {
        res.sendStatus(500);
    }
}

const postAbout = (req, res, next) => {
    try {
        
        const { saludo } = req.body;

        if(saludo) {
            res.status(200).json({ saludo });
        } else {
            res.status(404).json({ message: 'No llego el saludo.' });
        }

    } catch (error) {
        res.sendStatus(500);
    }
}

router.get('/', getAbout);
router.post('/', postAbout);

module.exports = router;
