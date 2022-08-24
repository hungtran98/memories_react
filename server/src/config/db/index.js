const mongoose = require('mongoose')

async function connection () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/tvth_pokemon_dev', {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log('connected...')
    } catch (error) {
        console.log('connect failure !...');
    }
}

module.exports = { connection }