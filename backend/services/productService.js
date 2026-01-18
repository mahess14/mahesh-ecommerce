const Product = require('../models/Product');
const axios = require('axios'); // Recommended over fetch for Node.js

class ProductService {
  // ====================
  // Internal Methods
  // ====================
  static async _getRawProductById(productId) {
    return Product.findById(productId).lean();
  }

  static async _getProductsByCriteria(criteria, options = {}) {
    const { limit = 100, skip = 0, sort = { createdAt: -1 } } = options;
    return Product.find(criteria)
      .limit(limit)
      .skip(skip)
      .sort(sort)
      .lean();
  }

  static async _updateProductStock(productId, quantityChange) {
    return Product.findByIdAndUpdate(
      productId,
      { $inc: { stock: quantityChange } },
      { new: true }
    );
  }

  // ====================
  // Public Methods
  // ====================
  static async getPublicProductDetails(productId) {
    const product = await Product.findById(productId)
      .select('-__v -internalNotes -supplierInfo')
      .lean();
    
    if (!product) throw new Error('Product not found');
    return this._formatProductForPublic(product);
  }

  static async listPublicProducts(filter = {}, pagination = {}) {
    const { page = 1, limit = 10 } = pagination;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      Product.find(filter)
        .select('-__v -internalNotes -supplierInfo')
        .skip(skip)
        .limit(limit)
        .lean(),
      Product.countDocuments(filter)
    ]);

    return {
      data: products.map(this._formatProductForPublic),
      meta: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    };
  }

  // ====================
  // Category-Specific Methods
  // ====================
  static async getLaptopProducts() {
    try {
      const response = await axios.get('http://localhost:5000/api/products/category/laptops');
      return response.data;
    } catch (error) {
      console.error('Error fetching laptops:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch laptops');
    }
  }

  static async getHeadphoneProducts() {
    try {
      const response = await axios.get('http://localhost:5000/api/products/category/headphones');
      return response.data;
    } catch (error) {
      console.error('Error fetching headphones:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch headphones');
    }
  }

  // ====================
  // Helper Methods
  // ====================
  static _formatProductForPublic(product) {
    return {
      ...product,
      price: this._applyCurrencyFormat(product.price),
      sellingPrice: product.sellingPrice 
        ? this._applyCurrencyFormat(product.sellingPrice)
        : null,
      discount: product.sellingPrice
        ? Math.round(((product.price - product.sellingPrice) / product.price) * 100)
        : 0
    };
  }

  static _applyCurrencyFormat(amount) {
    return parseFloat(amount.toFixed(2));
  }
}

module.exports = ProductService;