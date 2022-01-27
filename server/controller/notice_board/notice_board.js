const { Notice_Board } = require('../../models')


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

    // user_id 타입 때문에..
    if( title.length > 0 &&
        occupation.length > 0 &&
        wage.length > 0 &&
        work_date.length > 0 &&
        work_place.length > 0 &&
        content.length > 0) {
            const Notice_Board2 = await Notice_Board.create({
                user_id,
                title,
                occupation,
                wage,
                work_date,
                work_place,
                content
            })
            console.log(req.body)
            console.log('good')
            return res.status(201).json(Notice_Board2);
        } else {
            console.log(req.body)
            return res.status(400).json({message : '모든 정보를 입력해주세요'})
        }


}