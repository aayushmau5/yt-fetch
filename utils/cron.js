const cron = require("node-cron");

const Youtube = require("./Youtube");
const DB = require("../db/dbOperations");

// cron job that will run every 10 seconds
// updates the database with yt videos
function initCronJob() {
  const task = cron.schedule("*/10 * * * * *", async function () {
    try {
      console.log("job ran");
      const data = await Youtube.fetchVideosDataFromYoutube();
      await DB.AddVideos(data);
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = {
  initCronJob,
};
