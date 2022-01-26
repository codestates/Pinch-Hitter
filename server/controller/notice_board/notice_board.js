const { notice_board } = require('../../models')


module.exports = async (req,res) =>{
<<<<<<< HEAD:server/controller/user/notice_board.js
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

    // notice_board.create({
    //     user_id: req.body.user_id,
    //     title: req.body.title,
    //     occupation: req.body.occupation,
    //     wage: req.body.wage,
    //     work_date: req.body.work_date,
    //     work_place: req.body.work_place,
    //     content: req.body.content
    // })

=======
    await notice_board.create({
        user_id: req.body.user_id,
        title: req.body.title,
        occupation: req.body.occupation,
        wage: req.body.wage,
        work_date: req.body.work_date,
        work_place: req.body.work_place,
        content: req.body.content
    }).then( _ => console.log('success'))
>>>>>>> f86bbdecf20ff5c093742be43234c3193998b4ed:server/controller/notice_board/notice_board.js
}