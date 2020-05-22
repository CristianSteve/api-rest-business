//Rutas del menu principal
const neighborhoodCtrll = {};
const Barrio = require('../models/Barrio');                         //Modelo de datos DB Barrio


neighborhoodCtrll.add = (req, res) => {
    const { Nombre, Sector } = req.body;
    if(!(Nombre && Sector)){
        res.json({message : "parameters not informed"})
    }else{
        const newNeighborhoodCtrll = new Barrio({
            Nombre, Sector, Estado : true
        });
        newNeighborhoodCtrll.save();
        res.json({message : "New Neighborhood created", Nombre})
    }
}

neighborhoodCtrll.list = async (req, res) => {
    const newNeighborhoodCtrll = await Barrio.find().lean();         //Transforma objeto JSON legible 
    res.json(newNeighborhoodCtrll);
}

neighborhoodCtrll.error = (req, res) => {
    res.status(404);
    res.json({message : "recurso no disponible"})

}

module.exports = neighborhoodCtrll;