const mongoose = require('mongoose')
const { Schema } = mongoose

const PostSchema = new Schema( {
    title: {type: String},
    createtor: {type: String},
    desc: {type: String},
    image: {type: String},
    like: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

module.exports = mongoose.model('Post', PostSchema)