'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var user_routes = require('./routes/user');


// calling the routes
app.use('/api', user_routes);



module.exports = app;