"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("search_registrations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      report_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      report_birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      report_gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      report_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cccd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_report: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      people_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      people_birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      people_gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      peolpe_address: {
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
      coal_people_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brief_biography: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      searching_process: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_missing: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_seen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lost_reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      report_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"reports",
          key: "id",
        },
        allowNull: false,
      },
      people_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"peoples",
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
    await queryInterface.dropTable("search_registrations");
  },
};
