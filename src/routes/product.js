const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/', authMiddleware.verifyJwt, productController.getAllProducts);
router.post('/post', authMiddleware.verifyJwt, productController.postProduct);
router.delete('/:id', authMiddleware.verifyJwt, productController.deleteProduct);
router.put('/:id', authMiddleware.verifyJwt, productController.updateProduct);

module.exports = router;