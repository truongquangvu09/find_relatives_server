const { Report } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

module.exports = {
  createAccount,
  login,
};
