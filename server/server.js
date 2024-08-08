require('dotenv').config()

const express = require('express')
const birdRoutes = require('./routes/birds')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/birds', birdRoutes)
app.use('/api/user', userRoutes)

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listener
    app.listen(process.env.PORT || 4200, () => {
    console.log('Connected to database. Listening on port', process.env.PORT)
})
    })
    .catch((error) => {
    console.log(error)
    })