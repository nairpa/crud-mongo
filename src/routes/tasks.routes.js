const express = require('express');
const router = express.Router();
const tasksGet = require('../controllers/task/getAll');
const taskPost = require('../controllers/task/post');
const taskGetId = require('../controllers/task/getOne');
const taskDelete = require('../controllers/task/delete');
const taskUpdate = require('../controllers/task/put');
const { auth } = require('../middlewares/verifyToken');

router.get('/tasks', auth, tasksGet.getAll);
router.post('/tasks', auth, taskPost.create);
router.get('/tasks/:id', auth, taskGetId.getOne);
router.delete('/tasks/:id', auth, taskDelete.deleteOne);
router.put('/tasks/:id', auth, taskUpdate.update);

module.exports = router;