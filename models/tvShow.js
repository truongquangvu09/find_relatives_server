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
      this.hasMany(Comment, { foreignKey: "tvShow_id" });
    }
  }
  TvShow.init(
    {
      content_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "TvShow",
      timestamps: true,
    }
  );
  return TvShow;
};
