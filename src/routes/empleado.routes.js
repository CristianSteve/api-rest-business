const { Router } = require('express');
const router = Router();

const { add, update, list, error } = require('../controllers/empleado.controller');
const { find } = require('../controllers/authController');
const vfToken = require('../controllers/verifyController');             //Verificar Token

router.get('/login', find);                           //Crea Token del empleado
router.post('/add', vfToken, add);                    //Crea nuevos Empleados
router.put('/', vfToken, update);                     //Modifica Empleados
router.get('/', vfToken, list);                       //Lista Empleados
//router.get('/*', error);                            //Recursos no encontrados

module.exports = router;