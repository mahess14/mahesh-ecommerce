const express = require("express");
const router = express.Router();

// CREATE ORDER (NORMAL PAYMENT)
router.post("/create", async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod } = req.body;

    // basic validation
    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    if (!totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Total amount missing",
      });
    }

    // (OPTIONAL) Save to DB here later
    console.log("ORDER RECEIVED:");
    console.log("Items:", items);
    console.log("Total:", totalAmount);
    console.log("Payment:", paymentMethod);

    // success response
    res.status(200).json({
      success: true,
      message: "Order placed successfully",
      order: {
        items,
        totalAmount,
        paymentMethod,
        status: "PLACED",
        createdAt: new Date(),
      },
    });

  } catch (error) {
    console.error("ORDER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
