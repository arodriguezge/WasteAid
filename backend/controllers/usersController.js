const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    list: async (req, res) => {
        let result 
        let status
        try {
            const users = await User.find({}) //CHECK THIS ONE, WE SHOULD NOT SEND PASSWORD
            result = users
            status = 200
        } catch(err) {
            status = 500
            result = {
                error: err.message,
                success: false
            }
        }
        res.status(status).json(result)
    },
    create: async (req, res) => {
        let result 
        let status
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const newUser = new User(req.body)
            const user = await newUser.save()
            result = {
                success: true,
                user: user.username
            }
            status = 200
        } catch(err) {
            result = {
                error: err.message,
                success: false,
                message: 'There was an error. Please try to add your user again or check if there is already an user with that name'
            }
            status = 500
        }
        res.status(status).send(result)
    },
    authenticate: async (req, res) => {
        let result 
        let status 
        // try {
        //     let response
        //     const user = await User.findOne({ email: req.body.email })
        //     user ? response = { success: true} : response = { message: "The email is not registered" }
        //     const match = await bcrypt.compare(req.body.password, user.password)
        //     match ? response = { payload: user, success: true } : response = { message: "Incorrect password", success: false } 
        //     return res.status(200).send(response)
        // }
        try {

            const user = await User.findOne({ username: req.body.params.username })
            const match = await bcrypt.compare(req.body.params.password, user.password)
            if(!match) {
                status = 401
                result = { message: "Authentication error" }
            } else {

                const token = await jwt.sign(
                    { user: user.username }, 
                    process.env.JWT_SECRET,
                    { expiresIn: '12h'}
                )

                status = 200
                result = { 
                    success: true,
                    token
                }
            }
             
        } catch(err) {
            status = 500
            result = {
                error: err.message,
                success: false,
                message: 'There was an error. Please try again later'
            }
        }
        res.status(status).send(result)
    }
}