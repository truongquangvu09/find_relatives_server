"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Search_registrations }) {
      // define association here
      this.belongsTo(Search_registrations, {
        foreignKey: "searchRegistrations_id",
      });
    }
  }
  Post.init(
    {
      approved_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Post",
      timestamps: true,
    }
  );
  return Post;
};
