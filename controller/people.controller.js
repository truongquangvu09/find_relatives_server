const { Peoples } = require("../models/index");

const createpeople = async (req, res) => {
  const {
    people_name,
    birthday,
    gender,
    address,
    dad_name,
    mom_name,
    coalpeople_name,
    brief_biography,
    searching_process,
    lostSituation_id,
  } = req.body;
  const { file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  try {
    const newPeople = await Peoples.create({
      people_name,
      birthday,
      gender,
      address,
      dad_name,
      mom_name,
      coalpeople_name,
      brief_biography,
      people_image: urlImage,
      searching_process,
      lostSituation_id,
    });
    res.status(200).send(newPeople);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createpeople,
};
