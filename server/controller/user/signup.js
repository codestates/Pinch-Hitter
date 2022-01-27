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



            res.status(400).json({ message: '모든 항목은 필수입니다' });}
