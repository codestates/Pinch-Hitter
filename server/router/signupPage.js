const express = require('express');
const router = express.Router();
const controller = require('../controller/signup');

router.post('/idCheck', controller.idCheck);
router.post('/nicknameCheck', controller.nicknameCheck);
router.post('/signup', controller.signup);

module.exports = router;