const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  itemID: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  description: { type: String },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
