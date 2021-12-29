const mongoose = require("mongoose");
const mongooseFuzzySearching = require("mongoose-fuzzy-searching");

// the database object schema
const schema = new mongoose.Schema(
  {
    title: { type: String, index: "text" },
    description: { type: String, index: "text" },
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
  { timestamps: true, autoIndex: true }
);

schema.index({
  publishedAt: -1,
});

schema.plugin(mongooseFuzzySearching, {
  fields: ["title", "description"],
});

module.exports = schema;
