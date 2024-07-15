const User = require('../models/userModel')

// LOGIN 
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// SIGNUP
const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = { loginUser, signupUser }