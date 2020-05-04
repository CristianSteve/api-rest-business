const authController = {};
const jwt = require('jsonwebtoken');
const Empleado = require('../models/Empleado');                         //Modelo de datos DB Empleados


authController.find = async (req, res) => {
    const id = req.query.id;
    if (!id)
        res.status(409).json({ message: 'parametros obligatorios no informados' })
    const user = await Empleado.findOne({ DocIdent: id });
    if (user.length == 0)
        res.status(404).res.json({ message: 'user no found' })
    const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, {
        expiresIn: 15
    });
    res.json({ Nombre: user.Nombre, Apellido: user.Apellido, token });

}

module.exports = authController;
