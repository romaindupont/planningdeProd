const express = require('express');
const router = express.Router();
const planningController = require('../controller/planning');

router.post('/planning/add', planningController.add);
router.post('/planning/add/several', planningController.add);
router.get('/planning', planningController.findAll);
router.put('/planning/update/:id', planningController.update);
router.delete('/planning/delete/:id', planningController.delete);
router.patch('/planning/start/:id', planningController.updateStartDate);
router.patch('/planning/end/:id', planningController.updateEndDate);
router.patch('/planning/quantity/:id', planningController.updateQuantity);
router.get('/planning/machine', planningController.find);
router.patch('/planning/progress/:id', planningController.updateProgress);
module.exports = router;
