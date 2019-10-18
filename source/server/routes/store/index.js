const express = require('express');

const store = express.Router();
const storeItemsRoute = require('./storeItems');


module.exports = () => {

    store.get('/', (req,res,next) => {
        res.render('store/store');
    });

    store.use('/storeItems', storeItemsRoute())
;
    return store;
};