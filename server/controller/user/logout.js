require('dotenv').config();

module.exports = (req, res) =>{
    res
      .clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      })
      .json({ success: true });
};