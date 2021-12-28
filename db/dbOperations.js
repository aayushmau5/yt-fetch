const VideosDb = require("./Model");

async function AddVideo() {
  const data = await VideosDb.create({ title: "string" });
  console.log(data);
}

module.exports = { AddVideo };
