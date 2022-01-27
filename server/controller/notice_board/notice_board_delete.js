const Notice_Board = require("../../models");

module.exports =  (req,res) =>{
    const { title } = req.body
    console.log(req.body)

        Notice_Board.destroy({
            where: {
                title: title,
            },
        })
         res.status(200).send({message: '게시글이 삭제되었습니다'})

}









  // const deleteNoticeBoard = await Notice_Board.findOne({
    //     where: {
    //       id : id
    //   }
    // })


    // if(!userData) {
    //     console.log('1')
    //     return res.status(401).send({message : '삭제 권한이 없습니다'})
    // }

    // if(userData) {
        
    // console.log('2')
        // const deleteNoticeBoard = await Notice_Board.findById(req.body.id);

        // if(!deleteNoticeBoard) {
        //     console.log('3')
        //     return res.status(404).send({message : '잘못된 게시글입니다'})
        // }

        // if(deleteNoticeBoard) {
        //     console.log('4')
        //     deleteNoticeBoard.remove();
        //     return res.status(200).send({message : '게시글이 삭제되었습니다'})
        // }
    // }