// load environment variables
const dotenv = require("dotenv");
dotenv.config();

// importing libraries
const express = require("express");
const cors = require("cors");

// importing modules
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

// creates the server
const app = express();

// middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// basic route
app.get("/", (req, res) => {
  res.send("Welcome to Rabbit API!");
});

// API Routes
app.use("/api/users", userRoutes);



// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})