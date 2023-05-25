const { Tv_show } = require("../models/index");

const createTvShow = async (req, res) => {
  const { content_text } = req.body;
  const { file } = req;
  if (!file) {
    return res.status(400).send("No image provided");
  }
  const urlImage = `http://localhost:8080/${file.path}`;

  try {
    const newTvShow = await Tv_show.create({ content_text, media: urlImage });
    res.status(200).send(newTvShow);
  } catch (error) {
    res.status(500).send(error);
  }
};

const tvShowList = async (req, res) => {
  try {
    const getList = await Tv_show.findAll();
    res.status(200).send(getList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const tvShowDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await Tv_show.findOne({
      where: { id },
    });
    res.status(200).send(detail);
  } catch (error) {
    res.status(404).send(error);
  }
};

const updateTvShow = async (req, res) => {
  const { id } = req.params;
  const { content_text } = req.body;
  const { file } = req;
  const urlImage = `http://localhost:8080/${file.path}`;
  try {
    const tvShowUpdated = await Tv_show.update(
      {
        content_text,
        media: urlImage,
      },
      { where: { id } }
    );
    res.status(200).send("updated");
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTvShow = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Tv_show.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("deleted media");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTvShow,
  tvShowList,
  tvShowDetail,
  updateTvShow,
  deleteTvShow,
};
