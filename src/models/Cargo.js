const {Schema, model} = require('mongoose');

const cargoSchema = new Schema({
    Nombre : {type : String, required : true, unique: true},
    Estado : {type : Boolean, required : true}
},{
    timestamps : true
});

module.exports = model('Cargo', cargoSchema);