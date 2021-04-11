const express = require('express')
const router = express.Router()
const {profileClient,trycar,reservecar} = require('../controllers/client.controllers')
/// localhost:5000/client/ ->get  profile client 
router.get('/',profileClient)      

 /// localhost:5000/client/trycar/:id ->get 
router.get('/',trycar)
// localhost:5000/client/reservecar/:id -> get => url
router.post('/',reservecar)
// localhost:5000/client/reservecar/:id -> post => data



module.exports = router;