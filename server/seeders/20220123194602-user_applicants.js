'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_applicants',[
    {
      user_name:'kimcoding1',
      user_email:'test1@codingjoa.com',
      user_mobile:'01012345678'
    },
  {
    user_name:'kimcoding2',
    user_email:'test2@codingjoa.com',
    user_mobile:'01011112222'
  }])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_applicants', null, {});
  }
};
