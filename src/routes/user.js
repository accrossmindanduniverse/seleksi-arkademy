const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/', authMiddleware.verifyJwt, userController.getAllUsers);
router.get('/username', authMiddleware.verifyJwt, userController.getUser);
router.delete('/delete-account', authMiddleware.verifyJwt, userController.userDelete);
router.put('/:id', authMiddleware.verifyJwt, userController.updateUser);

module.exports = router;