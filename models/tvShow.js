"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tv_show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      // define association here
      this.hasMany(Comment, { foreignKey: "tvShow_id" });
    }
  }
  Tv_show.init(
    {
      content_text: {
        type: DataTypes.STRING,
      },
      media: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "Tv_show",
      timestamps: true,
    }
  );
  return Tv_show;
};
