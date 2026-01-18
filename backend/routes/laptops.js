const express = require('express');
const router = express.Router();
const Headphone = require('../models/Headphone'); // Assuming you have a Headphone model

// POST - Create new headphone
router.post('/', async (req, res) => {
  try {
    const headphone = new Headphone({
      id: req.body.id,
      name: req.body.name,
      category: req.body.category,
      subCategory: req.body.subCategory,
      price: req.body.price,
      image: req.body.image
    });

    const savedHeadphone = await headphone.save();
    res.status(201).json(savedHeadphone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - All headphones
router.get('/', async (req, res) => {
  try {
    const headphones = await Headphone.find();
    res.json(headphones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Single headphone
router.get('/:id', getHeadphone, (req, res) => {
  res.json(res.headphone);
});

// Middleware to get headphone by ID
async function getHeadphone(req, res, next) {
  let headphone;
  try {
    headphone = await Headphone.findById(req.params.id);
    if (headphone == null) {
      return res.status(404).json({ message: 'Headphone not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  
  res.headphone = headphone;
  next();
}

module.exports = router;