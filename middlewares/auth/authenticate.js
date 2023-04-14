const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "tokenadmin");
    if (decode) {
      req.admin = decode;
      return next();
    } else {
      res.status(401).send({ message: "You are not logged in" });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports={
    authenticate
}