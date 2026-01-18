const mongoose = require('mongoose');

// Import models
const Laptop = require('./models/Laptop');
const Headphone = require('./models/Headphone');
const Mobile = require('./models/Mobile');
const Kids = require('./models/Kids');
const Men = require('./models/Men');
const Women = require('./models/Women');
const Product = require('./models/Product');

// Sample data for each category

const sampleLaptops = [
    {
     id: '1',
     name: 'Dell',
     category: 'laptop',
     subCategory: 'Laptops',
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
   
   const sampleMen = [
    {
      id: '1',
      name: 'Men\'s Casual Shirt',
      category: 'men', // Using valid enum value
      subCategory: 'shirts',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/I/71rxIjMjN9L._AC_UL320_.jpg',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['blue', 'white', 'black']
    },
  
  ];
   
     

   
   const sampleWomen = [
    {
      "id": "1",
      "name": "Women's Summer Dress",
      "category": "clothing",
      "subCategory": "dresses",
      "price": 49.99,
      "image": "https://images.meesho.com/images/products/212197744/xt0wu_400.webp",
      "description": "Lightweight summer dress",
      "sizes": ["S", "M", "L"],
      "colors": ["blue", "white"]
    }
   
     
   
   ];
   
   const sampleKids = [
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
mongoose.connect('mongodb://localhost:27017/ecommerce-hyd', {
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
      Headphone.deleteMany({}),
      Mobile.deleteMany({}),
      Men.deleteMany({}),
      Women.deleteMany({}),
      Kids.deleteMany({}),
      Product.deleteMany({})
    ]);

    // Insert new data
    await Promise.all([
      Laptop.insertMany(sampleLaptops),
      Headphone.insertMany(sampleHeadphones),
      Mobile.insertMany(sampleMobiles),
      Men.insertMany(sampleMen),
      Women.insertMany(sampleWomen),
      Kids.insertMany(sampleKids)
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