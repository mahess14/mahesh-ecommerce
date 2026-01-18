const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true
  },
  subCategory: {
    type: String,
    required: [true, "Sub-category is required"],
    trim: true
  },
  image: {
    type: String,
    required: [true, "Image URL is required"],
    trim: true
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be positive"]
  },
  specs: {  // Example of additional laptop-specific fields
    type: Map,
    of: String
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true }  // Include virtuals when converting to JSON
});

// Virtual property for category
laptopSchema.virtual('category').get(function() {
  return 'Laptops';
});

module.exports = mongoose.model("Laptop", laptopSchema);