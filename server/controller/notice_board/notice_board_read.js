const { Notice_Board } = require('../../models')

module.exports = async (req,res) =>{
    // console.log(req)
    if(req.path === '/notice_board'){

        const noticeAll = await Notice_Board.findAll()


        return res.status(200).json({data:noticeAll,message:'ok'})
    }
}   