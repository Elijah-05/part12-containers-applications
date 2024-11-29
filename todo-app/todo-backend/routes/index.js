const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis");

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;
  res.send({
    ...configs,
    visits,
  });
});

router.get("/statistics", async (req, res) => {
  try {
    const todoCount = parseInt(await getAsync("added_todos")) || 0;
    console.log("added_todo_count: ", todoCount);
    res.send({ added_todos: todoCount });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
  res.end();
});

module.exports = router;
