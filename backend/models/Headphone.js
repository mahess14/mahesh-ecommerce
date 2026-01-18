const mongoose = require("mongoose");

const headphoneSchema = new mongoose.Schema({
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
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual property for category
headphoneSchema.virtual('category').get(function() {
  return 'Headphones';
});

module.exports = mongoose.model("Headphone", headphoneSchema);