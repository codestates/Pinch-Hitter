require('dotenv').config();

const { User } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../functions/user');

module.exports =  async (req, res)=> {
        const { user_id, password } = req.body;

          if (!user_id) return res.json({ success: false, message: '아이디를 입력해주세요' });
          
          if (!password) return res.json({ success: false, message: '비밀번호를 입력해주세요' });

          
          try {
            const userInfo = await User.findOne({ where: { user_id:user_id ,password:password} });
            if (!userInfo) {
              return res.json({ success: false, message: '아이디가 잘못되었습니다' });
            }
            delete userInfo.password;
            const payload = {
              id:userInfo.dataValues.id,
              user_id:userInfo.dataValues.user_id,
              name:userInfo.dataValues.name,
              mobile:userInfo.dataValues.mobile,
              createdAt: userInfo.dataValues.createdAt,
              updatedAt: userInfo.dataValues.updatedAt
            }
            const accessToken = generateAccessToken(payload);
    
            return res.status(201).send(sendAccessToken(res, accessToken));
        }catch (err) {
            console.log(err);
            return res.status(500).send('잠시 후에 다시 시도해주세요');
          }
}