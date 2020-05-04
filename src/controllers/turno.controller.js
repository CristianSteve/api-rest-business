//Rutas del menu principal
const turnoCtrll = {};
const Empleado = require('../models/Turno');                         //Modelo de datos DB Turno


turnoCtrll.add = (req, res) => {
    res.json({message : "update OK"})
}

turnoCtrll.update = (req, res) => {
    res.json({message : "update OK"})
}

turnoCtrll.list = (req, res) => {
    res.json({message : "list OK"})
}

turnoCtrll.error = (req, res) => {
    res.status(404);
    res.json({message : "recurso no disponible"})

}

module.exports = turnoCtrll;