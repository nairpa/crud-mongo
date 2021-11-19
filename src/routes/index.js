const express = require('express');
const router = express.Router();
const tasksGet = require('../controllers/getAll');
const taskPost = require('../controllers/post');
const taskGetId = require('../controllers/getOne');
const taskDelete = require('../controllers/delete');
const taskUpdate = require('../controllers/put');

router.get('/tasks', tasksGet.getAll);
router.post('/tasks', taskPost.create);
router.get('/tasks/:id', taskGetId.getOne);
router.delete('/tasks/:id', taskDelete.deleteOne);
router.put('/tasks/:id', taskUpdate.update);

module.exports = router;