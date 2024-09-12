const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  receiptID: { type: String, required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Receipt", receiptSchema);
