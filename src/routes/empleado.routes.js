const { Router } = require('express');
const router = Router();

const { add, update, list, error } = require('../controllers/empleado.controller');
const { find } = require('../controllers/authController');
const vfToken = require('../controllers/verifyController');             //Verificar Token

router.post('/add', vfToken, add);
router.put('/', vfToken, update);
router.get('/', vfToken, list);
router.get('/login', find);

module.exports = router;