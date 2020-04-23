const {Schema, model} = require('mongoose');

const barrioSchema = new Schema({
    Nombre : {type : String, require: true, unique: true},
    Sector : {type : String, require: true},
    Estado : {type : Boolean, require: true}
},{
    timestamps : true
});

module.exports = model('Barrio', barrioSchema);