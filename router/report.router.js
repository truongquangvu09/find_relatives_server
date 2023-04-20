const express = require("express");
const { createAccount, login } = require("../controller/report");
const { authenticate } = require("../middlewares/auth/authenticate");

const reportRouter = express.Router();

reportRouter.post("/createAccount", createAccount);
reportRouter.post("/login", login);

module.exports = {
  reportRouter,
};
