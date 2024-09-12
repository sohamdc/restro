const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

// Create a table
router.post("/", async (req, res) => {
  try {
    const table = new Table(req.body);
    await table.save();
    res.status(201).json(table);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all tables
router.get("/", async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a table by number
router.get("/:tableNumber", async (req, res) => {
  try {
    const table = await Table.findOne({ tableNumber: req.params.tableNumber });
    if (!table) return res.status(404).json({ message: "Table not found" });
    res.json(table);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a table's status
router.put("/:tableNumber", async (req, res) => {
  try {
    const table = await Table.findOneAndUpdate(
      { tableNumber: req.params.tableNumber },
      req.body,
      { new: true }
    );
    if (!table) return res.status(404).json({ message: "Table not found" });
    res.json(table);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a table
router.delete("/:tableNumber", async (req, res) => {
  try {
    const table = await Table.findOneAndDelete({
      tableNumber: req.params.tableNumber,
    });
    if (!table) return res.status(404).json({ message: "Table not found" });
    res.json({ message: "Table deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
