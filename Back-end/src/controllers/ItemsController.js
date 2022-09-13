const ItemsModel = require('../model/ItemsModel');

exports.CreateItem = (req, res) => {
  let itemBody = req.body;
  let id = req.params.id;

  console.log(itemBody, id, itemBody.addedById);

  if (id === itemBody.addedById) {
    console.log('id and addedById matched');
    ItemsModel.ItemsSchema.create(itemBody, (err, data) => {
      if (err) {
        res.status(400).json({ status: 'fail,', data: err });
      } else {
        console.log(data);
        res.status(200).json({ status: 'success,', data: data });
      }
    });
  } else {
    console.log('id and addedById did not match');
    res.status(400).json({ status: 'fail,', data: 'Not a proper user' });
  }
};

exports.GetAllItems = (req, res) => {
  const query = {};
  ItemsModel.ItemsSchema.find(query, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      // next line shows all event data
      // console.log(data);
      // res.status(200).json({ status: 'success,', data: data });
      res.send(data);
    }
  });
  // EventModel.GetEventData.fetchData((data) => {
  //   res.send(data);
  // });
};

exports.GetItemToUpdate = (req, res) => {
  let id = req.params.pID;
  console.log(id);
  ItemsModel.ItemsSchema.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      // next line shows all event data
      // console.log(data);
      // res.status(200).json({ status: 'success,', data: data });
      console.log(data);
      res.send(data);
    }
  });
  // EventModel.GetEventData.fetchData((data) => {
  //   res.send(data);
  // });
};

exports.DeleteItemID = (req, res) => {
  //itemId
  let id = req.params.id;
  console.log('ID to be deleted: ', id);

  ItemsModel.ItemsSchema.deleteOne({ _id: id }, (err, data) => {
    console.log('Schema delete', id);
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
  //console.log(id);
  // EventModel.DeleteEvent.delete((data) => {
  //   res.send(data);
  // });
  // EventModel.DeleteEvent.delete(id);
  // res.send(`ID to be deleted: ${id}`);
};
