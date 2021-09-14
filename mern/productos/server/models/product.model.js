const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is required'],
        minlength: [2, 'The name must have 2 leters minimum']
    },
    price: {
        type: Number,
        required: [true, 'The price is require']
    },
    type: {
        type: String,
        required: [true, 'The type is required']
    },
    brand: {
        type: String,
        required: [true, 'The brand is required']
    },
    manufacturer: {
        type: String,
        required: [true, 'The manufacturer is required']
    },
    stock: Number

}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;