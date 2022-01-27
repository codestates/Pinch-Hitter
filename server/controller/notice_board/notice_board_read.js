const { Notice_Board } = require('../../models')

module.exports = (req,res) =>{
    if(req.path === '/notice_board'){
        Notice_Board.findAll({})
        .then((data) => {
            let postdata = [];
            
            for(let i = 0; i < data.length; i++){
              postdata.push(data[i].dataValues)
            }
    
            return res.status(200).json({data: postdata, message: 'ok'})
        })
    }
}   