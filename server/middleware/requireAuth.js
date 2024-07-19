const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        console.log('Authorization header missing')
        return res.status(401).json({ error: 'Authorization token required.' })
    }

    console.log('Authorization header received:', authorization)

    // split to get the auth token from the authentication string
    const token = authorization.split(' ')[1]
    console.log('Extracted token:', token)

    try {
        const { _id } = jwt.verify(token, process.env.SECRET)
        console.log('Token verified, user ID:', _id)

        req.user = await User.findOne({ _id }).select('_id')
        console.log('User found:', req.user)

        next()
    } catch (error) {
        console.log('Error verifying token:', error)
        res.status(401).json({ error: 'Request is not authorized.' })
    }
}

module.exports = requireAuth
