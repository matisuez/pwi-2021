
//const model = require('./../models/contact.model');
const mailer = require('./../utils/mailer');

const sendComment = async(req, res, next) => {
    try {
        
        const { fullName, email, comment } = req.body;
        const emailToSend = { fullName, email, comment };

        const info = await mailer.comments(emailToSend)

        if(info) {
            res.render('contact', { message: 'Gracias por enviar su consulta!' });
        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getContact =async (req, res, next) => {
    try {
        
        res.render('contact');

    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = {
    getContact,
    sendComment
}