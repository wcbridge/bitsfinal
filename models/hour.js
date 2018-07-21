const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  free: { type: Number, required: true },
  // author: { type: Number, required: false},
  selfA: { type: Number, required: false },
  esteem: { type: Number, required: false },
  love: { type: Number, required: false },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Hour = mongoose.model("Hour", scheduleSchema);

module.exports = Hour;
