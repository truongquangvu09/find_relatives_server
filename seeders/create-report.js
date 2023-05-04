"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "reports",
      [
        {
          report_name: "truongquangvu",
          email: "truongquangvu09@gmail.com",
          password: "vuprovjp",
          type: "user",
          createdAt: "2023-05-04 01:54:00",
          updatedAt: "2023-05-04 01:54:00",
        },
        {
          report_name: "admin",
          email: "admin@gmail.com",
          password: "admin",
          type: "admin",
          createdAt: "2023-05-04 02:54:00",
          updatedAt: "2023-05-04 02:54:00",
        },
        {
          report_name: "nguyen van a",
          email: "nguyenvana@gmail.com",
          password: "vuprovjp",
          type: "user",
          createdAt: "2023-05-04 03:54:00",
          updatedAt: "2023-05-04 03:54:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("reports", null, {});
  },
};
