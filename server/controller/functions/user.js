require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const { User } = require("../../models");
// const bcrypt = require('bcrypt');

const authorized = (accessToken) => {
  if (!accessToken) return null;
  try {
    return verify(accessToken, process.env.ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "2h" });
  },

  sendAccessToken: (res, accessToken) => {
<<<<<<< HEAD
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      ameSite: "none",
      secure: true,
      maxAge: 86400,
    });
    res.status(200).json({ message: "ok" });
  },
  isAuthorized: (token) => {
    const cookie = token.cookies.jwt;
    return verify(cookie, process.env.ACCESS_SECRET, (err, decode) => {
      if (err) throw err;
      else return decode;
    });
  },
  updateEmail: async (req) => {
=======
    res
      .cookie('accessToken', accessToken, {
        httpOnly: false,
        secure: true,
        sameSite: 'None',
        expires: new Date(Date.now() + 1 * 1000 * 60 * 60 * 24),
      })
      .json({ data: accessToken });
  },

  isAuthorized: (req) => {
    if (req.headers.cookie) {
      const accessToken = req.headers.cookie.split('=')[1];

      if (!accessToken) return null;
      try {
        return verify(accessToken, process.env.ACCESS_SECRET);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  },

  updateNickname: async(req) => {
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    if (!accessToken) {
      resObject["code"] = 401;
      resObject["message"] = "로그인 시간이 만료되었습니다";

      return resObject;
    }
    if (req.body.nickname) {
      const userFindOne = await User.findOne({
        where: { email: req.body.nickname },
      });

      try {
        if (userFindOne) {
<<<<<<< HEAD
          resObject["code"] = 204;
          throw "email 중복";
=======
          resObject.code = 204;
          throw 'email 중복';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }
<<<<<<< HEAD

    await User.update(req.body, {
      where: { userId: accessToken.userId },
    })
      .then(() => {
        resObject["code"] = 201;
        resObject["message"] = "유저 정보를 수정하였습니다";
      })
      .catch(() => {
        resObject["code"] = 400;
        resObject["message"] = "유저 정보를 수정하지 못하였습니다";
=======
    
    await User
      .update(req.body, {
        where: { id: accessToken.id },
      })
      .then(() => {
        resObject.code = 201;
        resObject.message = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject.code = 400;
        resObject.message = '유저 정보를 수정하지 못하였습니다';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      });

    return resObject;
  },
  updateMobile: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    if (!accessToken) {
<<<<<<< HEAD
      resObject["code"] = 401;
      resObject["message"] = "로그인 시간이 만료되었습니다";
=======
      resObject.code = 401;
      resObject.message = '로그인 시간이 만료되었습니다';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4

      return resObject;
    }
    if (req.body.mobile) {
      const userFindOne = await user.findOne({
        where: { mobile: req.body.mobile },
      });

      try {
        if (userFindOne) {
<<<<<<< HEAD
          resObject["code"] = 204;
          throw "mobile 번호 중복";
=======
          resObject.code = 204;
          throw 'mobile 번호 중복';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }

    await user
      .update(req.body, {
        where: { id: accessToken.id },
      })
      .then(() => {
<<<<<<< HEAD
        resObject["code"] = 201;
        resObject["message"] = "유저 정보를 수정하였습니다";
      })
      .catch(() => {
        resObject["code"] = 400;
        resObject["message"] = "유저 정보를 수정하지 못하였습니다";
=======
        resObject.code = 201;
        resObjectmessage = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject.code = 400;
        resObject.message = '유저 정보를 수정하지 못하였습니다';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      });

    return resObject;
  },
  updatePassword: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    try {
      if (!accessToken) {
<<<<<<< HEAD
        resObject["code"] = 401;
        throw "로그인하여 주시기 바랍니다";
      }

      const userData = await user.findOne({
        where: { userId: accessToken.userId },
      });
      const match = await bcrypt.compare(
        req.body.oldPassword,
        userData.dataValues.password
      );
      if (!match) {
        resObject["code"] = 400;
        throw "비밀번호를 잘못 입력하였습니다";
=======
        resObject.code = 401;
        throw '로그인하여 주시기 바랍니다';
      }

      const userData = await user.findOne({ where: { id: accessToken.id } });
      const match = await bcrypt.compare(req.body.password, userData.dataValues.password);
      if (!match) {
        resObject.code = 400;
        throw '비밀번호를 잘못 입력하였습니다';
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
      }

      const password = await hashPassword(req.body.new_password);
      await user
        .update(
          {
            password,
          },
          {
            where: { userId: userData.dataValues.id },
          }
        )
        .then(() => {
<<<<<<< HEAD
          resObject["code"] = 201;
          resObject["message"] = "비밀번호가 변경 되었습니다";
        })
        .catch((error) => {
          console.log(error);
          resObject["code"] = 500;
          resObject["message"] = "서버에 오류가 발생했습니다";
        });
    } catch (error) {
      console.log(error);
      resObject["message"] = error;
=======
          resObject.code = 201;
          resObject.message = '비밀번호가 변경 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject.code = 500;
          resObject.message = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject.message = error;
    }
    return resObject;
  },
  unregister: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);
    try {
      if (!accessToken) {
        resObject.code = 401;
        throw '로그인하여 주시기 바랍니다';
      }
      await User.destroy({
        where: { id: accessToken.id },
      })
        .then((data) => {
          console.log(data);
          resObject.code = 201;
          resObject.message = '회원탈퇴 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject.code = 500;
          resObject.message = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject.message = error;
>>>>>>> f80d761b0d195f5fff677cdca816195b5cfcdee4
    }
    return resObject;
  },
};
