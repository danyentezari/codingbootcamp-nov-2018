const express = require('express');
const routers = express.Router();

routers.get('/', (req, res)=>{
    res.render('index', {
        pagename: "HOOOME"
    });
});

routers.get('/about-page', (req, res)=>{
    res.send("Welcome to the About Page");
});

routers.all('*', (req, res)=>{
    res.send('404. Page does not exist');
});


module.exports = routers;
