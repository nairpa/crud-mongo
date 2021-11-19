const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))
    
// import routes
const routes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({ extended: false }))

// routes 
app.use('/', routes);

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})