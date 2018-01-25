const express  = require('express');  
const v1Route       = new express.Router();
const search    = require('./search');
const user    = require('./user');

v1Route.use('/search', search);

v1Route.use('/user', user);

module.exports = v1Route;
