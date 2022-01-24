'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_applicants','titles',{
      type: Sequelize.STRING
    });
    await queryInterface.addConstraint('user_applicants',{
      fields:['titles'],
      type: "foreign key",
      references:{
        table: "Notice_Boards",
        field: "title",
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user_applicants','titles')
  }
};
