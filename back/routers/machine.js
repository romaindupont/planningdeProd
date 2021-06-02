const express = require('express');
const router = express.Router();
const machineController = require('../controller/machine');

router.get('/machine', machineController.findAll);
router.put('/machine/update/:id', machineController.update);
router.delete('/machine/delete/:id', machineController.delete);
router.post('/machine/add', machineController.add);

module.exports = router;
