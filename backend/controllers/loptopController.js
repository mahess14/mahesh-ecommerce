const Mobile = require("../models/Laptop");

// Get all mobiles
exports.getAllLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.status(200).json({
      status: "success",
      results: laptops.length,
      data: {
        laptops,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get a single mobile by ID
exports.getMobile = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) {
      return res.status(404).json({
        status: "fail",
        message: "No mobile found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        laptop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Create a new mobile
exports.createLaptop = async (req, res) => {
  try {
    const newLaptop = await Laptop.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        laptop: newLaptop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update a mobile
exports.updateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!laptop) {
      return res.status(404).json({
        status: "fail",
        message: "No mobile found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        laptop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete a mobile
exports.deleteLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndDelete(req.params.id);
    if (!laptop) {
      return res.status(404).json({
        status: "fail",
        message: "No mobile found with that ID",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Get mobiles by category
exports.getLaptopsByCategory = async (req, res) => {
  try {
    const laptops = await Laptop.find({ category: req.params.category });
    res.status(200).json({
      status: "success",
      results: laptops.length,
      data: {
        laptops,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get mobiles by subcategory
exports.getLaptopsBySubCategory = async (req, res) => {
  try {
    const laptops = await Laptop.find({ subCategory: req.params.subCategory });
    res.status(200).json({
      status: "success",
      results: Laptops.length,
      data: {
        laptops,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};