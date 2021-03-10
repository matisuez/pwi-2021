const { 
    Router
} = require('express');
const router = new Router();

const getAbout = (req, res, next) => {
    try {
        
        // res.json({ title: 'About', text: 'Somos una empresa de comida.' });
        res.render('about', { 
            title: 'Nosotros',
            text: 'Somos una empresa de comida.' 
        });
        
    } catch (error) {
        res.sendStatus(500);
    }
}

router.get('/', getAbout);

module.exports = router;