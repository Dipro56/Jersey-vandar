const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/ItemsController');

router.get('/', (req, res) => {
  res.send('Hello jersey vandar');
});

//items routes
router.post('/addItems/:id', ItemsController.CreateItem);
router.get('/getAllItems', ItemsController.GetAllItems);

module.exports = router;
