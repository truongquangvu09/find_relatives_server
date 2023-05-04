const { Op } = require("sequelize");
const { Peoples } = require("../models/index");
const { Lost_situation } = require("../models/index");

const createpeople = async (req, res) => {
  const {
    people_name,
    birthday,
    gender,
    address,
    dad_name,
    mom_name,
    coalpeople_name,
    brief_biography,
    searching_process,
    lostSituation_id,
  } = req.body;
  const { file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  try {
    const newPeople = await Peoples.create({
      people_name,
      birthday,
      gender,
      address,
      dad_name,
      mom_name,
      coalpeople_name,
      brief_biography,
      people_image: urlImage,
      searching_process,
      lostSituation_id,
    });
    res.status(200).send(newPeople);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const PeopleList = async (req, res) => {
  const { people_name } = req.query;
  try {
    if (people_name) {
      const list = await Peoples.findAll({
        where: {
          people_name: {
            [Op.like]: `%${people_name}%`,
          },
        },
        include: [{ model: Lost_situation }],
      });
      res.status(200).send(list);
    } else {
      const lists = await Peoples.findAll({
        include: [{ model: Lost_situation }],
      });
      res.status(200).send(lists);
    }
  } catch (error) {
    res.status(500).send("not found");
  }
};

const detailPeople = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await Peoples.findOne({
      where: {
        id,
      },
      include: [{ model: Lost_situation }],
    });
    res.status(200).send(detail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePeople = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Peoples.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createpeople,
  PeopleList,
  detailPeople,
  deletePeople,
};
