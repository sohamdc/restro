const mongoose = require("mongoose");

const cashierSchema = new mongoose.Schema({
  cashierID: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Cashier", cashierSchema);
