const UsuarioController = require('../controller/usuario.controller');

module.exports = app => {
    app.get('/api/usuarios', UsuarioController.listar);
    app.get('/api/usuarios/:id', UsuarioController.buscar);
    app.post('/api/usuarios', UsuarioController.crear);
    app.put('/api/usuarios/:id', UsuarioController.editar);
    app.delete('/api/usuarios/:id', UsuarioController.elimninar);
    app.patch('/api/usuarios/:id', UsuarioController.deshabilitar);
}