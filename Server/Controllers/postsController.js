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
