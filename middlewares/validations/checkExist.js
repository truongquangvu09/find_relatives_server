const { SearchRegistrations } = require("../../models/searchRegistration");
const checkExist = (Model) => {
  return async (req, res, next) => {
    // kiem tra xem SearchsearchRegistrations co ton tai hay k ?
    const { id } = req.params;
    const searchRegistrations = await Model.findOne({
      where: {
        id,
      },
    });
    if (searchRegistrations) {
      next();
    } else {
      res.status(404).send(`khong tim thay SearchsearchRegistrations co id la ${id}`);
    }
  };
};

module.exports = {
  checkExist,
};
