const { Report } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const createAccount = async (req, res) => {
  const { report_name, email, password, type } = req.body;
  try {
    // generate a random string with 10 characters
    const salt = bcrypt.genSaltSync(10);

    //encrypt the generated random string
    const hashPassword = bcrypt.hashSync(password, salt);
    const adminAccount = await Report.create({
      report_name,
      email,
      password: hashPassword,
      type,
    });
    res.status(200).send(adminAccount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Report.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const token = jwt.sign({ email: user.email }, "tokenadmin", {
      expiresIn: 60 * 60,
    });
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      res.status(200).send({ message: "Logged in successfully", token });
    } else {
      res.status(403).send({ message: "Authentication failed" });
    }
  } else {
    res.status(403).send({ message: "not found account" });
  }
};

const reportList = async (req, res) => {
  const { email } = req.query;
  try {
    if (email) {
      const list = await Report.findAll({
        where: {
          email: {
            [Op.like]: `%${content_text}%`,
          },
        },
      });
      res.status(200).send(list);
    } else {
      const reportLists = await Report.findAll();
      res.status(200).send(reportLists);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const reportDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const details = await Report.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(details);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateReport = async (req, res) => {
  const { id } = req.params;
  const { report_name, email, password, type } = req.body;
  try {
    const ReportUpdated = await Report.update(
      { report_name, email, password, type },
      {
        where: { id: id },
      }
    );
    res.status(200).send("updated report: ");
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReport = async (req, res) => {
  const { id } = req.params;
  try {
    const reportDeleted = await Report.destroy({
      where: { id },
    });
    res.status(200).send("deleted report");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  createAccount,
  login,
  reportList,
  reportDetails,
  updateReport,
  deleteReport,
};
