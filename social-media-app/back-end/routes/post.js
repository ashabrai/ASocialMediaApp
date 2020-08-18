const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model('Post');


router.get('/allPosts', (req, res) => {
    Post.find()
        .populate("postedBy", "_id, name")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/myPost', requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
    .populate('postedBy,_id, name')
    .then(myPost => {
        res.json({ myPost })
    })
    .catch(err => console.log(err))
})

router.post('/createPost', requireLogin, (req, res) => {
    const { title, body } = req.body;
    if(!title || !body) {
        return res.status(422).json({ error: 'Please fill all fields'})
    }
    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        postedBy: req.user // posted by user
    })
    post.save().then(result => {
        res.json({ post: result })
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;