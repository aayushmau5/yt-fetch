const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

async function GetVideos(req, res, next) {
  const page = req.query.page || DEFAULT_PAGE;
  const limit = req.query.limit || DEFAULT_LIMIT;

  res.json({
    page,
    limit,
  });
}

async function SearchForVideos(req, res, next) {
  const page = req.query.page || DEFAULT_PAGE;
  const limit = req.query.limit || DEFAULT_LIMIT;
  const query = req.query.query;

  res.json({
    page,
    limit,
    query,
  });
}

module.exports = {
  GetVideos,
  SearchForVideos,
};
