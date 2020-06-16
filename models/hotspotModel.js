const mongoose = require('mongoose');

const hotsportModel = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: { type: Number(5)},
  // 
  //rating: { type: float, min: 0.00, max: 5.00},
});

module.exports = mongoose.model('hotsportModel',hotsportModel);