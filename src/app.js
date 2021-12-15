const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))
    
// import routes
const routes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// routes 
app.use('/', routes);

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})