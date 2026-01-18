const MenProduct = require("../models/MenProduct");

// Get all men's products
exports.getAllMenProducts = async (req, res) => {
  try {
    const menProducts = await MenProduct.find();
    res.status(200).json({
      status: "success",
      results: menProducts.length,
      data: {
        menProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get a single men's product by ID
exports.getMenProduct = async (req, res) => {
  try {
    const menProduct = await MenProduct.findById(req.params.id);
    if (!menProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No men's product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        menProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Create a new men's product
exports.createMenProduct = async (req, res) => {
  try {
    const newMenProduct = await MenProduct.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        menProduct: newMenProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update a men's product
exports.updateMenProduct = async (req, res) => {
  try {
    const menProduct = await MenProduct.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!menProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No men's product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        menProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete a men's product
exports.deleteMenProduct = async (req, res) => {
  try {
    const menProduct = await MenProduct.findByIdAndDelete(req.params.id);
    if (!menProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No men's product found with that ID",
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

// Get men's products by category
exports.getMenProductsByCategory = async (req, res) => {
  try {
    const menProducts = await MenProduct.find({ 
      category: { 
        $in: ['men', 'mens', 'men\'s'] 
      } 
    });
    res.status(200).json({
      status: "success",
      results: menProducts.length,
      data: {
        menProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get men's products by subcategory
exports.getMenProductsBySubCategory = async (req, res) => {
  try {
    const menProducts = await MenProduct.find({ 
      subCategory: req.params.subCategory 
    });
    res.status(200).json({
      status: "success",
      results: menProducts.length,
      data: {
        menProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};