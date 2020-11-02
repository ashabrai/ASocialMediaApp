const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const { response } = require("express");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get("/user/:id", requireLogin, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.status(200).json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});

router.put("/follow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true },
  )
  .select("-password")
  .exec((err, dataForFollowId) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: {
            following: req.body.followId,
          },
        },
        { new: true }
      )
        .select("-password")
        .then((dataForCurrentUser) => {
          res.status(200).json({ dataForCurrentUser, dataForFollowId });
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    })
});

router.put("/unfollow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id },
    },
    { new: true },
  )
  .select('-password')
  .exec((err, dataForFollowId) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: {
            following: req.body.unfollowId,
          },
        },
        { new: true }
      )
        .select("-password")
        .then((dataForCurrentUser) => {
          res.status(200).json({ dataForFollowId, dataForCurrentUser });
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    })
});

module.exports = router;
