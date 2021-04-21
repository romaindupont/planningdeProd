const express = require('express');
//const auth = require('../middlewares/auth');
const router = express.Router();
const planningController = require('../controller/planning');

router.post('/planning/add', planningController.add);
router.get('/planning', planningController.findAll);
/* router.delete('/delete/:id', articlesController.delete);
router.put('update/:id', articlesController.update); */

module.exports = router;
