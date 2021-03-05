const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuarios');

// Como enviar datos params (GET) /usuarios/1 
const getByParams = (req, res, next) => {
  try {
    
    const id = req.params.name;

    if(id) {
      res.status(200).json({ idUser: id });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado.' });
    }

  } catch (error) {
    res.sendStatus(500);
  }
}

// Como enviar datos mediante query string (GET) /usuarios?id=1
const getByQueryString = (req, res, next) => {
  try {
    
    const id = req.query.id;

    console.log(id);

    if(id) {
      res.status(200).json({ idUser: id });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado.' });
    }

  } catch (error) {
    res.sendStatus(500);
  }
}

// Como enviar datos mediante el body (POST)
const postByBody = (req, res, next) => {
  try {
    
    // const { nombre, apellido } = req.body;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const user = { nombre: nombre, apellido };

    if(user.nombre && user.apellido) {
      res.json({ usuario: user });
    } else {
      res.status(404).json({ message: 'No se pudo registrar el usuario.' });
    }

  } catch (error) {
    res.sendStatus(500);
  }
}

const dameUsuarios = async(req, res, next) => {
  try {
    const usuarios = await usuariosModel.obtenerUsuarios();

    if(usuarios && usuarios.length > 0) {
      res.json({ usuarios });
    } else {
      res.json({ message: 'No se encontraron usuarios.' });
    }

  } catch (error) {
    res.sendStatus(500);
  }
}

router.get('/', dameUsuarios);
router.get('/search-by-param/:name', getByParams);
router.get('/search-by-query', getByQueryString);
router.post('/nuevo', postByBody);

module.exports = router;
