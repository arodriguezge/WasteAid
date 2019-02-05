const Item = require('../models/Item')

module.exports = {
    index: async (req, res, next) => {
        const items = await Item.find({})
        res.status(200).json(items)
    },
    newItem: async (req, res, next) => {
        const newItem = new Item(req.body)
        const item = await newItem.save()
        res.status(200).json(item)
    },
    getItem: async (req, res, next) => {
        const { id } = req.params
        const item = await Item.findById(id)
        res.status(200).json(item)
    },
    editItem: async (req, res, next) => {
        const { id } = req.params
        const newItem = req.body
        const item = await Item.findByIdAndUpdate(id, newItem)
        res.status(200).json({success: true})
    },
    removeItem: async (req, res, next) => {
        const { id } = req.params
        const item = await Item.findByIdAndDelete(id)
        res.status(200).json({success: true})
    }
}