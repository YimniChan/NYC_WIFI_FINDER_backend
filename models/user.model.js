const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required:false },
  // lastName: { type: String, required: false },
  // email: { type: String, required: true },
  // password: { type: String, min: 8, max: 20, required: true },
  //password encryption
});

const User = mongoose.model("User", userSchema);

module.exports = User;