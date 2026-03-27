const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

// Rotas públicas (qualquer um vê)
router.get('/v1/products', ProductController.list);
router.post('/v1/user', UserController.create);
router.post('/v1/login', AuthController.login);

// Rotas protegidas (precisa do Token)
router.post('/v1/product', AuthMiddleware, ProductController.create);
router.put('/v1/product/:id', AuthMiddleware, ProductController.update);
router.delete('/v1/product/:id', AuthMiddleware, ProductController.delete);

module.exports = router;