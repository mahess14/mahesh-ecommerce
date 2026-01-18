const express = require("express");
const router = express.Router();

// Import all models
const Mobile = require("../models/Mobile");
const Laptop = require("../models/Laptop");
const Headphone = require("../models/Headphone");
const Men = require("../models/Men");
const Women = require("../models/Women");
const Kids = require("../models/Kids");

const modelMap = {
  Mobiles: Mobile,
  Laptops: Laptop,
  Headphones: Headphone,
  Men: Men,
  Women: Women,
  Kids: Kids,
};

// GET all products or filtered by category
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    if (!category || category === "All") {
      const allProducts = await Promise.all(
        Object.values(modelMap).map(model => model.find())
      );
      return res.json(allProducts.flat());
    }

    const Model = modelMap[category];
    if (!Model) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const products = await Model.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new product
router.post("/", async (req, res) => {
  try {
    const { category, ...productData } = req.body;

    // Validate required fields
    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const Model = modelMap[category];
    if (!Model) {
      return res.status(400).json({ error: "Invalid category" });
    }

    // Validate required product fields
    if (!productData.name || !productData.price) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    const newProduct = new Model(productData);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }





  // POST new product
router.post("/", async (req, res) => {
  try {
    const { category, ...productData } = req.body;

    // If using virtual categories (recommended approach)
    const Model = modelMap[category];
    if (!Model) {
      return res.status(400).json({ error: "Invalid category" });
    }

    // Validate required product fields
    const requiredFields = ['name', 'subCategory', 'image', 'price'];
    for (const field of requiredFields) {
      if (!productData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const newProduct = new Model(productData);
    const savedProduct = await newProduct.save();
    
    // Include virtuals in the response
    const productWithVirtuals = savedProduct.toObject({ virtuals: true });
    res.status(201).json(productWithVirtuals);
  } catch (err) {
    res.status(400).json({ 
      error: "Validation failed",
      details: err.message 
    });
  }
});



// POST new product
router.post("/", async (req, res) => {
  try {
    const { category, ...productData } = req.body;

    // Validate category exists in request
    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const Model = modelMap[category];
    if (!Model) {
      return res.status(400).json({ error: "Invalid category" });
    }

    // Validate required product fields
    const requiredFields = ['name', 'subCategory', 'image', 'price'];
    for (const field of requiredFields) {
      if (!productData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    const newProduct = new Model(productData);
    const savedProduct = await newProduct.save();
    
    // Include virtuals in the response
    const productWithVirtuals = savedProduct.toObject({ virtuals: true });
    res.status(201).json(productWithVirtuals);
  } catch (err) {
    res.status(400).json({ 
      error: "Validation failed",
      details: err.message 
    });
  }
});
});

module.exports = router;