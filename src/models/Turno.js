const {Schema, model} = require('mongoose');

const turnoSchema = new Schema({
    Descripcion : {type : String, require: true, unique: true},
    Hora_Inicio : {type : String, require: true},
    Hora_Fin    : {type : String, require: true},
    Jornada     : {type : String, require: true},
    Estado      : {type : Boolean, require: true}
});

module.exports = model('Turno', turnoSchema);