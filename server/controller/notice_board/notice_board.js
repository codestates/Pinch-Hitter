const { notice_board } = require('../../models')


module.exports = async (req,res) =>{
    await notice_board.create({
        user_id: req.body.user_id,
        title: req.body.title,
        occupation: req.body.occupation,
        wage: req.body.wage,
        work_date: req.body.work_date,
        work_place: req.body.work_place,
        content: req.body.content
    }).then( _ => console.log('success'))
}