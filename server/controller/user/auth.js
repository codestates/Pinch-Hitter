require('dotenv').config();
const { User } = require('../../models');
const { isAuthorized } = require('../functions/user')

module.exports = async (req,res)=>{
    
    const checkedToken = isAuthorized(req);
    if(!req.headers.cookie){
        return res.status(401).send({ data: null, message: 'not authorized' });
    }else{
        const userInfo = await User.findOne({
            where: {user_id : checkedToken.user_id}
        })

        if(!userInfo){
            return res.json({ success: false, message: '로그아웃 상태입니다' });
        } else {
            if(userInfo.dataValues.user_id === checkedToken.user_id){
                const payload = {
                    id:checkedToken.id,
                    user_id : checkedToken.user_id,
                    name: checkedToken.name,
                    email: checkedToken.email,
                    mobile: checkedToken.mobile
                }
                return res.json({ data:{userInfo: payload},success: true, message: '로그인 상태입니다' });
            }
        }
        }
}
