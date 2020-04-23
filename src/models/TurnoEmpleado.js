const {Schema, model} = require('mongoose');
const Empleado = model('Empleado');
const Turno = model('Turno');

const turnoEmpleado = new Schema({
    Empleado_ID: { type: Schema.ObjectId, ref: "Empleado" },
    Turno_ID   : { type: Schema.ObjectId, ref: "Turno" },
    Estado     : { type: Boolean, required : true}

});

module.exports = model('TurnoEmpleado', turnoEmpleado);