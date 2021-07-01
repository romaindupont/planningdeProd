const express = require('express');
const router = express.Router();
const valorisationController = require('../controller/valorisation');

router.post('/valorisation/add', valorisationController.add);
router.get('/valorisation/list', valorisationController.findAll);
router.delete('/valorisation/delete/:id', valorisationController.delete);
router.put('/valorisation/update/:id', valorisationController.update);

module.exports = router;
