const express = require("express");
const { Todo } = require("../mongo");
const { getAsync, setAsync } = require("../redis");
const router = express.Router();

/* GET todos listing. */
router.get("/", async (_, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    next(error); // Pass errors to Express error-handling middleware
  }
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  if(todo) {
    const currentCount = parseInt(await getAsync('added_todos')) || 0;
    const newCount = currentCount + 1;
    await setAsync('added_todos', newCount);
  }
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    req.todo = await Todo.findById(id);
  } catch (error) {
    return res.sendStatus(404);
  }
  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  if (req.todo) {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        { _id: req.todo._id },
        req.body,
        {
          new: true,
          includeResultMetadata: true,
        }
      );
      console.log("updatedTodo: ", updatedTodo);
      res.send(updatedTodo);
    } catch (error) {
      return res.sendStatus(500);
    }
  } else {
    res.sendStatus(404);
  }
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
