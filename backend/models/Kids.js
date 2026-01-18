const mongoose = require("mongoose");

const kidsSchema = new mongoose.Schema({
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
  toJSON: { virtuals: true },  // Include virtuals in JSON output
  toObject: { virtuals: true } // Include virtuals when converting to objects
});

// Virtual property for category
kidsSchema.virtual('category').get(function() {
  return 'Kids';
});

module.exports = mongoose.model("Kid", kidsSchema);  // Changed to singular "Kid" (Mongoose convention)