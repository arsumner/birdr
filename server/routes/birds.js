const express = require('express')
const Bird = require('../models/birdModel')
const { createBird, getBird, getBirds, deleteBird, updateBird } = require('../controllers/birdController')
const router = express.Router()

// GET birds
router.get('/', getBirds)

// GET single bird
router.get('/:id', getBird)

// POST a bird
router.post('/', createBird)

// DELETE a bird
router.delete('/:id', deleteBird)

// UPDATE bird
router.patch('/:id', updateBird)

module.exports = router