const { Op } = require("sequelize");
const { News } = require("../models/index");

const createNews = async (req, res) => {
  const { content_text } = req.body;
  const { file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;

  try {
    const newNews = await News.create({ content_text, image: urlImage });
    res.status(200).send(newNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getNewsList = async (req, res) => {
  const { content_text } = req.query;
  try {
    if (content_text) {
      newsList = await News.findAll({
        where: {
          content_text: {
            [Op.like]: `%${content_text}%`,
          },
        },
      });
      res.status(200).send(newsList);
    } else {
      const newsLists = await News.findAll();
      res.status(200).send(newsLists);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getNewsDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const newsDetail = await News.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(newsDetail);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const { content_text, image } = req.body;
  try {
    const newsUpdated = await News.update(
      { content_text, image },
      {
        where: { id: id },
      }
    );
    res.status(200).send("updated content_text: " + content_text);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const newsDeleted = await News.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("deleted News");
  } catch (error) {}
};

module.exports = {
  createNews,
  getNewsList,
  getNewsDetail,
  updateNews,
  deleteNews,
};