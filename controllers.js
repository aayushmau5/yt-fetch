const DB = require("./db/dbOperations");
const Validation = require("./utils/validation");

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

async function GetVideos(req, res, next) {
  const page =
    typeof req.query.page === "undefined"
      ? DEFAULT_PAGE
      : Validation.ValidateQueryParam("page", req.query.page);
  const limit =
    typeof req.query.limit === "undefined"
      ? DEFAULT_LIMIT
      : Validation.ValidateQueryParam("limit", req.query.limit);
  const query = req.query.query;

  let videos = [];
  let totalVideos = 0;

  if (query) {
    const searchResults = await DB.SearchVideos(query, page, limit); //TODO: limit the search query.

    totalVideos = searchResults.length;
    videos = searchResults.splice(limit * page - 1, limit);
  } else {
    videos = await DB.GetVideos(page, limit);
    totalVideos = await DB.EstimatedNumberOfVideos();
  }

  res.json({
    totalVideos,
    totalPages: Math.ceil(totalVideos / limit),
    page,
    videos,
  });
}

module.exports = {
  GetVideos,
};
