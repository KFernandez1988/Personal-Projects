const express = require('express');
const path = require('path');


const app = express();

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/'));
app.use(express.static('static'));
app.use('/', routes());


let port = process.env.Port || 3000;
app.listen(port, () => {
  console.log(port)
});


module.exports = app;