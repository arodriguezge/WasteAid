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
    bin: {
        type: String,
        required: 'You must provide color of the bin',
    },
    category: {
        type: String,
        default: null
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

ItemSchema.index({ name: 'text', description: 'text' })

module.exports = mongoose.model('Item', ItemSchema)