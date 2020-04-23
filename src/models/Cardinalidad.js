const {Schema, model} = require('mongoose');

const cardinalidadSchema = new Schema({
    Nombre : {type : String, required : true, unique: true},
    Descripcion: String,
    Estado : {type : Boolean, required : true}
});

module.exports = model('Cardinalidad', cardinalidadSchema);