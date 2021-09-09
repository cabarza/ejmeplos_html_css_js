import {crear, listar, buscar, editar, eliminar, deshabilitar}  from '../controller/usuario.controller.js';

export const usuarioRoutes = app => {
    app.get('/api/usuarios', listar);
    app.get('/api/usuarios/:id', buscar);
    app.post('/api/usuarios', crear);
    app.put('/api/usuarios/:id', editar);
    app.delete('/api/usuarios/:id', eliminar);
    app.patch('/api/usuarios/:id', deshabilitar);
}