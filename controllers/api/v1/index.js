const express  = require('express');  
const v1Route   = new express.Router();
const search    = require('./search');
const account    = require('./account');

v1Route.use('/search', search);

v1Route.use('/account', account);

module.exports = v1Route;
