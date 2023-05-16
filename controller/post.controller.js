const { Post, Search_registrations } = require("../models/index");

const createPost = async (req, res) => {
  const { searchRegistrations_id, people_id, lostSituation_id } = req.body;
  try {
    const newPost = await Post.create({
      searchRegistrations_id,
      people_id,
      lostSituation_id,
    });
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postList = async (req, res) => {
  try {
    const list = await Post.findAll({
      include: [{ model: Search_registrations }],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postdetails = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await Post.findOne({
      where: { id },
      include: [{ model: Search_registrations }],
    });
    res.status(200).send(detail);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Post.destroy({
      where: { id },
    });
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPost,
  postList,
  postdetails,
  postDelete,
};
