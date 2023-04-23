const { Comment } = require("../models/index");
const { Report, Post, Tv_show, News } = require("../models/index");

const createComment = async (req, res) => {
  const { comment_text, report_id, post_id, tvShow_id, news_id } = req.body;
  try {
    const newComment = await Comment.create({
      comment_text,
      report_id,
      post_id,
      tvShow_id,
      news_id,
    });
    res.status(200).send(newComment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const commentList = async (req, res) => {
  try {
    const list = await Comment.findAll({
      include: [
        { model: Report },
        { model: Post },
        { model: Tv_show },
        { model: News },
      ],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
};

const commentDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await Comment.findOne({
      include: [
        { model: Report },
        { model: Post },
        { model: Tv_show },
        { model: News },
      ],
    });
    res.status(200).send(detail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  const { comment_text } = req.body;
  try {
    const updatedComment = await Comment.update(
      {
        comment_text,
      },
      { where: { id } }
    );
    res.status(200).send("updated Comment");
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("deleted Comment");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createComment,
  commentList,
  commentDetail,
  updateComment,
  deleteComment,
};
