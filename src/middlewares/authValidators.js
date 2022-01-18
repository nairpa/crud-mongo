const { check } = require('express-validator');

module.exports = {
    register: [
        check('username').notEmpty().withMessage('Username is required').exists().withMessage('Username already in use'),
        check('email').notEmpty().withMessage('Email is required').exists().withMessage('Email already in use').isEmail().withMessage('Must be a valid email'),
        check('password').notEmpty().withMessage('Password is required')
    ],
    login: [
        check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Must be a valid email'),
        check('password').notEmpty().withMessage('Password is required')
    ]
}