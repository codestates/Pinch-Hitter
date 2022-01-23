'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_applicants', 
    { id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_name:{
      type: Sequelize.STRING
    },
    user_email:{
      type: Sequelize.STRING
    },
    user_mobile:{
      type: Sequelize.STRING
    }})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_applicants');
  }
};
