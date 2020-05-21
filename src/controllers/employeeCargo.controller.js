//Rutas del menu principal
const cargoEmployeeCtrll = {};
const CargoEmpleado = require('../models/CargoEmpleado');       //Modelo de datos DB CargoEmpleados
const Empleado = require('../models/Empleado');                 //Modelo de datos DB Empleados
const Cargo = require('../models/Cargo');                       //Modelo de datos DB Cargos


cargoEmployeeCtrll.add = (req, res) => {
    const { Empleado_ID, Cargo_ID } = req.body; 
    if(!(Empleado_ID && Cargo_ID)){
        res.json({message : "parametears incomplete"})
    }else{
        const cargoEmployee = new CargoEmpleado({
            Empleado_ID, Cargo_ID, Estado : true
        })
        cargoEmployee.save();
        res.json({message : "Add new employee to position"})
    }
}

cargoEmployeeCtrll.list = (req, res) => {
    CargoEmpleado.find({}, function(err, emp) {
        Empleado.populate(emp, {path: "Empleado_ID"},function(err, emp){
            Cargo.populate(emp, {path: "Cargo_ID"},function(err, emp){
                res.status(200).send(emp);
            });
        });
    })
};


module.exports = cargoEmployeeCtrll;