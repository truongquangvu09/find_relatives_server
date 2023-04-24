const { Op } = require("sequelize");
const { Lost_situation } = require("../models/index");

const createLostSituation = async (req, res) => {
  const { date_missing, last_seen, lost_reason } = req.body;
  try {
    const newLostSituation = await Lost_situation.create({
      date_missing,
      last_seen,
      lost_reason,
    });
    res.status(200).send(newLostSituation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const listLostSituation = async (req, res) => {
  const { last_seen } = req.body;
  try {
    if (last_seen) {
      const list = await Lost_situation.findAll({
        where: {
          [Op.like]: `%${last_seen}%`,
        },
      });
      res.status(200).send(list);
    } else {
      const listElse = await Lost_situation.findAll();
      res.status(200).send(listElse);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const detailLostSituation = async (req, res) => {
  const { id } = req.params;
  try {
    const LostSituationdetail = await Lost_situation.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(LostSituationdetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateLostSituation = async (req, res) => {
  const { id } = req.params;
  const { date_missing, last_seen, lost_reason } = req.body;
  try {
    const updatedLostSituation = await Lost_situation.update(
      {
        date_missing,
        last_seen,
        lost_reason,
      },
      { where: { id: id } }
    );
    res.status(200).send("updated lostSituation");
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteLostSituation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLostSituation = await Lost_situation.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("delete lostSituation");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createLostSituation,
  listLostSituation,
  detailLostSituation,
  updateLostSituation,
  deleteLostSituation,
};
