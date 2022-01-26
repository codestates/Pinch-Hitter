require('dotenv').config();
const { user } = require('../../models/user');

module.exports = {
    idcheck: (req, res) => {
      const { userId } = req.query;
      user
        .findOne({ where: { userId } })
        .then((data) => {
          if (data) {
            return res.json({ success: false, message: '사용이 불가능한 아이디입니다' });
          } else {
            return res.json({ success: true, message: '사용이 가능한 아이디입니다' });
          }
        })
        .catch((err) => console.log(err));
    },

    emailCheck: (req, res) => {
      const { userEmail } = req.query;
      user
        .findOne({ where: { email: userEmail } })
        .then((data) => {
          if (data) {
            return res.json({ success: false, message: '사용이 불가능한 이메일입니다' });
          } else {
            return res.json({ success: true, message: '사용이 가능한 이메일입니다' });
          }
        })
        .catch((err) => console.log(err));
    },

    signup: async (req, res) => {
        const { userId, password, email } = req.body;

        user.findOrCreate({
            where: { userId },
            defaults: { userId, password, email},
        })
        .then(([data, created]) => {
            if(created){
            res.json({success: true, message: '회원가입이 완료되었습니다.' });
            }
        })
        .catch((err) => console.log(err));
    }
}