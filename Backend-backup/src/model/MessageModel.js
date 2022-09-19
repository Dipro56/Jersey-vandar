const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    dateAndTime: { type: String },
    description: { type: String },
  },
  { versionKey: false }
);

const MessageSchema = mongoose.model('Message', DataSchema);

module.exports = {
  MessageSchema,
};
