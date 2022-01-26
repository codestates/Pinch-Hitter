require('dotenv').config();
const { User } = require('../../models');
const { generateAccessToken } = require('../functions/user.js');


module.exports = async (req, res) => {
      // const { user_id, name ,password, email, mobile } = req.body;
      console.log(User)
      if(!req.body.name || !req.body.user_id || !req.body.password || !req.body.mobile){
        res.status(422).send('insufficient parameters supplied')
      }
    
      
        const userInfo = await User.findOne({
          where: {email : req.body.user_id}
        })
        if(userInfo !== null){
          res.status(409).send('id exists')
        }else{
          const userData = await User.findOrCreate({
            where: {
            user_id:req.body.user_id,
            password:req.body.password,
            email:req.body.email,
            mobile:req.body.mobile,
            name:req.body.name }
          })
          const userCreate = userData[0]
          const payload = {
            id: userCreate.dataValues.id,
            user_id : userCreate.dataValues.user_id,
            email: userCreate.dataValues.email,
            password: userCreate.dataValues.password,
            name: userCreate.dataValues.name,
            mobile: userCreate.dataValues.mobile,
            updatedAt: userCreate.dataValues.updatedAt,
            createdAt: userCreate.dataValues.createdAt
          }
            const accessToken = generateAccessToken(payload);

            res.cookie('jwt', accessToken)
            return res.status(201).json({ success: true, message: '회원가입 성공' });
        }


          
            res.status(400).json({ message: '모든 항목은 필수입니다' });
  
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

/**
 *       const idcheck = await user.findOne({ where: { user_id:req.body.user_id } })
      const emailcheck = await user.findOne({ where: { email: req.body.email } })
      const mobilecheck = await user.findOne({ where : { mobile: req.body.mobile } })
      
          if(idcheck){
            return res.json({ success: false, message: '사용이 불가능한 아이디입니다' });
          }
          if(emailcheck) {
            return res.json({ success: false, message: '사용이 불가능한 이메일입니다' });
          }
          if(mobilecheck) {
            return res.json({ success: false, message: '사용이 불가능한 핸드폰번호입니다' });
          }
 * 
 * 
 * 
 *           if(user_id && password && email && mobile) {
            const signupUserInfo = { email, password, user_id, mobile };
            const accessToken = generateAccessToken(signupUserInfo);

            res.status(201).cookie('jwt', accessToken).json({ success: true, message: '회원가입 성공' });
          } else {
            res.status(400).json({ message: '모든 항목은 필수입니다' });
          }
 */