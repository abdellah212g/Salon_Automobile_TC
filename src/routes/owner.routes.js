const express = require('express')
const router = express.Router()
const {ownerController,clientController,authController} = require('../controllers/client.controllers')

router.get('/',clientController)
router.get('/owner',ownerController)
router.get('/auth',authController)





module.exports = router;