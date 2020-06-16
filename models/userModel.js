const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 8, max: 20,required: true},
  //password encryption
});

module.exports = mongoose.model('userModel',userModel);