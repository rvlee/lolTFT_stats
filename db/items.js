const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  logo: {
    src: String,
    alt: String,
  },
  type: String,
  connect: [Number],
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
