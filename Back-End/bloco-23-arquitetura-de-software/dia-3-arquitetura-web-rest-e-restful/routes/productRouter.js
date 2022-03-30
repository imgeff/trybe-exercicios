const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/list-products', productController.getAll);

router.get('/get-by-id/:id', productController.getById);

router.post('/add-user', productController.create);

router.delete('/delete-user/:id', productController.destroy);

router.put('/update-user/:id', productController.update);

module.exports = router;