const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:Dipti%40567@cluster0.0yl0yju.mongodb.net/projectdb?retryWrites=true&w=majority");
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;