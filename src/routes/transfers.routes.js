const transfersController = require('../controllers/transfer.controller');

const validationMiddleware = require('../middleware/validation.middleware');

const { Router } = require('express');

const router = Router();

router.post(
  '/',
  validationMiddleware.transferUserValidation,
  transfersController.transfer
);

module.exports = router;
