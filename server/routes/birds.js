const express = require('express')

const router = express.Router()

// GET birds
router.get('/', (req, res) => {
    res.json({msg: 'GET all birds'})
})

// GET single bird
router.get('/:id', (req, res) => {
    res.json({msg: 'GET single bird'})
})

// POST a bird
router.post('/', (req, res) => {
    res.json({msg: 'POST new bird'})
})

// DELETE a bird
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE bird'})
})

// UPDATE bird
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE bird'})
})

module.exports = router