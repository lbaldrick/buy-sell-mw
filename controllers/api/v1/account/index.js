const accountRoute = require('express').Router();

accountRoute.get('/:username', (req, res) => {
    res.send('accounts');
});


module.exports = accountRoute;