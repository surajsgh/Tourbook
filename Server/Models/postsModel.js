const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  createdBy: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostModel = mongoose.model("PostModel", postSchema);

module.exports = PostModel;
