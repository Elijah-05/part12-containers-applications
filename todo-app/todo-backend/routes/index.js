const express = require("express");
const router = express.Router();

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;
  console.log("configs: ", configs);
  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
