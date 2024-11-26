const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/userExperience", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Schema and Model
const experienceSchema = new mongoose.Schema({
  name: String,
  location: String,
  review: String,
  rating: Number,
});

const Experience = mongoose.model("Experience", experienceSchema);

// Routes
app.get("/experiences", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/experiences", async (req, res) => {
  const { name, location, review, rating } = req.body;
  try {
    const newExperience = new Experience({ name, location, review, rating });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
