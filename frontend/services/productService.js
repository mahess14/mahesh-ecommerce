import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const getMobileProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/mobiles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mobile products:', error);
    throw error;
  }
};

// In your productService.js file


// Enhanced fetch in productService.js
export const getLaptopProducts = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch('http://localhost:5000/api/products/category/laptops', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch laptops');
    }

    return await response.json();
  } catch (error) {
    const errorMsg = error.name === 'AbortError' 
      ? 'Request timed out' 
      : error.message || 'Network error';
    throw new Error(errorMsg);
  }

};
// In services/productService.js
export const getHeadphoneProducts = async () => {
  try {
    // Try multiple possible endpoints
    const endpoints = [
      '/api/products/category/headphones',
      '/api/products?category=headphone',
      '/api/products?category=earphones'
    ];
    
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) continue;
        
        const data = await response.json();
        // Additional filtering to ensure only headphones
        return data.filter(product => 
          product.category.toLowerCase().includes('headphone') || 
          product.category.toLowerCase().includes('earphone')
        );
      } catch (err) {
        console.error(`Failed with endpoint ${endpoint}`, err);
        continue;
      }
    }
    throw new Error('All endpoints failed to fetch headphones');
  } catch (err) {
    console.error('Error fetching headphones:', err);
    throw err;
  }
};


export const getMenProducts = async () => {
  try {
    const response = await fetch('/api/men-products');
    
    if (!response.ok) {
      throw new Error('Failed to fetch men\'s products');
    }
    
    const data = await response.json();
    
    // Handle both array and object responses
    const products = Array.isArray(data) ? data : (data.data?.products || data.data?.menProducts || []);
    
    // Additional filtering to ensure we only get men's products
    return products.filter(product => 
      product.category && 
      ['men', 'mens', 'men\'s', 'clothing', 'footwear', 'accessories', 'grooming']
        .some(cat => product.category.toLowerCase().includes(cat))
    );
  } catch (error) {
    console.error('Error fetching men\'s products:', error);
    throw error;
  }
};

export const getWomenProducts = async () => {
  try {
    const response = await fetch('/api/women-products');
    
    if (!response.ok) {
      throw new Error('Failed to fetch women\'s products');
    }
    
    const data = await response.json();
    
    // Handle both array and object responses
    const products = Array.isArray(data) ? data : (data.data?.products || data.data?.womenProducts || []);
    
    // Additional filtering to ensure we only get women's products
    return products.filter(product => 
      product.category && 
      ['women', 'womens', 'women\'s', 'clothing', 'footwear', 'accessories', 'beauty']
        .some(cat => product.category.toLowerCase().includes(cat))
    );
  } catch (error) {
    console.error('Error fetching women\'s products:', error);
    throw error;
  }
};



export const getKidsProducts = async () => {
  try {
    const response = await fetch('/api/kids-products');
    
    if (!response.ok) {
      throw new Error('Failed to fetch kids\' products');
    }
    
 
    
    
    
    // Additional filtering to ensure we only get kids' products
 
  } catch (error) {
    console.error('Error fetching kids\' products:', error);
    throw error;
  }
};
