const mongoose = require('mongoose')
require('dotenv').config()

const dbURI = process.env.CONNECTION_STRING
mongoose
    .connect(dbURI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error: ', err))
