// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productsRoute = require("./routes/products");
const userRoutes = require("./routes/userRoutes");


const orderRoutes = require("./routes/orderRoutes");

const app = express();




app.use(cors({
  origin: "*",
}));
app.use(express.json());



app.use("/api/orders", orderRoutes);


mongoose.connect("mongodb+srv://mahesssvec_db_user:21lX21AfQfblvH2O@cluster0.57w6agl.mongodb.net/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

app.use("/api/products", productsRoute);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
