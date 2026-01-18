const Mobile = require("../models/Mobile");

// Get all mobiles
exports.getAllMobiles = async (req, res) => {
  try {
    const mobiles = await Mobile.find();
    res.status(200).json({
      status: "success",
      results: mobiles.length,
      data: {
        mobiles,
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
    const mobile = await Mobile.findById(req.params.id);
    if (!mobile) {
      return res.status(404).json({
        status: "fail",
        message: "No mobile found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        mobile,
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
exports.createMobile = async (req, res) => {
  try {
    const newMobile = await Mobile.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        mobile: newMobile,
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
exports.updateMobile = async (req, res) => {
  try {
    const mobile = await Mobile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!mobile) {
      return res.status(404).json({
        status: "fail",
        message: "No mobile found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        mobile,
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
exports.deleteMobile = async (req, res) => {
  try {
    const mobile = await Mobile.findByIdAndDelete(req.params.id);
    if (!mobile) {
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
exports.getMobilesByCategory = async (req, res) => {
  try {
    const mobiles = await Mobile.find({ category: req.params.category });
    res.status(200).json({
      status: "success",
      results: mobiles.length,
      data: {
        mobiles,
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
exports.getMobilesBySubCategory = async (req, res) => {
  try {
    const mobiles = await Mobile.find({ subCategory: req.params.subCategory });
    res.status(200).json({
      status: "success",
      results: mobiles.length,
      data: {
        mobiles,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};