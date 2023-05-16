"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Peoples extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      this.hasOne(Post, { foreignKey: "people_id" });
    }
  }
  Peoples.init(
    {
      people_name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      dad_name: DataTypes.STRING,
      mom_name: DataTypes.STRING,
      coalpeople_name: DataTypes.STRING,
      brief_biography: DataTypes.STRING,
      people_image: DataTypes.STRING,
      searching_process: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Peoples",
      timestamps: true,
    }
  );
  return Peoples;
};
