const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: Number, required: true },
  author: { type: Number, required: false},
  selfA: { type: Number, required: false },
  esteem: { type: Number, required: false },
  love: { type: Number, required: false },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
