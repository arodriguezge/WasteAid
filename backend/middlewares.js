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
            throw new Error(err)
        }
        } else {
            result = { 
            error: `Authentication error. Token required.`,
            status: 401
        }
            res.status(401).send(result)
        }
    }
}