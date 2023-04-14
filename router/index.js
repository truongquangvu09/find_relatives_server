const express = require("express");
const { SearchRegistrationsRouter } = require("./searchRegistrations.router");
const { adminAccountRouter } = require("./adminAccount.router");
const rootRouter = express.Router();
rootRouter.use("/searchRegistrations", SearchRegistrationsRouter);
rootRouter.use("/adminAccounts", adminAccountRouter);

module.exports = {
  rootRouter,
};
