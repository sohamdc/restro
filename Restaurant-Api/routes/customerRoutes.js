const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new customer
router.post("/", async (req, res) => {
  const customer = new Customer({
    customerID: req.body.customerID,
    name: req.body.name,
    contactInfo: req.body.contactInfo,
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
