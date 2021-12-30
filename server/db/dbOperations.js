const DB = require("./Model");

function EstimatedNumberOfVideos() {
  return DB.estimatedDocumentCount(); // getting the estimated number of documents
}

function AddVideos(videos) {
  return DB.insertMany(videos);
}

function GetVideos(pageNo, numberOfItems) {
  return DB.find()
    .sort({ publishedAt: -1 })
    .skip(numberOfItems * (pageNo - 1))
    .limit(numberOfItems)
    .exec();
}

function SearchVideos(query, pageNo, numberOfItems) {
  return DB.fuzzySearch({ query })
    .sort({ publishedAt: -1, _id: -1 })
    .skip(numberOfItems * (pageNo - 1))
    .limit(numberOfItems);
}

function SearchResultCount(query) {
  return DB.fuzzySearch({ query }).count().exec();
}

module.exports = {
  AddVideos,
  GetVideos,
  EstimatedNumberOfVideos,
  SearchVideos,
  SearchResultCount,
};
