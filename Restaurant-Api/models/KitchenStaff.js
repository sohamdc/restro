const mongoose = require("mongoose");

const kitchenStaffSchema = new mongoose.Schema({
  staffID: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("KitchenStaff", kitchenStaffSchema);
