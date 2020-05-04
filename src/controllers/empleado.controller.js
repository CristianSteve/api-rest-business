//Rutas del menu principal
const employeeCtrll = {};
const Empleado = require('../models/Empleado');                         //Modelo de datos DB Empleados


employeeCtrll.add = (req, res) => {
    const { DocIdent, Nombre, Apellido,
            Telefono, Direccion, Sexo 
        } = req.body; 
        
    if(!(DocIdent && Nombre && Apellido && Telefono && Direccion && Sexo)){
        res.json({message : "parameaaaters incomplete"})
    }else{
        const employee = new Empleado({
            DocIdent, Nombre, Apellido,
            Telefono, Direccion, Sexo, Estado : true
        })
        employee.save();
        res.json({message : "add new employee"})
    }
}

employeeCtrll.update = (req, res) => {
    res.json({message : "update OK"})
}

employeeCtrll.list = (req, res) => {
    res.json({message : "list OK"})
}

employeeCtrll.error = (req, res) => {
    res.status(404);
    res.json({message : "recurso no disponible"})

}

module.exports = employeeCtrll;