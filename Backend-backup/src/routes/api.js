const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/ItemsController');
const MessageController = require('../controllers/MessageController');

router.get('/', (req, res) => {
  res.send('Hello jersey vandar');
});

//items routes
router.post('/addItems/:id', ItemsController.CreateItem);
router.get('/getAllItems', ItemsController.GetAllItems);
router.get('/getItemToUpdate/:pID', ItemsController.GetItemToUpdate);
router.post('/updateQuantity/:pID', ItemsController.UpdateQuantity);
router.post('/deleteItem/:id', ItemsController.DeleteItemID);

//message routes
router.post('/addMessage', MessageController.CreateMessage);
router.get('/allMessage', MessageController.GetAllMessage);
router.delete('/deleteAllMessage', MessageController.DeleteAllMessage);

module.exports = router;
