const { Notice_Board } = require('../../models')


module.exports = async (req,res) =>{
    console.log(req)
    const {
        user_id,
        title,
        occupation,
        wage,
        work_date,
        work_place,
        content
    } = req.body

    if(user_id &&
        title &&
        occupation &&
        wage &&
        work_date &&
        work_place &&
        content) {
            await Notice_Board.create({
                user_id:user_id,
                title:title,
                occupation:occupation,
                wage:wage,
                work_date:work_date,
                work_place:work_place,
                content:content
            })
            return res.status(201).json("ok");
        } else {
            return res.status(400).json({message : '모든 정보를 입력해주세요'})
        }


}