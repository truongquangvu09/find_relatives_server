const { Op } = require("sequelize");
const { Search_registrations } = require("../models/index");

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
  } = req.body;
  const { file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
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
      picture: urlImage,
      searching_process,
      date_missing,
      last_seen,
      lost_reason,
      status,
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
      });
      res.status(200).send(searchRegistrationList);
    } else {
      const searchRegistrationList = await Search_registrations.findAll();
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
    const updatedSearchRegistration = await Search_registrations.update(
      {
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
      },
      { where: { id: id } }
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

module.exports = {
  createSearchRegistrations,
  getAllSearchRegistrations,
  getDetailSearchRegistrations,
  updateSearchRegistration,
  deleteSearchRegistrations,
};
