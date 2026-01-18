const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema({
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
  toJSON: { virtuals: true }  // Include virtuals in JSON output
});

// Virtual property for category
mensSchema.virtual('category').get(function() {
  return 'Men';
});

module.exports = mongoose.model("Men", mensSchema);  // Changed to singular "Men"