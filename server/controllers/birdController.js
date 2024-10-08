const Bird = require('../models/birdModel')
const mongoose = require('mongoose')


// GET all birds
const getBirds = async (req, res) => {
    const user_id = req.user._id
    const birds = await Bird.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(birds)
}

// GET one bird
const getBird = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'This bird does not exist in the log'})
    }

    const bird = await Bird.findById(id)

    if (!bird) {
        return res.status(404).json({error: 'This bird does not exist in the log'})
    }

    res.status(200).json(bird)
}

// CREATE new bird
const createBird = async (req, res) => {

    const {name, location, count, notes} = req.body

    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }
    if(!location) {
        emptyFields.push('location')
    }
    if(!count) {
        emptyFields.push('count')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please complete the outlined fields.', emptyFields})
    }

    // Add bird to DB
    try {
        const user_id = req.user._id
        const bird = await Bird.create({name, location, count, notes, user_id})
        res.status(200).json(bird)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a bird
const deleteBird = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'This bird does not exist in the log'})
    }

    const bird = await Bird.findOneAndDelete({_id: id})

    if (!bird) {
        return res.status(404).json({error: 'This bird does not exist in the log'})
    }

    res.status(200).json(bird)
}

// UPDATE a bird
const updateBird = async (req, res) => {

    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'This bird does not exist in the log'})
    }

    const bird = await Bird.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!bird) {
        return res.status(404).json({error: 'This bird does not exist in the log'})
    }

    res.status(200).json(bird)
}

module.exports = {
    createBird,
    getBird,
    getBirds,
    deleteBird,
    updateBird
}