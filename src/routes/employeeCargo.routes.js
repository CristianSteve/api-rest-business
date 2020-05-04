const { Router } = require('express');
const router = Router();

const { add, list} = require('../controllers/employeeCargo.controller');
const vfToken = require('../controllers/verifyController');             //Verificar Token

router.post('/add', vfToken, add);
router.get('/list', vfToken, list);

module.exports = router;