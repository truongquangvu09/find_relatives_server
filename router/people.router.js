const express = require("express");
const peopleRouter = express.Router();
const { createpeople } = require("../controller/people.controller");
const { uploadImages } = require("../middlewares/upload/upload-image");

peopleRouter.post("/people-create", uploadImages("people_image"), createpeople);

module.exports = {
  peopleRouter,
};
