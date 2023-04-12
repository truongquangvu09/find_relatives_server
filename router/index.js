const express = require("express");
const { SearchRegistrationsRouter } = require("./searchRegistrations.router");
const rootRouter = express.Router();
rootRouter.use("/searchRegistrations", SearchRegistrationsRouter);

module.exports = {
  rootRouter,
};
