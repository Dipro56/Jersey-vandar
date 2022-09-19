const MessageModel = require('../model/MessageModel');

exports.CreateMessage = (req, res) => {
  let messageBody = req.body;
  MessageModel.MessageSchema.create(messageBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};

exports.GetAllMessage = (req, res) => {
  const query = {};
  MessageModel.MessageSchema.find(query, (err, data) => {
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

exports.DeleteAllMessage = (req, res) => {
  MessageModel.MessageSchema.deleteMany({}, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};
