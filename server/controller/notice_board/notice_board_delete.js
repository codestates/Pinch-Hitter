const { isAuthorized } = require("../functions/user");
const notice_board = require("../user/notice_board");


module.exports = async (req,res) =>{
    const userData = isAuthorized(req, res);

    if(!userData) {
        return res.status(401).send({message : '삭제 권한이 없습니다'})
    }

    if(userData) {
        const deleteNoticeBoard = await notice_board.findById(req.body.id);

        if(!deleteNoticeBoard) {
            return res.status(404).send({message : '잘못된 게시글입니다'})
        }

        if(deleteNoticeBoard) {
            deleteNoticeBoard.remove();
            return res.status(200).send({message : '게시글이 삭제되었습니다'})
        }
    }
}
