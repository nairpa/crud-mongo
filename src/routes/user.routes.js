const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/user/signup');
const { signin } = require('../controllers/user/signin');
const validationMiddleware = require('../middlewares/validation.middleware');
const authValidators = require('../middlewares/authValidators');

router.post('/auth/signup', [authValidators.register, validationMiddleware], signup);
router.post('/auth/signin', [authValidators.login, validationMiddleware], signin);

module.exports = router;