const mongoose = require("mongoose");
const mapSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

const Map = mongoose.model("Map", mapSchema);
module.exports = Map;
