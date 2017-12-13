const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "Tobi the dog",
    date: new Date(Date.now()),
    url: "http://alyssakeimach.com"
  }, {
    title: "How to fix a squeaky windshield",
    date: new Date(Date.now()),
    url: "http://alyssakeimach.com"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });