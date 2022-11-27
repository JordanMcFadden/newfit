const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token) {
        return res.status(400).send({message: 'Access Denied, no token provided'})
    }
}