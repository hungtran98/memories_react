const mongoose = require('mongoose')
const { Schema } = mongoose


const Genres = {
    name: {type: String}
}

module.exports = mongoose.model('Genres', typeOfPetSchema)