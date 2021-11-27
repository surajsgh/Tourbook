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

// exports.createPost = async (req, res) => {
//   try {
//     const post = await Post.create(req.body);

//     res.status(200).send(post);
//   } catch (error) {
//     res.status(400).json({
//       status: "Failure",
//       result: error.message,
//     });
//   }
// };
exports.createPost = async (req, res) => {
  const post = req.body;

  const newPostMessage = new Post({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
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
  console.log("inside postcontroller");
  try {
    const { id } = req.params;
    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const post = await Post.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      result: error,
    });
  }
};
