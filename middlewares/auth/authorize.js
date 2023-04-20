const authorization = (arrType) => (req, res, next) => {
  const { user } = req;
  if (arrType.findIndex((Element) => Element === user.type) > -1) {
    next();
  } else {
    res.status(403).send("not have access");
  }
};

module.exports = {
  authorization,
};
