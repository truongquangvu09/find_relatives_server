const { AdminAccount } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    // generate a random string with 10 characters
    const salt = bcrypt.genSaltSync(10);

    //encrypt the generated random string
    const hashPassword = bcrypt.hashSync(password, salt);
    const adminAccount = await AdminAccount.create({
      email,
      password: hashPassword,
    });
    res.status(200).send(adminAccount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminAccount.findOne({
    where: {
      email,
    },
  });
  if (admin) {
    const token = jwt.sign({ email: admin.email }, "tokenadmin", {
      expiresIn: 60 * 60,
    });
    const isAuth = bcrypt.compareSync(password, admin.password);
    if (isAuth) {
      res.status(200).send({ message: "Logged in successfully" });
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
