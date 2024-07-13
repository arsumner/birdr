const mongoose = require('mongoose')

const Schema = mongoose.Schema

const birdSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Bird', birdSchema)