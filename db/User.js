const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  Password: String,
  image: String
});

module.exports = mongoose.model("users", userSchema);
