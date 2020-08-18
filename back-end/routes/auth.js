const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const requireLogin = require('../middleware/requireLogin')

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if(!email || !password || !name ){
        return res.status(422).json({ error: "Please add all the fields"})
    }
    User.findOne({ email: email }) //finding the user email from FE, and querying the DB with the email
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({ error: "User already exists with that email"})
        }
        bcrypt.hash(password, 12) // the bigger the num the more secure pw
        .then(hashedPassword => {
            const user = new User({ 
                email,
                password: hashedPassword,
                name
            })
            user.save()
                .then(user => {
                    res.json({ message: 'Saved successfully' })
                })
                .catch(err => {
                    console.log(err) 
                })
            })
        }).catch(err => {console.log(err)})
    });

router.post('/signin', (req,res) => {

    const { email, password } = req.body;
    if( !email || !password ) {
        return res.status(422).json({ error: "Please enter email or password" });
    }
    User.findOne({ email: email})
        .then(savedUser => {
            if(!savedUser){
                return res.send(422).json({ error: "Invalid email or password, please try again" });
            }
            bcrypt.compare(password, savedUser.password) //comparing the pw from the user to the one in the DB
            .then(userFound => {
                if(userFound){
                    // res.json({ message: "Successfully logged in" })
                    const token = JWT.sign({ _id: savedUser._id}, JWT_SECRET)
                    res.json({ token })

                } else {
                    return res.status(422).json({ error: "Invalid email or password, please try again"}) //In case of a hacker, return vague response
                }
            }).catch(error => { 
                console.log(err);
            })
        })
})    

module.exports = router;