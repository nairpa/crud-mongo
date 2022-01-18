const express = require('express');
const cors = require('cors');
const app = express();
const dbConfig = require('./config/db');
const db = require('./models');
const { createRoles } = require('./utils/initialSetup');

// connection to db
db.mongoose.connect(`${dbConfig.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))

// import routes
const routes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
createRoles();

// middlewares
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes 
app.use('/', routes);

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})