"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AdminAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdminAccount.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "AdminAccount",
      timestamps: true,
    }
  );
  return AdminAccount;
};
