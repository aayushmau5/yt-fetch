const mongoose = require("mongoose");

const Schema = require("../Schema");

// creating a document through which we can interact with the data
module.exports = mongoose.model("Videos", Schema);
