const { Op } = require("sequelize");
const { SearchRegistrations } = require("../models/index");

const createSearchRegistrations = async (req, res) => {
  const {
    report_name,
    report_birthday,
    report_gender,
    report_address,
    email,
    phone,
    cccd,
    date_report,
    people_name,
    people_birthday,
    people_gender,
    peolpe_address,
    dad_name,
    mom_name,
    coal_people_name,
    brief_biography,
    picture,
    searching_process,
    date_missing,
    last_seen,
    lost_reason,
    status,
  } = req.body;
  try {
    const newSearchRegistrations = await SearchRegistrations.create({
      report_name,
      report_birthday,
      report_gender,
      report_address,
      email,
      phone,
      cccd,
      date_report,
      people_name,
      people_birthday,
      people_gender,
      peolpe_address,
      dad_name,
      mom_name,
      coal_people_name,
      brief_biography,
      picture,
      searching_process,
      date_missing,
      last_seen,
      lost_reason,
      status,
    });
    res.status(201).send(newSearchRegistrations);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllSearchRegistrations = async (req, res) => {
  const { people_name } = req.query;
  try {
    if (people_name) {
      const searchRegistrationList = await SearchRegistrations.findAll({
        where: {
          nampeople_namee: {
            [Op.like]: `%${people_name}%`,
          },
        },
      });
      res.status(200).send(searchRegistrationList);
    } else {
      const searchRegistrationList = await SearchRegistrations.findAll();
      res.status(200).send(searchRegistrationList);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailSearchRegistrations = async (req, res) => {
  const { id } = req.params;
  try {
    const detailSearchRegistrations = await SearchRegistrations.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(detailSearchRegistrations);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSearchRegistrations = async (req, res) => {
  const { id } = req.params;
  try {
    const deteleSearchRegistrations = await SearchRegistrations.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createSearchRegistrations,
  getAllSearchRegistrations,
  getDetailSearchRegistrations,
  deleteSearchRegistrations,
};
