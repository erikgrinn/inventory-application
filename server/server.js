require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const cors = require("cors");

const mediaRouter = require("./routes/mediaRouter");

const corsOptions = {
  origin: ["http://localhost:5173"], // vite
};

//cors is middleware
app.use(cors(corsOptions));

// use this to serve CSS (and others) if sending HTML with res.sendFile
// app.use(express.static(__dirname))

// use this for react/parsing stringified json
// makes req content/object available in req.body
// app.use(express.json());

// use this for direct HTML form actions if needed instead
app.use(express.urlencoded({ extended: true }));

app.use("/media", mediaRouter);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My Express app - listening on port ${PORT}!`);
});
