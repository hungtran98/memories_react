const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = new Schema( {

    username: { type: String, unique: true},
    password: { type: String},
    accessToken: {type: String},
    isAdmin: {
        type: Boolean,
        default: false,
    },
     
}) 

{ timestamps: true }


module.exports = mongoose.model('User', userSchema)


