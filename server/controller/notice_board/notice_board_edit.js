const { notice_board } = require('../../models')
const { isAuthorized } = require('../functions/user')


module.exports = async (req,res) =>{
    const {
        notice_board_id,
        title,
        occupation,
        wage,
        work_date,
        work_place,
        content
    } = req.body

    const userData = isAuthorized(req, res);
    
    if(!userData) {
        return res.status(401).send({message : '게시글 수정 권한이 없습니다'});
    }

    if(userData) {
        const edit = {
            title : title,
            occupation : occupation,
            wage : wage,
            work_date : work_date,
            work_place : work_place,
            content : content,
        };
    

    const editNoticeBoard = await notice_board.findOne({
        id : notice_board_id,
        user_id : userData.user_id,
    })
        if(editNoticeBoard === null) {
            return res.status(400).send({message : '게시글이 존재하지 않습니다'});
        }
        if(editNoticeBoard) {
            await notice_board.findById(req.body.notice_board_id).updateMany(edit).exec();

            return res.status(200).send({message : '게시글 수정 완료'})
        }
    }
}
