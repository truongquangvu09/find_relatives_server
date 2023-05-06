const express = require("express");
const {
  createPost,
  postList,
  postdetails,
  postDelete,
} = require("../controller/post.controller");
const postRouter = express.Router();

postRouter.post("/post-create", createPost);
postRouter.get("/post-list", postList);
postRouter.get("/post-detail/:id", postdetails);
postRouter.delete("/post-delete/:id", postDelete);

module.exports = {
  postRouter,
};
