const Product = require('../models/product.model');
const jwtConfig = require('../config/jwt.config');
const jwt = require('jsonwebtoken');

module.exports.list = (req, res) => {
    Product.find({}).populate('manufacturer')
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
}

module.exports.getById = (req, res) => {
    Product.findById(req.params.id).populate('manufacturer')
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
}

module.exports.create = (req, res) => {
    jwt.verify(req.cookies.usertoken, jwtConfig.secret, (error, payload) => {
        if(!error) {
            const prod = req.body;
            prod.manufacturerId = payload.id;
            Product.create(prod)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
        } else {
            res.status(500).json(error);
        }
    });    
}

module.exports.edit = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
}

module.exports.delete = (req, res) => {
    Product.findOneAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
}

module.exports.buy = (req, res) => {
    Product.findById(req.params.id).populate('manufacturer')
        .then(prd => {
            if(prd && prd.stock) {
                prd.stock -= 1;
                Product.findByIdAndUpdate(prd._id, prd)
                    .then(resp => res.json(prd))
                    .catch(err => res.status(500).json(err));
            } else {
                res.status(500).json({errors: {
                    stock: {
                        name: 'ValidatorError',
                        message: 'Not enough stock'
                    }
                }})
            }
        }).catch(err => res.status(500).json(err));
}