const { google } = require("googleapis");

const YT = google.youtube({
  version: "v3",
  auth: process.env.YT_API_KEY,
});

async function fetchVideosDataFromYoutube(query = "cricket") {
  try {
    const queryResult = await YT.search.list({
      type: "video",
      order: "date",
      publishedAfter: new Date(),
      q: query,
      part: ["snippet"],
      maxResults: 20,
    });
    return transformYoutubeData(queryResult.data.items);
  } catch (err) {
    console.log(err);
  }
}

function transformYoutubeData(items) {
  return items.map((item) => {
    return {
      title: item.snippet.title,
      description: item.snippet.description,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      videoId: item.id.videoId,
      thumbnails: {
        default: item.snippet.thumbnails.default,
        medium: item.snippet.thumbnails.medium,
        high: item.snippet.thumbnails.high,
      },
      publishedAt: item.snippet.publishedAt,
    };
  });
}

module.exports = {
  fetchVideosDataFromYoutube,
};
