'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Notice_Boards','user_id',{
      type:Sequelize.INTEGER
    });
    await queryInterface.addConstraint('Notice_Boards',{
      fields:["user_id"],
      type: "foreign key",
      references:{
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Notice_Boards','user_id')
  }
};
