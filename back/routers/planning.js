const express = require('express');
//const auth = require('../middlewares/auth');
const router = express.Router();
const planningController = require('../controller/planning');

router.post('/planning/add', planningController.add);
router.post('/planning/add/several', planningController.add);
router.get('/planning', planningController.findAll);
router.put('/planning/update/:id', planningController.update);
router.delete('/planning/delete/:id', planningController.delete);


module.exports = router;
