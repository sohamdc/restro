const express = require("express");
const router = express.Router();
const Inventory = require("../models/Inventory");

// Create inventory
router.post("/", async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all inventory
router.get("/", async (req, res) => {
  try {
    const inventories = await Inventory.find().populate("items.menuItem");
    res.json(inventories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get inventory by ID
router.get("/:id", async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id).populate(
      "items.menuItem"
    );
    if (!inventory)
      return res.status(404).json({ message: "Inventory not found" });
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update inventory
router.put("/:id", async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!inventory)
      return res.status(404).json({ message: "Inventory not found" });
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete inventory
router.delete("/:id", async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory)
      return res.status(404).json({ message: "Inventory not found" });
    res.json({ message: "Inventory deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
