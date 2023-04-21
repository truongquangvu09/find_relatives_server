const express = require("express");
const {
  createTvShow,
  tvShowList,
  tvShowDetail,
  updateTvShow,
  deleteTvShow,
} = require("../controller/tvShow.controller");
const { Tv_show } = require("../models/index");
const { uploadImages } = require("../middlewares/upload/upload-image");
const { checkExist } = require("../middlewares/validations/checkExist");
const tvShowRouter = express.Router();

tvShowRouter.post("/create-tvShow", uploadImages("tv_shows"), createTvShow);
tvShowRouter.get("/tvshow-list", tvShowList);
tvShowRouter.get("/tvshow-detail/:id", checkExist(Tv_show), tvShowDetail);
tvShowRouter.put("/tvshow-update/:id", uploadImages("tv_shows"), updateTvShow);
tvShowRouter.delete("/tvshow-delete/:id", checkExist(Tv_show), deleteTvShow);
module.exports = {
  tvShowRouter,
};
