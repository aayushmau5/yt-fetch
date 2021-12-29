const DB = require("./db/dbOperations");

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

async function GetVideos(req, res, next) {
  const page = req.query.page || DEFAULT_PAGE;
  const limit = req.query.limit || DEFAULT_LIMIT;
  const query = req.query.query;

  if (query) {
    res.json({
      page,
      limit,
      query,
    });
  } else {
    const videos = await DB.GetVideos(page, limit);
    const totalVideos = await DB.EstimatedNumberOfVideos();

    res.json({
      totalVideos,
      totalPages: Math.ceil(totalVideos / limit),
      page,
      videos,
    });
  }
}

module.exports = {
  GetVideos,
};
