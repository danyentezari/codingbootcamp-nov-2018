const express = require('express');
const routers = express.Router();


// GET route goes here...

// POST route goes here...


routers.all('*', (req, res)=>{
    res.send('404. Page does not exist');
});


module.exports = routers;
