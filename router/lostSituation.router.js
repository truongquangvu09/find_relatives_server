const express = require("express");
const LostSituationRouter = express.Router();
const {
  createLostSituation,
  listLostSituation,
  detailLostSituation,
  updateLostSituation,
  deleteLostSituation,
} = require("../controller/lostSituation.controller");

const { checkExist } = require("../middlewares/validations/checkExist");
const { Lost_situation } = require("../models/index");

LostSituationRouter.post("/lostSituation-create", createLostSituation);
LostSituationRouter.get("/lostSituation-list", listLostSituation);
LostSituationRouter.get(
  "/lostSituation-detail/:id",
  checkExist(Lost_situation),
  detailLostSituation
);
LostSituationRouter.put(
  "/lostSituation-update/:id",
  checkExist(Lost_situation),
  updateLostSituation
);
LostSituationRouter.delete(
  "/lostSituation-delete/:id",
  checkExist(Lost_situation),
  deleteLostSituation
);
module.exports = {
  LostSituationRouter,
};
