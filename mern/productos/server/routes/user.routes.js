const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/registry', UserController.register);
    app.post('/api/login', UserController.login);
}