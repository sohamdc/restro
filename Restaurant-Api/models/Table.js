const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  seats: { type: Number, required: true },
  status: {
    type: String,
    enum: ["available", "reserved", "occupied"],
    default: "available",
  },
});

module.exports = mongoose.model("Table", tableSchema);
