const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: { type: String, default: "Todo" }
});

module.exports = mongoose.models.Task || mongoose.model("Task", taskSchema);