const express = require("express");
const {
  createAccount,
  login,
  reportList,
  reportDetails,
  updateReport,
  deleteReport,
} = require("../controller/report.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { checkExist } = require("../middlewares/validations/checkExist");
const { Report } = require("../models/index");

const reportRouter = express.Router();

reportRouter.post("/createAccount", createAccount);
reportRouter.post("/login", login);

reportRouter.get("/report-list", reportList);
reportRouter.get("/report-detail/:id", checkExist(Report), reportDetails);
reportRouter.put("/report-update/:id", updateReport);
reportRouter.delete("/report-delete/:id", checkExist(Report), deleteReport);
module.exports = {
  reportRouter,
};
