const { Op } = require("sequelize");
const { Search_registrations, sequelize } = require("../models/index");
const { Report, Peoples, Lost_situation } = require("../models/index");

const createSearchRegistrations = async (req, res) => {
  const {
    report_name,
    report_birthday,
    report_gender,
    report_address,
    email,
    phone,
    cccd,
    people_name,
    people_birthday,
    people_gender,
    people_address,
    dad_name,
    mom_name,
    coal_people_name,
    brief_biography,
    searching_process,
    date_missing,
    last_seen,
    lost_reason,
    status,
    report_id,
  } = req.body;
  const { file } = req;
  console.log("file", file);
  if (!file) {
    return res.status(400).send("No image provided");
  }
  const urlImage = `http://localhost:8080/${file.path}`;
  try {
    const newSearchRegistrations = await Search_registrations.create({
      report_name,
      report_birthday,
      report_gender,
      report_address,
      email,
      phone,
      cccd,
      people_name,
      people_birthday,
      people_gender,
      people_address,
      dad_name,
      mom_name,
      coal_people_name,
      brief_biography,
      people_image: urlImage,
      searching_process,
      date_missing,
      last_seen,
      lost_reason,
      status,
      report_id,
    });
    res.status(200).send(newSearchRegistrations);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllSearchRegistrations = async (req, res) => {
  const { people_name } = req.query;
  try {
    if (people_name) {
      const searchRegistrationList = await Search_registrations.findAll({
        where: {
          nampeople_namee: {
            [Op.like]: `%${people_name}%`,
          },
        },
        include: [{ model: Report }],
      });
      res.status(200).send(searchRegistrationList);
    } else {
      const searchRegistrationList = await Search_registrations.findAll({
        include: [{ model: Report }],
      });
      res.status(200).send(searchRegistrationList);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailSearchRegistrations = async (req, res) => {
  const { id } = req.params;
  try {
    const detailSearchRegistrations = await Search_registrations.findOne({
      where: {
        id,
      },
      include: [{ model: Report }],
    });
    res.status(200).send(detailSearchRegistrations);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSearchRegistration = async (req, res) => {
  const { id } = req.params;
  const {
    report_name,
    report_birthday,
    report_gender,
    report_address,
    email,
    phone,
    cccd,
    people_name,
    people_birthday,
    people_gender,
    people_address,
    dad_name,
    mom_name,
    coal_people_name,
    brief_biography,
    people_image,
    searching_process,
    date_missing,
    last_seen,
    lost_reason,
    status,
    report_id,
  } = req.body;
  try {
    const updatedSearchRegistration = await Search_registrations.update(
      {
        report_name,
        report_birthday,
        report_gender,
        report_address,
        email,
        phone,
        cccd,
        people_name,
        people_birthday,
        people_gender,
        people_address,
        dad_name,
        mom_name,
        coal_people_name,
        brief_biography,
        people_image,
        searching_process,
        date_missing,
        last_seen,
        lost_reason,
        status,
        report_id,
      },
      { where: { id } }
    );
    res.status(200).send("updated_search_registration");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteSearchRegistrations = async (req, res) => {
  const { id } = req.params;
  try {
    const deteleSearchRegistrations = await Search_registrations.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPosts = async (req, res) => {
  try {
    const [results] = await sequelize.query(
      `SELECT * FROM findrelatives_db.search_registrations
      where status="đã xác nhận"`
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createSearchRegistrations,
  getAllSearchRegistrations,
  getDetailSearchRegistrations,
  updateSearchRegistration,
  deleteSearchRegistrations,
  getPosts,
};
