
const model = require('../models/users.model');

const getUsers = async (req, res, next) => {
    try {

      const users = await model.getAllUsers();
      const roles = await model.getRoles();

      if(users && roles && users.length > 0 && roles.length > 0) {
        res.render('users', { users, roles });
      } else {
        res.status(404).render('error');
      }
  
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
}

const createUser = async(req, res, next) => {
  try {
    
    // Obtengo del obj req.body los varoles que envian por POST
    const { email, password, role } = req.body;
    // const user = {email, password, role };
    const result = await model.insertUser({ email, password, role });
    const users = await model.getAllUsers();
    const roles = await model.getRoles();

    console.log(result);

    if(result) {
      res.render('users', { users, roles });
    } else {
      res.render('error');
    }


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

const getSingleUser = async(req, res, next) => {
  try {
    
    // Obtener el id de la fila == usuario
    const { id } = req.params;

    const result = await model.getSingleUser(id);
    const users = await model.getAllUsers();
    const roles = await model.getRoles();

    if(result && result.length > 0) {
      res.render('users', { user: result[0], users, roles });
    } else {
      res.render('error');
    }


  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
    getUsers,
    createUser,
    getSingleUser
}
