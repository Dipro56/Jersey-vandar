const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    itemName: { type: String },
    category: { type: String },
    price: { type: String },
    quantity: { type: String },
    imageURL: { type: String },
    addedById: { type: String },
    addedByEmail: { type: String },
    description: { type: String },
  },
  { versionKey: false }
);

const ItemsSchema = mongoose.model('Items', DataSchema);

module.exports = {
  ItemsSchema,
};
