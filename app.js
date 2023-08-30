require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const generalError = require('./middlewares/generalError');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

const app = express();

app.use(express.json());

app.use(routes);

app.use(requestLogger);

app.use(helmet());

app.use(cors());

app.use(errorLogger);

app.use(errors());

app.use(generalError);

mongoose.connect(DB_URL);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});