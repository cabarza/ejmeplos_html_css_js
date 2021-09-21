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
    manufacturerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Manufacturer required']
    },
    stock: Number

}, {timestamps: true});

ProductSchema.virtual('manufacturer', {
    ref: 'User',
    localField: 'manufacturerId',
    foreignField: '_id'
});

ProductSchema.set('toObject', { virtuals: true });
ProductSchema.set('toJSON', { virtuals: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;