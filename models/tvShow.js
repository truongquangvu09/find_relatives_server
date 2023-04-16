"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TvShow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      // define association here
      this.hasMany(Comment,{foreignKey:'tvShow_id'})
    }
  }
  TvShow.init(
    {
      content_text: DataTypes.STRING,
      boadcast_date: DataTypes.DATE,
      file:DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "TvShow",
      timestamps: true,
    }
  );
  return TvShow;
};
