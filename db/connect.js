const mongoose = require("mongoose"); // mongoose ODM to interact with MongoDB

const uri = process.env.MONGODB_URI;

function establishMongodbConnection() {
  return mongoose.connect(uri);
}

module.exports = { establishMongodbConnection };
