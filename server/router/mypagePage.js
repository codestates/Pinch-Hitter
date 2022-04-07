const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const controller = require("../controller/mypage");

router.get("/", (req, res) => {
  res.status(200).send("hello world");
});
router.get("/users", controller.getUserInfo);
router.patch("/nickname", controller.updateNickname);
router.patch("/mobile", controller.updateMobile);
router.patch("/password", controller.updatePassword);
router.delete("/signout", controller.unregister);
router.get("/applicants", controller.getAllApplicant);
router.get("/applicants/:userId", controller.getAppliedgBoard);
=======
const controller = require('../controller/mypage');

router.get('/users', controller.getUserInfo);
router.patch('/nickname', controller.updateNickname);
router.patch('/mobile', controller.updateMobile);
router.patch('/password', controller.updatePassword);
router.delete('/signout', controller.unregister);
// router.get('/applicants', controller.getAllApplicant);
// router.get('/applicants/:userId', controller.getAppliedgBoard);
>>>>>>> 2035af7e73d4304431cecbc9e7034e30462dcb50

module.exports = router;
