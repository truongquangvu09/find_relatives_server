const express = require("express");
const {
  createComment,
  commentList,
  commentDetail,
  updateComment,
  deleteComment,
} = require("../controller/comment.controller");
const { Comment } = require("../models/index");
const { checkExist } = require("../middlewares/validations/checkExist");
const commentRouter = express.Router();

commentRouter.post("/comment-create", createComment);
commentRouter.get("/comment-list", commentList);
commentRouter.get("/comment-detail/:id", checkExist(Comment), commentDetail);
commentRouter.put("/comment-update/:id", checkExist(Comment), updateComment);
commentRouter.delete("/comment-delete/:id", checkExist(Comment), deleteComment);

module.exports = {
  commentRouter,
};
