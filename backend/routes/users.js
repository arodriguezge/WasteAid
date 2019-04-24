const express = require('express')
const router = express.Router()
// const validateToken = require('../middlewares').validateToken

const {
    create,
    authenticate
} = require('../controllers/usersController')  

// login --> /LOGIN 
router.post('/login', authenticate)

//create --> /REGISTER 
router.post('/', create)



module.exports = router