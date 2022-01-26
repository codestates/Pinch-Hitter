require('dotenv').config();
const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../functions/user');

module.exports =  async (req, res)=> {
        const { user_id, password } = req.body;

          if (!user_id) return res.json({ success: false, message: '아이디를 입력해주세요' });
          
          if (!password) return res.json({ success: false, message: '비밀번호를 입력해주세요' });

          
          try {
            const userInfo = await user.findOne({ where: { user_id } });
            if (!userInfo) {
              return res.json({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다' });
            }
            const match = await bcrypt.compare(password, userInfo.dataValues.password);
            if (!match) {
              return res.json({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다' });
            }
            delete userInfo.password;
            
            const accessToken = generateAccessToken(userInfo.dataValues);
            sendAccessToken(res, accessToken);
    
            return res.status(201).json({ success: true, message: '로그인이 완료되었습니다' });
        }catch (err) {
            console.log(err);
            return res.status(500).send('잠시 후에 다시 시도해주세요');
          }
}