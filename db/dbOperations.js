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

function SearchVideos(query, pageNo, numberOfItems) {
  // return DB.fuzzySearch({ query })
  //   .sort({ publishedAt: 1 })
  //   .skip(numberOfItems * (pageNo - 1))
  //   .limit(10);

  // currently no limitation is set so that we can know the total number of videos the search matches
  return DB.fuzzySearch({ query }).sort({ publishedAt: 1 });
}

module.exports = {
  AddVideos,
  GetVideos,
  EstimatedNumberOfVideos,
  SearchVideos,
};
