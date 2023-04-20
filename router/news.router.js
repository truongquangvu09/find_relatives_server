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

newsRouter.post("/create-news", uploadImages("news"), createNews);
newsRouter.get("/get-newsList", getNewsList);
newsRouter.get("/get-newsDetails/:id", checkExist(News), getNewsDetail);
newsRouter.put("/update-news/:id", updateNews);
newsRouter.delete("/delete-news/:id", checkExist(News), deleteNews);
module.exports = {
  newsRouter,
};
