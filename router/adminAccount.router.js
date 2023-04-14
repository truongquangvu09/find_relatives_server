const express = require("express");
const {
  createAccount,
  login,
} = require("../controller/adminAccount.controller");
const { authenticate } = require("../middlewares/auth/authenticate");

const adminAccountRouter = express.Router();

adminAccountRouter.post("/createAccount",authenticate, createAccount);
adminAccountRouter.post("/login", login);

module.exports = {
  adminAccountRouter,
};
