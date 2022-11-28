const express = require("express");
const User = express.Router();
const Map = require("../models/map");

User.post("/add/location", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const existingMap = await Map.findOne({ id: 1 });
    if (!existingMap) {
      let map = new Map({
        id: 1,
        latitude,
        longitude,
      });
      map = await map.save();
      res.status(200).json({ msg: "Inserted" });
    } else {
      await Map.updateOne(
        { id: 1 },
        {
          $set: {
            latitude,
            longitude,
          },
        }
      );
      res.json({ msg: "Updated" }).status(200);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

User.get("/get/location", async (req, res) => {
  try {
    let existingMap = await Map.findOne({ id: 1 });
    res.status(200).json(existingMap);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = User;
