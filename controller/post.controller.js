const { Post } = require("../models/index");

const createPost = async (req, res) => {
  const { searchRegistrations_id } = req.body;
  try {
    const newPost = await Post.create({ searchRegistrations_id });
    res.status(200).send(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPost,
};
