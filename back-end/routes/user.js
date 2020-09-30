const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get('/user:userId', (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user => {

    }).catch(err => {
        return res.status(404).json({ error: 'User not found'})
    }
})