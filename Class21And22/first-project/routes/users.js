
const { Router } = require('express');
const router = new Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.post('/new', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
