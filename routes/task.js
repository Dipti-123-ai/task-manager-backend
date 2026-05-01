const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = new Task({
      title,
      status: "Todo"
    });

    await task.save();

    res.json(task);

  } catch (err) {
    console.error("Task create error:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET TASKS
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);

  } catch (err) {
    console.error("Task fetch error:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;