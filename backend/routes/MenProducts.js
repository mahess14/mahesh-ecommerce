const express = require('express');
const router = express.Router();
const MenProduct = require('../models/MenProduct');

// POST - Create new men's product
router.post('/', async (req, res) => {
  try {
    const product = new MenProduct({
      id: req.body.id,
      name: req.body.name,
      category: req.body.category,
      subCategory: req.body.subCategory,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      sizes: req.body.sizes,
      colors: req.body.colors
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

// GET - All men's products with filtering
router.get('/', async (req, res) => {
  try {
    const { category, subCategory, minPrice, maxPrice } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (subCategory) filter.subCategory = subCategory;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await MenProduct.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Single men's product
router.get('/:id', async (req, res) => {
  try {
    const product = await MenProduct.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH - Update men's product
router.patch('/:id', async (req, res) => {
  try {
    const product = await MenProduct.findOneAndUpdate(
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

// DELETE - Remove men's product
router.delete('/:id', async (req, res) => {
  try {
    const product = await MenProduct.findOneAndDelete({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;