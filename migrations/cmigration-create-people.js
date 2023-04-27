"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("peoples", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      people_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dad_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mom_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coalpeople_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brief_biography: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      people_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      searching_process: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("peoples");
  },
};
