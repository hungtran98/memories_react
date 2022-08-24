const mongoose = require('mongoose')
const { Schema } = mongoose
const slug = require('mongoose-slug-generator')


const petSchema = new Schema( {

    name: { type: String},
    image: {type: String},
    type: [{
        type: Schema.Types.ObjectId,
        ref: "Genres"
    }],
    height: { type: Number},
    weight: { type: Number},
    desc: {type: String},
    slug: {type: String, slug: 'name', unique: true},
}) 

mongoose.plugin(slug)


module.exports = mongoose.model('Pet', petSchema)


