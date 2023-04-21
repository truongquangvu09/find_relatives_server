"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Search_registrations, Lost_situation }) {
      // define association here
      this.hasMany(Search_registrations, { foreignKey: "report_id" });
      this.belongsTo(Lost_situation, { foreignKey: "lostSituation_id" });
    }
  }
  People.init(
    {
      people_name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      dad_name: DataTypes.STRING,
      dad_mom: DataTypes.STRING,
      coalpeople_name: DataTypes.STRING,
      brief_biography: DataTypes.STRING,
      picture: DataTypes.STRING,
      searching_process: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "People",
      timestamps: true,
    }
  );
  return People;
};
