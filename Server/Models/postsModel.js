const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  createdBy: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostModel = mongoose.model("PostModel", postSchema);

module.exports = PostModel;
