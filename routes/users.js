const router = require('express').Router();

const {
  getUser,
  updateUser,
} = require('../controllers/users');

const {
  validationUpdateUser,
} = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', validationUpdateUser, updateUser);

module.exports = router;
