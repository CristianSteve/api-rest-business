const { Router } = require('express');
const router = Router();

const { add, update, list, error } = require('../controllers/cargo.controller');

router.post('/add', add);
router.put('/', update);
router.get('/', list);

module.exports = router;