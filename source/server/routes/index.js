const express = require('express');

const routes = express.Router();

const blogRoute = require('./blog');
const storeRoute = require('./store');

module.exports = () => {

    routes.get('/', (req,res,next) => {
        res.render('index');
    });

    routes.use('/blog', blogRoute());
    routes.use('/store', storeRoute());

    return routes;
};