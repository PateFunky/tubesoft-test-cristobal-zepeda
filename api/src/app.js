const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//importing routes 
const records = require('./routes/records')


const app = express();


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
//routes

app.use('/',records);

module.exports = app;