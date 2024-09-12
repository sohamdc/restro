const express = require("express");
const router = express.Router();
const Cashier = require("../models/Cashier");

// Create a cashier
router.post("/", async (req, res) => {
  try {
    const cashier = new Cashier(req.body);
    await cashier.save();
    res.status(201).json(cashier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all cashiers
router.get("/", async (req, res) => {
  try {
    const cashiers = await Cashier.find();
    res.json(cashiers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a cashier by ID
router.get("/:id", async (req, res) => {
  try {
    const cashier = await Cashier.findById(req.params.id);
    if (!cashier) return res.status(404).json({ message: "Cashier not found" });
    res.json(cashier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a cashier
router.put("/:id", async (req, res) => {
  try {
    const cashier = await Cashier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cashier) return res.status(404).json({ message: "Cashier not found" });
    res.json(cashier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a cashier
router.delete("/:id", async (req, res) => {
  try {
    const cashier = await Cashier.findByIdAndDelete(req.params.id);
    if (!cashier) return res.status(404).json({ message: "Cashier not found" });
    res.json({ message: "Cashier deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
