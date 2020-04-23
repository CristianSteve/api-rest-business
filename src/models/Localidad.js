const {Schema, model} = require('mongoose');
const Cardinalidad = model('Cardinalidad');
const Empleado = model('Empleado');

const locadlidaSchema = new Schema({
    Nombre : {type : String, require: true, unique: true},
    Estado : {type : Boolean, require: true},
    Empleado_ID: { type: Schema.ObjectId, ref: "Empleado" },
    Cardinalidad_ID: { type: Schema.ObjectId, ref: "Cardinalidad" },    
});

module.exports = model('Localidad', locadlidaSchema);