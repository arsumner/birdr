const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

// static signup method
userSchema.statics.signup = async function (email, password) {

    // validation logic
    if (!email || !password) {
        throw Error('Please fill in both fields.')
    }
    if (!validator.isEmail(email)) {
        throw Error('This is not a valid email.')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('This password is not strong enough.')
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('This email is already associated with an account.')
    }

    // password hashing
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user

 }

module.exports = mongoose.model('User', userSchema)
