const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");


const app = express();
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Rabbit API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})