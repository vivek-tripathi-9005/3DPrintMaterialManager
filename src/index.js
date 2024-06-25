import express from 'express'
const app = express()
const router = express.Router()
import './config/db.js'

app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`)
})
