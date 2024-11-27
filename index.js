const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let counter = 0; // Default counter value

// API to get the current counter value
app.get("/api/counter", (req, res) => {
  res.json({ counter });
});

// API to update the counter value
app.post("/api/counter", (req, res) => {
  const { value } = req.body;
  counter = value;
  res.json({ counter });
});

// API to reset the counter
app.post("/api/counter/reset", (req, res) => {
  counter = 0;
  res.json({ counter });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
