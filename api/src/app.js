const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//importing routes 
const records = require('./routes/records')


const app = express();


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes

app.use('/',records);

module.exports = app;