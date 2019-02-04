const express = require('express')
const router = express.Router()

// const {} = require('../controllers/ItemsController')  

// GET all items
router.get('/', (req, res) => {
    res.send('all items')
})
// GET specific item
router.get('/:id', (req, res) => {
    res.send('single item')
})

module.exports = router