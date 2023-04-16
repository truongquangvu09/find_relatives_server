const express = require("express");
const {
  createSearchRegistrations,
  getAllSearchRegistrations,
  getDetailSearchRegistrations,
  deleteSearchRegistrations,
} = require("../controller/searchRegistration.controller");

const { SearchRegistrations } = require("../models/index");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const {uploadImage}= require("../middlewares/upload/upload-image")
const SearchRegistrationsRouter = express.Router();

SearchRegistrationsRouter.post("/",uploadImage("peoples"), createSearchRegistrations);
SearchRegistrationsRouter.get("/",authenticate, getAllSearchRegistrations);
SearchRegistrationsRouter.get("/:id",authenticate, getDetailSearchRegistrations);
SearchRegistrationsRouter.delete(
  "/:id",
  checkExist(SearchRegistrations),authenticate,
  deleteSearchRegistrations
);

module.exports = {
  SearchRegistrationsRouter,
};
