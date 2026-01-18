const mongoose = require('mongoose');
const Product = require('./models/productModel');

// Define all products in a single array
const allProducts = [

  {
    id: 1,
    name: "Kids T-Shirt. size-L",
    price: 499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi5bqtQ8CR7tqYM4UECW991BnuRKPVKt1vQm-3hLlMas5sIkyTHUpUJQYfunxtFFK6tM&usqp=CAU",
    category: "Kids", // Required field
    subCategory: "Topwear", // Required field
    sizes: ["L"],
  },
  {
    id: 2,
    name: "Men's Jeans.   size-XL",
    price: 1299,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT93DQWaA2CIBrDok5xWlg4zJIyHckibKM6740gPcDbwqS20FxBgoaZ7s3mf0iN7pwfV27eNhVDoxpdQv-vyUCJJw0nk0zrnV3siFIe7gOb&usqp=CAc",
    category: "Men", // Required field
    subCategory: "Bottomwear", // Required field
    sizes: ["XL"],
  },
  {
    id: 3,
    name: "Women's Dress. size-M",
    price: 1000,
    image: "https://images.meesho.com/images/products/212197744/xt0wu_400.webp",
    category: "Women", // Required field
    subCategory: "Dresses", // Required field
    sizes: ["M"],
  },
  {
    id: 4,
    name: "Kids T-Shirt. size-XL",
    price: 600,
    image: "https://m.media-amazon.com/images/I/51uEH9EVPFL._AC_UL320_.jpg",
    category: "Kids", // Required field
    subCategory: "Topwear", // Required field
    sizes: ["S"],
  },
  {
    id: 5,
    name: "Men's Jeans.    size-L",
    price: 1299,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT93DQWaA2CIBrDok5xWlg4zJIyHckibKM6740gPcDbwqS20FxBgoaZ7s3mf0iN7pwfV27eNhVDoxpdQv-vyUCJJw0nk0zrnV3siFIe7gOb&usqp=CAc",
    category: "Men", // Required field
    subCategory: "Bottomwear", // Required field
    sizes: ["L"],
  },

  {
    id: 6,
    name: "Kids T-Shirt. size-L",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61Cea2QLQ2L._AC_UL320_.jpg",
    category: "Kids", // Required field
    subCategory: "Topwear", // Required field
    sizes: ["S"],
  },
  {
    id: 7,
    name: "Men's Jeans.    size-XL",
    price: 1299,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT93DQWaA2CIBrDok5xWlg4zJIyHckibKM6740gPcDbwqS20FxBgoaZ7s3mf0iN7pwfV27eNhVDoxpdQv-vyUCJJw0nk0zrnV3siFIe7gOb&usqp=CAc",
    category: "Men", // Required field
    subCategory: "Bottomwear", // Required field
    sizes: ["XL"],
  },
  {
    id: 8,
    name: "Women's Dress.  size-L",
    price: 999,
    image: "https://images.meesho.com/images/products/212197744/xt0wu_400.webp",
    category: "Women", // Required field
    subCategory: "Dresses", // Required field
    sizes: ["M"],
  },
  {
    id: 9,
    name: "Kids T-Shirt. size-L",
    price: 499,
    image: "https://m.media-amazon.com/images/I/51uEH9EVPFL._AC_UL320_.jpg",
    category: "Kids", // Required field
    subCategory: "Topwear", // Required field
    sizes: ["S"],
  },

  {
    id: 10,
    name: "Women's Dress.  size-XL",
    price: 1200,
    image: "https://images.meesho.com/images/products/212197744/xt0wu_400.webp",
    category: "Women", // Required field
    subCategory: "Dresses", // Required field
    sizes: ["M"],
  },
  {
    id: 11,
    name: "boAt Airdopes 280 ANC, Active Noise Cancellation(~32dB)",
    price: 1300,
    image: "https://m.media-amazon.com/images/I/61RBK+L3CKL._SY450_.jpg",
    subCategory: "Electronics", 
    category: "Headphones",
    
  },

  {
      id: 12,
      name: "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
      price: 699,
      image: "https://m.media-amazon.com/images/I/61XBkWmmQeL._SX466_.jpg",
      subCategory: "Electronics", 
    category: "Headphones",
    },
    {
      id: 13,
      name: "ZEBRONICS-Thunder Bluetooth 5.3 Wireless",
      price: 699,
      image: "https://m.media-amazon.com/images/I/41mkKnWxMCL._AC_UF480,480_SR480,480_.jpg",
      subCategory: "Electronics", 
      category: "Headphones",
    },
    {
      id: 14,
      name: "amazon basics On Ear Wired Headphones ",
      price: 540,
      image: "https://m.media-amazon.com/images/I/318g7qN85hL._SX300_SY300_QL70_FMwebp_.jpg",
      subCategory: "Electronics", 
      category: "Headphones",
    },
    {
      id: 15,
      name: "Portronics Harmonics Z7 Bluetooth Wireless ",
      price: 540,
      image: "https://m.media-amazon.com/images/I/51dl2fDChGL._SY450_.jpg",
  
    subCategory: "Electronics", 
    category: "Headphones",
    },
   
    
      {
        id: 16,
        name: "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)",
        price: 17888,
        image: "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UL320_.jpg",
        subCategory: "Electronics", 
      category: "Mobiles",
      },
  
      {
        id: 17,
        name: "OnePlus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
        price: 22980,
        image: "https://m.media-amazon.com/images/I/61g1pqSjAhL._SX569_.jpg",
        subCategory: "Electronics", 
        category: "Mobiles",
      },
     

      {
        id: 18,
        name: "Samsung Galaxy-S25/Ultra/5G-AI/12GB RAM,1TB-Storage",
        price: 165900,
        image: "https://m.media-amazon.com/images/I/418mFfRZu-L._SX300_SY300_QL70_FMwebp_.jpg",
        subCategory: "Electronics", 
        category: "Mobiles",
      },
      {
        id: 19,
        name: "Samsung Galaxy A56 5G (Awesome Olive, 12GB, 256GB) AI Smartphone",
        price: 44499,
        image: "https://m.media-amazon.com/images/I/4140OGrNrgL._SX300_SY300_QL70_FMwebp_.jpg",
        subCategory: "Electronics", 
        category: "Mobiles",
      },


      
      {
        id: 20,
        name: "Realme-NARZO/N61(Voyage Blue,4GB RAM+64GB Storage)",
        price: 7499,
        image: "https://m.media-amazon.com/images/I/4184iNRaFsL._SX300_SY300_QL70_FMwebp_.jpg",
       

        subCategory: "Electronics", 
      category: "Mobiles", 
      },




   
      {
        id: 21,
        name: "Men's Jeans.    size-M",
        price: 800,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT93DQWaA2CIBrDok5xWlg4zJIyHckibKM6740gPcDbwqS20FxBgoaZ7s3mf0iN7pwfV27eNhVDoxpdQv-vyUCJJw0nk0zrnV3siFIe7gOb&usqp=CAc",
        category: "Men", // Required field
        subCategory: "Bottomwear", // Required field
        sizes: ["M"],
      },

      
     
      
      {
        id: 22,
        name: "Men's Jeans.size-XXL",
        price: 789,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT93DQWaA2CIBrDok5xWlg4zJIyHckibKM6740gPcDbwqS20FxBgoaZ7s3mf0iN7pwfV27eNhVDoxpdQv-vyUCJJw0nk0zrnV3siFIe7gOb&usqp=CAc",
        category: "Men", // Required field
        subCategory: "Bottomwear", // Required field
        sizes: ["XXL"],
      },
      
     
      
      {
        id: 23,
        name: " Men Casual Shoes Size:L",
        price: 999.99,
        image: "https://m.media-amazon.com/images/I/71rxIjMjN9L._AC_UL320_.jpg",
        category: "Men", // Required field
        subCategory: "footwear", // Required field
        sizes: ["L"],
      },
      
     
      
      {
        id: 24,
        name:" Men Casual Shoes Size:XL",
        price: 999.99,
        image: "https://m.media-amazon.com/images/I/71Ogu5EshaL._AC_UL320_.jpg",
        category: "Men", // Required field
        subCategory: "footwear", // Required field
        sizes: ["XL"],
      },
      
      {
        id: 25,
        name: " Women Sport Shoes Size:M",
        price: 500,
        image: "https://m.media-amazon.com/images/I/61IiMy-izsL._AC_UL320_.jpg",
        category: "Women", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },
      
      {
        id: 26,
        name: " Women Sport Shoes Size:L",
        price: 999.99,
        image: "https://m.media-amazon.com/images/I/61vRXtZcy7L._AC_UL320_.jpg",
        category: "Women", // Required field
        subCategory: "footwear", // Required field
        sizes: ["L"],
      },
      
      {
        id: 27,
        name: " Women Sport Shoes Size:XL",
        price: 600,
        image: "https://m.media-amazon.com/images/I/716sGzPyhyL._AC_UL320_.jpg",
        category: "Women", // Required field
        subCategory: "footwear", // Required field
        sizes: ["XL"],
      },
      
      {
        id: 28,
        name: " Women Sport Shoes Size:L",
        price: 450,
        image: "https://m.media-amazon.com/images/I/71j3ZNmw2+L._SX569_.jpg",
        category: "Women", // Required field
        subCategory: "footwear", // Required field
        sizes: ["L"],
      },
    
    
      {
        id: 29,
        name: " Women Casual Shoes Size:XL",
        price: 700,
        image: "https://m.media-amazon.com/images/I/71KC6lKyTsL._AC_UL320_.jpg",
        category: "Women", // Required field
        subCategory: "footwear", // Required field
        sizes: ["XL"],
      },
    
      {
        id: 30,
        name: " kids Shoes Size:L",
        price: 1999.99,
        image: "https://m.media-amazon.com/images/I/61uLywTdImL._SY695_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["L"],
      },
      {
        id: 31,
        name: " kids Shoes  Size:M",
        price: 450,
        image: " https://m.media-amazon.com/images/I/61smpQgbcCL._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },
      {
        id: 32,
        name: " kids Shoes Size:L",
        price: 500,
        image: "https://m.media-amazon.com/images/I/61HMlK3rXML._SY695_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["L"],
      },
    
      {
        id: 33,
        name: " kids Shoes  Size:XL",
        price: 700,
        image: "https://m.media-amazon.com/images/I/71KjtfwY+EL._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["XL"],
      },
    
      {
        id: 34,
        name: " kids Shoes Size:M",
        price: 850,
        image: "https://m.media-amazon.com/images/I/813TEr27dbL._SY695_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },
      {
        id: 35,
        name: " kids Shoes Size:M",
        price: 750,
        image: "https://m.media-amazon.com/images/I/71eXCOfFpjL._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },

      {
        id: 36,
        name: " kids Shoes Size:M",
        price: 1550,
        image: "https://m.media-amazon.com/images/I/514N9fkQzPL._SY695_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },

      

      {
        id: 37,
        name: " kids Shoes Size:XL",
        price: 750,
        image: "https://m.media-amazon.com/images/I/715pEfcz87L._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },

      {
        id: 38,
        name: " kids Shoes Size:L",
        price: 550,
        image: "https://m.media-amazon.com/images/I/713gxOmiGSL._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },

      {
        id: 39,
        name: " kids Shoes Size:L",
        price: 450,
        image: "https://m.media-amazon.com/images/I/7105oU9d-EL._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },
      {
        id: 40,
        name: " kids Shoes Size:L",
        price: 550,
        image: "https://m.media-amazon.com/images/I/713gxOmiGSL._SY625_.jpg",
        category: "Kids", // Required field
        subCategory: "footwear", // Required field
        sizes: ["M"],
      },
     
    {
      id:41,
      name:"Lenovo Idea Pad1,5500U,RAM-8GB,512GB SSD",
      price:35999,
      image:"https://m.media-amazon.com/images/I/71xHNSCyRsL._AC_UY218_.jpg",
      subCategory:"Electronics", 
      category: "Laptops", 
    },
    {
      id: 42,
      name: "Apple M1/chip,13.3-inch/33.74cm,8GB-RAM,256GB-SSD",
      price: 62990,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLl0MWutnqkN657j913PAvWPH7sO4KB0ia1GvOHe7VH5NGfV5HSvBuBEjLAJquYy7G5mdqGrbrd1sGZdNhNoUEGBDn33tLjOTEj85-FsI0hb7yNEOeATSNIsU",
      subCategory:"Electronics", 
      category: "Laptops",
    },
    {
      id: 43,
      name: "HP Laptop 15s,8GB-DDR4,512GB-SSD,AMD Ryzen3",
      price: 48188,
      image: "https://m.media-amazon.com/images/I/81lIE9MYV3L._SX679_.jpg",
      subCategory:"Electronics", 
      category: "Laptops",
    },
  
    {
      id: 44,
      name:"DELL,Intel Core i7-13th Gen 1355U -(16GB/512GB SSD",
      price: 69490,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/k/l/-original-imah9gv5ynbpngqh.jpeg?q=70",
      subCategory:"Electronics", 
      category: "Laptops",
    },
    {
      id: 45,
      name: "Lenovo 4GB/128GB)",
      price:12000,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/6/g/-original-imagy3tzbj3xgvu4.jpeg?q=70",
      subCategory:"Electronics", 
      category: "Laptops",
    },
    {
      id: 46,
      name:"HP15s,AMD-Ryzen 5,5500U,8GB-DDR4,512GB SSD",
      price:37650,
      image:"https://m.media-amazon.com/images/I/71-I1PNzLSL._AC_UY218_.jpg",
      subCategory:"Electronics", 
      category: "Laptops", 
    },
    {
      id:47,
      name:"Lenovo Idea Pad1,5500U,RAM-8GB,512GB SSD",
      price:35999,
      image:"https://m.media-amazon.com/images/I/71xHNSCyRsL._AC_UY218_.jpg",
      subCategory:"Electronics", 
      category: "Laptops", 
    },
    {
      id: 48,
      name: "Apple M1/chip,13.3-inch/33.74cm,8GB-RAM,256GB-SSD",
      price: 62990,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLl0MWutnqkN657j913PAvWPH7sO4KB0ia1GvOHe7VH5NGfV5HSvBuBEjLAJquYy7G5mdqGrbrd1sGZdNhNoUEGBDn33tLjOTEj85-FsI0hb7yNEOeATSNIsU",
      subCategory:"Electronics", 
      category: "Laptops",
    },
    {
      id: 49,
      name: "HP Laptop 15s,8GB-DDR4,512GB-SSD,AMD Ryzen3",
      price: 48188,
      image: "https://m.media-amazon.com/images/I/81lIE9MYV3L._SX679_.jpg",
      subCategory:"Electronics", 
      category: "Laptops",
    },
  
    {
      id: 50,
      name:"DELL,Intel Core i7-13th Gen 1355U -(16GB/512GB SSD",
      price: 69490,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/k/l/-original-imah9gv5ynbpngqh.jpeg?q=70",
      subCategory:"Electronics", 
      category: "Laptops",
    },
   

 
  // Add more products here
];

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/mkstores1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  });
    const filterAndInsertProducts = async (allProducts) => {
      try {
        // Filter products by category and subcategory
        const menProducts = allProducts.filter((product) => product.category === "Men");
        const kidsProducts = allProducts.filter((product) => product.category === "Kids");
        const womenProducts = allProducts.filter((product) => product.category === "Women");
    
        const electronicsLaptops = allProducts.filter(
          (product) => product.category === "Laptops" && product.subCategory === "Electronics"
        );
        const electronicsHeadphones = allProducts.filter(
          (product) => product.category === "Headphones" && product.subCategory === "Electronics"
        );
        const electronicsMobiles = allProducts.filter(
          (product) => product.category === "Mobiles" && product.subCategory === "Electronics"
        );
       
        await Promise.all([
          Laptop.deleteMany({}),
          Headphones.deleteMany({}),
          Mobile.deleteMany({}),
          MenProducts.deleteMany({}),
          WomenProducts.deleteMany({}),
          KidsProducts.deleteMany({}),
          Product.deleteMany({})
        ]);
        // Insert filtered products into the database
        await Promise.all([
          Product.insertMany(menProducts),
          Product.insertMany(electronicsLaptops),
          Product.insertMany(electronicsHeadphones),
          Product.insertMany(electronicsMobiles),
          Product.insertMany(kidsProducts),
          Product.insertMany(womenProducts),
        ]);
    
    
        console.log("All products inserted successfully.");
      } catch (error) {
        console.error("Error inserting products:", error);
      }
    };
 
    // Example usage
    // Assuming allProducts is an array of product objects
    filterAndInsertProducts(allProducts);