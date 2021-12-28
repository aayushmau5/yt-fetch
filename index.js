const app = require("express")(); // express server
require("dotenv").config(); // dotenv for secrets

const controllers = require("./controllers");
const { establishMongodbConnection } = require("./db/connect");
const { initCronJob } = require("./utils/cron");

const PORT = process.env.PORT || 8000;

app.get("/", controllers.GetVideos);

app.get("/search", controllers.SearchForVideos);

establishMongodbConnection()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Listening on http://localhost:${PORT}`)
    );
    initCronJob();
  })
  .catch((err) => console.log(err));
