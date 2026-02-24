require("dotenv").config()
const path = require("node:path");
const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"], // vite
};

//cors is middleware
app.use(cors(corsOptions));

// use this instead for react/stringifying
// makes req content/object available in req.body
app.use(express.json());
// use this for direct HTML form actions if needed instead
// app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My Express app - listening on port ${PORT}!`);
});
