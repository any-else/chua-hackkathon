const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

//read Path
const pathData = path.join(__dirname, "../db/game.json");

router.get("/", (req, res) => {
  fs.readFile(pathData, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Loi Server" });
    }
    res.status(200).json(JSON.parse(data));
  });
});

module.exports = router;
