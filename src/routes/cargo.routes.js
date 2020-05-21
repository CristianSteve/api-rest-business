const { Router } = require('express');
const router = Router();

const { add, update, list, error } = require('../controllers/cargo.controller');
const vfToken = require('../controllers/verifyController');             //Verificar Token

router.post('/add', vfToken, add);
router.put('/', vfToken, update);
router.get('/', vfToken, list);
router.get('*', vfToken, error);

module.exports = router;