const checkExist = (Model) => {
  return async (req, res, next) => {
    // kiem tra xem SearchsearchRegistrations co ton tai hay k ?
    const { id } = req.params;
    const check = await Model.findOne({
      where: {
        id,
      },
    });
    if (check) {
      next();
    } else {
      res.status(404).send(`khong tim thay ${Model.name} co id la ${id}`);
    }
  };
};

module.exports = {
  checkExist,
};
