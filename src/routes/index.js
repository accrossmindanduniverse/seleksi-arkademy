const express = require('express');
const router = express.Router();


const productRoutes = require('./product');
router.use('/product', productRoutes);

const userRoutes = require('./user');
router.use('/user', userRoutes);

const authRoutes = require('./auth');
router.use('/auth', authRoutes);

module.exports = router;