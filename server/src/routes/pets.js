const express = require('express')
const router = express.Router()
const PetsController = require('../controllers/PetsController')
const middlewareToken = require('../middlewares/middlewareToken')




router.post('/store', PetsController.store)
router.get('/:slug', PetsController.getPet)
router.get('/', middlewareToken.confirmToken, PetsController.getPets)


module.exports = router