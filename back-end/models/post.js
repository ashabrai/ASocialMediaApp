const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  postedBy: {
    type: ObjectId, //id of the user who made post
    ref: "User",
  },
  datePosted: {
    type: Number,
    default: Date.now(),
  },
  likes: [{ type: ObjectId, ref: "User" }],
  comments: [{ comment: String, postedBy: { type: ObjectId, ref: "User" } }],
});

mongoose.model("Post", postSchema);
