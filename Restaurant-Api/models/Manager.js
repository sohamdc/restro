const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  managerID: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Manager", managerSchema);
