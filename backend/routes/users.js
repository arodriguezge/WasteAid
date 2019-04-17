const express = require('express')
const router = express.Router()
const validateToken = require('../middlewares').validateToken

const {
    list,
    create,
    authenticate
} = require('../controllers/usersController')  

// index
router.get('/', validateToken, list)

// login --> /LOGIN 
router.post('/login', authenticate)

//create --> /REGISTER 
router.post('/', create)



module.exports = router