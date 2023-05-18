"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Search_registrations,
      Comment,
      Peoples,
      Lost_situation,
    }) {
      // define association here
      this.belongsTo(Search_registrations, {
        foreignKey: "searchRegistrations_id",
      });
      this.belongsTo(Peoples, { foreignKey: "people_id" });
      this.belongsTo(Lost_situation, { foreignKey: "lostSituation_id" });

      this.hasMany(Comment, { foreignKey: "post_id" });
    }
  }
  Post.init(
    {
      post_title: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Post",
      timestamps: true,
    }
  );
  return Post;
};
