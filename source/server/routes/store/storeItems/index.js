const express = require('express');

const storeItems = express.Router();
const selectedItemRoute = require('./selectedItem');


module.exports = () => {

    storeItems.get('/', (req,res,next) => {
        res.render('store/storeItems');
    });

    storeItems.use('/selectedItem', selectedItemRoute());

    return storeItems;
};