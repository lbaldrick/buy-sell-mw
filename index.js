const express = require('express');
const app = express();
const apiRouter = require('./controllers/api');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/buysell', { useMongoClient: true });


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
