"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({SearchRegistrations}) {
      // define association here
      this.belongsTo(SearchRegistrations, {foreignKey:'searchRegistrations_id'})
    }
  }
  Post.init(
    {
      approved_date: DataTypes.DATE
      
    },

    {
      sequelize,
      modelName: "Post",
      timestamps: true,
    }
  );
  return Post;
};
