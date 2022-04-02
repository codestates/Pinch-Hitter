"use strict";

const applicant = require("../models/applicant");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("applicant", [
      {
        user_id: 1,
        board_id: 1,
      },
      {
        user_id: 2,
        board_id: 1,
      },
      {
        user_id: 3,
        board_id: 1,
      },
      {
        user_id: 1,
        board_id: 2,
      },
      {
        user_id: 5,
        board_id: 2,
      },
      {
        user_id: 6,
        board_id: 2,
      },
      {
        user_id: 4,
        board_id: 3,
      },
      {
        user_id: 9,
        board_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
