const mongoose = require("mongoose");

// the database object schema
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    channelId: String,
    channelTitle: String,
    videoId: String,
    publishedAt: Date,
    thumbnail: {
      url: String,
      width: Number,
      height: Number,
    },
  },
  { timestamps: true, autoIndex: false }
);

schema.index({
  publishedAt: -1,
});

module.exports = schema;
