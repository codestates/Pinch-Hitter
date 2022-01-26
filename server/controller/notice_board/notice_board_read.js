const { notice_board } = require('../../models')

module.exports = (req,res) =>{
    if(req.path === '/notice_board'){
        const noticeAll = notice_board.findAll()

        return res.status(200).json({data:{notice_board:noticeAll},message:'ok'})
    }
}