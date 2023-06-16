const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Errores
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

// Routers
const usersRoute = require('./routes/users.routes');
const transfersRouter = require('./routes/transfers.routes');

// Iniciar la aplicación
const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/transfers', transfersRouter);

app.all('*', (req, res, next) => {
  return next(
    new AppError(
      `No se pudo encontrar ${req.originalUrl} en este servidor! 🧨🧨🧨`,
      404
    )
  );
});

// Manejador de errores global
app.use(globalErrorHandler);

module.exports = app;
