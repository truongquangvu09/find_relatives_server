"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comment_text: {
        type: Sequelize.DATE,
      },
      report_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "reports",
          key: "id",
        },
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "posts",
          key: "id",
        },
      },
      tvShow_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tv_shows",
          key: "id",
        },
      },
      news_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "news",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
