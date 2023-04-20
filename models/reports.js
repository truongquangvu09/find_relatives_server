"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, SearchRegistrations }) {
      // define association here
      this.hasMany(SearchRegistrations, { foreignKey: "report_id" });
      this.hasMany(Comment, { foreignKey: "report_id" });
    }
  }
  Report.init(
    {
      report_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
    },

    {
      sequelize,
      modelName: "Report",
      timestamps: true,
    }
  );
  return Report;
};
