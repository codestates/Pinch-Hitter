module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
<<<<<<< HEAD
          userId: "test1",
=======
          user_id: "test1",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding1",
          email: "test1@codingjoa.com",
          mobile: "01012345678",
        },
        {
<<<<<<< HEAD
          userId: "test2",
=======
          user_id: "test2",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding2",
          email: "test2@codingjoa.com",
          mobile: "01011112222",
        },
        {
<<<<<<< HEAD
          userId: "test3",
=======
          user_id: "test3",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding3",
          email: "test3@codingjoa.com",
          mobile: "01022223333",
        },
        {
<<<<<<< HEAD
          userId: "test4",
=======
          user_id: "test4",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding4",
          email: "test4@codingjoa.com",
          mobile: "01033334444",
        },
        {
<<<<<<< HEAD
          userId: "test5",
=======
          user_id: "test5",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding5",
          email: "test5@codingjoa.com",
          mobile: "01044445555",
        },
        {
<<<<<<< HEAD
          userId: "test5",
=======
          user_id: "test5",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding5",
          email: "test5@codingjoa.com",
          mobile: "01055556666",
        },
        {
<<<<<<< HEAD
          userId: "test6",
=======
          user_id: "test6",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding6",
          email: "test6@codingjoa.com",
          mobile: "01066667777",
        },
        {
<<<<<<< HEAD
          userId: "test7",
=======
          user_id: "test7",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding7",
          email: "test7@codingjoa.com",
          mobile: "01077778888",
        },
        {
<<<<<<< HEAD
          userId: "test8",
=======
          user_id: "test8",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding8",
          email: "test8@codingjoa.com",
          mobile: "01088889999",
        },
        {
<<<<<<< HEAD
          userId: "test9",
=======
          user_id: "test9",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding9",
          email: "test9@codingjoa.com",
          mobile: "01000001111",
        },
        {
<<<<<<< HEAD
          userId: "test10",
=======
          user_id: "test10",
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50
          password: "1234abc",
          nickname: "kimcoding10",
          email: "test1@codingjoa.com",
          mobile: "01000001111",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
