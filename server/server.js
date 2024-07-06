require('dotenv').config()

const express = require('express')
const birdRoutes = require('./routes/birds')
const mongoose = require('mongoose')

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/birds', birdRoutes)

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listener
    app.listen(process.env.PORT, () => {
    console.log('Connected to database. Listening on port', process.env.PORT)
})
    })
    .catch((error) => {
    console.log(error)
    })



