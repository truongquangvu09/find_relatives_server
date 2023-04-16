"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      // define association here
      this.hasMany(Comment,{foreignKey:'news_id'})
    }
  }
  News.init(
    {
      content_text: DataTypes.STRING,
      boadcast_date: DataTypes.DATE,
      image:DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "News",
      timestamps: true,
    }
  );
  return News;
};
