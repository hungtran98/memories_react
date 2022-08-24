
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { param } = require('../routes/auth')


const  AuthController =  {
    //POST  /register
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            // create new user
            const newUser = await new User({
                username: req.body.username,
                password: hashed
            })

            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(401).json('create account failure!')
        }
    },

    createToken: (user) => {
        return jwt.sign(
            {
              username: user.username,
              isAdmin: user.isAdmin,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '300s' }
          );
    },


    login: async ( req, res ) => {
        try {
            const user = await User.findOne({
                username: req.body.username
            })
            if(!user) {
               return res.status(404).json("incorrect username !")
            }
            const isPassword = await bcrypt.compare(
                req.body.password,
                user.password )
            if(!isPassword){
                return  res.status(404).json("incorrect password !")
            }
            if(user && isPassword) {

                const accessToken = AuthController.createToken(user)
                const {password, ...rest} = user._doc
                res.status(200).json({...rest, accessToken})
            }
            // const {password, ...params} = user
            
        } catch (error) {
            res.status(500).json(error)
        }
    } 


}

module.exports = AuthController