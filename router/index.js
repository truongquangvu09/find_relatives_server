const express = require("express");
const { SearchRegistrationsRouter } = require("./searchRegistrations.router");
const { reportRouter } = require("./report.router");
const { newsRouter } = require("./news.router");
const { tvShowRouter } = require("./tvShow.router");
const rootRouter = express.Router();
rootRouter.use("/searchRegistrations", SearchRegistrationsRouter);
rootRouter.use("/report", reportRouter);
rootRouter.use("/news", newsRouter);
rootRouter.use("/tvShow", tvShowRouter);

module.exports = {
  rootRouter,
};
