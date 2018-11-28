const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    inventory: {type: Number, required: false},
    date: {type: Date, default: Date.now},
});

module.exports = Product = mongoose.model('products', ProductSchema);