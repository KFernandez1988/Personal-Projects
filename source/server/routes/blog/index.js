const express = require('express');

const blog = express.Router();


module.exports = () => {

    blog.get('/', (req,res,next) => {
        res.send('testing blog');
    });

    blog.get('/:title', (req, res, next) => {
        
        res.send(`${req.params.title} is good`);
    });

    return blog;
};