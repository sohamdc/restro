const express = require("express");
const router = express.Router();
const Manager = require("../models/Manager");

// Create a manager
router.post("/", async (req, res) => {
  try {
    const manager = new Manager(req.body);
    await manager.save();
    res.status(201).json(manager);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all managers
router.get("/", async (req, res) => {
  try {
    const managers = await Manager.find();
    res.json(managers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a manager by ID
router.get("/:id", async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);
    if (!manager) return res.status(404).json({ message: "Manager not found" });
    res.json(manager);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a manager
router.put("/:id", async (req, res) => {
  try {
    const manager = await Manager.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!manager) return res.status(404).json({ message: "Manager not found" });
    res.json(manager);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a manager
router.delete("/:id", async (req, res) => {
  try {
    const manager = await Manager.findByIdAndDelete(req.params.id);
    if (!manager) return res.status(404).json({ message: "Manager not found" });
    res.json({ message: "Manager deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
