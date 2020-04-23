// Variables de entorno
require('dotenv').config();

//Servidor
const app = require('./server');
require('./database');

app.listen(app.get('port'), ()=> {
    console.log(`port up in ${app.get('port')}`);
});