const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('INDEX')
})
// about
router.get('/about', (req, res) => {
    res.send('about')
})

module.exports = router