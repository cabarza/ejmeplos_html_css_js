const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.list);
    app.get('/api/products/:id', ProductController.getById);
    app.post('/api/products', ProductController.create);
    app.put('/api/products/:id', ProductController.edit);
    app.delete('/api/products/:id', ProductController.delete);
} 