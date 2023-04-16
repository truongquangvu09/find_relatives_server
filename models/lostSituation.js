"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LostSituation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SearchRegistrations, People }) {
      // define association here
      this.hasMany(SearchRegistrations, {
        foreignKey: "lostSituation_id",
      });
      this.hasMany(People, {
        foreignKey: "lostSituation_id",
      });

    }
  }
  LostSituation.init(
    {
      date_missing: DataTypes.DATE,
      last_seen: DataTypes.DATE,
      lost_reason: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "LostSituation",
      timestamps: true,
    }
  );
  return LostSituation;
};
