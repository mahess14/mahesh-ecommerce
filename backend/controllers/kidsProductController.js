const KidsProduct = require("../models/KidsProduct");

// Get all kids' products
exports.getAllKidsProducts = async (req, res) => {
  try {
    const kidsProducts = await KidsProduct.find();
    res.status(200).json({
      status: "success",
      results: kidsProducts.length,
      data: {
        kidsProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get a single kids' product by ID
exports.getKidsProduct = async (req, res) => {
  try {
    const kidsProduct = await KidsProduct.findById(req.params.id);
    if (!kidsProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No kids' product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        kidsProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Create a new kids' product
exports.createKidsProduct = async (req, res) => {
  try {
    const newKidsProduct = await KidsProduct.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        kidsProduct: newKidsProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update a kids' product
exports.updateKidsProduct = async (req, res) => {
  try {
    const kidsProduct = await KidsProduct.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!kidsProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No kids' product found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        kidsProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete a kids' product
exports.deleteKidsProduct = async (req, res) => {
  try {
    const kidsProduct = await KidsProduct.findByIdAndDelete(req.params.id);
    if (!kidsProduct) {
      return res.status(404).json({
        status: "fail",
        message: "No kids' product found with that ID",
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

// Get kids' products by category
exports.getKidsProductsByCategory = async (req, res) => {
  try {
    const kidsProducts = await KidsProduct.find({ 
      category: { 
        $in: ['kids', 'children', 'child', 'kid\'s', 'children\'s'] 
      } 
    });
    res.status(200).json({
      status: "success",
      results: kidsProducts.length,
      data: {
        kidsProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get kids' products by subcategory
exports.getKidsProductsBySubCategory = async (req, res) => {
  try {
    const kidsProducts = await KidsProduct.find({ 
      subCategory: req.params.subCategory 
    });
    res.status(200).json({
      status: "success",
      results: kidsProducts.length,
      data: {
        kidsProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get kids' products by age group
exports.getKidsProductsByAgeGroup = async (req, res) => {
  try {
    const kidsProducts = await KidsProduct.find({ 
      ageGroup: req.params.ageGroup 
    });
    res.status(200).json({
      status: "success",
      results: kidsProducts.length,
      data: {
        kidsProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};