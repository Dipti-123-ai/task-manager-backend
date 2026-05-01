const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// 🔥 Disable buffering completely
mongoose.set("bufferCommands", false);

async function startServer() {
  try {
    // 🔥 WAIT for DB connection fully
    await mongoose.connect(
      "mongodb+srv://admin:Dipti%40567@cluster0.0yl0yju.mongodb.net/projectdb?retryWrites=true&w=majority"
    );

    console.log("DB connected");

    // 🔥 IMPORTANT: require routes AFTER connection
    const authRoutes = require("./routes/auth");
    const taskRoutes = require("./routes/task");

    app.use("/api/auth", authRoutes);
    app.use("/api/tasks", taskRoutes);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
    });

  } catch (err) {
    console.error("DB connection failed:", err);
  }
}

startServer();