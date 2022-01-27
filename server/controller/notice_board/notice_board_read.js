const { Notice_Board } = require('../../models')

module.exports = (req,res) =>{
    if(req.path === '/notice_board'){
        const noticeAll = Notice_Board.findAll()

        return res.status(200).json({data:{Notice_Board:noticeAll},message:'ok'})
    }
}