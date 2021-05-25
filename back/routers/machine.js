const express = require('express');
const router = express.Router();
const machineController = require('../controller/machine');

router.get('/machine', machineController.findAll);
/* router.put('/reglages/update', workingDayController.update); */

module.exports = router;
