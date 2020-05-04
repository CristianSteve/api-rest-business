//Modules import
const express = require('express');
const morgan = require('morgan');
//const passport = require('passport');


//initializations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));  
app.use(express.urlencoded({extended: false}));            //Leer formatos tipo JSON
app.use(express.json());

//Global variables


//Routes
app.use('/employee', require('./routes/empleado.routes'));
app.use('/cargo', require('./routes/cargo.routes'));
app.use('/employee/cargo', require('./routes/employeeCargo.routes'));
//static files


module.exports = app;