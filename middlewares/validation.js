const BadRequestError = require('../errors/BadRequestError');
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validatorUrl = (url) => {
  if (!validator.isURL(url)) {
    throw new BadRequestError('Невалидный URL');
  } else {
    return url;
  }
};

const validationSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  }),
});

const validationLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  }),
});

const validationCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(validatorUrl),
    trailerLink: Joi.string().required().custom(validatorUrl),
    thumbnail: Joi.string().required().custom(validatorUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validationMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

const validationUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports = {
  validationSignup,
  validationLogin,
  validationMovieId,
  validationCreateMovie,
  validationUpdateUser,
};