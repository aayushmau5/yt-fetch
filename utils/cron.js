const cron = require("node-cron");

const Youtube = require("./Youtube");

cron.schedule("*/10 * * * * *", async function () {
  const data = await Youtube.fetchVideosDataFromYoutube();
});
