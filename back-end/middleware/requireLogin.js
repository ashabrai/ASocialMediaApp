const JWT = require('jsonwebtoken');
const {JWT_SECRET } = require('../keys');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    // authorization === Bearer(which is the token we created in keys.js)
    if(!authorization) {
        return res.status(401).json({ error: 'You must be logged in' })
    }
    const token = authorization.replace("Bearer ", "")
    // verify that the token 
    JWT.verify(token, JWT_SECRET, (err, payload) =>{
        if(err){
            return res.status(401).json({ error: "You must be logged in "})
        }
        const { _id } = payload
        User.findById(_id).then(userData => {
            req.user = userData;
            next() // to call the next req
        })
    })
}