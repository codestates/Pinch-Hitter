const board = require('./functions/board');
const {
    createBoard,
    updateBoard,
    deleteBoard,
  } = require('./functions/board');
const { isAuthorized } = require('./functions/user')
const { Board } = require('../models');

module.exports = {
    createBoard: async (req, res) => {
        const resObject = await createBoard(req);
        res.status(resObject.code).send(resObject.message);
    },
    updateBoard: async (req, res) => {
        const resObject = await updateBoard(req);
        res.status(resObject.code).send(resObject.message);
    },
    deleteBoard: async (req, res) => {
        const resObject = await deleteBoard(req);
        res.status(resObject.code).send(resObject.message);
    },
    getAllBoard: async (req, res) => {
        try{
            const boardList = await Board.findAll({});
            res.status(200).json({boardList});
        } catch (err) {
            res.status(400).json({ message: '잘못된 요청입니다' });
        }
    },
    getUserBoard: async (req, res) => {
        const userInfo = isAuthorized(req);
        if (!userInfo) {
          res.status(401).json({ message: '로그인이 필요합니다' });
        } else {
          try {
            const boardList = await Board.findAll({
              where: { user_id: userInfo.id },
            });
            res.status(200).json({ boardList });
          } catch (err) {
            res.status(400).json({ message: '잘못된 요청입니다' });
          }
        }
    },
    getBoard: async (req, res) => {
        const userInfo = isAuthorized(req);
        const boardId = req.body.board_id;
        if (!userInfo) {
          res.status(401).json({ message: '로그인이 필요합니다' });
        } else {
          try {
            const boardList = await Board.findOne({
              where: { id: boardId },
            });
            res.status(200).json({ boardList });
          } catch (err) {
            res.status(400).json({ message: '잘못된 요청입니다' });
          }
        }

    },
}