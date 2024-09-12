const express = require("express");
const router = express.Router();
const KitchenStaff = require("../models/KitchenStaff");

// Create kitchen staff
router.post("/", async (req, res) => {
  try {
    const staff = new KitchenStaff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all kitchen staff
router.get("/", async (req, res) => {
  try {
    const staff = await KitchenStaff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get kitchen staff by ID
router.get("/:id", async (req, res) => {
  try {
    const staff = await KitchenStaff.findById(req.params.id);
    if (!staff)
      return res.status(404).json({ message: "Kitchen staff not found" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update kitchen staff
router.put("/:id", async (req, res) => {
  try {
    const staff = await KitchenStaff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!staff)
      return res.status(404).json({ message: "Kitchen staff not found" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete kitchen staff
router.delete("/:id", async (req, res) => {
  try {
    const staff = await KitchenStaff.findByIdAndDelete(req.params.id);
    if (!staff)
      return res.status(404).json({ message: "Kitchen staff not found" });
    res.json({ message: "Kitchen staff deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
