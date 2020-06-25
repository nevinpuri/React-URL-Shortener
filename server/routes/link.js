const express = require("express");
const router = express.Router();
const Link = require("../models/Link");
const { json } = require("express");

router.get("/", async (req, res) => {
  res.json({ message: "Enter in a valid link" });
});

router.get("/:SlinkURL", async (req, res) => {
  try {
    const link = await Link.find({ shortURL: req.params.SlinkURL });
    res.json(link[0].longURL);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  let linkRequest = req.body.longURL;
  const shortenedLink = generateShortURL(8);
  const link = new Link({
    longURL: req.body.longURL,
    shortURL: shortenedLink,
  });
  try {
    const savedLink = await link.save();
    res.json(savedLink);
  } catch (err) {
    res.json({ message: err });
  }
});

const generateShortURL = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

module.exports = router;
