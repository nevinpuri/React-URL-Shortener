const mongoose = require("mongoose");

const LinkSchema = mongoose.Schema({
  longURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Link", LinkSchema);
