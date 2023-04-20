const express = require("express");
const { SearchRegistrationsRouter } = require("./searchRegistrations.router");
const { reportRouter } = require("./report.router");
const { newsRouter } = require("./news.router");
const rootRouter = express.Router();
rootRouter.use("/searchRegistrations", SearchRegistrationsRouter);
rootRouter.use("/report", reportRouter);
rootRouter.use("/news", newsRouter);

module.exports = {
  rootRouter,
};
