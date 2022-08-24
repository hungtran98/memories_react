const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')
const middlewareToken = require('../middlewares/middlewareToken')


router.get('/', PostController.getPosts)
router.post('/', PostController.createPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)
router.patch('/:id/likePost', middlewareToken.confirmToken, PostController.likePost);




module.exports = router