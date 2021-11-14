const Post = require("./../Models/postsModel");

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();

    // console.log(post);

    res.status(200).send(post);
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

    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      result: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedData = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedData);
    // console.log(updatedData);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      result: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json(null);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      result: error.message,
    });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        likeCount: post.likeCount + 1,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      result: error,
    });
  }
};
