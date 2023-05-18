"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      searchRegistrations_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "search_registrations",
          key: "id",
        },
      },
      people_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "peoples",
          key: "id",
        },
        allowNull: false,
      },
      lostSituation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "lost_situations",
          key: "id",
        },
        allowNull: false,
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
    await queryInterface.dropTable("posts");
  },
};
