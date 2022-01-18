const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.task = require('./task');
db.user = require('./user');
db.role = require('./roles');

db.ROLES = ['user', 'admin'];

module.exports = db;