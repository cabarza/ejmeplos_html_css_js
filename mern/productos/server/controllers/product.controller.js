const { json } = require('express');
const Product = require('../models/product.model');

module.exports.list = (req, res) => {
    Product.find({})
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
}

module.exports.getById = (req, res) => {
    Product.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
}

module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))   
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