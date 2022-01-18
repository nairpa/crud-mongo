const express = require('express');
const router = express.Router();
const taskRouter = require('./tasks.routes');
const userRouter = require('./user.routes');

router.use('/', taskRouter, userRouter)

module.exports = router;