const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  inventoryID: { type: String, required: true },
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Inventory", inventorySchema);
