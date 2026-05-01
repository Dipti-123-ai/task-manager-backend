const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Dipti%40567@cluster0.0yl0yju.mongodb.net/projectdb?retryWrites=true&w=majority")
.then(() => {
  console.log("✅ DB REAL CONNECTION WORKING");
  process.exit();
})
.catch(err => {
  console.log("❌ DB CONNECTION FAILED:", err);
  process.exit();
});