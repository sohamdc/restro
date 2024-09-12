const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  reservationID: { type: String, required: true },
  tableNumber: { type: Number, required: true },
  reservationTime: { type: Date, required: true },
});

module.exports = mongoose.model("Reservation", reservationSchema);
