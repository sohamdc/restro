const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerID: { type: String, required: true },
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
});

module.exports = mongoose.model("Customer", customerSchema);
