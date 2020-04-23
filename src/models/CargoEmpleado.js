const {Schema, model} = require('mongoose');
const Cargo = model('Cargo');
const Empleado = model('Empleado');

const cargoEpleadoSchema = new Schema({
    Estado     : { type : Boolean, required : true},
    Empleado_ID: { type: Schema.ObjectId, ref: "Empleado" },
    Cargo_ID   : { type: Schema.ObjectId, ref: "Cargo" } 
},{
    timestamps : true
});

module.exports = model('CargoEmpleado', cargoEpleadoSchema);