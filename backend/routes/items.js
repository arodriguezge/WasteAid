const express = require('express')
const router = express.Router()

const {
    index,
    newItem,
    getItem,
    editItem,
    removeItem
} = require('../controllers/itemsController')  


// GET items - by querying
router.get('/', index)
// POST create item create
router.post('/', newItem)
// GET specific item
router.get('/:id', getItem)
// PATCH edit item
router.patch('/:id', editItem)
// DELETE item
router.delete('/:id', removeItem)

module.exports = router