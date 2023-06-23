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

router.post("/", (req, res) => {
  console.log(req.body);
  fs.readFile(pathData, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Loi Server" });
    }
    const convertData = JSON.parse(data);
    const newGame = {
      ...req.body,
    };
    convertData.push(newGame);
    fs.writeFile(pathData, JSON.stringify(convertData), (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Loi Server" });
      }
    });
    res.status(200).json({ message: "successfully" });
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile(pathData, (err, data) => {
    const convertData = JSON.parse(data);
    const finalData = convertData.find((game) => game.id == id);
    res.status(200).json(finalData);
  });
});

router.put("/:id", (req, res) => {
  fs.readFile(pathData, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Loi Server" });
    }
    const convertData = JSON.parse(data);
    const newGame = {
      ...req.body,
    };
    const findIndex = convertData.findIndex((game) => game.id == req.body.id);
    convertData[findIndex] = newGame;

    fs.writeFile(pathData, JSON.stringify(convertData), (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Loi Server" });
      }
    });
    res.status(200).json(convertData[findIndex]);
  });
});

module.exports = router;
