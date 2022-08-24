const { default: mongoose } = require('mongoose')
const Post = require('../models/Post')


const PostController = {

    getPosts: async (req, res) => {
       try {
        const posts = await Post.find().lean()
        res.status(200).json(posts)
       } catch (error) {
            res.status(404).json({
                message: error.message
            })
       }
    }, 

    getPost: (req, res) => {
        res.json('get a post')
    }, 

    createPost: async (req, res) => {
        const {title, createtor, desc, image} = req.body
        const newPost = new Post({title, createtor, desc, image})
        try {
            await newPost.save()  
            res.status(201).json(newPost)
            // const posts = await Post.find().lean()
            // res.status(200).json(posts)
            

        } catch (error) {
            res.status(409).json({message: error.message})
        }
    },
   
    updatePost: async (req, res) => {

        const { id } = req.params
        const { title, createtor, desc, image } = req.body
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json(`a post no exist with id ${id}`) 
        }
        //await Post.findByIdAndUpdate(id, updatedpost, {new: true})
        
        await Post.findOneAndUpdate({_id: id}, req.body)

        res.json('updated')  

    },

    deletePost: async (req, res) => {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json('a post no exist')
        }
        await Post.findOneAndDelete({_id: id})
        res.json('deleted')
    },

    likePost: async (req, res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json(`a post no exist with id ${id}`) 
        }
        const post = await Post.findById(id)
        const newPost = await Post.findByIdAndUpdate(id, {like: post.like + 1 }, {new: true})
        return res.json(newPost)
    }
}

module.exports = PostController