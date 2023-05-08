const express = require("express");
const {
  createSearchRegistrations,
  getAllSearchRegistrations,
  getDetailSearchRegistrations,
  deleteSearchRegistrations,
  updateSearchRegistration,
  getPosts,
} = require("../controller/searchRegistration.controller");

const { Search_registrations } = require("../models/index");
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { uploadImages } = require("../middlewares/upload/upload-image");
const SearchRegistrationsRouter = express.Router();

SearchRegistrationsRouter.post(
  "/searchRegistrations-create",
  uploadImages("people_image"),
  createSearchRegistrations
);
SearchRegistrationsRouter.get(
  "/searchRegistrations-list",
  getAllSearchRegistrations
);
SearchRegistrationsRouter.get(
  "/searchRegistrations-detail/:id",
  checkExist(Search_registrations),
  getDetailSearchRegistrations
);
SearchRegistrationsRouter.put(
  "/searchRegistrations-update/:id",
  checkExist(Search_registrations),
  updateSearchRegistration
);
SearchRegistrationsRouter.delete(
  "/searchRegistrations-delete/:id",
  checkExist(Search_registrations),
  deleteSearchRegistrations
);

SearchRegistrationsRouter.get("/searchRegistrations-getPost", getPosts);
module.exports = {
  SearchRegistrationsRouter,
};
