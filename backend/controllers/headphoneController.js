const Headphone = require("../models/Headphone");

// Get all headphones
exports.getAllHeadphones = async (req, res) => {
  try {
    const headphones = await Headphone.find();
    res.status(200).json({
      status: "success",
      results: headphones.length,
      data: {
        headphones,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get a single headphone by ID
exports.getHeadphone = async (req, res) => {
  try {
    const headphone = await Headphone.findById(req.params.id);
    if (!headphone) {
      return res.status(404).json({
        status: "fail",
        message: "No headphone found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        headphone,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Create a new headphone
exports.createHeadphone = async (req, res) => {
  try {
    const newHeadphone = await Headphone.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        headphone: newHeadphone,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update a headphone
exports.updateHeadphone = async (req, res) => {
  try {
    const headphone = await Headphone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!headphone) {
      return res.status(404).json({
        status: "fail",
        message: "No headphone found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        headphone,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete a headphone
exports.deleteHeadphone = async (req, res) => {
  try {
    const headphone = await Headphone.findByIdAndDelete(req.params.id);
    if (!headphone) {
      return res.status(404).json({
        status: "fail",
        message: "No headphone found with that ID",
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

// Get headphones by category
exports.getHeadphonesByCategory = async (req, res) => {
  try {
    const headphones = await Headphone.find({ 
      category: { 
        $in: ['headphones', 'headphone', 'earphones', 'earphone'] 
      } 
    });
    res.status(200).json({
      status: "success",
      results: headphones.length,
      data: {
        headphones,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get headphones by subcategory
exports.getHeadphonesBySubCategory = async (req, res) => {
  try {
    const headphones = await Headphone.find({ 
      subCategory: req.params.subCategory 
    });
    res.status(200).json({
      status: "success",
      results: headphones.length,
      data: {
        headphones,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};