const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.get("/allPosts", requireLogin, (req, res) => {
  Post.find()
    .populate("postedBy", "_id, name, username")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/userPosts", requireLogin, (req, res) => {
  User.findOne({ _id: req.user._id })
    .select("-password")
    .then((user) => {
      Post.find({ postedBy: req.user._id })
        .populate("postedBy,_id, name, ")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.status(200).json({ user, posts });
        });
    })
    .catch((err) => console.log(err));
});

router.post("/createPost", requireLogin, (req, res) => {
  const { title, body, imgUrl } = req.body;
  if (!title || !body || !imgUrl) {
    return res.status(422).json({ error: "Please fill all fields" });
  }
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo: imgUrl,
    postedBy: req.user, // posted by user
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/likeUserPost", requireLogin, (req, res) => {
  const user = { postedBy: req.user._id, username: req.user.username };
  Post.findByIdAndUpdate(
    req.body.postId.postId,
    {
      $push: { likes: user },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.put("/unlikeUserPost", requireLogin, (req, res) => {
  const user = { postedBy: req.user._id, username: req.user.username };
  Post.findByIdAndUpdate(
    req.body.postId.postId,
    {
      $pull: { likes: user },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

router.put("/commentPost", requireLogin, (req, res) => {
  const comments = {
    comment: req.body.comment,
    postedBy: req.user._id
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comments },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id username image")
    .populate("postedBy", '_id username image')
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.status(200).json(result);
      }
    });
});

router.delete("/deletePost/:postId", requireLogin, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json(err);
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.status(200).json({
              message: "Successfully deleted post",
              postDeleted: result,
            });
          })
          .catch((err) => console.log(err));
      }
    });
});

module.exports = router;
