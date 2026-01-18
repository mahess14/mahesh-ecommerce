const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getUserOrders,
} = require("../controllers/orderController");

// Place order
router.post("/", createOrder);

// Admin - all orders
router.get("/", getAllOrders);

// User orders
router.get("/user/:userId", getUserOrders);

module.exports = router;
