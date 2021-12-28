const mongoose = require("mongoose");

// the database object schema
module.exports = new mongoose.Schema(
  {
    title: String,
    description: String,
    channelId: String,
    channelTitle: String,
    videoId: String,
    publishedAt: Date,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number,
      },
      medium: {
        url: String,
        width: Number,
        height: Number,
      },
      high: {
        url: String,
        width: Number,
        height: Number,
      },
    },
  },
  { timestamps: true }
);
