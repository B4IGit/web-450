const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the garden schema
let gardenSchema = new Schema({
  gardenId: Number,
  name: String,
  location: String,
  description: String,
  dateCreated: Date,
  dateModified: Date,
});

module.exports = {
  Garden: mongoose.model("Garden", gardenSchema),
};
