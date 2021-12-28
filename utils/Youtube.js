const { google } = require("googleapis");

const YT = google.youtube({
  version: "v3",
  auth: process.env.YT_API_KEY,
});

async function fetchVideosDataFromYoutube(query = "cricket") {
  try {
    const res = await YT.search.list({
      type: "video",
      order: "date",
      publishedAfter: new Date(),
      q: query,
      part: ["snippet"],
      maxResults: 20,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fetchVideosDataFromYoutube,
};
