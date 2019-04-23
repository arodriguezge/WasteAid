const express = require('express')
const router = express.Router()

const {
    getItemsByQuery,
    newItem
} = require('../controllers/itemsController')  


// GET items - by querying
router.get('/', getItemsByQuery)
// POST create item create
router.post('/', newItem)

module.exports = router