const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
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
  specs: {
    type: Map,
    of: String
  }
}, { 
  timestamps: true,
  // Auto-set category to "Mobiles" for all documents
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual property for category
mobileSchema.virtual('category').get(function() {
  return 'Mobiles';
});

module.exports = mongoose.model("Mobile", mobileSchema);