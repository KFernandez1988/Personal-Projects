const express = require('express');

const selectedItem = express.Router();


module.exports = () => {

    selectedItem.get('/:item', (req,res,next) => {
        res.render('store/selectedItem');
    });

    

    return selectedItem;
};