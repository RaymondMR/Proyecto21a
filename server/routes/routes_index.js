const express = require("express");
const michdb = require("../database/db_index.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  //res.send([1, 2, 3]);

  try {
    let results = await michdb.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
