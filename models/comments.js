"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Report, TvShow, News }) {
      // define association here
      this.belongsTo(Report, {
        foreignKey: "report_id",
      });
      this.belongsTo(Post, {
        foreignKey: "post_id",
      });
      this.belongsTo(TvShow, {
        foreignKey: "tvShow_id",
      });
      this.belongsTo(News, {
        foreignKey: "news_id",
      });
    }
  }
  Comment.init(
    {
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Comment",
      timestamps: true,
    }
  );
  return Comment;
};
