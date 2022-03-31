// const {
//     isAuthorized,
//     updateEmail,
//     updateMobile,
//     changePassword,
//   } = require('../functions/user');
// const { user } = require('../../models');
// const session = require('express-session');

// module.exports = {
//     myInfo: async (req, res) => {
//         try {
//           const accessToken = isAuthorized(req);
//           const userInfo = await selectUser(accessToken.userId);
    
//           if (!accessToken) {
//             throw '다시 로그인하여 주세요';
//           } else {
//             res.status(200).json(userInfo);
//           }
//         } catch (error) {
//           console.log(error);
//           res.status(401).send(error);
//         }
//       },

//     updateEmail: async (req, res) => {
//         const resObject = await updateEmail(req);
//         res.status(resObject.code).send(resObject.message);        
//     },

//     updateMobile: async (req, res) => {
//         const resObject = await updateMobile(req);
//         res.status(resObject.code).send(resObject.message);        
//     },

//     changePassword: async (req, res) => {
//         const resObject = await changePassword(req);
//         res
//           .status(resObject.code)
//           .clearCookie('accessToken', {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'None',
//           })
//           .send(resObject.message);
//       },
//       delete: (req, res) => {
//           users
//             .destroy({
//               where: {
//                 id: req.session.userid,
//               },
//             })
//             .then(() => {
//               req.session.destroy((err) => {
//                 if (err) {
//                   res.status(400).send('로그인하지 않으셨습니다.');
//                 } else {
//                   res.status(200).send('안전하게 탈퇴처리되었습니다.');
//                 }
//               });
//             })
//             .catch((err) => {
//               res.status(500).send('err');
//             });
//           },
// }