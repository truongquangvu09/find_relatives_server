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
      "lost_situations",
      [
        {
          date_missing: "2023-02-02",
          last_seen: "ở ngôi nhà này",
          lost_reason: "quên đường về",
          createdAt: "2023-05-04 02:54:00",
          updatedAt: "2023-05-04 02:54:00",
        },
        {
          date_missing: "2023-05-05",
          last_seen: "ở trên cầu",
          lost_reason: "mất trí nhớ",
          createdAt: "2023-05-04 03:54:00",
          updatedAt: "2023-05-04 03:54:00",
        },
        {
          date_missing: "2023-02-02",
          last_seen: "quán nước",
          lost_reason: "mất tích",
          createdAt: "2023-05-04 04:54:00",
          updatedAt: "2023-05-04 04:54:00",
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
    await queryInterface.bulkDelete("lost_situations", null, {});
  },
};
