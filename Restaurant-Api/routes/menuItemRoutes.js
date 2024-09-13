const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Create a new menu item
router.post("/", async (req, res) => {
  try {
    const { itemID, name, price, description } = req.body;

    // Create new menu item object
    const menuItem = new MenuItem({
      itemID,
      name,
      price,
      description
    });

    // Save the menu item to the database
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a menu item by ID
router.get("/:id", async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) return res.status(404).json({ message: "Menu item not found" });
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a menu item by ID
router.put("/:id", async (req, res) => {
  try {
    const { itemID, name, price, description } = req.body;

    // Update the menu item based on the provided fields
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      { itemID, name, price, description },
      { new: true, runValidators: true }
    );

    if (!updatedMenuItem) return res.status(404).json({ message: "Menu item not found" });
    res.json(updatedMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a menu item by ID
router.delete("/:id", async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) return res.status(404).json({ message: "Menu item not found" });
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
