module.exports = {
    auth: require('./user/auth'),
    login: require('./user/login'),
    signup: require('./user/signup'),
    logout: require('./user/logout'),
    notice_board: require('./notice_board/notice_board'),
    notice_board_read: require('./notice_board/notice_board_read'),
    notice_board_edit: require('./notice_board/notice_board_edit'),
    notice_board_delete: require('./notice_board/notice_board_delete')
}; 
