const DB = require("./Model");

function EstimatedNumberOfVideos() {
  return DB.estimatedDocumentCount(); // getting the estimated number of documents
}

function AddVideos(videos) {
  return DB.insertMany(videos);
}

function GetVideos(pageNo, numberOfItems) {
  return DB.find()
    .sort({ publishedAt: 1 })
    .skip(numberOfItems * (pageNo - 1))
    .limit(numberOfItems)
    .exec();
}

module.exports = { AddVideos, GetVideos, EstimatedNumberOfVideos };
