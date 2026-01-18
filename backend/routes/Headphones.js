const express = require('express');
const router = express.Router();
const Headphone = require('../models/Headphone'); // path may vary depending on your structure

// GET all headphones
router.get('/', async (req, res) => {
  try {
    const headphones = await Headphone.find();
    res.json(headphones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a headphone by ID
router.get('/:id', async (req, res) => {
  try {
    const headphone = await Headphone.findById(req.params.id);
    if (!headphone) return res.status(404).json({ message: 'Headphone not found' });
    res.json(headphone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new headphone
router.post('/', async (req, res) => {
  const newHeadphone = new Headphone(req.body);
  try {
    const saved = await newHeadphone.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a headphone by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Headphone.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Headphone not found' });
    res.json({ message: 'Headphone deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
