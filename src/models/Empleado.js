const {Schema, model} = require('mongoose');

const empleadoSchema = new Schema({
    DocIdent  : {type : String, require: true, unique: true},
    Nombre    : {type : String, require: true},
    Apellido  : {type : String, require: true},
    Telefono  : {type : String, require: true},
    Direccion : {type : String, require: true},
    Sexo      : {type : String, enum: ['M', 'F'], require: true},
    Estado    : {type : Boolean, require: true}
},{
    timestamps : true
});

module.exports = model('Empleado', empleadoSchema);