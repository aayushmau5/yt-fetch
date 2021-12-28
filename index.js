const app = require("express")();
require("dotenv").config();

const controllers = require("./controllers");

const PORT = process.env.PORT || 8000;

app.get("/", controllers.GetVideos);

app.get("/search", controllers.SearchForVideos);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
