const { notice_board } = require('../../models')


module.exports = async (req,res) =>{
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
            const notice_board = await notice_board.create({
                user_id,
                title,
                occupation,
                wage,
                work_date,
                work_place,
                content
            })
            return res.status(201).json(notice_board);
        } else {
            return res.status(400).json({message : '모든 정보를 입력해주세요'})
        }


}