const express = require("express");
const { createPost } = require("../controller/post.controller");
const postRouter = express.Router();

postRouter.post("/post-create", createPost);

module.exports = {
  postRouter,
};
