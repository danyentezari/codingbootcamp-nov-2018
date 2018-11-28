const express = require('express');
const routers = express.Router();
const Product = require('../models/Product');


// GET route goes here...
routers.get('/list', (req, res)=>{
    Product
    .find({})
    .then((list)=>{
        res.send(list);
        console.log('here is the list', list);
    });

    console.log('After the query');
});


// POST route goes here...
routers.post('/save', (req, res)=>{
    // save entry here

    // 1) Create a new instance of Product
    const newProduct = new Product({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        inventory: req.body.inventory
    });

    // 2) Save the new product
    newProduct.save()
    .then(savedEntry=>{
        res.send(savedEntry);
    }).catch(err=>{
        res.send(err);
    })
});

routers.all('*', (req, res)=>{
    res.send('404. Page does not exist');
});


module.exports = routers;
