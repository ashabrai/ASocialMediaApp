const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

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
  Post.find({ postedBy: req.user._id })
    .populate("postedBy,_id, name")
    .then((myPost) => {
      res.json(myPost);
    })
    .catch((err) => console.log(err));
});

router.post("/createPost", requireLogin, (req, res) => {
  console.log(req.user);
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
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
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
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
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
  const comment = {
    comment: req.body.comment,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    // .populate("comments.postedBy", "_id name") // what to populate the user name and their id
    .populate("comments.postedBy", "_id username")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.status(200).json(result);
      }
    });
});

router.delete("/deletePost/:postId", requireLogin, (req, res) => {
  console.log(req.params.postId);
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
            res
              .status(200)
              .json({
                message: "Successfully deleted post",
                postDeleted: result,
              });
          })
          .catch((err) => console.log(err));
      }
    });
});

module.exports = router;
