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
      "peoples",
      [
        {
          people_name: "nguyen van a",
          birthday: "2002-05-04 02:54:00",
          gender: "nam",
          address: "son tra da nang",
          dad_name: "nguyen van b",
          mom_name: "nguyen van c",
          coalpeople_name: "nguyen van d",
          brief_biography: "aaaaaaaaaaa",
          people_image:
            "http://localhost:3000/publicimagespeople_image\1683165868295_Biểu đồ không có tiêu đề.drawio (6).png",
          searching_process: "vùng ngoại ô",
          lostSituation_id: "1",
          createdAt: "2023-05-04 02:54:00",
          updatedAt: "2023-05-04 02:54:00",
        },
        {
          people_name: "nguyen van aa",
          birthday: "2002-05-04 02:54:00",
          gender: "nam",
          address: "son tra da nang",
          dad_name: "nguyen van b",
          mom_name: "nguyen van c",
          coalpeople_name: "nguyen van d",
          brief_biography: "aaaaaaaaaaa",
          people_image:
            "http://localhost:3000/publicimagespeople_image\1683165868295_Biểu đồ không có tiêu đề.drawio (6).png",
          searching_process: "vùng ngoại ô",
          lostSituation_id: "2",
          createdAt: "2023-05-04 02:54:00",
          updatedAt: "2023-05-04 02:54:00",
        },
        {
          people_name: "nguyen van aaa",
          birthday: "2002-05-04 02:54:00",
          gender: "nam",
          address: "son tra da nang",
          dad_name: "nguyen van b",
          mom_name: "nguyen van c",
          coalpeople_name: "nguyen van d",
          brief_biography: "aaaaaaaaaaa",
          people_image:
            "http://localhost:3000/publicimagespeople_image\1683165868295_Biểu đồ không có tiêu đề.drawio (6).png",
          searching_process: "vùng ngoại ô",
          lostSituation_id: "3",
          createdAt: "2023-05-04 02:54:00",
          updatedAt: "2023-05-04 02:54:00",
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
    await queryInterface.bulkDelete("peoples", null, {});
  },
};
