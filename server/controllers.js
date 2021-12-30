const DB = require("./db/dbOperations");
const Validation = require("./utils/validation");

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

async function GetVideos(req, res, next) {
  try {
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
    let videosCount = 0;

    if (query) {
      videos = await DB.SearchVideos(query, page, limit);
      videosCount = await DB.SearchResultCount(query);
    } else {
      videos = await DB.GetVideos(page, limit);
      videosCount = await DB.EstimatedNumberOfVideos();
    }

    res.json({
      videosCount,
      totalPages: Math.ceil(videosCount / limit),
      page,
      videos,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetVideos,
};
