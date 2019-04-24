const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    create: async (req, res) => {
        let result 
        let status
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            //check errors here 
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
        //try to re-build
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
            if(!user) {
                status = 404
                result = {
                    error: 'User not found',
                    success: false
                }
            } else {
                const match = await bcrypt.compare(req.body.params.password, user.password)
                if(!match) {
                    status = 401
                    result = {
                        error: 'Authentication error',
                        success: false
                    }
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