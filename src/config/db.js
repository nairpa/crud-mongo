require('dotenv').config();

module.exports = {
    HOST: process.env.DB_HOST,
    DB: process.env.DB_NAME,
    DB_URL: process.env.DB_URL,
}