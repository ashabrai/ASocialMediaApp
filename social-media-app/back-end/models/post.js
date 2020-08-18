const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    body: {
        type:String,
        required: true,
    },
    photo: {
        type: String,
        default: "no photo"
    },
    postedBy: {
        type: ObjectId, //id of the user who made post
        ref: "User"
    }
})

mongoose.model("Post", postSchema);