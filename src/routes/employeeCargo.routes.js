const { Router } = require('express');
const router = Router();

const { add, list} = require('../controllers/employeeCargo.controller');

router.post('/add', add);
router.get('/list', list);

module.exports = router;