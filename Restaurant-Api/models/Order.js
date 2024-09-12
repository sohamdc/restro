const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  orderStatus: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
});

module.exports = mongoose.model("Order", orderSchema);
