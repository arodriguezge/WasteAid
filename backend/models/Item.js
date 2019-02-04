const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: 'You must provide name of the item',
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: 'You must provide description of the item',
        trim: true
    },
    recyclable: {
        value: Boolean,
        color_bin: {
            blue: false,
            green: false,
            white: false,
            yellow_orange: false,
            brown: false,
            grey_black: false
        },
        default: false
    },
    approved: {
        type: Boolean,
        default: false
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', ItemSchema)