//Rutas del menu principal
const cargoCtrll = {};
const Cargo = require('../models/Cargo');                         //Modelo de datos DB Turno


cargoCtrll.add = (req, res) => {
    const { Nombre, Descripcion } = req.body;
    if(!(Nombre && Descripcion)){
        res.json({message : "update wrong"})
    }else{
        const newCargo = new Cargo({
            Nombre, Descripcion, Estado : true
        });
        newCargo.save();
        res.json({message : "new cargo"})
    }
}

cargoCtrll.update = (req, res) => {
    res.json({message : "update OK"})
}

cargoCtrll.list = (req, res) => {
    res.json({message : "list OK"})
}

cargoCtrll.error = (req, res) => {
    res.status(404);
    res.json({message : "recurso no disponible"})

}

module.exports = cargoCtrll;