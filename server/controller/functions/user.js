require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const { User } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "24h" });
  },
  sendAccessToken: (res, accessToken) => {
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      ameSite:'none',secure:true,
      maxAge: 86400})
      res.status(200).json({message: 'ok'});
  },
  isAuthorized: (token) => {

    const cookie = token.cookies.jwt
    return verify(cookie, process.env.ACCESS_SECRET,(err,decode)=>{ 
      if(err) throw err
      else return decode});

},
  updateEmail: async(req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    if (!accessToken) {
      resObject['code'] = 401;
      resObject['message'] = '로그인 시간이 만료되었습니다';

      return resObject;
    }
    if (req.body.email) {
      const userFindOne = await User.findOne({
        where: { email: req.body.email },
      });

      try {
        if (userFindOne) {
          resObject['code'] = 204;
          throw 'email 중복';
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }
    
    await User
      .update(req.body, {
        where: { userId: accessToken.userId },
      })
      .then(() => {
        resObject['code'] = 201;
        resObject['message'] = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject['code'] = 400;
        resObject['message'] = '유저 정보를 수정하지 못하였습니다';
      });

    return resObject;
  },
  updateMobile: async(req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    if (!accessToken) {
      resObject['code'] = 401;
      resObject['message'] = '로그인 시간이 만료되었습니다';

      return resObject;
    }
    if (req.body.mobile) {
      const userFindOne = await user.findOne({
        where: { mobile: req.body.mobile },
      });

      try {
        if (userFindOne) {
          resObject['code'] = 204;
          throw 'mobile 번호 중복';
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }
    
    await user
      .update(req.body, {
        where: { userId: accessToken.userId },
      })
      .then(() => {
        resObject['code'] = 201;
        resObject['message'] = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject['code'] = 400;
        resObject['message'] = '유저 정보를 수정하지 못하였습니다';
      });

    return resObject;
  },
  changePassword: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    try {
      if (!accessToken) {
        resObject['code'] = 401;
        throw '로그인하여 주시기 바랍니다';
      }

      const userData = await user.findOne({ where: { userId: accessToken.userId } });
      const match = await bcrypt.compare(req.body.oldPassword, userData.dataValues.password);
      if (!match) {
        resObject['code'] = 400;
        throw '비밀번호를 잘못 입력하였습니다';
      }

      const password = await hashPassword(req.body.password);
      await user
        .update(
          {
            password,
          },
          {
            where: { userId: userData.dataValues.userId },
          }
        )
        .then(() => {
          resObject['code'] = 201;
          resObject['message'] = '비밀번호가 변경 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject['code'] = 500;
          resObject['message'] = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject['message'] = error;
    }
    return resObject;
  },
};
