const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 2000,
  message: 'Вы превысили лимит запросов, пожалуйста, повторите попытку позже.',
});

module.exports = limiter;
