const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [
    { username: { type: String }, postedBy: { type: ObjectId, ref: "User" } },
  ],
  following: [
    { username: { type: String }, postedBy: { type: ObjectId, ref: "User" } },
  ],
});

mongoose.model("User", userSchema);
