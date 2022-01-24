'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_applicants','applicant_id',{
      type: Sequelize.INTEGER
    });
    await queryInterface.addConstraint('user_applicants',{
      fields:['applicant_id'],
      type: "foreign key",
      references:{
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user_applicants','applicant_id')
  }
};
