const Item = require("../models/Item")

module.exports = {
  getItemsByQuery: async (req, res) => {
    try {
      let params = { approved: true }
      if (req.query.q) {
        params = { $text: { $search: req.query.q }, $and: [{ approved: true }]}
      } else if(req.query.bin) {
        params = { bin: req.query.bin, $and: [{ approved: true }] }
      } 
      //error if no q or bin, now if(!q && !bin) res items approved
      const items = await Item.find(params)
      res.status(200).json(items)
    } catch(err) {
      res.status(422).json({
        error: err.message,
        success: false,
        message: 'There was an error. Please try again later'
      })
    }
  },
  newItem: async (req, res) => {
    try {
      const newItem = new Item(req.body)
      const item = await newItem.save()
      res.status(200).json(item)
    } catch(err) {
      res.status(422).json({
        error: err.message,
        success: false,
        message: 'There was an error. Please try to add your item again or check if there is already an item with that name'
      })
    }
    
  }
}

