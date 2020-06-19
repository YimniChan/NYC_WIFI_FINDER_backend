const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotSpotSchema = new Schema({
  // borough:{ type: String, required: false },
  name: { type: String, required: true },
  location:{ type: String, required: true }, 
  city: { type: String, required: true }, 
  boroughName: { type: String, required: true },
  NeighborhoodTA:{ type: String, required: true }, 
  zipcode: { type: Number, required: true }, 
  latitude: { type: Number },
  longitudes: { type: Number },
  type: { type: String, required: true }, 
  provider: { type: String, required: true }, 
  ssid: { type: String, required: true }, 

});




const hotSpots = mongoose.model("hotSpot", hotSpotSchema);

module.exports = hotSpots;
