const mongoose = require("mongoose");

const gundamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: {
    type: String,
    required: true,
  },
  series: {
    type: String,
    required: true,
  },
  releaseYear: Number,
  kitNumber: Number,
  imageUrl: String,
  instructionsUrl: String,
});

module.exports = mongoose.model("Gundam", gundamSchema);
