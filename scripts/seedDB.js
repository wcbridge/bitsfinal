const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Hours collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/freetime"
);

const bookSeed = [
  {hours: "",
  selfA: "",
  esteem: "",
  love: "",
  synopsis: ""
}
];

db.Hour
  .remove({})
  .then(() => db.Hour.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
