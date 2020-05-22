const { Router } = require('express');
const router = Router();

const { add, list, error } = require('../controllers/barrio.controller');
const vfToken = require('../controllers/verifyController');             //Verificar Token

router.post('/add', vfToken, add);
router.get('/', vfToken, list);
router.get('*', vfToken, error);

module.exports = router;