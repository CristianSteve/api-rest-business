// Variables de entorno
require('dotenv').config();

//Servidor

/*
require('./models/Barrio');
require('./models/Cardinalidad');
require('./models/Cargo');
require('./models/Empleado');
require('./models/Localidad');
require('./models/Turno');
require('./models/CargoEmpleado');
require('./models/TurnoEmpleado');
*/
const app = require('./server');
require('./database');


app.listen(app.get('port'), ()=> {
    console.log(`port up in ${app.get('port')}`);
});