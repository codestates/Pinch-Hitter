
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [
        {
        user_id:'test1',
        password:'1234abc',
        name:'kimcoding1',
        email:'test1@codingjoa.com',
        mobile:'01012345678'
      },
    {
    user_id:'test2',
    password:'1234abc',
    name:'kimcoding2',
    email:'test2@codingjoa.com',
    mobile:'01011112222'
  },{
    user_id:'test3',
    password:'1234abc',
    name:'kimcoding3',
    email:'test3@codingjoa.com',
    mobile:'01022223333'
  },
  {
  user_id:'test4',
  password:'1234abc',
  name:'kimcoding4',
  email:'test4@codingjoa.com',
  mobile:'01033334444'
}, 
{
  user_id:'test5',
  password:'1234abc',
  name:'kimcoding5',
  email:'test5@codingjoa.com',
  mobile:'01044445555'
}, 
{
  user_id:'test5',
  password:'1234abc',
  name:'kimcoding5',
  email:'test5@codingjoa.com',
  mobile:'01055556666'
}, 
{
  user_id:'test6',
  password:'1234abc',
  name:'kimcoding6',
  email:'test6@codingjoa.com',
  mobile:'01066667777'
},  
{
  user_id:'test7',
  password:'1234abc',
  name:'kimcoding7',
  email:'test7@codingjoa.com',
  mobile:'01077778888'
}, 
{
  user_id:'test8',
  password:'1234abc',
  name:'kimcoding8',
  email:'test8@codingjoa.com',
  mobile:'01088889999'
}, {
  user_id:'test9',
  password:'1234abc',
  name:'kimcoding9',
  email:'test9@codingjoa.com',
  mobile:'01000001111'
}, {
  user_id:'test10',
  password:'1234abc',
  name:'kimcoding10',
  email:'test1@codingjoa.com',
  mobile:'01000001111'
}
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
