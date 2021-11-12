const Post = require("./../Models/postsModel");

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();

    // console.log(post);

    res.status(200).json({
      status: "Success",
      result: post,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failure",
      result: err.message,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      status: "Success",
      result: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      result: error.message,
    });
  }
};
