const express = require("express");
const { SearchRegistrationsRouter } = require("./searchRegistrations.router");
const { reportRouter } = require("./report.router");
const { newsRouter } = require("./news.router");
const { tvShowRouter } = require("./tvShow.router");
const { commentRouter } = require("./comment.router");
const { postRouter } = require("./post.router");
const { LostSituationRouter } = require("./lostSituation.router");
const { peopleRouter } = require("./people.router");

const rootRouter = express.Router();

rootRouter.use("/searchRegistrations", SearchRegistrationsRouter);
rootRouter.use("/report", reportRouter);
rootRouter.use("/news", newsRouter);
rootRouter.use("/tvShow", tvShowRouter);
rootRouter.use("/comment", commentRouter);
rootRouter.use("/post", postRouter);
rootRouter.use("/lostsituation", LostSituationRouter);
rootRouter.use("/people", peopleRouter);

module.exports = {
  rootRouter,
};
