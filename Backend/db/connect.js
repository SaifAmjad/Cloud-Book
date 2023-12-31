const Mongoose = require("mongoose");

const connectDb = (uri) => {
  Mongoose.connect(uri)
    .then(() => {
      console.log("Connected to Db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
