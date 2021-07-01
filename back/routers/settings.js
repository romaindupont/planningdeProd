const express = require('express');
const router = express.Router();
const settingsController = require('../controller/settings');

router.get('/settings/list', settingsController.findAll);
router.put('/settings/update/:id', settingsController.update);

module.exports = router;
