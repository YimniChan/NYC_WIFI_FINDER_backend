const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 8, max: 20,required: true},
  // min:5, max:5
  //rating: { type: float, min: 0.00, max: 5.00},
});

module.exports = mongoose.model('userModel',userModel);