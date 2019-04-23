const jwt = require('jsonwebtoken')

module.exports = {
    validateToken: async (req, res, next) => {
        const authorizationHeader = req.headers.authorization
        let result
        if (authorizationHeader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            try {
                result = await jwt.verify(token, process.env.JWT_SECRET)
                req.decoded = result
                next()
            } catch (err) {
                result = {
                    error: err.message,
                    success: false
                }
                status = 401
                res.status(status).send(result) //check this one, is rep
            }
        } else {
            result = { 
                error: `Forbidden. Authentication error. Token required.`,
                success: false
            }
            status = 403
            res.status(status).send(result)
        }
    }
}