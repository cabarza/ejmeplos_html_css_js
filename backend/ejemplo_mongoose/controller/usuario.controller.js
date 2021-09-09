import Usuario from '../model/usuario.model.js';

export const crear = (req, res) => {
    req.body.activo = true;
    Usuario.create(req.body)
        .then(data => res.json(data))
        .catch(error => {
            res.status(500).json({
                error: error
            })
        })
}

export const listar = (req, res) => {
    Usuario.find()
        .then(data => res.json(data))
        .catch(error => {
            res.status(500).json({
                error: error
            })
        })
}

export const buscar = (req, res) => {
    Usuario.findById(req.params.id)
        .then(data => res.json(data))
        .catch(error => {
            res.status(500).json({
                error: error
            })
        })
}

export const editar = (req, res) => {
    req.body.activo = true;
    Usuario.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(error => {
        res.status(500).json({
            error: error
        })
    })
}

export const deshabilitar = (req, res) => {
    Usuario.findById(req.params.id).
        then(usuario => {
            usuario.activo = false;
            Usuario.findByIdAndUpdate(usuario._id, usuario)
            .then(data => res.json(data))
            .catch(error => {
                res.status(500).json({
                    error: error
                })
            })
        })
        .catch(error => {
            res.status(500).json({
                error: error
            })
        })
}

export const eliminar = (req, res) => {
    Usuario.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
        .catch(error => {
            res.status(500).json({
                error: error
            })
        })
}
