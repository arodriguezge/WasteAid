const Item = require("../models/Item")

module.exports = {
    getItems: async (req, res) => {
        try {
            let params = { approved: true }
            if(req.query.approved) {
                params = { approved: req.query.approved }
            } else if(req.query.hasOwnProperty('approved') && req.query.approved === false) {
                params= { approved: req.query.approved }
            }
            const items = await Item.find(params)
            res.status(200).json(items)
        } catch(err) {
            res.status(422).json({
                error: err.message,
                success: false,
                message: 'There was an error. Please try to edit your item later'
            })
        }
    },
    removeItem: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Item.findByIdAndDelete(id)
                res.status(200).json({ 
                success: true,
                item: item
            })
        } catch(err) {
            res.status(422).json({
                error: err.message,
                success: false,
                message: 'There was an error. Please try again later'
            })
        }
    },
    editItem: async (req, res) => {
        try {
            const { id } = req.params
            const newItem = req.body
            const item = await Item.findByIdAndUpdate(id, newItem, {new: true})
            res.status(200).json({ 
                success: true,
                item: item 
            })
        } catch(err) {
            res.status(422).json({
                error: err.message,
                success: false,
                message: 'There was an error. Please try to edit your item later'
            })
        }
    }
}