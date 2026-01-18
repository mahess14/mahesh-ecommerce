const express = require('express');
const router = express.Router();
const KidsProduct = require('../models/kidsProducts');

// POST - Create new kids product
router.post('/', async (req, res) => {
  try {
    const product = new KidsProduct({
      id: req.body.id,
      name: req.body.name,
      category: req.body.category,
      subCategory: req.body.subCategory,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      sizes: req.body.sizes,
      colors: req.body.colors,
      ageGroup: req.body.ageGroup // Added kids-specific field
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ 
      error: err.message,
      details: err.errors 
    });
  }
});

// GET - All kids products with filtering
router.get('/', async (req, res) => {
  try {
    const { category, subCategory, minPrice, maxPrice, ageGroup } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (subCategory) filter.subCategory = subCategory;
    if (ageGroup) filter.ageGroup = ageGroup; // Kids-specific filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await KidsProduct.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Single kids product
router.get('/:id', async (req, res) => {
  try {
    const product = await KidsProduct.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH - Update kids product
router.patch('/:id', async (req, res) => {
  try {
    const product = await KidsProduct.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Remove kids product
router.delete('/:id', async (req, res) => {
  try {
    const product = await KidsProduct.findOneAndDelete({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
