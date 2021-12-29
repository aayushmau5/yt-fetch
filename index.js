const app = require("express")(); // express server
require("dotenv").config(); // dotenv for secrets

const controllers = require("./controllers");
const { establishMongodbConnection } = require("./db/connect");
const { initCronJob } = require("./utils/cron");

const PORT = process.env.PORT || 8000;

app.get("/videos", controllers.GetVideos);

app.use((req, res, next) => {
  // the catch-all handler
  res.status(404).json({
    message: "page not found",
  });
});

establishMongodbConnection()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Listening on http://localhost:${PORT}`)
    );
    initCronJob();
  })
  .catch((err) => console.log(err));
