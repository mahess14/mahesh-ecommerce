const mongoose = require('mongoose');
const path = require('path');

// Import models with proper file paths and consistent naming
const Laptop = require(path.join(__dirname, 'models', 'Laptop'));
const Headphones = require(path.join(__dirname, 'models', 'Headphone'));
const Mobile = require(path.join(__dirname, 'models', 'Mobile'));
const KidsProducts = require(path.join(__dirname, 'models', 'KidsProducts'));
const MenProducts = require(path.join(__dirname, 'models', 'MenProduct'));
const WomenProducts = require(path.join(__dirname, 'models', 'WomenProduct'));
const Product = require(path.join(__dirname, 'models', 'Product'));

// Sample data for each category
const sampleLaptops = [
 {
  id: '1',
  name: 'laptop',
  category: 'Laptops ',
  subCategory: '   Electronics',
  image: 'https://m.media-amazon.com/images/I/41P1ajefmXL._SX300_SY300_QL70_FMwebp_.jpg',
  price: 99.99,
 }
];

const sampleHeadphones = [
{
  id: 1,
  name: "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
  price: 699,
  image: "https://m.media-amazon.com/images/I/61XBkWmmQeL._SX466_.jpg",
  subCategory: "Electronics", 
category: "Headphones",
},

];

const sampleMobiles = [
  {
  id: 1,
  name: "OnePlus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
  price: 22980,
  image: "https://m.media-amazon.com/images/I/61g1pqSjAhL._SX569_.jpg",
  subCategory: "Electronics", 
  category: "Mobiles",
}

];

const sampleMenProducts = [
  {
    id: '1',
    name: 'Men\'s Casual Shirt',
    category: 'men', // Using valid enum value
    subCategory: 'shirts',
    price: 29.99,
    image: 'shirt.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['blue', 'white', 'black']
  },
  {
    id: 'm2',
    name: 'Men\'s Running Shoes',
    category: 'footwear', // Using valid enum value
    subCategory: 'sneakers',
    price: 79.99,
    image: 'shoes.jpg',
    sizes: ['8', '9', '10', '11'],
    colors: ['black', 'white']
  }
];

const sampleWomenProducts = [
  {
    "id": "1",
    "name": "Women's Summer Dress",
    "category": "clothing",
    "subCategory": "dresses",
    "price": 49.99,
    "image": "https://example.com/dress.jpg",
    "description": "Lightweight summer dress",
    "sizes": ["S", "M", "L"],
    "colors": ["blue", "white"]
  }

  

];

const sampleKidsProducts = [
  {

  
  id: 1,
  name: "Kids T-Shirt. size-L",
  price: 499,
  image: "https://m.media-amazon.com/images/I/51uEH9EVPFL._AC_UL320_.jpg",
  category: "Kids", // Required field
  subCategory: "Topwear", // Required field
  sizes: ["S"],
}


  
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommercegmk', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB for seeding...'))
.catch(err => console.error('MongoDB connection error:', err));

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Promise.all([
      Laptop.deleteMany({}),
      Headphones.deleteMany({}),
      Mobile.deleteMany({}),
      MenProducts.deleteMany({}),
      WomenProducts.deleteMany({}),
      KidsProducts.deleteMany({}),
      Product.deleteMany({})
    ]);

    // Insert new data
    await Promise.all([
      Laptop.insertMany(sampleLaptops),
      Headphones.insertMany(sampleHeadphones),
      Mobile.insertMany(sampleMobiles),
      MenProducts.insertMany(sampleMenProducts),
      WomenProducts.insertMany(sampleWomenProducts),
      KidsProducts.insertMany(sampleKidsProducts)
    ]);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase();