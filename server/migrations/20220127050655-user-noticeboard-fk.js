"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Boards", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Boards", "user_id");
  },
};
