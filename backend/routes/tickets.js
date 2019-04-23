const express = require('express')
const router = express.Router()
const validateToken = require('../middlewares').validateToken

const { 
    getItems,
    removeItem,
    editItem
} = require('../controllers/ticketsController')  

// GET items and tickets
router.get('/', validateToken, getItems)
// DELETE item
router.delete('/:id', removeItem)
// PATCH edit item
router.patch('/:id', editItem)

module.exports = router