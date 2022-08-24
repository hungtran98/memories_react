const Pet = require('../models/Pet')
const { eventNames } = require('../models/User')



class PetsController {

    getPets = async (req, res, next) => {

        try {
            const pets = await Pet.find().lean()
            res.status(200).json(pets)
        } catch (error) {
            res.status(404).json( {
                message: error.message
            })
        }
        }

        //GET /pokemon/:slug
        getPet = async (req, res, next) => {
       
        try {
            const pet = await Pet.find({type: req.params.slug})
            res.status(200).json(pet)
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }
    
    //POST /pokemon/store

    store = async (req, res, next) => {
        // const { name, image, type, height, weight, desc } = req.body
        // const pet = new Pet( { name, image, type, height, weight, desc} )
        const pet = new Pet({
            name: req.body.name,
            image: req.body.image,
            type: req.body.type,
            height: req.body.height,
            weight: req.body.weight,
            desc: req.body.desc
        })
        try {
            await pet.save()
            res.status(201).json(pet)
        } catch (error) {
            res.status(409).json({ message: error.message })
        }
    }
        
    

}


module.exports = new PetsController