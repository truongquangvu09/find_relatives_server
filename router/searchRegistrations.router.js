const express = require("express");
const {
  createSearchRegistrations,
  getAllSearchRegistrations,
  getDetailSearchRegistrations,
  deleteSearchRegistrations,
} = require("../controller/searchRegistration.controller");

const { SearchRegistrations } = require("../models/index");
const { checkExist } = require("../middlewares/validations/checkExist");
const SearchRegistrationsRouter = express.Router();

SearchRegistrationsRouter.post("/", createSearchRegistrations);
SearchRegistrationsRouter.get("/", getAllSearchRegistrations);
SearchRegistrationsRouter.get("/:id", getDetailSearchRegistrations);
SearchRegistrationsRouter.delete("/:id", checkExist(SearchRegistrations), deleteSearchRegistrations);

module.exports = {
  SearchRegistrationsRouter,
};
