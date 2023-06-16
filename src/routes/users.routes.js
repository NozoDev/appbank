const userController = require('../controllers/user.controller');
const validationMiddleware = require('./../middleware/validation.middleware');
const express = require('express');

const router = express.Router();

router.post(
  '/signup',
  validationMiddleware.createUserValidation, 
  userController.signup
);

router.post(
  '/login',
  validationMiddleware.loginUserValidation, 
  userController.login
);

module.exports = router;
