const DB = require("./Model");

async function AddVideos(videos) {
  return DB.insertMany(videos);
}

async function GetVideos() {
  return DB.find().exec();
}

module.exports = { AddVideos, GetVideos };
