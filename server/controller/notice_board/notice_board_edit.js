const { Notice_Board } = require('../../models')
const { isAuthorized } = require('../functions/user')


module.exports = async (req,res) =>{
    console.log(req)
    const {
        user_id,
        title,
        occupation,
        wage,
        work_date,
        work_place,
        content
    } = req.body

    const userData = isAuthorized(req, res);
    
    // if(!userData) {
    //     console.log('첫번째')
    //     return res.status(401).send({message : '게시글 수정 권한이 없습니다'});
    // }

    if(userData) {
        const edit = {
            title : title,
            occupation : occupation,
            wage : wage,
            work_date : work_date,
            work_place : work_place,
            content : content,
        };
        console.log('두번째')

    const editNoticeBoard = await Notice_Board.findOne({
        where: {
          title : title
      }
    })
        // if(editNoticeBoard === null) {
        //     console.log('세번째')
        //     return res.status(400).send({message : '게시글이 존재하지 않습니다'});
        // }


        if(editNoticeBoard) {
            await Notice_Board.update(
               edit,
               {
               where:  {
                   title : req.body.title
                  }
               }
            )
                
                
            console.log('네번째')
            return res.status(200).send({message : '게시글 수정 완료'})
        }
    }
}
