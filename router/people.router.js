const express = require("express");
const peopleRouter = express.Router();
const {
  createpeople,
  PeopleList,
  detailPeople,
  deletePeople,
} = require("../controller/people.controller");
const { uploadImages } = require("../middlewares/upload/upload-image");
const { checkExist } = require("../middlewares/validations/checkExist");
const { Peoples } = require("../models/peoples");

peopleRouter.post("/people-create", uploadImages("people_image"), createpeople);
peopleRouter.get("/people-list", PeopleList);
peopleRouter.get("/people-detail/:id", detailPeople);
peopleRouter.delete("/people-delete/:id", deletePeople);

module.exports = {
  peopleRouter,
};
