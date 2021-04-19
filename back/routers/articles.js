const express = require('express');
//const auth = require('../middlewares/auth');
const router = express.Router();
const articlesController = require('../controller/articles');

/* router.get('/category/:id', questionController.findSome);*/

router.post('/add', articlesController.add);
router.get('/articles', articlesController.findAll);
router.delete('/delete/:id', articlesController.delete);
router.put('update/:id', articlesController.update);

module.exports = router;
