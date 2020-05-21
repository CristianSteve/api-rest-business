const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    const token = req.headers['token-user'];
    if(!token)
        return res.status(401).json({message : 'usuario no autorizado'});
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded)=> {
        if(err){
           return res.status(401).json({message : 'usuario no autorizado'});
        }
        req.userId = decoded.id;
        next();
    });

}

module.exports = verifyToken;