const express = require('express')
const router = express.Router()

const {
    index,
    newItem,
    getItem,
    editItem,
    removeItem
} = require('../controllers/itemsController')  

// GET all items
router.get('/', index)
// POST create item create
router.post('/create', newItem)
// GET specific item
router.get('/:id', getItem)
// PATCH edit item
router.patch('/edit/:id', editItem)
// DELETE item
router.delete('/remove/:id', removeItem)

module.exports = router