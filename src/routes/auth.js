const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/signup', authController.userSignUp);
router.post('/signin', authController.userSignIn);
router.post('/refresh-token', authController.refreshToken);

module.exports = router;