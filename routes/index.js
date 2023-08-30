const NotFoundError = require('../errors/NotFoundError');
const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  login,
  createUser,
} = require('../controllers/users');

const {
  validationLogin,
  validationSignup,
} = require('../middlewares/validation');

router.use('/signin', validationLogin, login);

router.use('/signup', validationSignup, createUser);

router.use(auth);

router.use('/users', require('./users'));

router.use('/movies', require('./movies'));

router.use((req, res, next) => {
  next(new NotFoundError('Сервер с данным адресом не найден'));
});

module.exports = router;