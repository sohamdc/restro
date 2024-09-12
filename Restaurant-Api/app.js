const express = require("express");
const connectDB = require("./config/db");

// Import Routes
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const tableRoutes = require("./routes/tableRoutes");
const kitchenStaffRoutes = require("./routes/kitchenStaffRoutes");
const cashierRoutes = require("./routes/cashierRoutes");
const managerRoutes = require("./routes/managerRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/customers", customerRoutes); // Customer routes
app.use("/api/orders", orderRoutes); // Order routes
app.use("/api/reservations", reservationRoutes); // Reservation routes
app.use("/api/tables", tableRoutes); // Table routes
app.use("/api/kitchenstaff", kitchenStaffRoutes); // Kitchen staff routes
app.use("/api/cashiers", cashierRoutes); // Cashier routes
app.use("/api/managers", managerRoutes); // Manager routes
app.use("/api/inventory", inventoryRoutes); // Inventory routes

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Restaurant API");
});

// Handle undefined routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status(404).json({ message: error.message });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Error");
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
