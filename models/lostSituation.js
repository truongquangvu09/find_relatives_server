"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lost_situation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      this.hasOne(Post, { foreignKey: "lostSituation_id" });
    }
  }
  Lost_situation.init(
    {
      date_missing: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      last_seen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lost_reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Lost_situation",
      timestamps: true,
    }
  );
  return Lost_situation;
};
