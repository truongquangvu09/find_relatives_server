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
      date_missing: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      last_seen: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lost_reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "LostSituation",
      timestamps: true,
    }
  );
  return LostSituation;
};
