const express = require('express');
const router = express.Router();
const tasksGet = require('../controllers/task/getAll');
const taskPost = require('../controllers/task/post');
const taskGetId = require('../controllers/task/getOne');
const taskDelete = require('../controllers/task/delete');
const taskUpdate = require('../controllers/task/put');

router.get('/tasks', tasksGet.getAll);
router.post('/tasks', taskPost.create);
router.get('/tasks/:id', taskGetId.getOne);
router.delete('/tasks/:id', taskDelete.deleteOne);
router.put('/tasks/:id', taskUpdate.update);

module.exports = router;