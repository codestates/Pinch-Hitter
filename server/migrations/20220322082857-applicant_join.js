"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("applicants", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("applicants", {
      fields: ["board_id"],
      type: "foreign key",
      references: {
        table: "Boards",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("applicants", "user_id");
    await queryInterface.removeColumn("applicants", "board_id");
  },
};
