const WomenProduct = require('../models/WomenProduct');

// Get all women's products
exports.getAllWomenProducts = async (req, res) => {
  try {
    const womenProducts = await WomenProduct.find();
    res.status(200).json({
      status: "success",
      results: womenProducts.length,
      data: {
        womenProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get single women's product by ID
exports.getWomenProduct = async (req, res) => {
  try {
    const womenProduct = await WomenProduct.findById(req.params.id);
    if (!womenProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No women's product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        womenProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Create new women's product
exports.createWomenProduct = async (req, res) => {
  try {
    const newWomenProduct = await WomenProduct.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        womenProduct: newWomenProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update women's product
exports.updateWomenProduct = async (req, res) => {
  try {
    const womenProduct = await WomenProduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!womenProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No women's product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        womenProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete women's product
exports.deleteWomenProduct = async (req, res) => {
  try {
    const womenProduct = await WomenProduct.findByIdAndDelete(req.params.id);
    if (!womenProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No women's product found with that ID",
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

// Get women's products by category
exports.getWomenProductsByCategory = async (req, res) => {
  try {
    const womenProducts = await WomenProduct.find({ 
      category: { 
        $in: ['women', 'womens', 'women\'s'] 
      } 
    });
    res.status(200).json({
      status: "success",
      results: womenProducts.length,
      data: {
        womenProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get women's products by subcategory
exports.getWomenProductsBySubCategory = async (req, res) => {
  try {
    const womenProducts = await WomenProduct.find({ 
      subCategory: req.params.subCategory 
    });
    res.status(200).json({
      status: "success",
      results: womenProducts.length,
      data: {
        womenProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};