const express = require("express");
const {
  createNews,
  getNewsList,
  getNewsDetail,
  updateNews,
  deleteNews,
} = require("../controller/news.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorization } = require("../middlewares/auth/authorize");
const { checkExist } = require("../middlewares/validations/checkExist");

const { News } = require("../models/index");
const { uploadImage } = require("../controller/news.controller");
const { uploadImages } = require("../middlewares/upload/upload-image");

const newsRouter = express.Router();

newsRouter.post("/news-create", uploadImages("news"), createNews);
newsRouter.get("/news-list", getNewsList);
newsRouter.get("/news-detail/:id", checkExist(News), getNewsDetail);
newsRouter.put("/news-update/:id", checkExist(News), updateNews);
newsRouter.delete("/news-detail/:id", checkExist(News), deleteNews);
module.exports = {
  newsRouter,
};
