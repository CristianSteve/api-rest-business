//Rutas del menu principal
const employeeCtrll = {};
const Empleado = require('../models/Empleado');                         //Modelo de datos DB Empleados


employeeCtrll.add = (req, res) => {
    const { DocIdent, Nombre, Apellido,
            Telefono, Direccion, Sexo 
        } = req.body; 
        
    if(!(DocIdent && Nombre && Apellido && Telefono && Direccion && Sexo)){
        res.json({message : "parameters incomplete"})
    }else{
        const employee = new Empleado({
            DocIdent, Nombre, Apellido,
            Telefono, Direccion, Sexo, Estado : true
        })
        employee.save();
        res.json({message : "Add new employee","Usuario": Nombre})
    }
}

employeeCtrll.update = async (req, res) => {
    const { DocIdent, Nombre, Apellido,
        Telefono, Direccion, Sexo 
    } = req.body; 
    if(!(DocIdent && Nombre && Apellido && Telefono && Direccion && Sexo)){
        res.status(404).json({message : "parameters incomplete"});
    }

    await Empleado.findByIdAndUpdate(req.userId,{DocIdent, Nombre, Apellido, Direccion, Sexo, Telefono}); 
    res.json({message : "Update OK", "Documento" : DocIdent, "User" : Nombre});
}

employeeCtrll.list = async (req, res) => {
    const employee = await Empleado.find().lean();             //Transforma objeto JSON legible 
    res.json(employee)
}

employeeCtrll.error = (req, res) => {
    res.status(404);
    res.json({message : "recurso no disponible"})

}

module.exports = employeeCtrll;