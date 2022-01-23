'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_applicants', 
    { id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    }})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_applicants');
  }
};
