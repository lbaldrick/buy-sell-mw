const searchRoute = require('express').Router();

searchRoute.get('/:queryId', (req, res, next) => {
    // here we can access the req.params object and make auth checks
    res.send('search');
});


module.exports = searchRoute;
