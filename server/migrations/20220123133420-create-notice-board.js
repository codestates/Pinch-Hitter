'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notice_Boards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      user_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      occupation:{
        type:Sequelize.STRING
      },
      wage: {
        type: Sequelize.STRING
      },
      work_date: {
        type: Sequelize.STRING
      },
      work_place: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notice_Boards');
  }
};