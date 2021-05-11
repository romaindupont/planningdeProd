const express = require('express');
const router = express.Router();
const workingDayController = require('../controller/workingDay');

router.get('/reglages/all', workingDayController.findAll);
router.put('/reglages/update', workingDayController.update);

module.exports = router;
