require('dotenv').config();
const { user } = require('../../models/user');
const { generateAccessToken } = require('../functions/user');


module.exports = async (req, res) => {
      const { user_id, password, email, mobile } = req.body;
      
      const idcheck = await user.findOne({ where: { user_id } })
      const emailcheck = await user.findOne({ where: { email } })
      const mobilecheck = await user.findOne({where : { mobile } })
      
          if(idcheck){
            return res.json({ success: false, message: '사용이 불가능한 아이디입니다' });
          }
          if(emailcheck) {
            return res.json({ success: false, message: '사용이 불가능한 이메일입니다' });
          }
          if(mobilecheck) {
            return res.json({ success: false, message: '사용이 불가능한 핸드폰번호입니다' });
          }
          if(user_id && password && email && mobile) {
            const signupUserInfo = { email, password, username, mobile };
            const accessToken = generateAccessToken(signupUserInfo);

            res.status(201).cookie('jwt', accessToken).json({ success: true, message: '회원가입 성공' });
          } else {
            res.status(400).json({ message: '모든 항목은 필수입니다' });
          }
    }

// idcheck: (req, res) => {
//   const { user_id, password, email } = req.body;
  
//   const idcheck = 
//   user
//     .findOne({ where: { user_id } })
//     .then((data) => {
//       if (data) {
//         return res.json({ success: false, message: '사용이 불가능한 아이디입니다' });
//       } else {
//         return res.json({ success: true, message: '사용이 가능한 아이디입니다' });
//       }
//     })
//     .catch((err) => console.log(err));
// },

// emailCheck: (req, res) => {
//   const { email } = req.query;
//   user
//     .findOne({ where: { email: email } })
//     .then((data) => {
//       if (data) {
//         return res.json({ success: false, message: '사용이 불가능한 이메일입니다' });
//       } else {
//         return res.json({ success: true, message: '사용이 가능한 이메일입니다' });
//       }
//     })
//     .catch((err) => console.log(err));
// },

// signup: async (req, res) => {
//     const { userId, password, email } = req.body;

//     user.findOrCreate({
//         where: { userId },
//         defaults: { userId, password, email},
//     })
//     .then(([data, created]) => {
//         if(created){
//         res.json({success: true, message: '회원가입이 완료되었습니다.' });
//         }
//     })
//     .catch((err) => console.log(err));
// }