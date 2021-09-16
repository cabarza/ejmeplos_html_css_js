const ProductController = require('../controllers/product.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api/products', authenticate, ProductController.list);
    app.get('/api/products/:id', authenticate, ProductController.getById);
    app.post('/api/products', authenticate, ProductController.create);
    app.put('/api/products/:id', authenticate, ProductController.edit);
    app.delete('/api/products/:id', authenticate, ProductController.delete);
} 