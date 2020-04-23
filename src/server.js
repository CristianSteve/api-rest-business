//Modules import
const express = require('express');
const path = require('path');
const morgan = require('morgan');
//const passport = require('passport');


//initializations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));  

//Global variables


//Routes


//static files


module.exports = app;