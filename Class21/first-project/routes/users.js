
const { Router } = require('express');
const router = new Router();
const {
  getUsers,
  createUser,
  getSingleUser
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.post('/new', createUser);

module.exports = router;
